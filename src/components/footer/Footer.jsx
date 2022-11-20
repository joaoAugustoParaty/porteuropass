import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">João Augusto</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://twitter.com/joaodevbr" className="footer__social-link" target="_blank" rel='noreferrer'>
    <i class="bx bxl-twitter"></i>
    </a>  
            </div>
            <span className='footer__copy'>&#169; João Augusto. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer