
import Navbar from './Navbar';
import Footer from './Footer'

export default function Example() {
  return (
    <>
    <div className="relative bg-blue-600 overflow-hidden">
      <Navbar/>
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font font-extrabold tracking-tight text-yellow-500 sm:text-6xl">
              Casual Style Football
            </h1>
            <p className="mt-4 text-xl text-yellow-500">
            Casual is one part of the culture in football, which is synonymous with hooligansime and expensive branded clothes. This subculture was born in the late 70s, in Great Britain, where many hooligans of football clubs began to wear expensive clothes to avoid the attention of the police.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
              >
                <div className="absolute transform sm:left-1/2 sm:top-20 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://i.pinimg.com/564x/a3/57/56/a35756c5eea9aae49bf25cb4595686c4.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://i.pinimg.com/564x/56/2b/54/562b5405cb0bd93036373025588145c2.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://i.pinimg.com/564x/63/1e/92/631e92d245ebb6246862a9b8cbc7746f.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://i.pinimg.com/564x/d9/52/d1/d952d1c97ff300362738619896773c6c.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://i.pinimg.com/564x/30/9a/7f/309a7f2bef1957384c7fdc8d72dc5aec.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://i.pinimg.com/564x/6b/e2/ce/6be2ce37ecc166795f771b1510059f90.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="Categories"
                className="inline-block text-center bg-blue-800 border rounded-md py-3 px-8 font-medium text-white hover:bg-yellow-500"
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  
   
    
  )
}
