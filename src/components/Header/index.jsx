import React from "react";
import styles from "./Header.module.scss";

export default function Header(){
    return(
        <header>
                <div>
                    <span className={styles.logo}>Машины в аренду</span>
                <ul className={styles.navbar}>
                    <li>О нас</li>
                    <li>Личный кабинет</li>
                    <li>Контакты</li>
                    <li>Отзывы</li>
                    <li>Поддержка</li>
                </ul>
                </div>
                <div className={styles.presentation}></div>
        </header>
    );
}