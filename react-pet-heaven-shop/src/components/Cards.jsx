import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out Our FURBABIES!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='image/dog1.jpeg'
              alt='dogs'
              text='Dogs'
              label='Dogs'
              path='/Dogs'
            />
            <CardItem
              src='image/cat.jpeg'
              text='Cats'
              label='Cats'
              path='/Cats'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='image/bird.jpeg'
              text='Birds'
              label='Birds'
              path='/Birds'
            />
            <CardItem
              src='image/other.jpeg'
              text='Other Pets'
              label='Others'
              path='/Others'
            />
          
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;