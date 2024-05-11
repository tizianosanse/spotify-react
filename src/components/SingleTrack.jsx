import { Card, Col, Container, Row } from "react-bootstrap";

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
        setSongs(fetchSongs.data);

        console.log(setSongs(fetchSongs.data));
        console.log(songs);
      } else {
        console.log("err");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Col>
      {songs &&
        songs.map((song) => (
          <Card key={song.id}>
            <Card.Img
              variant="top"
              src={song.album.cover}
              style={{ width: "200px" }}
            />
            <Card.Body>
              <Card.Title>{song.title}</Card.Title>
            </Card.Body>
          </Card>
        ))}
    </Col>
  );
};

export default SingleTrack;
