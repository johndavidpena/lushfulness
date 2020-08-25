import Head from 'next/head';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { useState, useEffect } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import BasicEmail from '../components/Forms/BasicEmail';
import IndexStyles from '../stylesheets/Index.module.css';
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
        <title>Lushfulness</title>
      </Head>

      <NextSeo
        title='Lushfulness'
        description='Lushfulness is a podcast and Youtube channel about health and chronic pain.'
        canonical='https://lushfulness.com/'
      />

      <div className={MainStyles.page}>
        <h1 className={MainStyles.title1}>Welcome
        </h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur in assumenda, cumque ipsum nostrum, distinctio, alias quae omnis quis impedit consequuntur doloribus similique suscipit aliquam ex veniam quod sapiente explicabo?</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur in assumenda, cumque ipsum nostrum, distinctio, alias quae omnis quis impedit consequuntur doloribus similique suscipit aliquam ex veniam quod sapiente explicabo?</p>

        {screenSize === 'mobile' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1598210684/Lushfulness/healthy-drink-M.jpg' alt='healthy-drink' title='healthy-drink' />
        )}

        {screenSize === 'desktop' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1598210684/Lushfulness/healthy-drink-D.jpg' alt='healthy-drink' title='healthy-drink' />
        )}

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur in assumenda, cumque ipsum nostrum, distinctio, alias quae omnis quis impedit consequuntur doloribus similique suscipit aliquam ex veniam quod sapiente explicabo?</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur in assumenda, cumque ipsum nostrum, distinctio, alias quae omnis quis impedit consequuntur doloribus similique suscipit aliquam ex veniam quod sapiente explicabo?</p>

        <BasicEmail />
      </div>
    </>
  );
}
