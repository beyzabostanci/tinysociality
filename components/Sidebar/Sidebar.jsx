import Image from "next/image";
import { useState } from "react";

export default function Sidebar (){
    const [opacity, setOpacity] = useState(0)
    const buttonHandler = () => {
        const elem = document.querySelectorAll(".faded");
        if (elem.style.opacity === "0.7"){
            elem.style.opacity = "1";
        }else{
            elem.style.opacity ="0.7";
        }


}
    return(
        <>
<div className=" w-[88px] border bg-sidebar h-screen flex flex-col">
    <button onClick={() => setOpacity(1)} className="w-[50px] h-[50px] border overflow-hidden rounded-lg  mt-7 mb-4"><Image src="/images/company1.png" width={"50px"} height={"50px"}  alt="company1" /></button>
    <button className="w-[50px] h-[50px] border overflow-hidden rounded-lg faded mt-4 mb-4"><Image src="/images/company99.png" width={"50px"} height={"50px"} alt="company1" /></button>
    <button className="w-[50px] h-[50px] border overflow-hidden rounded-lg faded mt-4 mb-4"><Image src="/images/company3.png" width={"50px"} height={"50px"}  alt="company1" /></button>
    <button className="w-[50px] h-[50px] border overflow-hidden rounded-lg faded mt-4 mb-4"><Image src="/images/company4.png" width={"50px"} height={"50px"}  alt="company1" /></button>
    <button className="w-[50px] h-[50px] border overflow-hidden rounded-lg  faded mt-4 mb-4"><Image src="/images/company5.png" width={"50px"} height={"50px"}  alt="company1" /></button>
    <button className="w-[50px] h-[50px] border overflow-hidden rounded-lg faded mt-4 mb-4"><Image src="/images/company6.png" width={"50px"} height={"50px"}  alt="company1" /></button>
</div>
        </>
    )
}