import React, { useState } from 'react';
import Banner from '../../components/BannerHome/Banner';
import data from '../../components/Assets/data';
import PostCard from '../../components/postCard/PostCard';
import styles from './home.module.css';

export default function Home() {
  const [posts, setPosts] = useState([...data]);

  const {
    image,
    date,
    text,
    title
  } = posts[0];

  const postsFiltered = posts.slice(1)
  return (
    <>
      <Banner/>
      <section className={styles.home_body}>
        <PostCard
          image={image}
          alt="asdasd"
          date={date}
          title={title}
          text={text}
          width="56.9" 
          height="54.609"
        />
        <aside>
          { <PostCard
          date={posts[4].date}
          title={posts[4].title}
          text={posts[4].text}
          
        />}
          { <PostCard
          date={posts[5].date}
          title={posts[5].title}
          text={posts[5].text}
          
        />}
        </aside>

      </section>
      <section 
      className={styles.home_body}
      >
       { postsFiltered.map(({
          image,
          date,
          text,
          title
        }, index) => 
        index < 3 && (
          <PostCard 
          key={`${index}`} 
          image={image}
          alt="asdasd"
          date={date}
          title={title}
          text={text}
          width="37" 
          height="45.854"
        />
        ))}
      </section>
    </>
  )
}
