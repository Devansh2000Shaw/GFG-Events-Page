import styles from '../styles/Home.module.css';
import Navbar from './Navbar/Navbar';
import FooterLanding from './Footer/Home';
import Event from './Events';

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <Navbar />
    </div>
    <Event/>
    <FooterLanding bgColor="footer-events"></FooterLanding>
    </>
  )
}
