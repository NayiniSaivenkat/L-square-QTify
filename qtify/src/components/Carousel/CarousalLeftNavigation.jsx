import React from 'react'
import {useState,useEffect } from 'react';
import { useSwiper } from 'swiper/react'
import {ReactComponent as LeftArrow} from '../../assets/leftNavigation.svg'
import styles from "./Carousel.module.css"

const CarousalLeftNavigation = () => {
    const swiper = useSwiper();
    const [isBeginning,setIsBeginning] = useState(false);
    useEffect(() => {
      swiper.on("slideChange",function(){
        setIsBeginning(swiper.isBeginning);
      })
  }, [swiper]);
  console.log("isBeginning:", isBeginning);
  return (
    <div className={styles.leftNavigation}>
    {!isBeginning ? <LeftArrow onClick={()=>swiper.slidePrev()}/>:null} 
    </div>
  )
}

export default CarousalLeftNavigation

