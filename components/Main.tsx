import Image from "next/image";

import nextbaseImage from "/public/nextbase_lading_image.png";
import Link from "next/link";

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
          <div className="flex-col">

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
        </div>
        
        <div className="mb-[30px] bg-white">hi</div>
        <div className="mb-[30px] bg-white">hi</div>
        <div className="bg-white">hi</div>
      </div>
    </div>
  );
};

export default Content;
