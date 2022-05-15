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
    preview,
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
          preview={preview}
          width="56.9" 
          height="54.609"
        />
        <aside>
          { <PostCard
          date={posts[4].date}
          title={posts[4].title}
          preview={posts[4].preview}
          
        />}
          { <PostCard
          date={posts[5].date}
          title={posts[5].title}
          preview={posts[5].preview}
          
        />}
        </aside>

      </section>
      <section 
      className={styles.home_body}
      >
       { postsFiltered.map(({
          image,
          date,
          preview,
          title
        }, index) => 
        index < 3 && (
          <PostCard 
          key={`${index}`} 
          image={image}
          alt="asdasd"
          date={date}
          title={title}
          preview={preview}
          width="37" 
          height="45.854"
        />
        ))}
      </section>
    </>
  )
}
