import React from 'react';
import './Doggo.css';
import Item from './Item';

function Doggo() {
  return (
    <div className='dog'>
      <h1>DoggoLingo Here! Click to adopt!</h1>
      <div className='dog__container'>
        <div className='dog__wrapper'>
          <ul className='dog__items'>
            <Item
              src='image/chihuahua.jpeg'
              alt='dogs'
              text='Chicha (male)'
              label='Chihuahua'
              path='/Adoption'
            />
            <Item
              src='image/dog2.jpeg'
              alt='dogs'
              text='Goldie (female)'
              label='Golden Retriver'
              path='/Adoption'
            />
             <Item
              src='image/dog3.jpeg'
              alt='dogs'
              text='Shin Shin (female)'
              label='Shih Tzu'
              path='/Adoption'
            /> 
            <Item
            src='image/dog4.jpeg'
            alt='dogs'
            text='Mojo (male)'
            label='Rottweiler'
            path='/Adoption'
          />
          </ul>
          <ul className='dog__items'>
            <Item
              src='image/dog5.jpeg'
              alt='dogs'
              text='Julie (female)'
              label='Rottweiler'
              path='/Adoption'
            />
            <Item
              src='image/dog6.jpeg'
              alt='dogs'
              text='Nigel (male)'
              label='Dachshund'
              path='/Adoption'
            />
             <Item
              src='image/dog7.jpeg'
              alt='dogs'
              text='Jiji(Mom) & Jaja(son)'
              label='Dachshund'
              path='/Adoption'
            /> 
            <Item
            src='image/dog8.jpeg'
            alt='dogs'
            text='Johan (male)'
            label='Corgi'
            path='/Adoption'
          />
          </ul>
          <ul className='dog__items'>
            <Item
              src='image/dog9.jpeg'
              alt='dogs'
              text='Pippa (female)'
              label='Corgi'
              path='/Adoption'
            />
            <Item
              src='image/dog01.jpeg'
              alt='dogs'
              text='Jessy (male)'
              label='Poodle'
              path='/Adoption'
            />
             <Item
              src='image/dog0.jpeg'
              alt='dogs'
              text='Shuyi(female)'
              label='Poodle'
              path='/Adoption'
            /> 
            <Item
            src='image/dog02.jpeg'
            alt='dogs'
            text='Coka (male)'
            label='cavachon'
            path='/Adoption'
          />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Doggo;