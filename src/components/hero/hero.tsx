import Navbar from '../navbar/navbar';
import style from './hero.module.css';
import spaceImg from '../../assets/space.png';

const Hero = () => {
  return (
    <div className={style.section}>
      <Navbar />
      <div className={style.main}>
        <div className={style.left}>
          <div className={style.name}>
            <div>Ural</div>
            <div>Gizzatullin</div>
          </div>
          <div className={style.postWork}>Frontend developer</div>
          <button className={style.button}>Download resume</button>
        </div>
        <div className={style.space}>
          <img className={style.spaceImg} src={spaceImg} alt="space" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
