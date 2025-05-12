import Image from "next/image";
import Link from "next/link";
// config
import config from "@/config/general";

const Header = () => {
  return (
    <header className="flex-col sm:flex-row flex justify-between items-start">
      <nav>
        <ul className="flex sm:mt-0 mt-4 items-center lg:gap-7 gap-3 font-medium text-base sm:text-lg">
          <li className="bg-activeButton text-white rounded py-2">
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
