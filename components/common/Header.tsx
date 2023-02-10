import React from 'react';
import Link from 'next/link';
import styles from '../../styles/header.module.scss';

interface Props {}

const Header = ({}: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.flexItem}>
        <Link href="/" className={styles.box}>
          <img src="/logo.png" width={140} height={35} alt="로고" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
