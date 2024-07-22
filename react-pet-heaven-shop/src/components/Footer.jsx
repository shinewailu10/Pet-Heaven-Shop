import React, { useState } from "react";
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    const [feedback, setFeedback] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(feedback);

        try {
            const response = await fetch('http://localhost:4234/send-feedback-email', {
                method: 'POST',
                headers: {
                    "accept": "text/plain",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify({ feedback }),
            });

            if (response.ok) {
                console.log('Email sent successfully');
            } else {
                console.error('Failed to send email');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

  return (
    <div className='footer-container'>
        <section className='footer-subscription' onSubmit={handleSubmit}>
        <p className='footer-subscription-heading'>
          Join Hands With Our Charity
        </p>
        <p className='footer-subscription-text'>
          Share your suggestions and feedbacks here!
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='feedback'
              onChange={(e) => setFeedback(e.target.value)}
              type='feedback'
              placeholder="What's your advice?"
            />
            <button className='btn-feed' type='submit'>submit</button>
          </form>
        </div>
      </section>    
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
          <h2>Contact</h2>
            <Link to='/'>	
                    <i className="fa fa-star"></i>
					<i className="fa fa-star"></i>
					<i className="fa fa-star"></i>
					<i className="fa fa-star"></i>
					<i className="fa fa-star"></i>
            </Link>
            <Link to='/'> peth8222@gmail.com</Link>
            <Link to='/'><i className="fa-solid fa-phone"></i> +65 88887777</Link>
            <Link to='/'><i className="fa-solid fa-location-dot"></i> 588 Street 52, Singapore 561588</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Links</h2>
            <Link to='/'>Home</Link>
            <Link to='/Pets'>Pets</Link>
            <Link to='/Adoption'>Adoption</Link>
            <Link to='/Releasing'>Releasing</Link>
            <Link to='/About'>About Us</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Telegram</Link>
            <Link to='/'>X</Link>
            <Link to='/'>Whatsapp</Link>

          </div>
        </div>
      </div>
      
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
                <img src='/image/logo.png' alt='logo'></img>
            </Link>
          </div>
          <small className='website-rights'>PET HEAVEN © 2023</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link telegram'
              to='/'
              target='_blank'
              aria-label='Telegram'
            >
              <i className='fab fa-telegram' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-x-twitter' />
            </Link>
            <Link
              className='social-icon-link whatsapp'
              to='/'
              target='_blank'
              aria-label='Whatsapp'
            >
              <i className='fab fa-whatsapp' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;


