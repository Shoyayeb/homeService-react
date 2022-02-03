/* This example requires Tailwind CSS v2.0+ */
import { ExclamationIcon, XIcon } from "@heroicons/react/outline";
import useAuth from "./../../../../Hooks/useAuth";

export default function ErrorBanner() {
  const { error, setError } = useAuth();
  const hideError = () => {
    setError("");
  };
  return (
    <div className="bg-gradient-to-r from-red-700 to-red-400">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className=" p-2 rounded-lg bg-pink-800 hidden md:flex">
              <ExclamationIcon
                className="h-6 w-6 text-white "
                aria-hidden="true"
              />
            </span>
            <p className="ml-3 font-medium text-white text-ellipsis hover:text-ellipsis">
              <span className="md:hidden">{error}</span>
              <span className="hidden md:inline">{error}</span>
            </p>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex p-2 rounded-md hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
              onClick={hideError}
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
