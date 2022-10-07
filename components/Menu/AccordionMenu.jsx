import React from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
//import Link from 'next/link';

export default function AccordionMenu() {
    return (
        <>
<div className='w-[277px] h-screen bg-menu font-Raleway'>
    <Accordion atomic={true}>
    <div>
      <AccordionItem  title="Notifications">

      </AccordionItem>
      <AccordionItem title="Summary">

      </AccordionItem>

      <AccordionItem title="Publish">
      <PublishContent />
      </AccordionItem>
      </div>
<div>
<AccordionItem  title="Engage">

      </AccordionItem>

      <AccordionItem title="Listen">

      </AccordionItem>

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
    <div className='ml-8 '>
    <li className='p-4  hover:text-pickedmenu'><Button name="Compose"/></li>
    <li className='p-4  hover:text-pickedmenu'> <Button name="Feed"/> </li>
    </div>
    </>
)
const Button = ({name}) =>(
    <button>{name}</button>
)