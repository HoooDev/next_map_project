import React from 'react';
import Link from 'next/link';
import styles from '../../styles/header.module.scss';
import Image from 'next/image';

interface Props {
  rightElements?: React.ReactElement[];
}

const Header = ({ rightElements }: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.flexItem}>
        <Link href="/" className={styles.box}>
          <Image src="/logo.png" width={140} height={35} alt="로고" />
        </Link>
      </div>
      {rightElements && (
        <div className={styles.flexItem}> {rightElements} </div>
      )}
    </header>
  );
};

export default Header;
