import React from 'react';
import './article.css';

const Article = ({ imgURL }) => {

    const currentTime = Date.now();
    const currentDate = new Date(currentTime).toDateString();

    return (
        <div className='gpt3__blog-container_article'>
            <div className='gpt3__blog-container_article-image'>
                <img src={imgURL} alt='Article blog' />
            </div>

            <div className='gpt3__blog-container_article-content'>
                <div>
                    <p>{currentDate}</p>
                    <h3>DALL-E is the future of creativity. Let us exlore how it works?</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    )
}

export default Article;
