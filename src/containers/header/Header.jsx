import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
    return (
        <section className='gpt3__header section__padding' id='home'>
            <div className='gpt3__header-content'>
                
                <h1 className='gradient__text'>
                Unleash your Inner Creative with DALL-E
                </h1>

                <p>
                DALL-E is a new AI system that can create realistic images and art from description in natural language.
                 From an impressionist oil painting of early cave men sititng around fire to a majestic space dunk by Kobe Bryant,
                 you can draw it all!
                </p>

                <div className='gpt3__header-content__input'>
                        <input type='email' placeholder='Enter your email' />
                        <button type='button'>Get Started</button>
                </div>

                <div className='gpt3__header-content__people'>
                    <img src={people} alt='people' />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
            
                </div>
                <div className='gpt3__header-image'>
                    <img src={ai} alt='gpt header' />
                </div>

        </section>
    )
}

export default Header;
