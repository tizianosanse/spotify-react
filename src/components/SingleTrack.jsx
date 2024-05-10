import { Card } from "react-bootstrap";

import { useEffect, useState } from "react";

const SingleTrack = () => {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    getSongs();
  }, []);
  const getSongs = async () => {
    try {
      let resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
      );
      if (resp.ok) {
        let fetchSongs = await resp.json();
        setSongs(fetchSongs);
        console.log(setSongs(fetchSongs));
        console.log(songs);
      } else {
        console.log("err");
      }
    } catch (error) {
      console.log(error);
    }
  };

  songs.map((song) => (
    <Card key={song.id}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{song.title}</Card.Title>
      </Card.Body>
    </Card>
  ));
};

export default SingleTrack;
