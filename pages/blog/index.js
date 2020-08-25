import Head from 'next/head';
import Link from '../../components/Link';
import { NextSeo } from 'next-seo';
import { useState, useEffect } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import BlogStyles from '../../stylesheets/Blog.module.css';
import MainStyles from '../../stylesheets/Main.module.css';

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
        <title>Lushfulness | Blog</title>
      </Head>

      <NextSeo
        title='Lushfulness | Blog for New Real Estate Agents'
        description='Lushfulness is '
        canonical='https://lushfulness.com/blog/index/'
      />

      <div className={BlogStyles.blog}>
        {/* <h1 className={MainStyles.title1}>blog</h1> */}
        <h1>Blog</h1>

        <Link href='/blog/posts/it-is-what-it-is'>
          <div className={BlogStyles.card}>
            <span>August 25, 2020</span>
            <h2>It Is What It Is</h2>

            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1598372001/Lushfulness/woman-on-bed-in-pain-D.jpg' alt='woman-on-bed-in-pain' title='woman-on-bed-in-pain' />

            <h3>How Do You Respond to Pain?</h3>
            <p>Every single morning I awake to a solidified body, one that it takes great effort to move, and that movement creates great discomfort.</p>
          </div>
        </Link>
      </div>

    </>
  );
}
