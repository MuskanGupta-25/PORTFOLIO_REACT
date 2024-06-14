import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';
import './App.css'; // Adjust this import based on your project structure and CSS setup

const App = () => {

    useEffect(() => {
        // Toggle icon navbar
        const menuIcon = document.querySelector('#menu-icon');
        const navbar = document.querySelector('.navbar');

        menuIcon.onclick = () => {
            menuIcon.classList.toggle('fa-xmark');
            navbar.classList.toggle('active');
        };

        // Scroll section
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('header nav a');

        window.onscroll = () => {
            sections.forEach(sec => {
                const top = window.scrollY;
                const offset = sec.offsetTop - 150;
                const height = sec.offsetHeight;
                const id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                    });
                    document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
                }
            });

            // Sticky navbar
            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 100);

            // Remove toggle icon navbar
            menuIcon.classList.remove('fa-xmark');
            navbar.classList.remove('active');
        };

        // Scroll reveal
        ScrollReveal({
            distance: '80px',
            duration: 2000,
            delay: 200
        });

        ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
        ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
        ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
        ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

        // Typed.js initialization
        const typed = new Typed('.multiple-text', {
            strings: ['Frontend Developer', 'Web Designer', 'Full Stack Developer'],
            typeSpeed: 70,
            backSpeed: 70,
            backDelay: 1000,
            loop: true
        });

        // Clean-up function for useEffect
        return () => {
            // Clean up any event listeners or other resources here if necessary
        };

    }, []); // Empty dependency array ensures this effect runs only once after initial render

    return (
        <div className="App">
            {/* Your JSX content here */}
        </div>
    );
};

export default App;
