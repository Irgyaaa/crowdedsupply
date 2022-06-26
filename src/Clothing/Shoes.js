import Navbarcategories from '../Navbarcategories'
import Footercategories from '../Footercategories'

const products = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc: 'https://drive.google.com/uc?export=view&id=1hYTPve8x5ZyZ82RoBP4gYN3XaqZ6zDzc',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc: 'https://drive.google.com/uc?export=view&id=1jR11HxB7b7ffDz6r47YeJ2v39Xrdd90Y',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: 'https://drive.google.com/uc?export=view&id=1bKWb9rjit6c-qhU6Tdxa518yHxLUU2ft',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: 'https://drive.google.com/uc?export=view&id=1SyYYISxjiSmFgCGrvroXX1z5QN2nOz2L',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 5,
        name: 'Earthen Bottle',
        href: '#',
        price: '$48',
        imageSrc: 'https://drive.google.com/uc?export=view&id=1zI8BOSRHblM9JS5sf0wEKoon3cWhFvmM',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 6,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        imageSrc: 'https://drive.google.com/uc?export=view&id=17zW4WXhvnBc0pIHc1pPuS9Q9DYWV14_d',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      {
        id: 7,
        name: 'Focus Paper Refill',
        href: '#',
        price: '$89',
        imageSrc: 'https://drive.google.com/uc?export=view&id=1FflcxQ3LWxo1VgZRUzjmA6ZMljFR_NFm',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      },
      {
        id: 8,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: 'https://drive.google.com/uc?export=view&id=1dZhnOPgWH7_kE_fTYsUusZIFrmYb7xBJ',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
    
    // More products...
  ]
  
  export default function Example() {
    return (
        <>
      <div className="bg-blue-600">
          <Navbarcategories/>
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-yellow-500">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-yellow-500">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footercategories/>
      </>
    )
  }
  