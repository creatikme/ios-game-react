import Logo from '../assets/logo.png';
const Header = () => {
  return (
    <header class="w-full px-8 text-gray-700 fixed bg-white tails-selected-element">
      <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div class="relative flex flex-col md:flex-row">
          <a
            href="#_"
            class="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
          >
            <img src={Logo} className="w-[120px]" />
            {/* <span class="mx-auto text-xl font-black leading-none text-gray-900 select-none">
              tails
              <span class="text-indigo-600" data-primary="indigo-600">
                .
              </span>
            </span> */}
          </a>
          {/* <nav class="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
            <a
              href="/"
              class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              Home
            </a>
          </nav> */}
        </div>

        <div class="inline-flex items-center ml-5 space-x-6 lg:justify-end">
          {/* <a
            href="#"
            class="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
          >
            Sign in
          </a> */}
          <a
            href="/login"
            class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-primary border border-transparent rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            data-rounded="rounded-md"
            data-primary="primary"
          >
            Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
