import React, {useState } from 'react';
import { rocket1, logo } from '../assets';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUpuser } from '../redux/action';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuth, isError, errorMessage } = useSelector((store) => {
    return {
      isAuth: store.isAuth,
      isError: store.isError,
      errorMessage: store.errorMessage,
    };
  }, shallowEqual);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userData = { username, email, password };
    await signUpuser(dispatch, userData, navigate);
    setUsername('');
    setEmail('');
    setPassword('');
  };


  return (
    <div className="flex md:flex-row flex-col sm:py-16 py-6">
      <div className="flex-1 flex flex justify-center items-center md:my-0 my-10 relative">
        <img
          src={rocket1}
          alt="Rocket"
          className="w-[100%] h-[100%] relative z-[5]" 
        />
        <div className="absolute z-[0] w-[45%] h-[45%] top-0 pink__gradient" />
        <div className="absolute z-[10] w-[20%] h-[100%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[60%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
        <div className="max-w-md mx-auto">
          <img src={logo} alt="SpaceX Logo" className="mb-8 mx-auto" />

          <h2 className="font-poppins text-dimWhite mb-1">Create new account</h2>
          <p className="font-poppins text-dimWhite mb-3">Let's join us :)</p>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="relative">
            {isError && (
              <div className="mb-4 text-red-500">
                {errorMessage}
              </div>
            )}

            <div className="mb-4">
              <label htmlFor="email" className="block text-md font-medium text-gray-800">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => { setUsername(e.target.value) }}
                className="mt-1 p-2 w-full rounded-md inputfiled text-dimWhite"
                required
                style={{ border: 'none !important', outline: 'none' }}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-md font-medium text-gray-800">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
                className="mt-1 p-2 w-full rounded-md inputfiled text-dimWhite"
                required
                style={{ border: 'none !important', outline: 'none' }}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-md font-medium text-gray-800">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
                className="mt-1 p-2 w-full rounded-md inputfiled text-dimWhite"
                required
                style={{ border: 'none !important', outline: 'none' }}
              />
            </div>

            <div className="flex justify-between items-center mb-4">
              <button type="submit" className="bg-blue-gradient text-white px-8 py-2 rounded-md">
                Register
              </button>
            </div>
            <p className="text-gray-500">
              Already have an account? <a href="/login" className="text-blue-500">Sign in</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;