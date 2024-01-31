import { useEffect, useState } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { fetchTopAlbums,fetchNewAlbums } from "./api/api";
import Card  from "./components/Card/Card";
import Section from "./components/Section/Section";
import styles from "../src/App.module.css";



function App() {
  const [topAlbumsData,setTopAlbumsData]=useState([]);
  const [newAlbumsData,setNewAlbumsData]=useState([]);
  const generateTopAlbumsData=async()=>{
    try{
      const data= await fetchTopAlbums();
      setTopAlbumsData(data)
      console.log(data);
    }
    catch(err){
      console.error(err)
    }
  }
  const generateNewAlbumsData=async()=>{
    try{
      const data= await fetchNewAlbums();
      setNewAlbumsData(data)
      console.log(data);
    }
    catch(err){
      console.error(err)
    }
  }

  useEffect(()=>{
    generateTopAlbumsData()
    generateNewAlbumsData()
  },[])
  return (
    <div >
    <Navbar/> 
    <Hero/> 
    {/* {
      topAlbumsData.map((topAlbum)=>(
        <Card data={topAlbum} type="album" key={topAlbum.id}/>
      ))
    } */}
    <div className={styles.sectionWrapper}>
    <Section  data={topAlbumsData} title="Top Albums" type="album"/>
    <Section data={newAlbumsData} title="New Albums" type="album"/>
    </div>
    </div>
  );
}

export default App;
