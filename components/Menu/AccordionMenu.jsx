import React from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
//import Link from 'next/link';
import Image from 'next/image';

export default function AccordionMenu() {
    return (
        <>
<div className='w-[277px] h-screen bg-menu font-Raleway'>
    <Accordion atomic={true}>
        <div>
    <div className='flex flex-row justify-between'>
<Image src="/images/icon1.png" alt='icon1' width={25} height={25} />
</div>
      <AccordionItem  title="Notifications">

      </AccordionItem>

</div>
<div>
      <AccordionItem title="Summary">

      </AccordionItem>
      </div>
      <div>
      <AccordionItem title="Publish">
      <PublishContent />
      </AccordionItem>
      </div>

<div>
<AccordionItem  title="Engage">

      </AccordionItem>
      </div>
      <div>
      <AccordionItem title="Listen">

      </AccordionItem>
      </div>
      <div>
      <AccordionItem title="Report">

      </AccordionItem>
      </div>
    </Accordion>
  </div>
        </>
    );

}
const PublishContent = () => (
    <>
    <div className='bg-menubuttons'>
    <div className='ml-8  '>
    <li className='p-4 hover:text-pickedmenu'><Button name="Compose"/></li>
    <li className='p-4 focus:text-pickedmenu hover:text-pickedmenu'> <Button name="Feed"/> </li>
    </div>
    </div>
    </>
)
const Button = ({name}) =>(
    <button>{name}</button>
)