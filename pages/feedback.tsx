import Header from '@/components/common/Header';
import { NextSeo } from 'next-seo';
import { Fragment } from 'react';

export const FeedbackPage = () => {
  return (
    <Fragment>
      <NextSeo
        title="피드백"
        description="매장 지도 서비스 피드백"
        canonical="https://next-map-project.vercel.app/feedback"
      />
      <Header></Header>
    </Fragment>
  );
};

export default FeedbackPage;
