import Image from "next/image";
import nextbaseImage from "/public/nextbase_lading_image.png";
import Link from "next/link";
import { BsFillCalendarFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { GrMultiple } from "react-icons/gr";
import { GrUpdate } from "react-icons/gr";
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {FaTelegram} from 'react-icons/fa'
import {BsPinterest} from 'react-icons/bs'
import {FaBuffer} from 'react-icons/fa'

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
          <h3 className="text-3xl font-bold my-[15px]">
            Before You Buy Single
          </h3>
          <p className="my-[15px] w-80 font-extralight">
            Get Unlimited Access to 80+ Products Instantly with Commercial
            License and Premium Features
          </p>
          <p className="m-[30px] text-4xl">Save Over 90%</p>
          <Link
            href=""
            className="rounded-md text-purple-500 py-3 px-5 font-semibold bg-white"
          >
            Get All-Access Pass
          </Link>
        </div>
        <div className="mb-[30px] p-[30px] bg-white">
          <h3 className="font-bold text-2xl mt-[15px] mb-5">
            Template Parameters
          </h3>
          <div className="divide-y divide-gray-200">
            <div className="pb-[15px] flex items-center gap-2">
              <BsFillCalendarFill className="fill-gray-500" />
              <p>Released on: November 4, 2021</p>
            </div>
            <div className="flex py-[15px] items-center gap-2">
              <GrUpdate className="fill-gray-500" />
              <p>Last updated on: April 26, 2023</p>
            </div>
            <div className="flex py-[15px] items-center gap-2">
              <AiFillSetting className="fill-gray-500 w-6 h-6" />
              <p>
                Built with: <span className="text-blue-500">Tailwind</span>
              </p>
            </div>
            <div className="flex py-[15px] items-center gap-2">
              <GrMultiple className="fill-gray-500" />
              <p>Version: 1.1</p>
            </div>
            <div className="flex py-[15px] items-center gap-2"></div>
          </div>
        </div>
        <div className="bg-white text-xl p-[30px] mb-[30px]">
          <h3 className="font-bold text-2xl mt-[15px] mb-5">Tags</h3>
          <div className="flex max-w-[32rem] flex-wrap">
            <p className="py-[5px] mr-[10px] mb-[10px] px-5 text-blue-500 rounded-full bg-blue-100">app</p>
            <p className="py-[5px] mr-[10px] mb-[10px] px-5 text-blue-500 rounded-full bg-blue-100">business</p>
            <p className="py-[5px] mr-[10px] mb-[10px] px-5 text-blue-500 rounded-full bg-blue-100">clean</p>
            <p className="py-[5px] mr-[10px] mb-[10px] px-5 text-blue-500 rounded-full bg-blue-100">product</p>
            <p className="py-[5px] mr-[10px] mb-[10px] px-5 text-blue-500 rounded-full bg-blue-100">saas</p>
            <p className="py-[5px] mr-[10px] mb-[10px] px-5 text-blue-500 rounded-full bg-blue-100">Software</p>
            <p className="py-[5px] mr-[10px] mb-[10px] px-5 text-blue-500 rounded-full bg-blue-100">Tailwind</p>
            <p className="py-[5px] mr-[10px] mb-[10px] px-5 text-blue-500 rounded-full bg-blue-100">webapp</p>
          </div>
        </div>
        <div className="bg-white text-xl p-[30px] mb-[30px]">
          <h3 className="font-bold text-2xl mt-[10px] mb-[15px]">Share This</h3>
          <ul className="flex">
            <li className="mr-[20px] mb-[10px]"><AiOutlineTwitter title="Share Link" className="hover:fill-purple-500 w-6"/></li>
            <li className="mr-[20px] mb-[10px]"><BsFacebook title="Share Link" className="hover:fill-purple-500 w-6"/></li>
            <li className="mr-[20px] mb-[10px]"><BsPinterest title="Share Link" className="hover:fill-purple-500 w-6"/></li>
            <li className="mr-[20px] mb-[10px]"><FaTelegram title="Share Link" className="hover:fill-purple-500 w-6"/></li>
            <li className="mr-[20px] mb-[10px]"><FaBuffer title="Share Link" className="hover:fill-purple-500 w-6"/></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Content;
