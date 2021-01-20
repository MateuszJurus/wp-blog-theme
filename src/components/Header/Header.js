import React from 'react';
import './Header.scss';

const Header = () => (
    <section className="section section--header">
        <header className="section__heading">
            <h1 className="h1">Blog about all things related to linux and web development</h1>
            <button className="button button--white">Explore!</button>
        </header>
    </section>
)

export default Header;