import { CircularProgress } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import Card from '../Card/Card'
import Carousel from '../Carousel/Carousel'
import styles from './Section.module.css'

const Section = ({data,title,type}) => {
    const [carousalToggle,setCarousalToggle]=useState(true)
    const handleToggle=()=>{
        setCarousalToggle(!carousalToggle);
    }
  return (
    <div>
        <div className={styles.header}>
            <h3>{title}</h3>
            <h4 className={styles.toggleText} onClick={handleToggle}>
                {!carousalToggle?"Collapse All": "Show All"}
            </h4>
        </div>
        {
            data.length === 0 ? (
                <CircularProgress/>
            ) : (
                <div className={styles.cardWrapper}>{!carousalToggle ? (<div className={styles.wrapper}>
                   {data.map((ele)=>(
                    <Card data={ele} type={type}/>
                  ))} 
                </div>): (<Carousel data={data} renderComponent={(data)=><Card data={data} type={type}/>}/>)}</div>
            )
        }
    </div>
  )
}

export default Section