import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useState, useEffect } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import PostStyles from '../stylesheets/Post.module.css';
import MainStyles from '../stylesheets/Main.module.css';

export default () => {
  const size = useWindowSize();
  let width = size.width;

  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    if (width <= 640) {
      setScreenSize('mobile');
    } else if (width > 640) {
      setScreenSize('desktop');
    }
    return () => { };
  }, [width]);

  return (
    <>
      <Head>
        <title>Lushfulness | 1</title>
      </Head>

      <NextSeo
        title='Lushfulness | 1'
        description='Lushfulness | 1'
        canonical='https://lushfulness.com/'
      />

      <div className={PostStyles.page}>
        <h1 className={PostStyles.title1}>start with
         <span aria-hidden="true" className={PostStyles.title2}>&nbsp;why</span>
        </h1>

        {screenSize === 'mobile' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597532499/New%20Agent%20Mindset/start-whith-why-m.jpg' alt='start-with-why' title='start-with-why' />
        )}

        {screenSize === 'desktop' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597532496/New%20Agent%20Mindset/start-whith-why-d.jpg' alt='start-with-why' title='start-with-why' />
        )}

        <button className={MainStyles.button}>
          <a href='https://bit.ly/3kI6Ngw' target='_blank'>Join Now</a>
        </button>

        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
