import React, { useState } from "react";
import styles from "./Header.module.scss";
import { BsCart2 } from "react-icons/bs";

export default function Header(){
        let [cartOpen,setCartOpne]=useState(false);

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
                <BsCart2 onClick={()=>setCartOpne(cartOpen=!cartOpen)} className={`${styles.shopCartButton} ${cartOpen ? styles.active : ''}`}/>
                </div>
                {cartOpen && (
                    <div className={styles.shopCart}>

                    </div>
                )}
                <div className={styles.presentation}></div>
        </header>
    );
}