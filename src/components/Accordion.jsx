import React, { useState } from 'react';
import {FaPlus} from 'react-icons/fa6';
import {FaMinus} from 'react-icons/fa';

const Accordion = ({question, answer}) => {
    const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className={`rounded-md bg-[#FAF8FF] p-3 mb-2 md:mb-4 ${accordionOpen ? 'text-purple-500' : 'text-black'}`}>
      <button onClick={() => setAccordionOpen(!accordionOpen)} className='flex justify-between gap-4 w-full hover:cursor-pointer'>
        <span className='font-bold text-start md:w-[70%] lg:w-full'>{question}</span>
        {accordionOpen ? <FaMinus /> : <FaPlus />}
      </button>
      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
        accordionOpen ? 'grid-rows-[1fr] bg-opacity-100' : 'grid-rows-[0fr] bg-opacity-0'
      }`}>
        <div className={`overflow-hidden w-[90%] md:w-full mt-2 ${accordionOpen ? 'text-purple-400' : 'text-black'}`}>
            {answer}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
