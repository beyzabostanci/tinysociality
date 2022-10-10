import Image from "next/image";
import * as React from "react";
//import data from "./data/data.json"

export default function Card({data}) {

 //const status = data.data.status;
//let img, color;
  //if (status === 3) {
    //img = "/images/block.png"
    //color = 'greys';
  //} else if (status === 0) {
    //img = "/images/tick.png"
    //color = 'orange';
  //}
  //else if (status === 1) {
    //img = <></>
    //color = 'green';
  //}


return (
<>
<div className="w-[492px] mr-[42px] rounded-lg overflow-hidden  shadow-lg flex flex-row h-[565px]">
<div className="w-32 bg-pink-500  items-center justify-center flex">
<Image width={20} height={37} src={data.channel} alt="logo"  />
</div>
<div className="px-5 py-4 border flex flex-col">
    <div className="flex mt-7 justify-between align-middle border">
    <div className="text-md border font-semibold text-gray-400">{data.published_at}</div>
    <div className="flex border w-32 align-middle justify-around">
      <Image width={20} height={20} src="/images/trash.png" alt="" />
      <Image width={20} height={20} src="/images/tick.png" alt="" />
      <Image width={25} height={20} src="/images/more.png" alt="" />
    </div>
    </div>
    <p className="text-cardtext mb-3 mt-7 text-md font-semibold border">{data.entry.message}</p>
    <div className="mb-2 flex justify-center align-middle border">
    <Image width={370} height={320} src={data.entry.image} alt=""  />
     </div>
     {/*need if else statement here for icons change*/}
     <div className="pt-2 pb-2 border mb-[40px] flex justify-around  w-[270px]">
     <Image width={20} height={20} src="/images/like.png" alt="" />
    <p className="text-sm mr-3">{10 + Math.floor((Math.random() * (90)))}</p>
    <Image width={20} height={20} src="/images/share.png"alt="" />
 <p className="text-sm mr-3">{10 + Math.floor((Math.random() * (90)))}</p>
 <Image width={20} height={20} src="/images/share.png" alt="" />
  <p className="text-sm mr-3">{10 + Math.floor((Math.random() * (90)))}</p>
  <Image width={20} height={20} src="/images/share.png" alt="" />
  <p className="text-sm mr-3">{10 + Math.floor((Math.random() * (90)))}</p>
  </div>
  </div>
</div>
</>
)
}