import Head from 'next/head';
import Link from '../../../components/Link';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import { useState, useEffect } from 'react';
import { useWindowSize } from '../../../hooks/useWindowSize';
import MainStyles from '../../../stylesheets/Main.module.css';
import BlogStyles from '../../../stylesheets/Blog.module.css';
import BasicEmail from '../../../components/Forms/BasicEmail';

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
        <title>Lushfulness | Adaptation Fatigue</title>
      </Head>

      <NextSeo
        title='Adaptation Fatigue | Lushfulness'
        description=''
        canonical='https://lushfulness.com/blog/posts/adaptation-fatigue'
        openGraph={{
          url: 'https://lushfulness.com/blog/posts/adaptation-fatigue',
          title: 'Adaptation Fatigue | Lushfulness',
          description: '',
          images: [
            {
              url: '',
              width: 640,
              height: 429,
              alt: '',
            },
            {
              url: '',
              width: 640,
              height: 426,
              alt: '',
            },
            {
              url: '',
              width: 0,
              height: 0,
              alt: '',
            },
          ],
        }}
      />

      <div>
        <h1 className={MainStyles.title1}>Adaptation Fatigue</h1>
        <ArticleJsonLd
          url="https://lushfulness.com/blog/posts/adaptation-fatigue"
          title="Adaptation Fatigue"
          images={[
            '',
            '',
          ]}
          datePublished="2020-09-14T08:00:00+08:00"
          authorName="Ella James"
          publisherName="Lushfulness"
          publisherLogo=""
          description=""
        />

        {/* Image -  */}

        <p>Adaptation - Fatigue</p>
        <p>Walmart Grocery Pick Up - shop no more</p>

        <p>Do I need Walmart pick up?  No</p>
        <p>Will I ever give it up?  No</p>
        <p>Will I be looking into the next step, delivery?  Yes</p>

        <p>I am not a shopping lover, except for maybe Whole Foods. I go shopping when I need to go, but never seek out shopping. Its energy cost is just not a worthwhile expenditure. You’d think I’d have tried out grocery pick up or delivery services months ago. But it seems habits are hard to break and poorly planned grocery shopping has been a way of life for so long. Also, I don’t need the service, between my husband and I, we can get the shopping done. I never stopped to ask myself how much better my life may be without needing to grocery shop.</p>

        <p>COVID has given the gift of a push. It has given us all a chance to see how online shopping can serve our needs.  Amazon Prime and I go way back, since my children were small it has been a gift to have items delivered to my door in two days. The beginning days of the quarantine made us see how addicted we were to two-day delivery. Saturday Night Live has a skit on Prime Now, and quarantine made that more true than ever for my family!</p>

        <p>So again you’d think I would have jumped right into online grocery shopping; broke the habit, and left habitual patterns behind so much earlier than now. I appreciate change and embrace it when it happens. I seek it out in big ways, but apparently not in the small ways. So to those of you who are still shopping let me share some unforeseen benefits we discovered with Walmart pick up service.</p>

        <p>We eat healthier because we think about what is going into the cart. Impulse buying is reduced in our virtual shopping. We are more budget-conscious because you can see the total amount you are spending as you add items to your cart. Meals are more thought out. We are not planners, but we do plan while we virtually shop. Perhaps it is the relaxed pleasant nature of being in your own home. The Walmart habitat is not one that suits either my husband or myself. Meal prep and cooking has become a positive team activity for my husband and I. A healthier diet.</p>

        <p>Our order is ready on time. Walmart even texts updates on your order. Our order is perfect every time we pick it up. We tried ordering produce, and well, that was the only fail on Walmarts part. As one would expect, it is still best to shop for your produce in person. I don’t mind a short trip to Sprouts or Whole Foods each week for produce. My able-bodied husband does mind the time he “wastes” on this necessary task and longs for reliable produce delivery or pick up. Our Whole Foods does not offer shopping online for pick up or delivery. Does the Whole Foods in your neighborhood offer this service? How is your produce?</p>

        <p>Following the spoon theory, is grocery shopping worth the spoon expenditure? Unless you love shopping, I don’t think so. I encourage everyone to save the energy expenditure for an activity you love. In the end, we all wish for more time. More time with family, more time in nature, more time with friends. Time is such a precious resource to all people, but especially to those facing chronic fatigue.</p>

        <BasicEmail heading='Sign Up' />
      </div>
    </>
  );
}
