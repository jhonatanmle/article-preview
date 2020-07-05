import React from 'react';

import './Article.css';

import Img from '../images/drawers.jpg';
import Profile from '../images/avatar-michelle.jpg';
import IconShare from '../images/icon-share.svg';

const Article = () => {
    return (
        <div className="article">
            <img src={Img} className="article-img" alt="Drawer" />
            <div className="article-description">
                <div className="title">
                    Shift the overall look and feel by
                    adding these wonderful touches
                    to furniture in your home
                </div>
                <div className="description">
                    Ever been in a room and felt like
                    something was missing? Perhaps it felt
                    slighty bare and uninviting. I've got some
                    simple tips to help you make any room feel
                    complete.
                </div>
                <div className="footer">
                    <img src={Profile} className="avatar" alt="Avatar"/>
                    <div className="profile">
                        <span className="names">Michelle Appleton</span>
                        <span className="date">28 Jun 2020</span>
                    </div>
                    <div className="action">
                        <img src={IconShare} className="icon-share" alt="Share" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article;