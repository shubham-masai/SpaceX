import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllCapsules } from '../redux/action';
import { searchIcon } from '../assets';
const Capsules = () => {
    const dispatch = useDispatch();
    const spacexData = useSelector((state) => state.spacexData);
    const [page, setPage] = useState(1);
    const limit = 10;
    const totalPages = Math.ceil(spacexData.length / limit);

    const [searchby, setSearchby] = useState('');
    const [searchItem, setSearchItem] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetchAllCapsules(dispatch, page, limit);
    }, [dispatch, page, limit]);

    const [selectedCapsule, setSelectedCapsule] = useState(null);

    const openModal = (capsule) => {
        setSelectedCapsule(capsule);
    };

    const closeModal = () => {
        setSelectedCapsule(null);
    };

    const startIndex = (page - 1) * limit;
    const endIndex = Math.min(startIndex + limit, spacexData.length);
    const visibleData = spacexData.slice(startIndex, endIndex);



    const handleSearchData = () => {
        if (searchby && searchItem) {
          const filteredData = spacexData.filter((capsule) => {
            const itemValue = String(capsule[searchby]).toLowerCase();
            const searchTermLower = searchItem.toLowerCase();
            return itemValue.includes(searchTermLower);
          });
          setFilteredData(filteredData);
        } else {
          setFilteredData([]);
        }
      };

    return (
        <div className="container mx-auto p-4 min-h-screen">
            <div className='mb-10 flex flex-col md:flex-row gap-4 items-centre'>
                <select className='inputfiled inputfield-width px-4 py-2 rounded-md text-dimWhite' name="searchby" value={searchby} onChange={(e) => { setSearchby(e.target.value) }}>
                    <option value="">Search By</option>
                    <option value="status">Status</option>
                    <option value="type">Type</option>
                    <option value="original_launch">original launch</option>
                </select>
                <input
                    type="text"
                    placeholder="Search by type..."
                    className="font-poppins inputfiled inputfield-width px-4 py-2 rounded-md text-dimWhite ml-2"
                    value={searchItem}
                    onChange={(e) => setSearchItem(e.target.value)}
                    style={{ border: 'none !important', outline: 'none' }}
                />
                <button className="px-4 py-2 rounded-r-md" onClick={handleSearchData}>
                    <img src={searchIcon} alt="search icon" className="w-[30px] h-[30px]" />
                </button>
            </div>

            <div className="max-h-max flex flex-wrap">
                {filteredData.length > 0
                    ? filteredData.map((capsule) => (
                        <div key={capsule.capsule_serial} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
                            <div
                                className="bg-gray-800 p-6 rounded-md cursor-pointer transition-transform transform hover:scale-105"
                                onClick={() => openModal(capsule)}
                            >
                                <h3 className="text-xl font-semibold mb-2">{capsule.capsule_serial}</h3>
                                <p className="text-gray-400">Status: {capsule.status}</p>
                                <p className="text-gray-400">Flight: {capsule.missions[0]?.flight ?? 0}</p>
                            </div>
                        </div>
                    ))
                    : visibleData.map((capsule) => (
                        <div key={capsule.capsule_serial} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
                            <div
                                className="bg-gray-800 p-6 rounded-md cursor-pointer transition-transform transform hover:scale-105"
                                onClick={() => openModal(capsule)}
                            >
                                <h3 className="text-xl font-semibold mb-2">{capsule.capsule_serial}</h3>
                                <p className="text-gray-400">Status: {capsule.status}</p>
                                <p className="text-gray-400">Flight: {capsule.missions[0]?.flight ?? 0}</p>
                            </div>
                        </div>
                    ))}
            </div>

            {selectedCapsule && (
                <div className="modal" style={{ backgroundColor: '#1F2937' }}>
                    <div className="absolute z-[0] w-[20%] h-[20%] top-0 pink__gradient" style={{ pointerEvents: 'none' }}/>
                    <div className="absolute z-[1] w-[20%] h-[40%] rounded-full white__gradient" style={{ pointerEvents: 'none' }}/>
                    <div className="absolute z-[0] w-[60%] h-[50%] right-20 bottom-40 blue__gradient" style={{ pointerEvents: 'none' }} />

                    <div className="modal-content">
                        <h2>Capsule Details</h2>
                        <p className="font-poppins text-white">Capsule Serial: <span className="font-poppins text-dimWhite ml-1">{selectedCapsule.capsule_serial}</span></p>
                        <p className="font-poppins text-white">Capsule ID:  <span className="font-poppins text-dimWhite ml-1">{selectedCapsule.capsule_id}</span></p>
                        <p className="font-poppins text-white">Status:  <span className="font-poppins text-dimWhite ml-1">{selectedCapsule.status}</span></p>
                        <p className="font-poppins text-white">Original Launch: <span>{selectedCapsule.original_launch}</span></p>
                        <ul>
                            {selectedCapsule.missions.map((mission, index) => (
                                <li key={index}>
                                    <p className="font-poppins text-white">Name: <span className="font-poppins text-dimWhite ml-1">{mission.name}</span></p>
                                    <p className="font-poppins text-white">Flight: <span className="font-poppins text-dimWhite ml-1">{mission.flight}</span></p>
                                </li>
                            ))}
                        </ul>
                        <p className="font-poppins text-white">Landings: <span className="font-poppins text-dimWhite ml-1">{selectedCapsule.landings}</span></p>
                        <p className="font-poppins text-white">Type:  <span className="font-poppins text-dimWhite ml-1">{selectedCapsule.type}</span></p>
                        <p className="font-poppins text-white">Details:  <span className="font-poppins text-dimWhite ml-1">{selectedCapsule.details}</span></p>
                        <p className="font-poppins text-white">Reuse Count:  <span className="font-poppins text-dimWhite ml-1">{selectedCapsule.reuse_count}</span></p>

                        <button className="bg-blue-gradient text-white px-5 py-2 rounded-md" onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Pagination controls */}
            <div className="flex justify-center mt-4">
                <button
                    className="bg-blue-gradient text-white px-5 py-2 mr-2 rounded-md"
                    onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
                    disabled={page === 1}
                >
                    Previous
                </button>
                <button
                    className="bg-blue-gradient text-white px-5 py-2 rounded-md"
                    onClick={() => setPage((prevPage) => Math.min(prevPage + 1, totalPages))}
                    disabled={page === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Capsules