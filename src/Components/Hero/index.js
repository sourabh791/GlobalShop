import React from 'react'

const Hero = () => {
  return (
    <section className="text-gray-600 body-font ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Upgrade Your Style and Tech—Shop the Best of Both Worlds!
        <br className="hidden lg:inline-block"/>From trendy fashion to the latest gadgets, find everything you need in one place. Free shipping on all orders!
      </h1>
      <p className="mb-8 leading-relaxed">Welcome to RelianceShop—your ultimate online shopping destination for the latest fashion and cutting-edge electronics. Whether you’re looking to refresh your wardrobe with the latest trends or grab the newest gadgets for your home, we’ve got you covered. Enjoy unbeatable prices, fast shipping, and a seamless shopping experience—everything you need in one place!</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Shop Now</button>
        {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
    </div>
  </div>
</section>
  )
}

export default Hero
