import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import Business from './components/Business/Business';
import Entertainment from './components/Entertainment/Entertainment';
import General from './components/General/General';
import Health from './components/Health/Health';
import Navbar from './components/Navbar/Navbar.jsx';
import Science from './components/Science/Science';
import Sports from './components/Sports/Sports';
import Technology from './components/Technology/Technology';

function App() {

  const [business,setBusiness] = useState([]);
  const [entertainment,setEntertainment] = useState([]);
  const [general,setGeneral] = useState([]);
  const [health,setHealth] = useState([]);
  const [science,setScience] = useState([]);
  const [sports,setSports] = useState([]);
  const [technology,setTechnology] = useState([]);

  async function getNews(categoryType , callback) {
    let {data}  = await axios.get(`https://newsapi.org/v2/top-headlines?country=gb&category=${categoryType}&apiKey=0f80ca1789a04e14a9bfac27feee7dc5`)
    callback(data.articles)
  }

  useEffect(()=>{
    getNews('business' , setBusiness);
    getNews('entertainment' , setEntertainment);
    getNews('general' , setGeneral);
    getNews('health' , setHealth);
    getNews('science' , setScience);
    getNews('sports' , setSports);
    getNews('technology' , setTechnology);
  },[]);


  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<General newsArticles={general}/>}/>
        <Route path='/sports' element={<Sports newsArticles={sports}/>}/>
        <Route path='/business' element={<Business newsArticles={business}/>}/>
        <Route path='/entertainment' element={<Entertainment newsArticles={entertainment}/>}/>
        <Route path='/health' element={<Health newsArticles={health}/>}/>
        <Route path='/technology' element={<Technology newsArticles={technology}/>}/>
        <Route path='/Science' element={<Science newsArticles={science}/>}/>
      </Routes>
    </div >
   
  );
}

export default App;
