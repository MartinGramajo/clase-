import React from 'react'
import { Card } from "react-bootstrap";
import "./meme.css";

export default function Meme(props) {
  return (
    <div>
      <Card className='card-meme'>
        <Card.Img variant="top" src={props.meme.imagen} />
        <Card.Body>
          <Card.Title>{props.meme.titulo}</Card.Title>
          {/* <span>{props.meme.publishDate}</span> */}
        </Card.Body>
      </Card>
    </div>
  )
}
