import Contact from './components/contact/contact';
import Hero from './components/hero/hero';
import Who from './components/who/who';
import Work from './components/work/work';
import style from './App.module.css';

function App() {
  return (
    <div className={style.container}>
      <Hero />
      <Who />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
