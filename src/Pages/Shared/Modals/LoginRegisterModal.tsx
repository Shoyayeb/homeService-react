import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { Fragment, useRef } from "react";
import useAuth from "./../../../Hooks/useAuth";
import LoginForm from "./../../Forms/LoginForm/LoginForm";
import RegisterForm from "./../../Forms/RegisterForm/RegisterForm";
import ErrorBanner from "./../Banner/ErrorBanner/ErrorBanner";

const LoginRegisterModal = () => {
  // const [open, setOpen] = useState(false);
  // const [isLogin, setIsLogin] = useState(true);
  const cancelButtonRef = useRef(null);
  const {
    isLogin,
    setIsLogin,
    socialSignIn,
    error,
    showLoginModal,
    setShowLoginModal,
  } = useAuth();
  if (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
  const changeForm = () => {
    if (isLogin) {
      setIsLogin(false);
    } else if (!isLogin) {
      setIsLogin(true);
    }
  };
  return (
    <Transition.Root show={showLoginModal} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setShowLoginModal}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              {error ? (
                <ErrorBanner />
              ) : (
                <div className="bg-blue-3040 flex justify-end ">
                  <button
                    type="button"
                    className=" flex p-2 rounded-md "
                    onClick={() => setShowLoginModal(false)}
                  >
                    <span className="sr-only">Dismiss</span>
                    <XIcon className="h-6 w-6 text-black" aria-hidden="true" />
                  </button>
                </div>
              )}

              <div className="flex flex-col w-full  px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
                  {isLogin ? "Login To" : "Create"} Your Account
                </div>
                <div className="flex gap-4 item-center">
                  <button
                    type="button"
                    className="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="mr-2"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                    </svg>
                    Facebook
                  </button>
                  <button
                    type="button"
                    className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    onClick={() => socialSignIn("google")}
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="mr-2"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
                    </svg>
                    Google
                  </button>
                </div>
                <div className="mt-8">
                  {isLogin ? <LoginForm /> : <RegisterForm />}
                </div>
                <div className="flex items-center justify-center mt-6">
                  <button
                    className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"
                    onClick={changeForm}
                  >
                    <span className="ml-2">
                      {isLogin
                        ? `You Don't Have An Account?`
                        : "Have an Account Already?"}
                    </span>
                  </button>
                </div>
              </div>

              {/* <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setShowLoginModal(false)}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div> */}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default LoginRegisterModal;
