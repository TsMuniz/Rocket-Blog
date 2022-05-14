import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import styles from './banner.module.css'
import featured_image from '../Assets/featured_image.png'
import arrow_right from '../Assets/arrow_right.svg'
export default function Banner() {
  return (
    <>
      <section className={styles.banner}>
              <article>
                  <h3>Veja o guia definitivo para conquistar seus objetivos em 2022</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sequi. Eaque ab facere modi omnis dignissimos repellat quae distinctio, amet et commodi tenetur atque possimus odit obcaecati veniam, quod illum</p>
                  <Link to="#">
                    Veja Mais
                   <img  src={arrow_right} alt='seta apontando para a direita'/>
                  </Link>
              </article>
              <img className={styles.img} src={featured_image} alt="Imagem de um notebook com códigos javascript aparecendo na tela"/>       
      </section>
      <div className={styles.green_bar}/>
    </>
  )
}
