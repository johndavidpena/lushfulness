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
        title='Lushfulness | Blog'
        description='Lushfulness is about health and chronic pain.'
        canonical='https://lushfulness.com/blog/index/'
      // openGraph={{
      //   url: 'https://newagentmindset.com/',
      //   title: 'New Real Estate Agent | Welcome to New Agent Mindset',
      //   description: 'New Agent Mindset is a podcast, Youtube channel, Facebook group, and website devoted to helping new real estate agents access the best strategies, tips, tools, and advice. Getting started in real estate is tough and New Agent Mindset exists to help new real estate agents find success!',
      //   images: [
      //     {
      //       url: 'https://res.cloudinary.com/mimas-music/image/upload/v1599500723/New%20Agent%20Mindset/720blackonWHITE.jpg',
      //       width: 720,
      //       height: 720,
      //       alt: 'New Real Estate Agent Mindset logo',
      //     },
      //     {
      //       url: 'https://res.cloudinary.com/mimas-music/image/upload/v1599078140/New%20Agent%20Mindset/episode-1-thumbnail-t640.jpg',
      //       width: 640,
      //       height: 360,
      //       alt: 'facts-tell-stories-sell',
      //     },
      //     {
      //       url: 'https://res.cloudinary.com/mimas-music/image/upload/v1599078347/New%20Agent%20Mindset/connect-new-agent-mindset-t640.jpg',
      //       width: 640,
      //       height: 427,
      //       alt: 'connect-new-agent-mindset',
      //     },
      //   ],
      // }}
      />

      <div className={BlogStyles.blog}>
        {/* <h1 className={MainStyles.title1}>blog</h1> */}
        {/* <h1>Blog</h1> */}

        <Link href='/blog/posts/journey-with-spondyloarthritis'>
          <div className={BlogStyles.card}>
            <span>October 5, 2020</span>
            <h2>The Journey with Spondyloarthritis</h2>

            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1602040876/Lushfulness/Blog%20Images/old-man-painting-770.jpg' alt='old-man-painting' title='old-man-painting' />

            <h3>Along a Path to the Present Moment</h3>
            <p>The path to a diagnosis of ankylosing spondylitis can be a lonely and difficult journey. Spondyloarthritis may obscure the path to your life goals. Lushfulness is a community cultivating well-being and reminding us that no matter your current circumstance, you have what you need to be who you desire to be, doing what you desire to do.</p>
          </div>
        </Link>

        {/* <Link href='/blog/posts/path-to-present-moment'>
          <div className={BlogStyles.card}>
            <span>September 7, 2020</span>
            <h2>The Path to the Present Moment</h2>

            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1598372001/Lushfulness/woman-on-bed-in-pain-D.jpg' alt='woman-on-bed-in-pain' title='woman-on-bed-in-pain' />

            <h3>Sub-jeading here</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eaque laudantium itaque fuga totam numquam beatae provident placeat, delectus iusto veniam temporibus sapiente, error et nostrum nam? Harum, reiciendis dignissimos!</p>
          </div>
        </Link> */}

        {/* <Link href='/blog/posts/it-is-what-it-is'>
          <div className={BlogStyles.card}>
            <span>August 25, 2020</span>
            <h2>It Is What It Is</h2>

            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1598372001/Lushfulness/woman-on-bed-in-pain-D.jpg' alt='woman-on-bed-in-pain' title='woman-on-bed-in-pain' />

            <h3>How Do You Respond to Pain?</h3>
            <p>Every single morning I awake to a solidified body, one that it takes great effort to move, and that movement creates great discomfort.</p>
          </div>
        </Link> */}
      </div>

    </>
  );
}
