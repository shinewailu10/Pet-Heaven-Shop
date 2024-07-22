import React from 'react';
import './Birdie.css';
import Item from './Item';

function Birdie() {
  return (
    <div className='bird'>
      <h1>FlyFlock Birdies Here! Click to adopt!</h1>
      <div className='bird__container'>
        <div className='bird__wrapper'>
          <ul className='bird__items'>
            <Item
              src='image/bird0.jpeg'
              alt='birds'
              text='Fufu (female)'
              label='Ring-Necked Parakeet'
              path='/Adoption'
            />
            <Item
              src='image/bird1.jpeg'
              alt='birds'
              text='Rafa (male)'
              label='Ring-Necked Parakeet'
              path='/Adoption'
            />
             <Item
              src='image/bird2.png'
              alt='birds'
              text='Sunny (male)'
              label='Cockatiel'
              path='/Adoption'
            /> 

          </ul>
          <ul className='bird__items'>
            <Item
              src='image/bird3.jpeg'
              alt='birds'
              text='Yoyo (male)'
              label='Budgerigar'
              path='/Adoption'
            />
            <Item
              src='image/bird4.jpg'
              alt='birds'
              text='Julo (female)'
              label='Parrotlets'
              path='/Adoption'
            />
             <Item
              src='image/bird6.jpeg'
              alt='birds'
              text='Kiki (male) & Vivi (female)'
              label='Lovebirds'
              path='/Adoption'
            /> 
          
          </ul>
          <ul className='bird__items'>
            <Item
              src='image/bird5.jpeg'
              alt='birds'
              text='Pepe (male)'
              label='Zebra Finches'
              path='/Adoption'
            />
            <Item
              src='image/bird7.jpeg'
              alt='birds'
              text='Gogo (male) & Kiwi (female)'
              label='Zebra Finches'
              path='/Adoption'
            />
         
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Birdie;