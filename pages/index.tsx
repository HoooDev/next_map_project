import Header from '@/components/common/Header';
import Link from 'next/link';
import styles from '../styles/header.module.scss';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { VscFeedback } from 'react-icons/vsc';

export default function Home() {
  return (
    <>
      <Header
        rightElements={[
          <button
            onClick={() => {
              alert('복사');
            }}
            className={styles.box}
            style={{ marginRight: 8 }}
            key="button"
          >
            <AiOutlineShareAlt size={20} />
          </button>,
          <Link href="/feedback" key="link" className={styles.box} passHref>
            <VscFeedback size={20} />
          </Link>,
        ]}
      ></Header>
    </>
  );
}
