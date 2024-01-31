import { CircularProgress } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import Card from '../Card/Card'
import Carousel from '../Carousel/Carousel'
import styles from './Section.module.css'
import BasicTabs from '../Tabs/Tabs'

const Section = ({data,title,type,handleChange=null,value=0,filteredDataValues=[]}) => {
    const [carousalToggle,setCarousalToggle]=useState(true)
    const handleToggle=()=>{
        setCarousalToggle(!carousalToggle);
    }
  return (
    <div>
        <div className={styles.header}>
            <h3>{title}</h3>
            {type!=="song" &&(
            <h4 className={styles.toggleText} onClick={handleToggle}>
                {!carousalToggle?"Collapse All": "Show All"}
            </h4>)
}
        </div>
        {type==="song"?<BasicTabs value={value} handleChange={handleChange}/>:null}
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