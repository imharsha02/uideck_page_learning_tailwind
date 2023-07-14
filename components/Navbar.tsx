import Link from "next/link";
import { BsFillCartFill } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FaKey } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <Link href="/" className="mr-px text-xl ml-10">
        <Image alt="" src="/logo.svg" width={150} height={50} />
      </Link>
      {/* ---------------------------------------- */}
      <div className="flex space-x-5 items-center">
        <div className="flex items-center py-5">
          <Link href="" className="p-2 flex items-center">
            Templates
          </Link>
          <AiOutlineDown className="h-4 w-4" />
        </div>
        <div className="flex py-5 items-center">
          <Link href="" className="p-2">
            Brands
          </Link>
          <AiOutlineDown className="h-4 w-4" />
        </div>
        <div className="flex py-5 items-center">
          <Link href="" className="p-2">
            Support
          </Link>
          <AiOutlineDown className="h-4 w-4" />
        </div>
        <div className="py-5">
          <Link
            href=""
            className="flex items-center gap-2 p-2 rounded-md bg-purple-500 text-white font-semibold"
          >
            <FaKey className=" fill-white" />
            <span>All-Access Pass</span>
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-2 mr-10">
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
