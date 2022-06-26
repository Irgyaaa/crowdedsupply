import Axios from "axios";
import React, { useState, useEffect } from "react";

import Navbar from './Navbar';
import Footer from './Footer';


{/*const style = [
  
    {
      name: 'Desk and Office',
      description: 'Work from home accessories',
      imageSrc: 'https://drive.google.com/uc?export=view&id=1Drc2cpZqQAUziFkNAT_2oMrNaN0sPNc1',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: 'https://i.pinimg.com/564x/45/b9/28/45b928b30c352b9cc4d4bdf6fa816962.jpg',
    },
    {
      name: 'Self-Improvement',
      description: 'Journals and note-taking',
      imageSrc: 'https://drive.google.com/uc?export=view&id=1haOKGrsQ_g6sTxRPSkUWhfQ-J3DmT8C5',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: 'https://i.pinimg.com/564x/ca/86/d4/ca86d4c7aacb32f91e75a7895005a90f.jpg',
    },
    {
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc: 'https://drive.google.com/uc?export=view&id=1L0YpzxFLmqLQGhVhRwsUuJuKfUMyBPEZ',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: 'https://i.pinimg.com/originals/33/6c/30/336c3004c0113bf6b15ed5092606f41c.jpg',
    },



    {
        name: 'Desk and Office',
        description: 'Work from home accessories',
        imageSrc: 'https://i.pinimg.com/originals/15/92/b1/1592b1c598315980722a52e5ef44fac5.jpg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: 'https://i.pinimg.com/originals/15/92/b1/1592b1c598315980722a52e5ef44fac5.jpg',
      },
      {
        name: 'Self-Improvement',
        description: 'Journals and note-taking',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
      },
      {
        name: 'Travel',
        description: 'Daily commute essentials',
        imageSrc: 'gambar',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
      },
      {
        name: 'Desk and Office',
        description: 'Work from home accessories',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '#',
      },
      {
        name: 'Self-Improvement',
        description: 'Journals and note-taking',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
      },
      {
        name: 'Travel',
        description: 'Daily commute essentials',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
      },
  ]*/}
  
  //export default function Example() {
    export default function Example() {
      const [style, setStyle] = useState([]);
    
      useEffect(() => {
        getStyle();
      }, []);
    
      const getStyle = () => {
        Axios.get(`https://raw.githubusercontent.com/Irgyaaa/API/main/style.json`)
          .then((res) => {
            const data = res.data;
            setStyle(data.style);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
      };
    return (
        <>
      <div className="bg-blue-600">
          <Navbar/>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="">
            <h2 className="text-5xl font-extrabold text-center tracking-wide text-yellow-500">Style</h2>
  
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {style.map((style) => (
                <div key={style.styleID} className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={style.url}
                      // alt={style.imageAlt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-yellow-500">
                    <a href={style.styleharga}>
                      <span className="absolute inset-0" />
                      {style.stylename}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-yellow-500">{style.UnitPrice}</p>
                  <br />
                </div>
            
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </>

    )
  }
  