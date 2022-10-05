import * as React from "react";

export default function Layout (){
    return(
    <>
    <div className="h-screen bg-slate-100">
<div className=" flex h-24 ml-16  justify-between">
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
<button className="rounded-full border bg-black h-20 w-20 mt-10 ml-96 mr-16"></button>
</div>
</div>
    </>
    )
}