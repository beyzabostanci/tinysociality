import React from 'react';
//import { Accordion, AccordionItem } from 'react-light-accordion';
//import Link from 'next/link';
import Image from 'next/image';

export default function AccordionMenu() {
    return (
        <>
     <div className='w-full h-screen max-w-lg mx-auto  bg-menu'>
        <details className="w-full cursor-pointer ">
            <summary className="w-full text-lg text-white flex justify-between px-4 py-5 uppercase "> <Image src="/images/icon1.png" alt="" width={30} height={30}></Image>Notifications <span className="inline-flex justify-center items-center w-10  h-6 text-md text-center font-semibold border border-noti text-white rounded-md">
    29
  </span></summary>
        </details>

        <details className="w-full cursor-pointer ">
            <summary className="w-full text-lg  text-white  flex justify-between px-4 py-5 uppercase after:content-['+']"> <Image src="/images/icon2.png" alt="" width={30} height={30}></Image>Summary</summary>
            <p className="px-4 text-white py-3">
            Fusce sed laoreet ex. Aenean justo nisl, eleifend eget eleifend sit amet
            </p>
        </details>

        <details className="w-full cursor-pointer ">
            <summary className="w-full text-lg  text-white  flex justify-between px-4 py-5 uppercase after:content-['+']"><Image src="/images/icon3.png" alt="" width={30} height={30}></Image>
            Publish
            </summary>
            <div className='bg-menubuttons'>
            <div className='flex ml-8 flex-col'>

           <li className='focus:text-pickedmenu  p-4 hover:text-pickedmenu text-white' > <button>Compose</button></li>
           <li className='focus:text-pickedmenu  p-4 hover:text-pickedmenu text-white'> <button>Feed</button></li>

          </div>
            </div>

        </details>
        <details className="w-full  cursor-pointer ">
            <summary className="w-full text-lg  text-white  flex justify-between px-4 py-5 uppercase after:content-['+']"><Image src="/images/icon4.png" alt="" width={30} height={30}></Image> Engage</summary>
            <p className="px-4 py-3 text-white">
            Nunc posuere dapibus urna quis cursus. Mauris malesuada tincidunt diam vel placerat mi tincidunt ac.
            </p>
        </details>
        <details className="w-full  cursor-pointer">
            <summary className="w-full text-lg text-white  flex justify-between px-4 py-5 uppercase after:content-['+']"><Image src="/images/icon5.png" alt="" width={30} height={30}></Image>Listen</summary>
            <p className="px-4  text-white py-3">
            Nunc posuere dapibus urna quis cursus. Mauris malesuada tincidunt diam vel placerat mi tincidunt ac.
            </p>
        </details>
        <details className="w-full   cursor-pointer ">
            <summary className="w-full text-lg text-white  flex justify-between px-4 py-5 uppercase after:content-['+']"> <Image src="/images/icon6.png" alt="" width={30} height={30}></Image>Report</summary>
            <p className="px-4 py-3 text-white">
            Nunc posuere dapibus urna quis cursus. Mauris malesuada tincidunt diam vel placerat mi tincidunt ac.
            </p>
        </details>
        </div>
        </>
    );
}