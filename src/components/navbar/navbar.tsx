import Logo from '../../assets/logo.svg';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img className={styles.logo} src={Logo} alt="React Logo" />
      <ul className={styles.links}>
        <li>Home</li>
        <li>Who</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
