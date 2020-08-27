import Head from 'next/head';
import Link from '../../../components/Link';
import { NextSeo } from 'next-seo';
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
        <title>Lushfulness | It Is What It Is</title>
      </Head>

      <NextSeo
        title='Lushfulness | It Is What It Is'
        description='Lushfulness | It Is What It Is'
        canonical='https://lushfulness.com/blog/posts/it-is-what-it-is'
      />

      <div>
        <h1 className={MainStyles.title1}>it is what it is</h1>

        <p>It is what it is… how do you respond? Do you choose love or fear?</p>

        <p>Every single morning I awake to a solidified body, one that it takes great effort to move, and that movement creates great discomfort.I cannot open regular door knobs, I drop things, I am slow, and often I have found myself frustrated.And honestly angry at times.I want it to be like before.I want it to hurt less.I want to be “normal” again.So many wants.So many wishes.So much denial.All this resulting in the denial of the present moment.</p>

        {screenSize === 'mobile' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1598372008/Lushfulness/woman-on-bed-in-pain-M.jpg' alt='woman-on-bed-in-pain' title='woman-on-bed-in-pain' />
        )}

        {screenSize === 'desktop' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1598372001/Lushfulness/woman-on-bed-in-pain-D.jpg' alt='woman-on-bed-in-pain' title='woman-on-bed-in-pain' />
        )}

        <p className={BlogStyles.photoCredit}>Photo by Yuris Alhumaydy</p>

        <p>It comes to me sometimes that I do have choices here.Every single morning I have the opportunity to choose to accept reality or compare and wish it different.I get to choose how I face each morning.I have a choice in perspective.And so do you.</p>

        <p>Do you long for a past that is not a real thing ? Do you fear a future that is not a real thing ? Do you compare now to a day ago, and month ago, a year ago, five years ago; and then extrapolate it into tomorrow, next month, next year, five years from now, playing out your worst case scenarios?</p>

        <p>Recently I had the opportunity to have a reality check, right here, right now, in the present moment.Without thoughts of the past or of the future, it turns out that I am really fine.The suffering is in the fear of and not in what’s happening now.If all I know is now, then everything is fine.I do not know what was and I do not know what will be, and therefore I have nothing to compare to and nothing to fear.It is what it is, this moment, now.</p>

        <p>Right here in this moment, present only to right now, I am absolutely fine. For those of you who have chronic pain, you know it becomes the background of life.It becomes a non - entity, something just there and not really in the forefront of experience.Chronic pain that remains relatively constant, eventually just is.It is not actively thought of.</p>

        <p>This morning pain and solidity is not constant.Gratitude for that.However, it makes it very front and center due to the intermittent nature, mind cannot move it to the background.</p>

        <p>This pain and solidity result in a slow motion morning, every morning.I cannot move quickly, I cannot turn door knobs.I cannot grasp heavy objects.I cannot, I cannot, I cannot…</p>

        {screenSize === 'mobile' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1598371993/Lushfulness/beautiful-mountain-view-M.jpg' alt='beautiful-mountain-view' title='beautiful-mountain-view' />
        )}

        {screenSize === 'desktop' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1598371985/Lushfulness/beautiful-mountain-view-D.jpg' alt='beautiful-mountain-view' title='beautiful-mountain-view' />
        )}

        <p className={BlogStyles.photoCredit}>Photo by Piyush Dubey</p>

        <p>What about I can, I can, I can… I can notice the beautiful mountain views through all the windows in my home.I can observe the changes in the sunrise as summer comes to a close and fall looms.Sitting in my backyard I can take notice of the hummingbirds in the mesquite tree.I can feel the morning breeze moving through my being.The sound waves of the birds’ songs that honor the rising sun, pass through my being.I can see and feel beauty that would be missed under “normal” morning speed.</p>

        <p>My reality also presents an opportunity for me to accept being cared for for just a few hours of every day.It presents the opportunity for my husband to care for me for these few hours, making our coffee and opening doors, etc.Every morning this body presents the opportunity to start each day fulfilling the basic human need of giving and receiving.</p>

        <p>Slow motion mornings create the space to remember, to notice, to be present, to be right here right now, and to choose love over fear.</p>

        <p className={BlogStyles.bookTitle}>The Choice for Love</p>

        <p className={BlogStyles.poem}>What does the voice of fear whisper to you?</p>

        <p className={BlogStyles.poem}>Fear speaks to you in logic and reason. It assumes the language of love itself.</p>

        <p className={BlogStyles.poem}>Fear tells you, “I want to make you safe.” Love says, “You are safe.”</p>

        <p className={BlogStyles.poem}>Fear says, “Give me symbols. Give me images. Give me something I can rely on.”</p>

        <p className={BlogStyles.poem}>Loving truth says, “Only give me this moment.”</p>

        <p className={BlogStyles.poem}>Fear would walk you on a narrow path promising to take you where you want to go.</p>

        <p className={BlogStyles.poem}>Love says, “Open your arms and fly with me.”</p>

        <p className={BlogStyles.poem}>Every moment of your life you are offered the opportunity to choose - love or fear, to tread the earth or to loar to the heavens.</p>

        <p className={BlogStyles.bookName}>~Emmanuel’s Book II The Choice for Love</p>

        <br />

        {/* <div className={MainStyles.facebookGroup}>
          <a href='https://bit.ly/3kI6Ngw' target='_blank'>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1598280362/New%20Agent%20Mindset/facebook-groups550px.jpg' alt='join-facebook-group' title='join-facebook-group' />
          </a>
        </div>

        <p>In addition to joining the Facebook Group...</p> */}

        <BasicEmail heading='Stay Updated' />

        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
