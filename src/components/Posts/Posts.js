import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './Posts.scss';
    
export default function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function loadPosts() {
            const response = await fetch('http://howtolinux.io.mjurus.smarthost.pl/wp-json/wp/v2/posts?_embed');
            if(!response.ok) {
                // oups! something went wrong
                return;
            }
    
            const posts = await response.json();
            setPosts(posts);
            console.log(posts)
        }
    
        loadPosts();
   }, [])
  return (
    <section className="postDisplay">
        {posts && posts.map((post, i) => (
            <Post data={post} key={i} />
        ))}
    </section>
 )
}