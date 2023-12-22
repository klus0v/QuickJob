import style from './work.module.css';

const persons: { name: string; age: number }[] = [
  {
    name: 'Ural',
    age: 21,
  },
  {
    name: 'Geordane',
    age: 22,
  },
  {
    name: 'Matvey',
    age: 21,
  },
];

const Work = () => {
  return (
    <div className={style.section}>
      <div className={style.main}>
        <div className={style.left}>
          <div className={style.name}>About me</div>
        </div>
        <div className={style.space}>3D-animate</div>
      </div>
    </div>
  );
};

export default Work;
