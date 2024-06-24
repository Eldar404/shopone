import React from "react";
import styles from "./Category.module.scss";
export default function Category(props){
    
    const category=[
        {
            key: "all",
            name: "Все"
        },
        {
            key: "sedan",
            name: "Седаны"
        },
        {
            key:"jeep",
            name: "Джипы"
        },
        {
            key: "cabrio",
            name: "Кабриолеты"
        }
    ];
    
    return(
        <div className={styles.category}>
            {category.map(el=>(
                <div key={el.key} onClick={()=>props.chooseCategory(el.key)}>
                    {el.name}
                </div>
            ))}


        </div>
    );
}