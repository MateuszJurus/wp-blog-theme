import React from 'react';

import Tag from '../Tag/Tag';

import './Post.scss';



const Post = ({
    data: { title, excerpt, link, date, tags, _links, _embedded }
}) => (
    <article className="postcard">
        <a href={link}>
            {_embedded['wp:featuredmedia'] ? (
                <img className="postcard__image" src={_embedded['wp:featuredmedia']['0'].source_url} />
            ) : (
                <img className="postcard__image"  />
            )} 
        </a>
        <h1 className="postcard__title"><a href={link}>{title.rendered}</a></h1>
        <p className="postcard__date">{date}</p>
        <p className="postcard__excerpt"><a href={link} dangerouslySetInnerHTML={{__html: excerpt.rendered}}></a></p>
        <div className="postcard__tags">
            {_embedded["wp:term"][1].length >= 1 ? (
                <Tag details={_embedded["wp:term"][1]} />
            ) : null}
        </div>
    </article>
)

export default Post;