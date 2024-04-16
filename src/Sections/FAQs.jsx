import React from 'react'
import Accordion from '../components/Accordion'

const FAQs = () => {
  return (
    <div className="mx-auto p-4 md:w-[80%] lg:w-[60rem] lg:px-8">
        <h2 className='text-center font-bold mb-3 text-[#6B3CC9] text-xl lg:text-2xl'>Frequently asked questions</h2>
      <div>
        <Accordion question="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?" answer="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."/>
        <Accordion question="Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?" answer="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."/>
        <Accordion question="Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?" answer="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."/>
      </div>
    </div>
  )
}

export default FAQs