//import { set } from "date-fns/esm";
import Image from "next/image";
//import { useState } from "react";

export default function Company (){

    return(
        <>
<div className=" w-[88px] bg-sidebar h-screen px-[18px] flex flex-col">
    <button className="w-[50px] h-[50px]  overflow-hidden rounded-lg hover:opacity-100 com transition-opacity opacity-20 mt-[12px] mb-[17px]"><Image src="/images/company1.png" width={"70px"} height={"70px"}  alt="company1" /></button>
    <button  className="w-[50px] h-[50px]  overflow-hidden rounded-lg hover:opacity-100 com transition-opacity opacity-20 mb-[17px] bagde"><Image src="/images/company99.png" width={"70px"} height={"70px"} alt="company1" />
    </button>
    <span className="inline-flex absolute justify-center items-center ml-[40px] w-5 mt-[70px] h-5 text-xs text-center font-semibold bg-noti text-white rounded-full">
    99
  </span>
    <button  className="w-[50px] h-[50px]  overflow-hidden rounded-lg hover:opacity-100 com transition-opacity opacity-20 mb-[17px]"><Image src="/images/company3.png" width={"70px"} height={"70px"}  alt="company1" /></button>
    <button  className="w-[50px] h-[50px]  overflow-hidden rounded-lg hover:opacity-100 com transition-opacity opacity-20 mb-[17px]"><Image src="/images/company4.png" width={"70px"} height={"70px"}  alt="company1" /></button>
    <button  className="w-[50px] h-[50px]  overflow-hidden rounded-lg hover:opacity-100 com transition-opacity opacity-20 mb-[17px]"><Image src="/images/company5.png" width={"70px"} height={"70px"}  alt="company1" /></button>
    <button  className="w-[50px] h-[50px]  overflow-hidden rounded-lg  hover:opacity-100 com transition-opacity opacity-20 mb-[17px]"><Image src="/images/company6.png" width={"70px"} height={"70px"}  alt="company1" /></button>
</div>
        </>
    )
}