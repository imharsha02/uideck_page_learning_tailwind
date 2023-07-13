import Link from "next/link";
import { BsFillCartFill } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="flex justify-evenly items-center">
      <Link href="" className="mr-px text-xl">
        Nextbase
      </Link>
      {/* ---------------------------------------- */}
      <div className="flex space-x-5 items-center">
        <div className="flex items-center">
          <Link href="" className="p-2 flex items-center">
            Features
          </Link>
          <AiOutlineDown className="h-4 w-4" />
        </div>
        <div className="flex items-center">
          <Link href="" className="p-2">
            Demos
          </Link>
          <AiOutlineDown className="h-4 w-4" />
        </div>
        <div className="flex items-center">
          <Link href="" className="p-2">
            Pricing
          </Link>
          <AiOutlineDown className="h-4 w-4" />
        </div>
        <div className="flex items-center">
          <Link href="" className="p-2">
            Docs
          </Link>
          <AiOutlineDown className="h-4 w-4" />
        </div>
        <div className="flex items-center">
          <Link href="" className="p-2">
            Discord
          </Link>
          <AiOutlineDown className="h-4 w-4" />
        </div>
        <div className="flex items-center">
          <Link href="" className="p-2">
            Public Roadmap
          </Link>
          <AiOutlineDown className="h-4 w-4" />
        </div>
        <div className="flex items-center">
          <Link href="" className="p-2">
            FAQ
          </Link>
          <AiOutlineDown className="h-4 w-4" />
        </div>
        <Link
          href=""
          className="p-2 rounded-md bg-purple-500 text-white font-semibold"
        >
          All-Access Pass
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <Link
          href=""
          className="mr-px flex items-center shadow-md px-[15px] py-[11px] rounded-md gap-2"
        >
          {/* ------------------------------------------------------------------------- */}
          <AiOutlineUser className="h-5 fill-white bg-purple-500 rounded-full w-5" />
          Account
        </Link>
        <BsFillCartFill className="h-10 w-10 fill-purple-600" />
      </div>
    </nav>
  );
};

export default Navbar;
