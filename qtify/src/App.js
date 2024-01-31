import { useEffect, useState } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { fetchTopAlbums,fetchNewAlbums, fetchSongs } from "./api/api";
import Card  from "./components/Card/Card";
import Section from "./components/Section/Section";
import styles from "../src/App.module.css";



function App() {
  const [topAlbumsData,setTopAlbumsData]=useState([]);
  const [newAlbumsData,setNewAlbumsData]=useState([]);
  const [value,setValue]=useState(0);
  const [songsData,setSongsData]=useState([]);
  const [filteredDataValues,setFilteredDataValues]=useState([]);
  const handleChange =(event,newValue)=>{
    setValue(newValue);
    console.log("Selected value:", newValue);
    
  }
  useEffect(()=>{
    console.log("Tab value changed. Calling generateSongsData with value:", value);
    generateSongsData(value);
  },[value])
  const generateSongsData = (value) =>{
    let key;
    if(value === 0){
      filteredData(songsData);
      return;
    }
    else if(value===1){
      key = "rock";
    }
    else if(value===2){
      key = "pop"
    }
    const res = songsData.filter((item)=>item.genre.key === key);
    console.log("Filtered songs:", res);
    filteredData(res);
  }
  const filteredData = (val)=>{
    setFilteredDataValues(val)
  }
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
  const generateAllSongsData=async()=>{
    try{
      const data= await fetchSongs();
      console.log(data)
      setSongsData(data);
      setFilteredDataValues(data)
    }
    catch(err){
      console.error(err)
    }
  }

  useEffect(()=>{
    generateTopAlbumsData()
    generateNewAlbumsData()
    generateAllSongsData()
   
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
    <Section data={filteredDataValues} type="song" title="Songs" filteredData={filteredData} filteredDataValues={filteredDataValues} value={value} handleChange={handleChange}/>
    </div>
    </div>
  );
}

export default App;
