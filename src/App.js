import logo from './logo.svg';
import './App.css';

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Home = lazy(() => import('./Home'));
const Newstock = lazy(() => import('./Newstock'));
const Navbar = lazy(() => import('./Navbar'));
const Navbarnewstock = lazy(() => import('./Navbarnewstock'));
const Style = lazy(() => import('./Style'));
const Profile = lazy(() => import('./Profile'));
const Baju = lazy(() => import('./Baju'));
const Baju1 = lazy(() => import('./Baju1'));
const Baju2 = lazy(() => import('./Baju2'));
const Baju3 = lazy(() => import('./Baju3'));
const Baju4 = lazy(() => import('./Baju4'));
const Baju5 = lazy(() => import('./Baju5'));
const Baju6 = lazy(() => import('./Baju6'));
const Baju7 = lazy(() => import('./Baju7'));
const Baju8 = lazy(() => import('./Baju8'));
const Baju9 = lazy(() => import('./Baju9'));
const Baju10 = lazy(() => import('./Baju10'));
const Baju11= lazy(() => import('./Baju11'));
const Baju12= lazy(() => import('./Baju12'));
const Categories= lazy(() => import('./Categories'));
const Footercategories= lazy(() => import('./Footercategories'));
const Readystock= lazy(() => import('./Readystock'));

//Routingan Brand//
const Stoneisland= lazy(() => import('./Brand/Stoneisland'));
const Fredperry= lazy(() => import('./Brand/Fredperry'));
const Patagonia= lazy(() => import('./Brand/Patagonia'));
const Adidas= lazy(() => import('./Brand/Adidas'));
const Kangol= lazy(() => import('./Brand/Kangol'));
const Sergiotachini= lazy(() => import('./Brand/Sergiotachini'));
//Routingan Clothing//
const Shoes= lazy(() => import('./Clothing/Shoes'));
const Browseall= lazy(() => import('./Clothing/Browseall'));
const Crewneck= lazy(() => import('./Clothing/Crewneck'));
const Denim= lazy(() => import('./Clothing/Denim'));
const Hoodie= lazy(() => import('./Clothing/Hoodie'));
const Pants= lazy(() => import('./Clothing/Pants'));
const Tshirt= lazy(() => import('./Clothing/Tshirt'));
const Tops= lazy(() => import('./Clothing/Tops'));
const Tracktop= lazy(() => import('./Clothing/Tracktop'));
//Routingan Accessories//
const Bags= lazy(() => import('./Accessories/Bags'));
const Belts= lazy(() => import('./Accessories/Belts'));
const Hats= lazy(() => import('./Accessories/Hats'));
const Sunglasses= lazy(() => import('./Accessories/Sunglasses'));
const Wallets= lazy(() => import('./Accessories/Wallets'));
const Watches= lazy(() => import('./Accessories/Watches'));
//Routingan API//
const Api= lazy(() => import('./API/Api'));


function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Navbarnewstock" element={<Navbarnewstock />} />   
          <Route path="/Newstock" element={<Newstock />} />
          <Route path="/Style" element={<Style />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Baju" element={<Baju />} />        
          <Route path="/Baju1" element={<Baju1 />} />        
          <Route path="/Baju2" element={<Baju2/>} />        
          <Route path="/Baju3" element={<Baju3 />} />        
          <Route path="/Baju4" element={<Baju4 />} />        
          <Route path="/Baju5" element={<Baju5 />} />        
          <Route path="/Baju6" element={<Baju6 />} />        
          <Route path="/Baju7" element={<Baju7 />} />        
          <Route path="/Baju8" element={<Baju8 />} />        
          <Route path="/Baju9" element={<Baju9 />} />        
          <Route path="/Baju10" element={<Baju10 />} />        
          <Route path="/Baju11" element={<Baju11/>} />        
          <Route path="/Baju12" element={<Baju12/>} />             
          <Route path="/Categories" element={<Categories/>} />   
          <Route path="/Footercategories" element={<Footercategories/>} />  
          <Route path="/Readystock" element={<Readystock/>} />   
   

          /* Routingan Brand */       
          <Route path="/Stoneisland" element={<Stoneisland/>} />             
          <Route path="/Fredperry" element={<Fredperry/>} />             
          <Route path="/Patagonia" element={<Patagonia/>} />             
          <Route path="/Adidas" element={<Adidas/>} />             
          <Route path="/Kangol" element={<Kangol/>} />             
          <Route path="/Sergiotachini" element={<Sergiotachini/>} /> 
          /* Routingan Clothing */       
          <Route path="/Shoes" element={<Shoes/>} />                       
          <Route path="/Browseall" element={<Browseall/>} />             
          <Route path="/Crewneck" element={<Crewneck/>} />             
          <Route path="/Denim" element={<Denim/>} />             
          <Route path="/Hoodie" element={<Hoodie/>} />             
          <Route path="/Pants" element={<Pants/>} />              
          <Route path="/Tshirt" element={<Tshirt/>} />              
          <Route path="/Tops" element={<Tops/>} />              
          <Route path="/Tracktop" element={<Tracktop/>} />   
          /* Routingan Accessories */
          <Route path="/Bags" element={<Bags/>} />          
          <Route path="/Belts" element={<Belts/>} />          
          <Route path="/Hats" element={<Hats/>} />          
          <Route path="/Sunglasses" element={<Sunglasses/>} />          
          <Route path="/Wallet" element={<Wallets/>} />          
          <Route path="/Watches" element={<Watches/>} />   
          /* Routingan API */
          <Route path="/Api" element={<Api/>} />   
                 
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App;