import React from 'react';
import { Card } from './postCardStyled';

export default function PostCard({ heigth, width,image, alt, date, title, preview}) {
  const stringWithoutEmptySpaces = title.replace(/( )+/g, '_')
  return (
    <Card heigth={heigth} width={width} >

       {image && (<img src={image} alt={`${alt}`}/>)}
        <p>{date}</p>
        <a href={`/postagens/${stringWithoutEmptySpaces}`}>
        <h4>{title}</h4>
        </a>
        <p>{preview}</p>

    </Card>
  )
}
