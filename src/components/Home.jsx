import { discount, rocket } from "../assets";

const Home = () => {
    return <>
        <section className="flex md:flex-row flex-col sm:py-16 py-6">
            <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
                <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                    <img src={discount} alt="discount" className="w-[50px] h-[50px]" />
                    <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] ml-2">
                        <span className="text-white">Galactic Launch</span> Offer: {" "}
                        <span className="text-white"> 20% </span> Off
                    </p>
                </div>

                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                        Stars Beckon<br className="sm:block hidden" />{" "}
                        <span className="text-gradient">Future</span>{" "}
                    </h1>
                </div>

                <h1 className="font-poppins font-semibold ss:text-[60px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                    Awaits Us.
                </h1>
                <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
                    Embrace a bright future as a spacefaring civilization. The thrill lies in believing the future will surpass the past, venturing out among the stars.
                </p>
            </div>

            <div className="flex-1 flex flex justify-center items-center md:my-0 my-10 relative">
                <img src={rocket} alt="Rocket" className="w-[100%] h-[100%] relative z-[5]" />

                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            </div>
        </section>
    </>
};

export default Home;