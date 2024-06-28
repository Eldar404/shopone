import React, { useState } from "react";
import styles from "./Header.module.scss";
import { BsCart2 } from "react-icons/bs";
import Orders from "../Orders";
import PriceListPDF from "../PriceListPDF";
import {saveAs} from "file-saver";
import {pdf} from "@react-pdf/renderer";

export default function Header(props){
        let [cartOpen,setCartOpne]=useState(false);
        const handleDownloadPDF = async ()=>{
           const pdfBlob = await pdf(<PriceListPDF items={props.items}/>).toBlob();
            saveAs(pdfBlob, "PriceList.pdf");
            console.log("ok");
        }
        const showOrders=(props)=>{
            let summa=0;
            props.orders.forEach(el=>summa+=Number.parseFloat(el.price))
            return(
                <>
                {props.orders.map(el=>(
                    <Orders key={el.id} item={el} onDelete={props.onDelete}/>
                ))}
                <p className={styles.summa}>Сумма корзины: {new Intl.NumberFormat().format(summa)} ₽</p>
                </>
            );
        }
        const showNothing=()=>{
            return(
                <div className={styles.empty}>
                    <h2>В корзине нет товаров!</h2>

                </div>
            );
        }

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
                    <li onClick={handleDownloadPDF}>Прайс-лист</li>
                </ul>
                <BsCart2 onClick={()=>setCartOpne(cartOpen=!cartOpen)} className={`${styles.shopCartButton} ${cartOpen ? styles.active : ''}`}/>
                </div>
                {cartOpen && (
                    <div className={styles.shopCart}>
                        {props.orders.length>0 ? showOrders(props) : showNothing()}

                    </div>
                )}
                <div className={styles.presentation}></div>
        </header>
    );
}