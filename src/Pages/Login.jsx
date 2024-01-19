import { useEffect,useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { signInUser } from "../redux/action";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth, isError, errorMessage } = useSelector((store) => {
    return {
      isAuth: store.isAuth,
      isError: store.isError,
      errorMessage: store.errorMessage,
    };
  }, shallowEqual);

  const handleSignIn = (e) => {
    e.preventDefault();
    signInUser(dispatch, { email, password });
  };


  useEffect(() => {
    if (isAuth) {
      navigate(-1);
    }
    if (localStorage.getItem("spacextoken")) {
      navigate(-1);
    }
  }, [isAuth, navigate]);
  return (
    <section className="flex flex-col md:flex-col h-screen items-center justify-center gap-8 bg-primary-950" 
    style={{
      backgroundImage: `url('https://sxcontent9668.azureedge.us/cms-assets/assets/Launch_Page_Starlink1_vertical_18_DESKTOP_3d33146ef8.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
    >
      <div className=" text-white text-4xl flex gap-2 items-center">
        SpaceX
      </div>
      <div className="w-full bg-primary-800 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700 bg-opacity-70">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <form className="space-y-4 md:space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                className="bg-primary-800 border border-gray-300 text-black sm:text-sm rounded-lg block w-full p-2.5 "
                placeholder="name@company.com"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                placeholder="••••••••"
                className="bg-primary-800 border border-gray-300 text-black sm:text-sm rounded-lg block w-full p-2.5 "
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            {isError && <p className="text-white">Error : {errorMessage}</p>}
            <button
              type="submit"
              className="w-full text-white bg-blue-500 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-blue-900"
              onClick={handleSignIn}
            >
              Sign in
            </button>
            <p className="text-sm font-light text-white dark:text-white">
              Don’t have an account yet?{" "}
              <a
                href="/signup"
                className="font-medium text-primary-600 hover:underline dark:text-blue-500"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
