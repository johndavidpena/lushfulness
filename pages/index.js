import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useState, useEffect } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import TitleCard from '../components/Cards/TitleCard';
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

      {/* TODO: SITE KEYWORDS: spondyloarthritis */}
      <NextSeo
        title='Lushfulness'
        description='Lushfulness is about health and chronic pain.'
        canonical='https://lushfulness.com/'
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

      <div>
        {/* <TitleCard title='Welcome' /> */}
        <h1 className={MainStyles.welcome}>Welcome</h1>

        <p>Lushfulness is an online community serving the greater good of those living with spondyloarthritis. It empowers us to live our best life from a profound state of well-being, no matter the body we are living in. We will become an international online community of like-minded individuals that support each other in this pursuit. The chronic illness associated with spondyloarthritis is often a lonely and misunderstood experience. May Lushfulness provide fellowship and support.</p>

        {screenSize === 'mobile' && (
          <img className={MainStyles.headshot} src='https://res.cloudinary.com/mimas-music/image/upload/v1602040799/Lushfulness/ella-james-400.jpg' alt='ella-headshot' title='ella-headshot' />
        )}

        {screenSize === 'desktop' && (
          <img className={MainStyles.headshot} src='https://res.cloudinary.com/mimas-music/image/upload/v1602040799/Lushfulness/ella-james-770.jpg' alt='ella-headshot' title='ella-headshot' />
        )}

        <p>Ella, the founder of Lushfulness, has lived with the chronic unknowing and pain of spondyloarthritis for nearly 30 years. Her ankylosing spondylitis started as non-radiographic axial spondyloarthritis (nr-axSpa), a disease that finally received an official ICD-10 code on October 1, 2020. It took a number of years for the final diagnosis of ankylosing spondylitis to become visually apparent on the limited radiographical tools available 20-30 years ago.</p>

        <p>Professionally, Ella is a nephrology nurse and regional manager for home therapy dialysis in three southwest states. In her professional role, she is an educator and advocate for improving the care for chronic kidney disease and end stage renal disease patients.</p>

        <p>Ella brings a full spectrum view to chronic pain and disease with her experience as both a patient with chronic autoimmune disease and the pain of ankylosing spondylitis, as well as a healthcare professional for those experiencing chronic illness and pain associated with kidney disease and diabetic neuropathy. Driven to find a way of being that promotes well-being while living with spondyloarthritis, Ella became a yoga therapist and continues to explore traditional and non-traditional approaches to living well. Through Lushfulness Ella seeks to create fellowship and foster human connection.</p>

        <p>Join us, sign up for updates as Lushfulness flourishes into a community that cultivates individual well-being and in turn, cultivates well-being in our world.</p>
      </div>
    </>
  );
}
