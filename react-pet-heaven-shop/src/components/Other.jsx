import React from 'react';
import './Other.css';
import Item from './Item';

function Other() {
  return (
    <div className='other'>
      <h1>Rabbit? Guinea Pig? Hamsters? All Here! Click to adopt!</h1>
      <div className='other__container'>
        <div className='other__wrapper'>
          <ul className='other__items'>
            <Item
              src='image/r1.jpeg'
              alt='rabbits'
              text='DeDee (male) & Bebee (female)'
              label='Rabbit'
              path='/Adoption'
            />
            <Item
              src='image/r2.jpeg'
              alt='rabbits'
              text='Bum Bum (male)'
              label='Rabbit'
              path='/Adoption'
            />
             <Item
              src='image/r3.jpeg'
              alt='rabbits'
              text='Ben (male)'
              label='Rabbit'
              path='/Adoption'
            /> 

          </ul>
          <ul className='other__items'>
            <Item
              src='image/g1.jpeg'
              alt='guinea pig'
              text='Pou (male)'
              label='Guinea Pig'
              path='/Adoption'
            />
            <Item
              src='image/g2.jpeg'
              alt='guinea pig'
              text='Kon (male)'
              label='Guinea Pig'
              path='/Adoption'
            />
             <Item
              src='image/g3.webp'
              alt='guinea pig'
              text='Yaw Yaw (female)'
              label='Guinea Pig'
              path='/Adoption'
            /> 
          
          </ul>
          <ul className='other__items'>
            <Item
              src='image/h1.avif'
              alt='hamster'
              text='Harmony (female)'
              label='Hamster'
              path='/Adoption'
            />
            <Item
              src='image/h2.webp'
              alt='hamster'
              text='Hammy (male)'
              label='Hamster'
              path='/Adoption'
            />
            <Item
              src='image/h3.webp'
              alt='hamster'
              text='Caca (female)'
              label='Hamster'
              path='/Adoption'
            />
         
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Other;