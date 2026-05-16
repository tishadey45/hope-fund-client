import Image from "next/image";
import Link from "next/link";
import banner from "../assets/banner.png";

export default function Banner() {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 mx-auto ">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <Image
            src={banner}
            alt="banner"
            width={700}
            height={900}
            className="rounded-2xl"
          ></Image>
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl lg:text-5xl font-bold leading-tight bg-linear-to-r from-blue-900 to-cyan-500 text-transparent bg-clip-text">
            Support Humanity With
            <span className="text-green-400"> HopeFund</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Help flood victims, support education, provide medical aid, and
            spread kindness across Bangladesh through trusted donation
            campaigns.
          </p>
          <div className="flex flex-col mt-4 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link href="/all-campaigns">
              <button
                className="px-6 py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-white rounded-full 
                 transition-all duration-300 hover:scale-110 hover:shadow-xl"
              >
                All Campaigns
              </button>
            </Link>

            <Link href="/donate">
              <button
                className="px-6 py-3 bg-linear-to-r from-green-500 to-emerald-500 text-white rounded-full 
                        transition-all duration-300 hover:scale-110 hover:shadow-xl ml-3"
              >
                Donate Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
