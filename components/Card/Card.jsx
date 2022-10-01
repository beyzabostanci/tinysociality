import Image from "next/image";
import * as React from "react";

export default function Card() {
return (
<>
<div className="max-w-sm rounded shadow-lg flex flex-row h-1/5 border border-green-500">
<div className="w-32 bg-pink-500 border items-center content-center justify-center border-pink-500 flex">
<Image width={100} height={100} src="/images/xxx.jpg" alt=""  />
</div>
<div class="px-5 py-4 border border-yellow-600 flex flex-col">
    <div class="flex justify-between">
    <div class="text-sm mb-2 border text-gray-400">21/09/2022 18:18</div>
    <div class="flex border w-24 justify-around">
      <Image width={20} height={20} src="/images/xxx.jpg" alt="" />
      <Image width={20} height={20} src="/images/xxx.jpg" alt="" />
      <Image width={20} height={20} src="/images/xxx.jpg" alt="" />
    </div>
    </div>
    <p class="text-gray-500 mb-3 text-sm border">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
    <div class="mb-2">
    <Image width={100} height={100} src="/images/xxx.jpg" alt=""  />
     </div>
     <div class="pt-2 pb-2 flex border w-56">
     <Image width={20} height={20} src="/images/xxx.jpg" alt="" />
    <p class="text-sm mr-3">123</p>
    <Image width={20} height={20} src="/images/xxx.jpg"alt="" />
 <p class="text-sm mr-3">123</p>
 <Image width={20} height={20} src="/images/xxx.jpg" alt="" />
  <p class="text-sm mr-3">123</p>
  <Image width={20} height={20} src="/images/xxx.jpg" alt="" />
  <p class="text-sm mr-3">123</p>
  </div>
  </div>
</div>
</>
)
}