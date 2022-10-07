import { set } from "date-fns/esm";
import Image from "next/image";
import { useState } from "react";

export default function Company ({button}){
   const [isActive, setIsActive] = useState(false);
 const buttonHandler = () => {
    setIsActive(current => !current)
 }
    return(
        <>
<div className=" w-[88px] bg-sidebar h-screen px-[18px] flex flex-col">
    <button onClick={buttonHandler} className="w-[50px] h-[50px] border overflow-hidden rounded-lg   mt-7 mb-4"><Image src="/images/company1.png" width={"50px"} height={"50px"}  alt="company1" /></button>
    <button onClick={buttonHandler} className="w-[50px] h-[50px] border overflow-hidden rounded-lg  mt-4 mb-4"><Image src="/images/company99.png" width={"50px"} height={"50px"} alt="company1" /></button>
    <button onClick={buttonHandler} className="w-[50px] h-[50px] border overflow-hidden rounded-lg  mt-4 mb-4"><Image src="/images/company3.png" width={"50px"} height={"50px"}  alt="company1" /></button>
    <button onClick={buttonHandler} className="w-[50px] h-[50px] border overflow-hidden rounded-lg  mt-4 mb-4"><Image src="/images/company4.png" width={"50px"} height={"50px"}  alt="company1" /></button>
    <button onClick={buttonHandler} className="w-[50px] h-[50px] border overflow-hidden rounded-lg  mt-4 mb-4"><Image src="/images/company5.png" width={"50px"} height={"50px"}  alt="company1" /></button>
    <button onClick={buttonHandler} className="w-[50px] h-[50px] border overflow-hidden rounded-lg  mt-4 mb-4"><Image src="/images/company6.png" width={"50px"} height={"50px"}  alt="company1" /></button>
</div>
        </>
    )
}