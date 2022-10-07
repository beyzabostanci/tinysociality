import * as React from "react";
import Image from "next/image";

export default function Navbar (){
    return(
    <>
    <div className="h-[90px] w-[1685px] ">
<div className=" flex h-24 ml-[60px] justify-between">
    <div className="flex ">
    <div className="flex flex-row  mt-10 mr-5 items-center ">
<div className="rounded-full h-4 w-4 bg-greys mr-2 "></div>
<p>Published</p>
</div>

    <div className="flex flex-row  mt-10 mr-5 items-center">
<div className="rounded-full h-4 w-4 bg-green mr-2"></div>
<p>Scheduled</p>
</div>

    <div className="flex flex-row  mt-10 mr-5 items-center">
<div className="rounded-full  h-4 w-4 bg-orange mr-2"></div>
<p>Need Approval</p>
</div>

    <div className="flex flex-row  mt-10 mr-5 items-center">
<div className="rounded-full h-4 w-4 bg-errors mr-2"></div>
<p>Error</p>
</div>

    <div className="flex flex-row  mt-10 mr-5 items-center">
<div className="rounded-full h-4 w-4 bg-blue-300 mr-2"></div>
<p>Notes</p>
</div>
</div>
<button className="rounded-full border overflow-hidden bg-black h-[75px] w-[75px] mt-10 ml-96 mr-16"><Image src="/images/xxx.jpg" alt="" width={75} height={75}/></button>
</div>
</div>
    </>
    )
}