import MapSection from '@/components/home/MapSection';
import { NextPage } from 'next';
import { Store } from '../types/store';
import { useEffect } from 'react';
import useStores from '@/hooks/useStores';
import HomeHeader from '@/components/home/Header';

interface Props {
  stores: Store[];
}

const Home: NextPage<Props> = ({ stores }) => {
  const { initializeStores } = useStores();

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);

  return (
    <>
      <HomeHeader />
      <main style={{ width: '100%', height: '100%' }}>
        <MapSection />
      </main>
    </>
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
