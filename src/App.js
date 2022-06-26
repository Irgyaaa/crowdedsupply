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
const ONS = lazy(() => import('./OpenNewstock/ONS'));
const ONS1 = lazy(() => import('./OpenNewstock/ONS1'));
const ONS2 = lazy(() => import('./OpenNewstock/ONS2'));
const ONS3 = lazy(() => import('./OpenNewstock/ONS3'));
const ONS4 = lazy(() => import('./OpenNewstock/ONS4'));
const ONS5 = lazy(() => import('./OpenNewstock/ONS5'));
const ONS6 = lazy(() => import('./OpenNewstock/ONS6'));
const ONS7 = lazy(() => import('./OpenNewstock/ONS7'));
const ONS8 = lazy(() => import('./OpenNewstock/ONS8'));
const ONS9 = lazy(() => import('./OpenNewstock/ONS9'));
const ONS10 = lazy(() => import('./OpenNewstock/ONS10'));
const ONS11= lazy(() => import('./OpenNewstock/ONS11'));
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
          <Route path="/ONS" element={<ONS />} />        
          <Route path="/ONS1" element={<ONS1 />} />        
          <Route path="/ONS2" element={<ONS2/>} />        
          <Route path="/ONS3" element={<ONS3 />} />        
          <Route path="/ONS4" element={<ONS4 />} />        
          <Route path="/ONS5" element={<ONS5 />} />        
          <Route path="/ONS6" element={<ONS6 />} />        
          <Route path="/ONS7" element={<ONS7 />} />        
          <Route path="/ONS8" element={<ONS8 />} />        
          <Route path="/ONS9" element={<ONS9 />} />        
          <Route path="/ONS10" element={<ONS10 />} />        
          <Route path="/ONS11" element={<ONS11/>} />        
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
 
                 
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App;