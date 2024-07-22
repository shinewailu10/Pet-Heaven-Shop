import React from 'react';
import { Link } from 'react-router-dom';

function Item(props) {
  return (
    <>
      <li className='item'>
        <Link className='item__link' to={props.path}>
          <figure className='item__pic-wrap' data-category={props.label}>
            <img
              className='item__img'
              alt='Pets'
              src={props.src}
            />
          </figure>
          <div className='item__info'>
            <h5 className='item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Item;