import React, { useState } from 'react';
import Stepper from '../../../components/Stepper';

const milestone = [
    {
        id: 1,
        year: 2022,
        img: '/milestone/milestone-1.png',
        content: 'Maida Fortuna Group was founded on May, 2022 in Surabaya by 5 founders who have been experts in the seafood business for at least 13 years. The first export was Octopus Flower to Livorno, Italy and continued to several countries in Europe, Asia and America',
    },
    {
        id: 2,
        year: 2023,
        img: '/milestone/milestone-2.png',
        content: 'Apart from the export market, the domestic market is also starting to be worked on, especially in mining. The first mining project was in the PT Hillcon which is located in Halmahera, North Maluku.',
    },
    {
        id: 3,
        year: 2024,
        img: '/milestone/milestone-3.png',
        content: 'It turns out that the mining business is very promising so we need to expand into various projects without forgetting the export market which we also need to increase. In 2024 we have a request for a third mining project, namely PT Hillcon which is located in Konawe, North Sulawesi. And we also prepare adequate manufacturing facilities ourselves to support Quality, Quantity and Sustainability stability.',
    }
]

const Milestone = () => {
  const [ currentMilestone, setCurrentMilestone ] = useState({
    id: 1,
    year: 2022,
    img: '/milestone/milestone-1.png',
    content: 'Maida Fortuna Group was founded on May, 2022 in Surabaya by 5 founders who have been experts in the seafood business for at least 13 years. The first export was Octopus Flower to Livorno, Italy and continued to several countries in Europe, Asia and America',
  });

  return (
    <div className='w-full bg-blue-sky mt-20 pt-10 pb-20 lg:px-20 md:px-15 px-5'>
      <h1 className='font-bold text-deep-blue lg:text-4xl md:text-4xl text-3xl lg:text-right md:text-right text-center'>Milestone Company</h1>
      <div className='flex lg:flex-row md:flex-row flex-col items-center justify-between gap-20 mt-10 lg:px-10 md:px-10 px-5'>
        <div className='w-max'>
            <Stepper data={milestone} dataActive={currentMilestone} setDataActive={setCurrentMilestone}/>
        </div>
        <div className='lg:w-[75%] md:w-[85%] w-full relative transition-all duration-300'>
            <div className="bg-primary absolute -top-10 -left-10 rounded-lg w-[12rem] h-[8rem] z-1"></div>
            <div className='relative bg-white rounded-xl lg:px-5 md:px-5 px-3 py-5 z-2'>
                <div className='flex lg:flex-row md:flex-row flex-col items-center gap-5'>
                    <img src={currentMilestone.img} className='max-w-[20rem] w-full rounded-md'/>
                    <p className='lg:text-lg md:text-lg text-base'>
                        {currentMilestone.content}
                    </p>
                </div>
            </div>
            <div className="bg-light-yellow absolute -bottom-10 -right-10 rounded-lg w-[12rem] h-[8rem]"></div>
        </div>
      </div>
    </div>
  )
}

export default Milestone
