import Navbarcategories from './Navbarcategories' ;
import Footer from './Footer' ;





const products = [,
  {
    id: 1,
    name: 'Ziphoodie stone island + Ellese',
    href: 'ONS',
    imageSrc: 'https://drive.google.com/uc?export=view&id=1pSiTDUfuUAk5RVLV7nBk-shulyiaIKpN',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Rp ( 1.950k )',
    color: 'Grey',
  },
  {
    id: 2,
    name: 'Overshirt stone island',
    href: 'ONS1',
    imageSrc: 'https://drive.google.com/uc?export=view&id=1ijqCIYplYvyeA4suEILkgn4C5UU2PRa-',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Rp ( 1.650k )',
    color: 'Blue',
  },
  {
    id: 3,
    name: 'Cp company goggle nylon',
    href: 'ONS2',
    imageSrc: 'https://drive.google.com/uc?export=view&id=1MaDO7WF8UeViIoQEwkWq-RdHb1-v_WLc',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Rp ( 2.950k )',
    color: 'Red',
  },


  {
    id: 4,
    name: 'Stone island David light ovd',
    href: 'ONS3',
    imageSrc: 'https://drive.google.com/uc?export=view&id=1yRnlkRhRKXVasrvJcjBBUHqB0fk5FwX2',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Rp ( 3.650k )',
    color: 'Red',
  },


  {
    id: 5,
    name: 'Shoes adidas padiham spice',
    href: 'ONS4',
    imageSrc: 'https://drive.google.com/uc?export=view&id=1j46xeupCKkZolSxXAObQMcKemOIxJuni',
    price: 'Rp ( 1.550k )',
    color: 'Orange',
  },


  {
    id: 6,
    name: 'Adidas track cardle spzl',
    href: 'ONS5',
    imageSrc: 'https://drive.google.com/uc?export=view&id=1t8VRpiMqSpMo0UDsVz7YsXyUI96BCDUT',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Rp (1.850k)',
    color: 'Blue',
  },


  {
    id: 7,
    name: 'Stone island flowing camouflage zip hoodie',
    href: 'ONS6',
    imageSrc: 'https://drive.google.com/uc?export=view&id=1Pr7UulHQ6BEMFQCSYnoZ65LV5Z6hVllA',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Rp ( 3.250k )',
    color: 'Dark Grey',
  },
  {
    id: 8,
    name: 'Adidas originals valencia city series',
    href: 'ONS7',
    imageSrc: 'https://drive.google.com/uc?export=view&id=1W95NKAo51wC7ZF647_zTF5uW35QJ8Oh5',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Rp ( 1.450k )',
    color: 'Black',
  },

  {
    id: 9,
    name: 'Tracktop Fred perry',
    href: 'ONS8',
    imageSrc: 'https://drive.google.com/uc?export=view&id=1W0BLasbv-deWo8pEUKyb5uzkclaGYsAT',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Rp ( 999k )',
    color: 'Green',
  },

  {
    id: 10,
    name: 'Shoes adidas originals munchen',
    href: 'ONS9',
    imageSrc: 'https://drive.google.com/uc?export=view&id=1TQh9o2C7lw5-5znwzqc4pM2JlPF-m1tf',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Rp ( 1.850k )',
    color: 'Green',
  },
  {
    id: 11,
    name: 'Lyle & scott baseball cap',
    href: 'ONS10',
    imageSrc: 'https://drive.google.com/uc?export=view&id=1qy8RG0g-6J-ACGqOsjYUSOBT7B6hmlp-',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Rp ( 450k )',
    color: 'Brown',
  },
  {
    id: 12,
    name: 'T-shirt kangol',
    href: 'ONS11',
    imageSrc: 'https://drive.google.com/uc?export=view&id=1FO6vjCFzB5PXhA993uBhy-J2dt5sBDot',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Rp ( 175k )',
    color: 'Grey',
  },
  

  
  // More products...
]

export default function Example() {
  return (
    <>

    <div className="bg-blue-600">
      <Navbarcategories/>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-yellow-500">New Stock</h2>
        
        <div className="mt-6 grid grid-cols-10 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-blue-800 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
                     <a
        href="/"
        aria-label="View Item"
        className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
      ></a>
              </div>
              
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-yellow-500">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-yellow-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-yellow-500">{product.price}</p>
              </div>
            </div>
            
          ))}
        </div>
       
      </div>
      
    </div>
    <Footer/>
    </>
    
  )
}
