import Navbarcategories from '../Navbarcategories'
import Footercategories from '../Footercategories'
const products = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc: 'https://drive.google.com/uc?export=view&id=1mOkHgtuSRY6UwhoXyVWlhTgTpx4pev1Y',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc: 'https://drive.google.com/uc?export=view&id=1Uh2DRtxSlKzc9XJtR0JVdYRjgidNX4rW',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: 'https://drive.google.com/uc?export=view&id=1EmV22yPil4iM1XA2fS7sK0zVuMGQ3Q76',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: 'https://drive.google.com/uc?export=view&id=1KzJUlrQnTvesE3IiXVed0P5ZCNBtjoTc',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 5,
        name: 'Earthen Bottle',
        href: '#',
        price: '$48',
        imageSrc: 'https://drive.google.com/uc?export=view&id=1SdUtLeb1-ZocaC5cKH_P1jG6iLdo-ihT',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 6,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        imageSrc: 'https://drive.google.com/uc?export=view&id=1qXM61QDLwUvfJv6zTJdgcNsW5dNbWSuM',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      {
        id: 7,
        name: 'Focus Paper Refill',
        href: '#',
        price: '$89',
        imageSrc: 'https://drive.google.com/uc?export=view&id=1DnY6kfF0XgRX_Yv5f7kHmlK9mjm96x7l',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      },
      {
        id: 8,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: 'https://drive.google.com/uc?export=view&id=1wJarIQPLRNiH9TkLtfu_8FLC_DGSf3fW',
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
                <div className="w-full aspect-w-1 aspect-h-1 bg-blue-800 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
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
  