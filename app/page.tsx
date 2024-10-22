import Image from "next/image";

  export default function Home() {
    return (
    <div>
      <nav className="flex w-full bg-black h-32 items-center">
  <div className="bg-red-900 h-10 w-96"></div>

  <div className="flex justify-end w-3/5 items-center">
  <div className="bg-green-900 h-10 w-44"></div>
  <div className="bg-yellow-900 h-10 w-44"></div>
  <div className="bg-blue-900 h-10 w-44"></div>
  </div>
      </nav>
      <div className="flex flex-wrap justify-centerm-4 p-4 gap 4">
<div className="flex w-full justify between gap-4"></div>
  <div className="w-1/3 bg-yellow-600 h-90"></div>
  <div className="w-1/3 bg-gray-600 h-96"></div>
  <div className="w-1/3 bg-orange-600 h-96"></div>
      </div>
      
      <div className="flex w-full justify-between gap-4 mt-4 ">
        <div className=" w-1/2 bg-yellow-600 h-70"></div>
        <div className=" w-1/2 bg-green-700 h-70"></div>
      </div>
      </div>
      
    );
  }