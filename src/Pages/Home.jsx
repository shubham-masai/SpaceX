import React from 'react';
import Navbar from '../component/Navbar';
import Card from '../component/Card';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url("https://sxcontent9668.azureedge.us/cms-assets/assets/Axiom_3_pad40_DSC_2888_desktop_ec18672702.jpg")` }}>
  <Navbar />
  
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
    <h1 className="text-4xl font-bold mb-4">Best Place to Buy a Rocket</h1>
    <p className="text-lg">ipsum pellentesque nulla nulla element m sagitti dictum</p>
    <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">Try a Demo</button>
    <button className="bg-green-500 text-white px-4 py-2 ml-2 mt-4 rounded">Buy Now</button>
  </div>
</div>

      <div className="text-center bg-black relative z-0 ">
        <div className='w-[50%] m-auto relative z-20'>
          <h1 className="text-3xl font-bold">Affordable, good quality.</h1>
          <p className="mt-4">
            Lacus purus eu, mauris pretium mollis ac id mauris eget. Ild diam enim faucibus pellentesque mi massa.
            Nmet nullam sed habitasse dignissim viverra congue nisl.
          </p>
        </div>

        {/* Product cards grid */}
        <div className="w-[60%] mt-8 bg-black  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 m-auto ">
          {/* Card 1 */}
          <Card
            imageUrl="https://www.spacex.com/static/images/falcon-9/desktop/WebsiteF9S1_Render_Desktop.jpg"
            productName="FALCON 9"
            productStage="FIRST STAGE"
            productDetails="Falcon 9’s first stage incorporates nine Merlin engines and aluminum-lithium alloy tanks containing liquid oxygen and rocket-grade kerosene (RP-1) propellant."
          />

          {/* Card 2 */}
          <Card
            imageUrl="https://www.spacex.com/static/images/falcon-9/desktop/WebsiteF9Interstage_Render_Desktop.jpg"
            productName="FALCON 9"
            productStage="INTERSTAGE"
            productDetails="The interstage is a composite structure that connects the first and second stages, and houses the pneumatic pushers that allow the first and second stage to separate during flight."
          />

          {/* Card 3 */}
          <Card
            imageUrl="https://www.spacex.com/static/images/falcon-9/desktop/WebsiteF9S2_Render_Desktop.jpg"
            productName="FALCON 9"
            productStage="PAYLOAD"
            productDetails="The second stage, powered by a single Merlin Vacuum Engine, delivers Falcon 9’s payload to the desired orbit. The second stage engine ignites a few seconds after stage separation, and can be restarted multiple times to place multiple payloads into different orbits."
          />

          {/* Card 4 */}
          <Card
            imageUrl="https://www.spacex.com/static/images/falcon-9/desktop/WebsiteF9SoloFairings_Render_Desktop.jpg"
            productName="FALCON 9"
            productStage="SECOND STAGE"
            productDetails="The second stage, powered by a single Merlin Vacuum Engine, delivers Falcon 9’s payload to the desired orbit. The second stage engine ignites a few seconds after stage separation, and can be restarted multiple times to place multiple payloads into different"
          />
        </div>
      </div>

      {/* footer */}
      <div className="bg-black text-white p-8">
        <div className="max-w-6xl mx-auto flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Tranuship</h2>
            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
            <p>(684) 555-0102</p>
            <p>(603) 555-0123</p>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 mt-4 md:mt-0">
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li><a href="#" className="hover:text-gray-500">Features</a></li>
              <li><a href="#" className="hover:text-gray-500">Products</a></li>
              <li><a href="#" className="hover:text-gray-500">Testimonial</a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 mt-4 md:mt-0">
            <h2 className="text-2xl font-bold mb-4">Newsletter</h2>
            <div className="bg-gray-700 p-4 rounded">
              <p className="mb-4">We send updates every week</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border border-gray-300 text-white sm:text-sm rounded-l-md p-2.5 flex-grow"
                />
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
                >
                  GO
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
export default Home;