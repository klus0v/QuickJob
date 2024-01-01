import styles from './App.module.css';
import '@fontsource-variable/montserrat';
import { TbSearch, TbLogin2 } from 'react-icons/tb';
import { IoNotificationsOutline } from 'react-icons/io5';
import {
    HiOutlineCamera,
    HiOutlineUserGroup,
    HiOutlineAcademicCap,
    HiOutlineSwitchVertical,
} from 'react-icons/hi';
import { LuTruck } from 'react-icons/lu';
import { FaRegClock, FaRegUser } from 'react-icons/fa6';
import { CgCreditCard } from 'react-icons/cg';

function App() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    Quick<span>Job</span>
                </div>

                <div className={styles.headerLinks}>
                    <div className={styles.links}>
                        <a className={styles.link} href="#">
                            Создать заказ
                        </a>
                        <a className={styles.link} href="#">
                            Найти задание
                        </a>
                        <a className={styles.link} href="#">
                            Мои заказы
                        </a>
                    </div>

                    <div className={styles.icons}>
                        <div>
                            <TbSearch />
                        </div>
                        <div>
                            <IoNotificationsOutline />
                        </div>
                        <div>
                            <TbLogin2 style={{ marginLeft: '-4px' }} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.intro}>
                <div className={styles.introMain}>
                    <h2>Ищите подработку</h2>
                    <div className={styles.introText}>
                        какой-то супер важный мотивирующий текст, чтоб ты делал
                        что-то полезное
                    </div>

                    <div className={styles.search}>
                        <input
                            type="search"
                            placeholder="Поиск по ключевым словам"
                        />
                        <button>Найти</button>
                    </div>
                    <div className={styles.exampleSearchText}>
                        Например: <span>что-то там</span>
                    </div>
                </div>
            </div>

            <div className={styles.main}>
                <div className={styles.mainCategories}>
                    <div className={styles.title}>Категории</div>
                    <div className={styles.categories}>
                        <div className={styles.category}>
                            <HiOutlineCamera />
                            <span>Фото/видеосъемка</span>
                        </div>
                        <div className={styles.category}>
                            <HiOutlineUserGroup />
                            <span>Мероприятия</span>
                        </div>
                        <div className={styles.category}>
                            <HiOutlineAcademicCap />
                            <span>Помощь с ДЗ</span>
                        </div>
                        <div className={styles.category}>
                            <LuTruck />
                            <span>Тех. бригада</span>
                        </div>
                        <div className={styles.category}>
                            <HiOutlineCamera />
                            <span>Фото/видеосъемка</span>
                        </div>
                        <div className={styles.category}>
                            <HiOutlineUserGroup />
                            <span>Мероприятия</span>
                        </div>
                        <div className={styles.category}>
                            <HiOutlineAcademicCap />
                            <span>Помощь с ДЗ</span>
                        </div>
                        <div className={styles.category}>
                            <LuTruck />
                            <span>Тех. бригада</span>
                        </div>
                    </div>
                </div>

                <div className={styles.recommendationsSorting}>
                    <div className={styles.recommendations}>
                        <div className={styles.title}>Рекомендации</div>
                        <div className={styles.card}>
                            <div className={styles.cardMain}>
                                <div className={styles.cardContent}>
                                    <div className={styles.cardTitle}>
                                        Видеосъемка мероприятия Хоровод УрФУ
                                    </div>
                                    <div className={styles.cardDescription}>
                                        Фотограф в команду. Съемки мероприятия.
                                        Надо делать фотографии высокого
                                        качества, творческая работа с
                                        портретными фото, в отличие от того, как
                                        обычно фотографируют выпускные.
                                    </div>
                                    <div className={styles.cardIcons}>
                                        <div className={styles.icon}>
                                            <FaRegClock />4 часа
                                        </div>
                                        <div className={styles.icon}>
                                            <FaRegUser />3 человека
                                        </div>
                                        <div className={styles.icon}>
                                            <CgCreditCard />
                                            по факту
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.cardPrice}>
                                    250 руб/час
                                </div>
                            </div>
                            <button className={styles.cardButton}>
                                Откликнуться
                            </button>
                        </div>
                    </div>
                    <div className={styles.sorting}>
                        <div className={styles.sort}>
                            <div className={styles.sortHeader}>
                                Сортировать <HiOutlineSwitchVertical />
                            </div>
                            <div className={styles.radioButtons}>
                                <div className={styles.radioButton}>
                                    <input
                                        type="radio"
                                        id="byUrgency"
                                        name="fav_language"
                                        value="byUrgency"
                                        checked
                                    />
                                    <label htmlFor="byUrgency">
                                        По срочности
                                    </label>
                                </div>
                                <div className={styles.radioButton}>
                                    <input
                                        type="radio"
                                        id="byEmployment"
                                        name="fav_language"
                                        value="byEmployment"
                                    />
                                    <label htmlFor="byEmployment">
                                        По занятости
                                    </label>
                                </div>
                                <div className={styles.radioButton}>
                                    <input
                                        type="radio"
                                        id="workday"
                                        name="fav_language"
                                        value="workday"
                                    />
                                    <label htmlFor="workday">Будни</label>
                                </div>
                                <div className={styles.radioButton}>
                                    <input
                                        type="radio"
                                        id="weekend"
                                        name="fav_language"
                                        value="weekend"
                                    />
                                    <label htmlFor="weekend">Выходные</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
