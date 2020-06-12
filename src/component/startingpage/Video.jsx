import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";
import { Card } from "react-bootstrap";

export default function Video() {
  const session = localStorage.getItem("session");
  const history = useHistory();
  if (session === "false") {
    history.push("/login");
  }

  return (
    <>
      <div className="video">
        <Card >
          <Card.Body>
            <Card.Text>
              Это видео покажет как пользоваться этим приложением.
            </Card.Text>
          </Card.Body>
          <Card.Img
            variant="bottom"
            src="https://avatars.mds.yandex.net/get-pdb/1906262/deeccc85-ae8f-4c14-8842-c2a52d19c6e0/orig"
            alt="video"
          />
        </Card>
      </div>
    </>
  );
}
