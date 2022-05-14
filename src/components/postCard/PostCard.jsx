import React from 'react'
import { Card } from './postCardStyled'

export default function PostCard({ heigth, width,image, alt, date, title, text}) {
  return (
    <Card heigth={heigth} width={width} >

       {image && (<img src={image} alt={`${alt}`}/>)}
        <p>{date}</p>
        <h4>{title}</h4>
        <p>{text}</p>

    </Card>
  )
}
