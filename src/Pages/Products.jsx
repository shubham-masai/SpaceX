import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getAllData } from "../redux/action";
import { Link } from "react-router-dom";
import { data } from "autoprefixer";
import Navbar from "../component/Navbar";
const Products = () => {
  const [flag, setFlag] = useState(null);
  const [page,setPage] = useState(1);
  const [rocketData, setRocketData] = useState({});
  const { spacexData, isLoading } = useSelector((store) => {
    return {
      spacexData: store.spacexData,
      isLoading: store.isLoading,
    };
  }, shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    getAllData(dispatch);
  }, []);

  const openModal = (data) => {
    setRocketData(data);
    setFlag(true);
   
  };

  const closemodal = () => {
    setFlag(false);
  };

  console.log(spacexData);
  return (
    <div>
      <Navbar/>

      <div className="flex justify-around  w-[90%] m-auto  ">
        <div>
          <select name="" id="">
            <option value="">Filter by name</option>
            <option value="COTS 1"> COTS 1 </option>
            <option value="COTS 2">COTS 2</option>
            <option value="CRS-1">CRS-1</option>
          </select>
        </div>
        <div>
          <select name="" id="">
            <option value="">Sort by Landings</option>
            <option value="COTS 1"> 1 </option>
            <option value="COTS 2"> 2</option>
            <option value="CRS-1">3</option>
          </select>
        </div>
      </div>
   
    <div className="grid  sm:grid-cols-1   md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-[20px]  w-[80%] m-auto mt-5 ">
      {spacexData.length > 0 &&
        spacexData.map((data) => {
          return (
            // <Link  to={`/rocket:${data.capsule_serial}`} key={data.capsule_serial}>
            <div
              className="text-center border border-solid-grey-100 rounded-md"
              key={data.capsule_serial}
              onClick={()=>{openModal(data)}}
            >
              <img
                className="w-[300px] h-[200px] object-cover rounded-lg"
                src="https://www.spacex.com/static/images/falcon-9/desktop/WebsiteF9Fairings_Render_Desktop.jpg"
                alt=""
              />

              <p>{data.missions[0]?.name}</p>
              <p>Flight : {data.missions[0]?.flight}</p>
            </div>
            // </Link>
          );
        })}

      <div>
        {flag && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg w-1/2">
              <div className="flex flex-col items-center">
                <img
                  
                  src="https://www.spacex.com/static/images/falcon-9/desktop/WebsiteF9SoloDragon_Render_Desktop.jpg" // Replace with your image URL
                  alt="Card Image"
                  className="mb-4 rounded-[50%] w-[200px] h-[200px] object-cover "
                />
                <p className="text-xl font-bold mb-2">{rocketData.capsule_id}</p>
                <p className="text-gray-600">{rocketData.details}</p>
                <p> <span className="text-[16px] font-bold">  Status  </span>: {rocketData.status}</p>
                <p><span className="text-[16px] font-bold">  Original Launch </span> : {rocketData.original_launch}</p>
                <p> <span className="text-[16px] font-bold">  Type </span> : {rocketData.type}</p>
              </div>
              <button
                onClick={closemodal}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-4 rounded "
              >
                Close Modal
              </button>
            </div>
          </div>
        )}
      </div>
    </div>

    </div>
  );
};

export default Products;
