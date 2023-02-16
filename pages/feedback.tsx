import Header from '@/components/common/Header';
import { NextSeo } from 'next-seo';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <NextSeo title="피드백" description="매장 지도 서비스 피드백" />
      <Header></Header>
    </Fragment>
  );
}
