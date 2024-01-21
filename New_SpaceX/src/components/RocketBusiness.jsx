import { rocket1 } from "../assets";

const RocketBusiness = () => {
    return <>
        <section className="flex md:flex-row flex-col sm:py-16 py-6">
            <div className="flex-1 flex justify-center items-start flex-col">
                <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
                    Features you can't avoid <br className="sm:block hidden" /> Right time to invest in space
                </h2>
                <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
                    Explore the cosmos with SpaceX's Starship pioneering the future of space travel. Witness unparalleled advancements as we journey beyond celestial horizons.
                </p>
            </div>

            <div className="flex-1 flex flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col">
                {/* Feature 1 */}
                <div className="flex flex-row p-6 rounded-[20px] feature-card">
                    <div className="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue">
                        <img src={rocket1} alt="rocket" className="w-[50%] h-[50%] object-contain" />
                    </div>
                    <div className="flex-1 flex flex-col ml-3">
                        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
                            Interstellar Exploration
                        </h4>
                        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                            Embark on an epic journey to explore the wonders of the cosmos, discovering new planets and celestial phenomena along the way.
                        </p>
                    </div>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-row p-6 rounded-[20px] mb-6 feature-card">
                    <div className="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue">
                        <img src={rocket1} alt="rocket" className="w-[50%] h-[50%] object-contain" />
                    </div>
                    <div className="flex-1 flex flex-col ml-3">
                        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
                            Galactic Security
                        </h4>
                        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                            Our advanced security measures ensure the safety of your spacefaring adventures, protecting your data as you navigate the stars.
                        </p>
                    </div>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-row p-6 rounded-[20px] mb-0 feature-card">
                    <div className="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue">
                        <img src={rocket1} alt="rocket" className="w-[50%] h-[50%] object-contain" />
                    </div>
                    <div className="flex-1 flex flex-col ml-3">
                        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
                            Rocket Propulsion Innovation
                        </h4>
                        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                            Experience cutting-edge rocket propulsion technology, propelling you through space with unprecedented speed and efficiency.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default RocketBusiness;