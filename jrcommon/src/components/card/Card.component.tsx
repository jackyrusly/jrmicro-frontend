import { FC } from 'react';
import styles from './Card.module.scss';

const Card: FC = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
