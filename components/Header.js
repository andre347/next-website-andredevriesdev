import Link from "next/link";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  console.log(isOpen);
  return (
    <nav>
      <header className="flex justify-between items-center py-10">
        <div>
          <Link href="/">
            <a
              aria-label="andredevries.dev"
              className="text-sm font-light text-gray-700 hover:text-gray-900 uppercase md:text-base lg:text-xl"
            >
              Andre <span className="font-bold">de Vries</span>
            </a>
          </Link>
        </div>
        {/* Header for non-mobile screens */}
        <div className="text-base leading-5 hidden sm:block">
          <Link href="/posts">
            <a
              aria-label="andredevries.dev/posts"
              className="font-medium text-gray-500 hover:text-gray-700"
            >
              Blogs{" "}
            </a>
          </Link>
          <span className="font-medium text-gray-500">|</span>
          <Link href="/pages/about">
            <a
              aria-label="andredevries.dev/about"
              className="font-medium text-gray-500 hover:text-gray-700"
            >
              {" "}
              About{" "}
            </a>
          </Link>
        </div>
        <div className="block sm:hidden">
          <button
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-expanded="false"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span class="sr-only">Open main menu</span>
            {/* <!-- Icon when menu is closed. -->
          <!--
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          --> */}
            <svg
              class={`${isOpen ? "hidden" : "block"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            {/* <!-- Icon when menu is open. -->
          <!--
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          --> */}
            <svg
              class={`${isOpen ? "block" : "hidden"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </header>
      <MobileHeader isOpen={isOpen} />
    </nav>
  );
}

function MobileHeader({ isOpen }) {
  return (
    <div class={`${isOpen ? "block" : "hidden"} sm:hidden`}>
      <div class="px-2 pt-2 pb-3 space-y-1">
        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
        <a
          href="#"
          class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Dashboard
        </a>
        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Team
        </a>
        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Projects
        </a>
        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Calendar
        </a>
      </div>
    </div>
  );
}

export default Header;
