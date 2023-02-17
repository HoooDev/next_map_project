import styles from '../styles/detail.module.scss';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { Store } from '../types/store';
import DetailHeader from '@/components/home/DetailHeader';
import DetailContent from '@/components/home/DetailContent';
import { useRouter } from 'next/router';
import useCurrentStore from '@/hooks/useCurrentStore';
import { NextSeo } from 'next-seo';

interface Props {
  store: Store;
}

const StoreDetail: NextPage<Props> = ({ store }) => {
  const expanded = true;
  const router = useRouter();
  const { setCurrentStore } = useCurrentStore();

  const goToMap = () => {
    setCurrentStore(store);
    router.push(
      `/?zoom=15&lat=${store.coordinates[0]}&lng=${store.coordinates[1]}`
    );
  };
  return (
    <>
      <NextSeo
        title="Hoo_Map"
        description="네이버 지도를 활용한 Next.js 토이 프로젝트 - 매장 상세 페이지"
        canonical={`https://next-map-project.vercel.app/${store.name}`}
      />
      <div
        className={`${styles.detailSection} ${styles.selected} ${styles.expanded}`}
      >
        <DetailHeader
          expanded={expanded}
          currentStore={store}
          onClickArrow={goToMap}
        />
        <DetailContent currentStore={store} expanded={expanded} />
      </div>
    </>
  );
};
export default StoreDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const stores = (await import('../public/stores.json')).default;
  const paths = stores.map((store) => ({ params: { name: store.name } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const stores = (await import('../public/stores.json')).default;
  const store = stores.find((store) => store.name === params?.name);

  return { props: { store } };
};
