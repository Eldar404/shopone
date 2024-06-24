import React,{useState, useEffect} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Category from "./components/Category";

function App() {
  const [items,setItems]=useState([
    {
      id:1,
      title:'Bmw m4',
      img:'bmwm44.webp',
      desc:'Комплектация  Competition 3.0 AT 510 л.с. автомат.',
      category:'sedan',
      price:'18990'
    },
    {
      id:2,
      title:'Mercedes e300',
      img:'e300cab.png',
      desc:'E-класса, полный привод. Автомат. Гибридный двигатель мощностью 585 лошадиных сил.',
      category:'cabrio',
      price:'19990'
    },
  {
    id:3,
      title:'Lamborghini URUS',
      img:'lamburus.jpg',
      desc:'',
      category:'jeep',
      price:'29990'
  },
  {
    id:4,
      title:'Range-Rover Velar',
      img:'velar.jpeg',
      desc:'',
      category:'jeep',
      price:'17990'
  },
    {
  id:5,
      title:'Mercedes G',
      img:'Gclass.webp',
      desc:'',
      category:'jeep',
      price:'17990'
    },
    { id:6,
      title:'Audi R8',
      img:'r8.jpeg',
      desc:'',
      category:'sedan',
      price:'20990'
     },
     {
      id:7,
        title:'Mercedes c63',
        img:'mercedesc64.webp',
        desc:'',
        category:'sedan',
        price:'17990'
    },
    {
      id:8,
        title:'Bmw m5',
        img:'bmwm5.jpg',
        desc:'',
        category:'sedan',
        price:'21990'
    },
    {
      id:9,
        title:'Bmw x5m',
        img:'x5m.jpg',
        desc:'',
        category:'jeep',
        price:'20990'
    },
    ,
    {
      id:10,
      title:'Mercedes sl',
      img:'sl.jpg',
      desc:'',
      category:'cabrio',
      price:'16990'
    },
    {
      id:11,
      title:'bmw m2',
      img:'bmwm2cab.jpg',
      desc:'',
      category:'cabrio',
      price:'23990'
    },
    {
      id:12,
      title:'Lamborghini huracan',
      img:'lambhurcab.png',
      desc:'',
      category:'cabrio',
      price:'38990'
    }

  ]);
  const [orders,setOrders]=useState([]);
  const [currentItems,setCurrentItems]=useState([]);
  useEffect(()=>{
    setCurrentItems(items);
  },[items]);
const chooseCategory=(category)=>{
  if(category==="all"){
    setCurrentItems(items);

  }
  else{
    setCurrentItems(items.filter((el)=>el.category===category));
  }
}

  const addToOrder = (item) => {
    if(!orders.some((el)=>el.id===item.id)){
      setOrders([...orders,item]);
    }
  }
  const deleteOrder=(id)=>{
  setOrders(orders.filter((el)=>el.id!==id));
  }
  return (
    <div className="wrapper">
    <Header orders={orders} onDelete={deleteOrder}/>
    <Category chooseCategory={chooseCategory}/>
    <Items allItems={currentItems} onAdd={addToOrder} />
    <Footer/>
    </div>
    
  );
}

export default App;
