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
        <title>Lushfulness | The Will to Well-Being</title>
      </Head>

      <NextSeo
        title='The Will to Well-Being | Lushfulness'
        description=''
        canonical='https://lushfulness.com/blog/posts/will-well-being'
        openGraph={{
          url: 'https://lushfulness.com/blog/posts/will-well-being',
          title: 'The Will to Well-Being | Lushfulness',
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
        <h1 className={MainStyles.title1}>The Will to Well-Being</h1>
        <ArticleJsonLd
          url="https://lushfulness.com/blog/posts/will-well-being"
          title="The Will to Well-Being"
          images={[
            '',
            '',
          ]}
          datePublished="2020-09-21T08:00:00+08:00"
          authorName="Ella James"
          publisherName="Lushfulness"
          publisherLogo=""
          description=""
        />

        {/* Image -  */}

        <p>As a dialysis nurse, I see the incredible strong will to live as a fundamental human nature in almost all people. End Stage Renal Disease is fatal without dialysis and dialysis is not a pleasant experience. You do not feel well before a treatment, and you feel a different unwell after a treatment, and then you have the small space of feeling well that lives between, recovered from the dialysis treatment and before the toxins and fluids have accumulated to the point of feeling ill again. In in-center hemodialysis, this is the cycle of a continued life, for if you stop the cycle of dialysis without receiving a transplant you will die.</p>

        <p>The benefits of in-center hemodialysis is that you are taken care of and a nurse oversees your care. After waiting for your turn you walk in the door, a tech weighs you and ushers you to your chair. You settle in for the next four hours, a tech then checks your vital signs and proceeds to sticks two very large needles into the access created in your body, so the machine can remove your blood from your body, clean it in this machine outside of you, and then return the clean blood to your body. The patient just sits there and someone else does all the work. With the setup and completion process, along with regaining hemostasis, you give up 15 hours of living your life every week so you can keep living your life. Three times a week, every week, this is your life. The drawbacks beyond your time are many, large fluid volume shifts in the body causing the washout that requires recovery time, cardiac damage, and further kidney damage.</p>

        <p>Unless you are very ill, you have other choices in how you receive dialysis. You can choose to take care of yourself at home, doing your own home dialysis. Home dialysis offers two options; home hemodialysis or peritoneal dialysis - a blood and needle-free option. In both of these options, you must be an active participant in your healthcare. With home dialysis, you or your caregiver must work to do your treatment. You need the will to well-being to get to home dialysis. If you can overcome your resignation to illness, you get your time back. You also reduce the further burden on your body, both your heart and kidneys, and you improve your chances to receive a transplant. You can travel, you can work, you can eat a more normal diet and you can consume a little more fluid, you do not experience any significant washout; you can feel better than you do on in-center hemodialysis. Yet almost all end stage renal disease (ESRD) patients end up on in-center hemodialysis.</p>

        <p>My theory on why this is, is the will to live coupled with the resignation to illness. Most people are shocked to find themselves suddenly terribly ill, so ill they need to go to the emergency room. They have felt relatively well until they rapidly feel terrible. Without any adjustment time, ESRD patients find themselves not only chronically ill but also about to die from a terminal condition unless they receive regular dialysis treatments until a transplant becomes available or they die. On top of these treatments, they must also significantly change their diet and closely monitor their fluid intake.</p>

        <p>The hit is so fast and so hard that resignation to illness is the outcome, and it is a fight to get back to the will to well-being. How do we change the dialog and delivery of the reality now present for ESRD patients at the unexpected diagnosis in a hospital setting? (Not all ESRD patients crash into the hospital, some are diagnosed with chronic kidney disease and are followed by a nephrologist prior to ESRD diagnosis. This often extends the time before reaching ESRD.) How do we change the dialog when an ESRD patient first comes to a dialysis center for their dialysis treatments? How do we empower patients through a transition of this magnitude? How do we tap into that will to live and create a flow of energy to the will to well-being? How do we reframe wellness to be well-being, something attainable when you are in fact chronically ill? How do we language things to avoid, or at least minimize, the resignation to illness?</p>

        <p>What is wellness? Merriam-Webster dictionary defines wellness as the quality or state of being in good health especially as a sought goal. Merriam-Webster defines health as the condition of being sound in body, mind, or spirit; freedom from physical disease or pain; the general condition of the body; a condition in which someone or something is thriving or doing well; a general condition or state. I would like to offer just a slight refinement of this section of the definition, “freedom from physical disease or pain” should read “freedom from physical dis-ease or uncontrolled pain”.</p>

        <p>What is well-being? Merriam-Webster defines well-being as the state of being happy, healthy, or prosperous. Well-being by definition is a state that those with chronic illness can attain. Furthermore, I offer my favorite definition of health:</p>

        <p>“Health is a presence of a superior state of wellbeing, a vigor, a vitality, a pizzazz you have to work for every single day of your life.” ~Dorian “Doc” Paskowitz, MD</p>

        <p>I have remembered and carried this definition with me for a few decades now. I hope you will too. This empowers you to be healthy no matter what your physical body may face. This is where we all need to live from. This is the goal we all should be seeking no matter our chronic diagnosis. It is something we must “work” for “every single day of your life.” How much work do you put into your health?</p>

        <p>I have used ESRD and dialysis to tell this story, but it is also my story with ankylosing spondylitis. The ankylosing spondylitis in my body will likely influence when I die. I have experienced the disease’s inflammation in my heart, lungs, and intestines at various times over the course of my life. I am thankful that modern medicine allows for my physicians to successfully retract the disease from these organs. I also know that someday the inflammation may attack a vital organ and the medications will not retract it in time. I do not do enough work to ensure my health every day. As a nurse, I know neither do most people. I call to myself and all in my chronic disease cohort, we do not need to be a chronic dis-ease cohort as well. With work, we will experience health and well-being.</p>

        <p>How do you keep yourself dedicated to the “work” of health and well-being “every single day of your life”?</p>

        <BasicEmail heading='Sign Up' />
      </div>
    </>
  );
}
