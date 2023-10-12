"use client"
import { useRef, useEffect } from 'react';
import Router from 'next/router';
import LoadingBar from 'react-top-loading-bar';

const TopProgressBar = () => {
  const ref = useRef(null);

  useEffect(() => {
    const start = () => ref.current.continuousStart();
    const complete = () => ref.current.complete();

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', complete);
    Router.events.on('routeChangeError', complete);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', complete);
      Router.events.off('routeChangeError', complete);
    };
  }, []);

  return <LoadingBar color="red" ref={ref} />;
};

export default TopProgressBar;
