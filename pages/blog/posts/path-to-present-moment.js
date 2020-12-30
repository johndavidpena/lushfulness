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
        <title>Lushfulness | The Path to the Present Moment</title>
      </Head>

      <NextSeo
        title='The Path to the Present Moment | Lushfulness'
        description=''
        canonical='https://lushfulness.com/blog/posts/path-to-present-moment'
        openGraph={{
          url: 'https://lushfulness.com/blog/posts/it-is-what-it-is',
          title: 'The Path to the Present Moment | Lushfulness',
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
        <h1 className={MainStyles.title1}>The Path to the Present Moment</h1>
        <ArticleJsonLd
          url="https://lushfulness.com/blog/posts/path-to-present-moment"
          title="The Path to the Present Moment"
          images={[
            '',
            '',
          ]}
          datePublished="2020-09-07T08:00:00+08:00"
          authorName="Ella James"
          publisherName="Lushfulness"
          publisherLogo=""
          description=""
        />

        {/* Image - Path and Artist / paint brush */}

        <p>Each one of us is an artist and we are also the art.We are each the artist and the canvas and the brush and the paint, that creates an experience.We are all of it, not just the artist.We have a lifetime for creation and we can always reshape, change the performance, change the picture we paint of ourselves, and change our world.We can reimagine ourselves and our world, and suddenly we have created something new and / or something different.With our actions and our stories, we influence ourselves and each other.We wish things to be different, we wish ourselves to be different; all that is necessary to make those desired changes come into being is the first step, followed by another step.I used to say “I don’t see a path, why keep taking steps.” I now understand, if we keep taking steps the path will keep revealing itself.Keep the end in sight, take the first step and then another, the pathway will present itself as you keep moving forward.</p>

        <p>I have failed to take another step more than I care to admit.Lushfulness is to remind us each day that no matter your current circumstance, you have what you need to be who you desire to be doing what you desire to do.You just have to know what you want and keep moving toward it step by step.You have to be very clear in your ultimate goal, and you need to think bigger.Here is my personal experience, that brings to Lushfulness into being, and reiterates the importance of goal clarity and thinking bigger.</p>

        <p>Many years ago I was married to the father of my children and very, very, sick.I had two children under the age of 3, with a husband that traveled regularly for work and his biggest concern was how others viewed him.Although my true diagnosis is Ankylosing Spondylitis, at that time I was diagnosed with ulcerative colitis and then chron’s disease after the inflammation spread into my small intestines as well.I was taking 60mg of prednisone a day and losing weight I did not have to lose.At 5’9”, my lowest moment was when the scale said 98 pounds.I cried and cried, sure that I was dying and my children would soon be motherless.I was on so many medications, I had medications to control the side effects of the medications controlling the side effects of the original medication.Around this time while buying a new car, the saleswoman asked if I was okay.That’s how sick I looked, strangers asked if I was okay.I shared some of my story and the day we picked up the car she gave me a book on celiac disease.I stopped eating gluten, and very slowly things began to improve.The pain continued but the fatigue improved slightly and I began to be able to digest and absorb food again.I gained weight and my brain began to function at its normal capacity.</p>

        <p>I have celiac disease and Ankylosing Spondylitis without the genetic marker.Thirty years with Ankylosing Spondylitis have created the undeniable evidence on x - ray to support the diagnosis.However, in the beginning, healthcare professionals were stumped by what was causing the fatigue and pain; it takes years for the disease to progress to a point that its destruction is able to be visualized on imaging.This led to a place many of us with atypical chronic illness find ourselves, tagged with the label of depressed since healthcare could not find the cause of my symptoms.</p>

        <p>After years of pain and exhaustion with no cause and no solution, the fear of the unknown and the hopelessness did lead to a period of depression.However, unlike the chicken and the egg, I know the pain and exhaustion came before the depression.The depression was a result of that pain and exhaustion.Adding depression to the unknown pain and debilitating exhaustion, this combination was a dark period of profound misery.</p>

        <p>A few years after I began to feel well enough to contemplate a future, it was time for that marriage to end.I wanted a way to support myself and my children independently of my then - husband.I wrote in my journal “I want to be financially independent to support my family through writing.” Within two years, I was writing as an independent consultant for a group of charter schools, leading their internal and external communication.Although this fulfilled my goal and dream, it wasn’t what I really meant by the word “writing”.I wasn’t specific enough in my dream and I did not think big enough for myself.</p>

        <p>After several years and many life changes, I chose to go back to school for nursing because I wanted to help others and write for myself.I didn't consider this body’s limitations at the time I chose nursing, but the universe did. Upon completion of nursing school, I applied to work as a dialysis nurse and I was offered that nursing position or the chance to be a facility administrator. I struggled with this decision. I was not expecting it. I never set out to be a leader. It was while making this decision that I realized my leadership abilities. Leadership did not occur to me until I looked back at my experiences in nursing school, as a consultant, and coupled them with this job offer.</p>

        <p>While working in the schools I observed what I call “big energy” in others.These people walk into a room and light it up.These “big energy” people create a shift in the space that is palpable.I always admired these people.While working in the schools, the dance teacher had this energy.I found it fascinating to feel her enter a room and see how the room changed when with her presence.I wondered if everyone else in the room was aware of this change or if it was subtle enough to them that it just happened and we continued, though on a slightly different plane.I wondered if she knew she brought this energy.I was intimidated by this energy.I wanted this energy.I was jealous of this energy because I felt I could never be possessed by this energy given the constraints of this body I was working from.</p>

        <p>I accepted that facility administrator position and was fortunate to work for DaVita, a company that invested in its leaders and developed “big energy” leadership.KT, the then Mayor aka the CEO, was a master of “big energy.” I worked in an environment that cultivated a leader’s big energy.During my time at DaVita, I engaged in growing my energy to big and positively influence those around me.This disease didn’t hold me back, my big energy at work became palpable.Perhaps not sustainably, because my energy at home diminished.Solving for this continues to be a work in progress.</p>

        <p>My leadership, big energy, and writing ability have further advanced my career.I now lead a region of home dialysis programs in three southwest states from my home office.I am mastering big energy leadership presence from a remote location while improving my work / life energy balance.My writing has once again become a focus within my career.I am helping many, many, dialysis patients every day by ensuring we are delivering exceptional care.I write a lot, but still, this writing is not for me.I am a slow writer for others, it takes time to craft my words into the company’s culture.I now work for a different dialysis provider, with a very professional corporate tone.I write in my natural casual voice and then rewrite my words to fit into the company mold.</p>

        <p>Which brings us to here now in the present moment.Where I make a written public plea to the universe.“I want to work for myself with balanced big energy for both work and home, earning more than I earn in my current corporate career, writing in my own voice, to serve the greater good of those facing chronic illness.I want to empower others to live their best life from a profound state of well - being, no matter the body they are living in.I want to create an international online community of like - minded individuals that support each other in this pursuit.”</p>

        <p>If you have made it to this point… Welcome to Lushfulness!</p>

        <p>Join us, sign up for updates as Lushfulness flourishes into a community that cultivates individual well - being and in turn, cultivates well - being in our world.</p>

        {/* <BasicEmail heading='Sign Up' /> */}
      </div>
    </>
  );
}
