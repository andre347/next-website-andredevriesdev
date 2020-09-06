import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between items-center py-10">
      <div>
        <Link href="/">
          <a
            aria-label="andredevries.dev"
            className="text-sm font-light  uppercase md:text-base lg:text-xl"
          >
            Andre <span className="font-bold">de Vries</span>
          </a>
        </Link>
      </div>
      <div className="text-base leading-5">
        <Link href="/pages/about">
          <a
            aria-label="andredevries.dev/about"
            className="font-medium text-gray-500 hover:text-gray-700"
          >
            About me &rarr;
          </a>
        </Link>
      </div>
    </header>
  );
}

export default Header;
