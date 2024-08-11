
import React from 'react'
import { useSelector } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa'; //
const Profile = () => {

    const {CarrentUser
    } = useSelector((state) => state.auth.auth);
  
    console.log(CarrentUser
      
       , "CarrentUser");
       return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
      <div className="bg-cover h-56 p-4 flex justify-center items-center" style={{ backgroundImage: "url('https://via.placeholder.com/300')" }}>
        <FaUserCircle className="h-24 w-24 text-white border-4 border-white rounded-full" />
      </div>
      <div className="p-4">
        <h2 className="text-center text-2xl font-semibold">{CarrentUser.username}</h2>
        <p className="text-center text-gray-600">{CarrentUser.email}</p>
        <div className="mt-4">
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
      );
}

export default Profile