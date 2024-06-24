import React from "react";
import styles from "./Orders.module.scss"
import { IoTrashOutline } from "react-icons/io5";

export default function Orders(props){
    return(
        <div className={styles.item}>
        <img src={"./images/"+props.item.img}/>
        <h2>{props.item.title}</h2>
        <b>{props.item.price}₽</b>
        <IoTrashOutline className={styles.deletIcon} onClick={()=>props.onDelete(props.item.id)}/>
         
        </div>
    );
}