import Image from "next/image";
import * as React from "react";

export default function Card() {
return (
<>
<div className="w-[492px] mr-[42px] rounded-lg overflow-hidden  shadow-lg flex flex-row h-[565px]">
<div className="w-32 bg-pink-500  items-center justify-center flex">
<Image width={20} height={37} src="/images/facebook.png" alt=""  />
</div>
<div className="px-5 py-4 border flex flex-col">
    <div className="flex mt-7 justify-between align-middle border">
    <div className="text-md border font-semibold text-gray-400">21/09/2022 - 18:18</div>
    <div className="flex border w-32 align-middle justify-around">
      <Image width={20} height={20} src="/images/trash.png" alt="" />
      <Image width={20} height={20} src="/images/tick.png" alt="" />
      <Image width={25} height={20} src="/images/more.png" alt="" />
    </div>
    </div>
    <p className="text-cardtext mb-3 mt-7 text-md font-semibold border">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
    </p>
    <div className="mb-2 flex justify-center align-middle border">
    <Image width={370} height={320} src="/images/xxx.jpg" alt=""  />
     </div>
     <div className="pt-2 pb-2 border mb-[40px] flex justify-around  w-[270px]">
     <Image width={20} height={20} src="/images/share.png" alt="" />
    <p className="text-sm mr-3">0</p>
    <Image width={20} height={20} src="/images/share.png"alt="" />
 <p className="text-sm mr-3">0</p>
 <Image width={20} height={20} src="/images/share.png" alt="" />
  <p className="text-sm mr-3">0</p>
  <Image width={20} height={20} src="/images/share.png" alt="" />
  <p className="text-sm mr-3">0</p>
  </div>
  </div>
</div>
</>
)
}