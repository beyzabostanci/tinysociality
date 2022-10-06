import Card from "/components/Card/Card"

export default function Listing(card){
    return (
        <>
        <div className=" ml-[60px]  w-[1625px] flex flex-col">
            <div className=" h-16 items-center mt-4 flex text-cardtext text-2xl font-Barlow font-medium">6 October 2022</div>
            <div className=" flex">
                <Card />
                <Card />
            </div>
        </div>
        </>
    )
}