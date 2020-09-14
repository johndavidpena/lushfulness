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
        {/* <h1 className={MainStyles.title1}>Welcome
        </h1> */}

        <p>Lushfulness is an online community serving the greater good of those facing chronic illness. It empowers us to live our best life from a profound state of well-being, no matter the body we are living in. We will become an international online community of like-minded individuals that support each other in this pursuit. Chronic illness is often a lonely and misunderstood experience. May Lushfulness provide fellowship and support.</p>


        <p>Founder, Ella has lived with the chronic unknowing and pain of ankylosing spondylitis for nearly 30 years. Professionally she is a nephrology nurse and regional manager for home therapy dialysis in three southwest states. In her professional role, she is an educator and advocate for chronic kidney disease and end stage renal disease patients. Ella brings a full spectrum view to chronic pain and disease with her experience as both a patient with chronic disease and pain, as well as a healthcare professional for those experiencing chronic illness and pain. Driven to find a way of being that promotes well-being while living with chronic illness, Ella became a yoga therapist and continues to explore traditional and non-traditional approaches to living well. Through Lushfulness Ella seeks to create fellowship and foster human connection.</p>

        <p>Join us, sign up for updates as Lushfulness flourishes into a community that cultivates individual well-being and in turn, cultivates well-being in our world.</p>

        {/* {screenSize === 'mobile' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1598210684/Lushfulness/healthy-drink-M.jpg' alt='healthy-drink' title='healthy-drink' />
        )}

        {screenSize === 'desktop' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1598210684/Lushfulness/healthy-drink-D.jpg' alt='healthy-drink' title='healthy-drink' />
        )} */}


        <BasicEmail heading='Sign Up' />
      </div>
    </>
  );
}
