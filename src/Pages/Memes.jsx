import React from 'react'
import { Container } from 'react-bootstrap';
import Meme from '../components/Meme';

export default function Memes({memes}) {
    const mapMemes = memes.map((meme, id) => (
        <Meme meme={meme} key={id}/>
    ));
      return (
        
      <div>
        <h1>Memes</h1>
        <Container className="mt-5 d-flex flex-wrap justify-content-around">
          {mapMemes}
        </Container>
      </div>
  )
}
