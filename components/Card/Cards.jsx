import Card from "./Card";
import react from "react";
import data from "/data/data.json";

export default function Cards (){
    return (
        <>
        <div className=" ml-[60px]  w-[1625px] flex flex-wrap flex-col">
            <div className=" h-16 items-center mt-4 flex text-cardtext text-2xl font-Barlow font-medium">6 October 2022</div>
            <div className=" flex flex-wrap">
                {data.map((data) => {
                    return <Card data={data} key={data.channel} />
                })}
            </div>
        </div>
        </>
    )
}