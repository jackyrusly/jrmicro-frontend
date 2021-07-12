import Router from 'next/router';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles['site-header']}>
      <div className={styles['site-identity']}>
        <h1>
          <div onClick={() => Router.push('/')}>JRMicro Frontend</div>
        </h1>
      </div>

      <nav className={styles['site-navigation']}>
        <ul>
          <li>
            <div onClick={() => Router.push('/')}>Home</div>
          </li>
          <li>
            <div onClick={() => Router.push('/about')}>About</div>
          </li>
          <li>
            <div onClick={() => Router.push('/privacy-policy')}>
              Privacy Policy
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
