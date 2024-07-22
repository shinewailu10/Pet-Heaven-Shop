import React from 'react';
import './Catty.css';
import Item from './Item';

function Catty() {
  return (
    <div className='cat'>
      <h1>TabbyCatty Here! Click to adopt!</h1>
      <div className='cat__container'>
        <div className='cat__wrapper'>
          <ul className='cat__items'>
            <Item
              src='image/cat0.jpeg'
              alt='cats'
              text='Ziggy (male)'
              label='Singapura Cat'
              path='/Adoption'
            />
            <Item
              src='image/cat1.jpeg'
              alt='cats'
              text='Popo(Mom) & Soda(son)'
              label='Singapura Cat'
              path='/Adoption'
            /> 
             <Item
              src='image/cat2.jpeg'
              alt='cats'
              text='Poni (female)'
              label='Singapura Cat'
              path='/Adoption'
            /> 
            <Item
            src='image/cat3.jpeg'
            alt='cats'
            text='Suushi (female)'
            label='Munchkin'
            path='/Adoption'
          />
          </ul>
          <ul className='cat__items'>
            <Item
              src='image/cat4.jpeg'
              alt='cats'
              text='Paw Paw (male)'
              label='Munchkin'
              path='/Adoption'
            />
            <Item
              src='image/cat5.jpeg'
              alt='cats'
              text='Moly (female)'
              label='Siberian'
              path='/Adoption'
            /> 
             <Item
              src='image/cat6.jpeg'
              alt='cats'
              text='Borito (male)'
              label='Persian'
              path='/Adoption'
            /> 
            <Item
            src='image/cat7.jpg'
            alt='cats'
            text='Par (female)'
            label='Persian'
            path='/Adoption'
          />
          </ul>
          <ul className='cat__items'>
            <Item
              src='image/cat8.jpeg'
              alt='cats'
              text='Walter (male)'
              label='Russian Blue'
              path='/Adoption'
            />
            <Item
              src='image/cat00.jpeg'
              alt='cats'
              text='Zat (male)'
              label='Devon Rex'
              path='/Adoption'
            /> 
             <Item
              src='image/cat9.jpeg'
              alt='cats'
              text='Nana (female)'
              label='Burmese'
              path='/Adoption'
            /> 
            <Item
            src='image/cat01.jpeg'
            alt='cats'
            text='Dan Dan (male)'
            label='Bengal'
            path='/Adoption'
          />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Catty;