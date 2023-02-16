import React from 'react';
import Link from 'next/link';
import styles from '../../styles/header.module.scss';
import Image from 'next/image';

interface Props {
  onClickLogo?: () => void;
  rightElements?: React.ReactElement[];
}

const HeaderComponent = ({ onClickLogo, rightElements }: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.flexItem}>
        <Link
          href="/"
          className={styles.box}
          onClick={onClickLogo}
          aria-label="홈으로 이동"
        >
          <Image
            src="/logo.png"
            width={140}
            height={35}
            alt="로고"
            priority={true}
          />
        </Link>
      </div>
      {rightElements && (
        <div className={styles.flexItem}> {rightElements} </div>
      )}
    </header>
  );
};

export default HeaderComponent;
