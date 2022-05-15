/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useState, useEffect } from 'react';
import data from '../../components/Assets/data';
import styles from './post.module.css'
import {shareIcons} from '../../components/Assets/data'

export default function Post({match}) {
  console.log(match)
  const {params: {id}} = match
  const titleWithoutDash = id.replace(/_/g, ' ');
  const [ title, setTitle ] = useState('');
  const [ text, setText ] = useState('');
  
  useEffect(() => {
    const post = data.find(({title}) => title === titleWithoutDash);
    setTitle(post.title)
    setText(post.text)
  } ,[]);

  
  const {linkedin, facebook, whatsapp} = shareIcons;
  return (
    <main className={styles.main}>
      <h2>
        {title}
      </h2>
      <p>
        {text}
      </p>
      <div className={styles.share}>
        <h5>Compartilhe este texto!</h5>

        <div>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${match.url}`}>
            <img src={facebook} alt="incone do facebook "/>
          </a>

          <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${match.url}`}>
            <img src={linkedin} alt="incone do linkedin "/>
          </a>

          <a href={`https://api.whatsapp.com/send?text=${match.url}`} >
            <img src={whatsapp} alt="incone do whatsapp "/>
          </a>
        </div>
        
      </div>
    </main>
  )
}
