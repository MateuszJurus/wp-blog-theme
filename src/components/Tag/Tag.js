import React from 'react';

import './Tag.scss';

const Tag = ({
    details: tags
}) => (
    tags.map((tag,i) => (
        <a key={i} href={tag.link} className={"tag tag--" + tag.slug}>{tag.name}</a>
    ))
)

export default Tag;