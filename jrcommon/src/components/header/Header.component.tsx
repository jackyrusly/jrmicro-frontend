import { useRouter } from 'next/router';
import styles from './Header.module.scss';

const Header = () => {
  const router = useRouter();

  return (
    <header className={styles['site-header']}>
      <div className={styles['site-identity']}>
        <h1>
          <div onClick={() => router.push('/')}>JRMicro Frontend</div>
        </h1>
      </div>

      <nav className={styles['site-navigation']}>
        <ul>
          <li>
            <div onClick={() => router.push('/')}>Home</div>
          </li>
          <li>
            <div onClick={() => router.push('/about')}>About</div>
          </li>
          <li>
            <div onClick={() => router.push('/privacy-policy')}>
              Privacy Policy
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
