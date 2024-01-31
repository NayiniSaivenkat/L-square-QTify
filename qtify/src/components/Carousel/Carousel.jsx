import React from 'react'
import { useEffect } from 'react'
import styles from './Carousel.module.css'
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react'
import {Navigation} from 'swiper/modules'
import CarousalLeftNavigation from './CarousalLeftNavigation'
import CarousalRightNavigation from './CarousalRightNavigation'
import 'swiper/css';



const Controls = ({data}) => {
    const swiper = useSwiper();
    useEffect(()=>{
        swiper.slideTo(0,null);
},[data,swiper])
return <></>;
}
const Carousel = ({data,renderComponent}) => {

  return (
    <div className={styles.wrapper}>
        <Swiper style={{padding:"0px 20px"}}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove={true}
        onTouchMove={() => console.log('Touch moved')}
        >
        <Controls/>
        <CarousalLeftNavigation/>
        <CarousalRightNavigation/>
        {
          data.map((ele)=>{
            return (
              <SwiperSlide key={ele.id}>{renderComponent(ele)}</SwiperSlide>
            )
          })
        }
        </Swiper>
    </div>
  )
}

export default Carousel