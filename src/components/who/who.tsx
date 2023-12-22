import style from './who.module.css';

const Who = () => {
  return (
    <div className={style.section}>
      <div className={style.main}>
        <div className={style.space}>3D-animate</div>
        <div className={style.left}>
          <div className={style.name}>About me</div>
          <div className={style.postWork}>
            <p>
              I&apos;m a fourth-year student at Ural Federal University studying
              Software Engineering. I develop applications using React.
              I&apos;ve worked on projects for the university, the city
              administration of Rezh, Alfa-Bank, and Kontur.
            </p>
            <p>
              I&apos;m a positive and active young man who can easily connect
              with people. I have a passion for design and programming, and
              I&apos;ve found my calling in frontend development, as it combines
              both of these interests.
            </p>
            <p>
              I aspire to continue growing, work in industrial development, and
              contribute to a brighter future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Who;
