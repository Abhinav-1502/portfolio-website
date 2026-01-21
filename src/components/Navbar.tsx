import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.content}>
        <Link href="/" className={styles.logo}>
          Portfolio.
        </Link>
        <ul className={styles.links}>
          <li>
            <Link href="#about" className={styles.link}>
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className={styles.link}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="#experience" className={styles.link}>
              Experience
            </Link>
          </li>
          <li>
            <Link href="#contact" className={styles.link}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
