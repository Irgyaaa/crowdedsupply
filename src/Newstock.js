import Navbarcategories from './Navbarcategories' ;
import Footer from './Footer' ;




const products = [,
  {
    id: 1,
    name: 'Ziphoodie stone island + Ellese',
    href: 'Baju',
    imageSrc: 'https://drive.google.com/uc?export=view&id=1pSiTDUfuUAk5RVLV7nBk-shulyiaIKpN',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Rp ( 1.950k )',
    color: 'Grey',
  },
  {
    id: 2,
    name: 'Overshirt stone island',
    href: 'Baju1',
    imageSrc: 'https://drive.google.com/uc?export=view&id=1ijqCIYplYvyeA4suEILkgn4C5UU2PRa-',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Rp ( 1.650k )',
    color: 'Blue',
  },
  {
    id: 3,
    name: 'Ziphoodie stone island',
    href: 'Baju2',
    imageSrc: 'https://drive.google.com/uc?export=view&id=1oZ06W4imqNyxGtpm0EiAEG1HcFyWNJph',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Rp ( 1.650k )',
    color: 'Grey',
  },


  {
    id: 4,
    name: 'T-Shirt patagonia',
    href: 'Baju3',
    imageSrc: 'https://drive.google.com/uc?export=view&id=1Fver6cnEk13CabtFQgoVMHlpdKEmegu9',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Rp ( 450k )',
    color: 'Cream',
  },


  {
    id: 5,
    name: 'Shoes adidas bern city series',
    href: 'Baju4',
    imageSrc: 'https://drive.google.com/uc?export=view&id=1HwcOdWeav71po3G3GW-BYAk0ipzAjR1-',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Rp ( 1.450k )',
    color: 'Blue',
  },


  {
    id: 6,
    name: 'Tracktop pred perry+ben sherman',
    href: 'Baju5',
    imageSrc: 'https://drive.google.com/uc?export=view&id=1meytUO8G_UAR9eJd6RcuCgXvouaQ4weB',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Rp (750k)',
    color: 'White',
  },


  {
    id: 7,
    name: 'Hoodie Stone island',
    href: 'Baju6',
    imageSrc: 'https://drive.google.com/uc?export=view&id=1wJarIQPLRNiH9TkLtfu_8FLC_DGSf3fW',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Rp ( 2.999k )',
    color: 'Grey',
  },
  {
    id: 8,
    name: 'Shoes adidas lothertex spzl',
    href: 'Baju7',
    imageSrc: 'https://drive.google.com/uc?export=view&id=1oR9xiwI1GnxzH75MiDD5Fs_IxJBKU2dF',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Rp ( 2.450k )',
    color: 'White Bone',
  },

  {
    id: 9,
    name: 'Tracktop Fred perry',
    href: 'Baju8',
    imageSrc: 'https://drive.google.com/uc?export=view&id=1EiqHvOnSncL0kYJGavG7C7UtET9euhRi',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Rp ( 950k )',
    color: 'Black',
  },

  {
    id: 10,
    name: 'Shoes adidas trimstar mustang',
    href: 'Baju9',
    imageSrc: 'https://drive.google.com/uc?export=view&id=1q9gchylRSu3svqzfsXBUt4nU7AbP-svS',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Rp ( 2.499k )',
    color: 'Brown',
  },
  {
    id: 11,
    name: 'Hoodie adidas treefoil',
    href: 'Baju10',
    imageSrc: 'https://drive.google.com/uc?export=view&id=1norq7sxe5GfJKKl0utp17iQP55Vz78mo',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 'Rp ( 599k )',
    color: 'Black',
  },
  {
    id: 12,
    name: 'T-shirt kangol',
    href: 'Baju11',
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
        
        <div className="mt-6 grid grid-cols-10 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
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
