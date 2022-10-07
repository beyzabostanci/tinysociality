import Image from "next/image";
import * as React from "react";

export default function Card() {
return (
<>
<div className="w-[492px] mr-[42px] rounded shadow-lg flex flex-row h-[565px]">
<div className="w-32 bg-pink-500 border items-center justify-center flex">
<Image width={30} height={30} src="/images/xxx.jpg" alt=""  />
</div>
<div className="px-5 py-4 border flex flex-col">
    <div className="flex justify-between">
    <div className="text-sm mb-2 border text-gray-400">21/09/2022 18:18</div>
    <div className="flex border w-24 justify-around">
      <Image width={20} height={20} src="/images/xxx.jpg" alt="" />
      <Image width={20} height={20} src="/images/xxx.jpg" alt="" />
      <Image width={20} height={20} src="/images/xxx.jpg" alt="" />
    </div>
    </div>
    <p className="text-gray-500 mb-3 text-sm border">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
    <div className="mb-2 flex justify-center align-middle border">
    <Image width={370} height={320} src="/images/xxx.jpg" alt=""  />
     </div>
     <div className="pt-2 pb-2 flex border w-56">
     <Image width={20} height={20} src="/images/xxx.jpg" alt="" />
    <p className="text-sm mr-3">123</p>
    <Image width={20} height={20} src="/images/xxx.jpg"alt="" />
 <p className="text-sm mr-3">123</p>
 <Image width={20} height={20} src="/images/xxx.jpg" alt="" />
  <p className="text-sm mr-3">123</p>
  <Image width={20} height={20} src="/images/xxx.jpg" alt="" />
  <p className="text-sm mr-3">123</p>
  </div>
  </div>
</div>
</>
)
}