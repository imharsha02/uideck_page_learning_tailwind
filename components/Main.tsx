import Image from "next/image";
import nextbaseImage from "/public/nextbase_lading_image.png";
import Link from "next/link";
import {BsFillCalendarFill} from "react-icons/bs"

const Content = () => {
  return (
    <div className="flex container mx-auto gap-8">
      <div className="bg-white rounded-md shadow-sm">
        <Image src={nextbaseImage} alt="" height={432} width={854} />
        <div className="p-[30px]">
          <div className="flex">
            <span className="cursor pointer py-[15px] px-[25px] font-bold">
              Details
            </span>
            <span className="cursor pointer py-[15px] px-[25px] font-bold">
              Update logs
            </span>
          </div>
          <hr />
        </div>
      </div>

      {/* ----------------------------------- grid item 2 */}

      <div className="rounded-md shadow-sm">
        <div className="mb-[30px] p-[30px] bg-white">
          <h2 className="text-2xl font-bold">Pro Version Includes</h2>
          <ul className="mt-[15px] mb-[20px]">
            <li className="mb-[15px]">Full Download Package</li>
            <li className="mb-[15px]">Commercial License</li>
            <li className="mb-[15px]">All Sections and Elements</li>
            <li className="mb-[15px]">Lifetime Free Updates</li>
            <li className="mb-[15px]">12 Months Support</li>
            <li className="pb-[15px]">SCSS Files and Documentation</li>
          </ul>

          <Link
            href=""
            className="px-[50px] py-[17px] text-center font-semibold bg-purple-500 text-white rounded-md w-full"
          >
            Download
          </Link>
          <Link
            href=""
            className="px-[50px] py-[17px] text-center font-semibold bg-purple-200 rounded-md text-purple-500"
          >
            Preview
          </Link>
        </div>

        <div className="mb-[30px] bg-purple-500 text-center rounded-sm text-white p-[30px]">
          <h3 className="text-3xl font-bold my-[15px]">Before You Buy Single</h3>
          <p className="my-[15px] w-80 font-extralight">
            Get Unlimited Access to 80+ Products Instantly with Commercial
            License and Premium Features
          </p>
          <p className="m-[30px] text-4xl">Save Over 90%</p>
          <Link href="" className="rounded-md text-purple-500 py-3 px-5 font-semibold bg-white">Get All-Access Pass</Link>
        </div>
        <div className="mb-[30px] p-[30px] bg-white">
          <h3 className="font-bold text-2xl mt-[15px] mb-5">Template Parameters</h3>
          <div className="divide-y-2 divide-gray-200">
            <div className="flex items-center gap-2">
              <BsFillCalendarFill className="fill-gray-500"/>
              <span>Released on: November 4, 2021</span>
            </div>
          </div>
        </div>
        <div className="bg-white text-xl">hi</div>
      </div>
    </div>
  );
};

export default Content;
