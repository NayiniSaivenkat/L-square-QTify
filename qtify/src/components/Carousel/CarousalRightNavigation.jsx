import React from 'react'
import { useState,useEffect } from 'react'
import { useSwiper } from 'swiper/react'
import {ReactComponent as RightArrow} from '../../assets/rightNavigation.svg'
import styles from "./Carousel.module.css"

const CarousalRightNavigation = () => {
    const swiper = useSwiper();
    const [isEnd,setIsEnd] = useState(swiper.isEnd);
    useEffect(() => {
          swiper.on("slideChange",function(){
            setIsEnd(swiper.isEnd);
          })

  }, [swiper]);
  return (
    <div className={styles.rightNavigation}>
    {!isEnd ? <RightArrow onClick={() => swiper.slideNext()} />: null}
    </div>
  )
}

export default CarousalRightNavigation