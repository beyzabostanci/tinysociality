import Card from '../Card/Card'

export default function Listing({posts}){
    return (
        <>
        <div className=" ml-[60px]  w-[1625px] flex flex-wrap flex-col">
            <div className=" h-16 items-center mt-4 flex text-cardtext text-2xl font-Barlow font-medium">6 October 2022</div>
            <div className=" flex flex-wrap">
            {posts&& posts.map(post => <Card key={post} post={post}/> ) }
            </div>
        </div>
        </>
    )
}