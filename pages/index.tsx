import MapSection from '@/components/home/MapSection';
import { NextPage } from 'next';
import { Store } from '../types/store';
import { Fragment, useEffect } from 'react';
import useStores from '@/hooks/useStores';
import HomeHeader from '@/components/home/Header';
import DetailSection from '@/components/home/DetailSection';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

interface Props {
  stores: Store[];
}

const Home: NextPage<Props> = ({ stores }) => {
  const { initializeStores } = useStores();

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);

  return (
    <Fragment>
      <NextSeo
        title="Hoo_Map"
        description="네이버 지도를 활용한 Next.js 토이 프로젝트"
      />
      <HomeHeader />
      <main
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <MapSection />
        <DetailSection />
      </main>
    </Fragment>
  );
};

export default Home;

export async function getStaticProps() {
  const stores = (await import('../public/stores.json')).default;

  return {
    props: { stores },
    revalidate: 60 * 60,
  };
}
