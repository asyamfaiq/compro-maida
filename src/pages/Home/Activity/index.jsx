import React, { useState } from 'react'
import Button from '../../../components/Button';
import { FiCheckSquare } from 'react-icons/fi';
import Markdown from 'react-markdown';

const activityMenu = [
    { 
        title: 'Domestic Activity',
        asset: '/activity/domestic.png',
        content: "In the past year, we have supplied\n\n**FROZEN PRODUCTS**\n\n • 200,000 kgs of Red/ Black Nila Fish (Farmed Freshwater)\n\n• 285,000 kgs of Demersal Fish (Seafood)\n\n• 95,000 kgs of Beef and Chicken Carcass\n\n• 35,000 kgs of Ribbon Fish (Seafood)\n\n**GROCERIES**\n\n• 454,000 kgs of Vegetables and Fruits\n\n• 412,000 UOMs of Dry Goods and Beverages\n\n• 62,968 UOMs of Chemicals and Materials" 
    }, 
    {
        title: 'Export & Relations',
        asset: '/activity/export.png',
        content: "**2023, April**\n\nOctopus Flower NW 16,599 kgs to EMME Gel S.R.L, Livorno, Italy\n\n**2022, June**\n\nOctopus Flower NW 13,635 kgs to NORDIC Seafood A/S, Aarhus, Denmark\n\n**2022, Sept**\n\nOctopus Ball and Red Snapper WGGS, NW 20,265 kgs to OCT Seafood Ltd., Chicago, United States\n\n**2022, Nov**\n\nCuttlefish Whole Round NW 25,360 kgs to Vinh Thinh Phat Ltd., Ho Chi Minh, Vietnam\n\n**2023, June**\n\nYellow Fin Tuna GG, NW 25,115 kgs to Trang Thuy Seafood Ltd., Tuy Hoa City, Vietnam\n\n**2023, Sept**\n\nRibbon Fish Whole Round NW 24,850 kgs to Tianjin Jinqinglian Trade Ltd., Tianjin, China\n\n**2024, Jan**\n\nFrozen Emperor Whole Gilled Scaled NW 19.800 kgs to Eur Frozen Fish SRL., Milan, Italy\n\n**2024, Feb**\n\nYellow Fin Tuna GG WR NW 25,115 kgs to Trang Thuy Seafood Ltd., Tuy Hoa City, Vietnam\n\n**2024, Mar**\n\nTuna Loin - Sashimi NW 350 kgs to S&K Food Trading PTY LTD., Sydney, Australia\n\n"
    }
];

const Activity = () => {
  const [ activeMenu, setActiveMenu ] = useState({ 
    title: 'Domestic Activity',
    asset: '/activity/domestic.png',
    content: "In the past year, we have suppliee\n\n**FROZEN PRODUCTS**\n\n* 200,000 kgs of Red/ Black Nila Fish (Farmed Freshwater)\n\n* 285,000 kgs of Demersal Fish (Seafood)\n\n* 95,000 kgs of Beef and Chicken Carcass\n\n* 35,000 kgs of Ribbon Fish (Seafood)\n\n**GROCERIES**\n\n* 454,000 kgs of Vegetables and Fruits\n\n* 412,000 UOMs of Dry Goods and Beverages\n\n* 62,968 UOMs of Chemicals and Materials" 
  })
  
  return (
    <div className='flex flex-col gap-3 mt-20 lg:mx-20 md:mx-15 sm:mx-10 mx-5'>
      <div className='flex lg:flex-row md:flex-row sm:flex-row flex-col gap-3 justify-between items-center'>
        <h1 className='font-bold lg:text-4xl md:text-4xl text-3xl text-deep-blue'>What We Do?</h1>
        <div className='flex gap-2'>
            {
                activityMenu.map((menu, index) => (
                    <Button key={index} label={menu.title} className={`text-md font-medium ${menu.title === activeMenu.title ? 'bg-secondary text-white hover:bg-secondary/80' : 'bg-transparent text-secondary hover:bg-light-yellow/40'} focus:outline-2 focus:outline-offset-2 focus:outline-secondary py-2`} onClick={() => setActiveMenu(menu)}/>
                ))
            }
        </div>
      </div>
      <div className='flex flex-col gap-5 border-1 border-gray-200 rounded-2xl shadow-lg lg:px-10 md:px-10 sm:px-10 px-5 py-5 '>
        <div className='flex items-center gap-3 text-xl'>
            <FiCheckSquare className='text-primary'/>
            <h2 className='font-medium'>{activeMenu.title}</h2>
        </div>
        <div className='flex lg:flex-row sm:flex-row flex-col items-center lg:gap-10 md:gap-10 gap-5 transition-all duration-500'>
            <img src={activeMenu.asset} alt='Maida' className='max-w-[20rem] w-full transition-all duration-500'/>
            <div className='transition-all duration-500 lg:text-lg md:text-lg text-base max-h-[20rem] overflow-y-auto text-ellipsis'>
                <Markdown>
                    {activeMenu.content}
                </Markdown>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Activity
