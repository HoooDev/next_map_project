import React, { useCallback } from 'react';
import HeaderComponent from '../common/Header';
import Link from 'next/link';
import styles from '../../styles/header.module.scss';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { VscFeedback } from 'react-icons/vsc';
import useMap from '@/hooks/useMap';
import { useRouter } from 'next/router';
import copy from 'copy-to-clipboard';

const HomeHeader = () => {
  const { resetMapOptions, getMapOptions } = useMap();

  const router = useRouter();

  const replaceAndCopyUrl = useCallback(() => {
    const mapOptions = getMapOptions();
    const query = `/?zoom=${mapOptions.zoom}&lat=${mapOptions.center[0]}&lng=${mapOptions.center[1]}`;

    router.replace(query);
    copy(location.origin + query);
    alert('해당 지도가 복사 되었습니다.');
  }, [router, getMapOptions]);

  return (
    <HeaderComponent
      onClickLogo={resetMapOptions}
      rightElements={[
        <button
          onClick={replaceAndCopyUrl}
          className={styles.box}
          style={{ marginRight: 8 }}
          key="button"
          aria-label="현재 위치 클립보드 복사"
        >
          <AiOutlineShareAlt size={20} />
        </button>,
        <Link
          href="/feedback"
          key="link"
          className={styles.box}
          aria-label="피드백 페이지로 이동"
          passHref
        >
          <VscFeedback size={20} />
        </Link>,
      ]}
    />
  );
};

export default HomeHeader;
