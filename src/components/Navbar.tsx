'use client';

import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';

const Navbar = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.content}>
        <Link 
          href="/" 
          className={styles.logo}
          onClick={(e) => handleSmoothScroll(e, '#hero')}
        >
          AE
        </Link>
        <ul className={styles.links}>
          <li>
            <Link 
              href="#about" 
              className={styles.link}
              onClick={(e) => handleSmoothScroll(e, '#about')}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="#experience" 
              className={styles.link}
              onClick={(e) => handleSmoothScroll(e, '#experience')}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link 
              href="#projects" 
              className={styles.link}
              onClick={(e) => handleSmoothScroll(e, '#projects')}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              href="#contact" 
              className={styles.link}
              onClick={(e) => handleSmoothScroll(e, '#contact')}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
