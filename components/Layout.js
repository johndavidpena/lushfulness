import { useSpring, animated } from 'react-spring';
import { useState } from 'react';
import MainStyles from '../stylesheets/Main.module.css';
import Header from './Header';
import FooterEmail from '../components/Forms/FooterEmail';
// import Footer from './Footer';

export default props => {
  const fade = useSpring({ config: { duration: 950 }, from: { opacity: 0 }, opacity: 1 });

  const [open, setOpen] = useState(false);

  return (
    <animated.div style={fade}>
      <Header open={open} setOpen={setOpen} />

      <div className={MainStyles.pageGrid}>
        <main className={MainStyles.page}>
          {props.content}
        </main>
      </div>

      <FooterEmail heading='Sign Up' />
      {/* <Footer /> */}
    </animated.div>
  );
}
