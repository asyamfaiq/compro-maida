import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { IoCall } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='bg-primary text-white lg:px-10 md:px-10 px-5 py-10 flex lg:flex-row md:flex-row flex-col items-center justify-around gap-5'>
        <div className='flex lg:flex-row flex-col items-center gap-5'>
            <div className='w-full h-full'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15834.776242360902!2d112.63531307435525!3d-7.161323870700307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sJl.%20Surakarta%20No.%201%20Gresik%20Kota%20baru!5e0!3m2!1sid!2sid!4v1742926794222!5m2!1sid!2sid" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-[15rem] rounded-2xl'></iframe>
            </div>
            <div className='flex flex-col gap-3 max-w-[30rem] lg:text-left md:text-left text-center'>
                <div>
                    <h2 className='font-bold lg:text-2xl md:text-2xl text-lg'>Head Office</h2>
                    <p className='lg:text-base md:text-base text-sm'>Jl. Surakarta No. 1 Gresik Kota Baru, Gresik East Java, Indonesia.</p>
                </div>
                <div>
                    <h2 className='font-bold lg:text-2xl md:text-2xl text-lg'>Branch Office</h2>
                    <ul className='lg:list-disc lg:ml-5 m-0'>
                        <li className='lg:text-base md:text-base text-sm'>GAC Blok K No. 5, Kambu, Kendari, North Sulawesi, Indonesia.</li>
                        <li className='lg:text-base md:text-base text-sm'>Jalan Hijrah, Galala, Sofifi, North Maluku, Indonesia.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='lg:block md:block hidden border-1 border-white text-white h-[13rem] mx-10'></div>
        <div className='lg:w-max w-full lg:text-left md:text-left text-center'>
            <h3 className='font-bold lg:text-2xl md:text-2xl text-lg mb-2 lg:w-max w-full'>Lets Discuss What's Next</h3>
            <p className='lg:text-base md:text-base text-sm'>Have a project or a question?</p>
            <p className='lg:text-base md:text-base text-sm'>We'd love to hear from you.</p>
            <div className='flex flex-col justify-center lg:items-start md:items-start items-center gap-2 mt-3'>
                <Link><button className='cursor-pointer lg:w-full md:w-full sm:w-full w-max flex gap-2 bg-deep-blue hover:bg-deep-blue/50 outline-white outline-1 items-center px-2 py-2 rounded-xl'>
                    <FaWhatsapp className='text-secondary text-2xl'/>
                    <p className='lg:text-base md:text-base text-sm'>(+62) 811-3330-544</p>
                </button></Link>
                <Link><button className='cursor-pointer lg:w-full md:w-full sm:w-full w-max flex gap-2 bg-deep-blue hover:bg-deep-blue/50 outline-white outline-1 items-center px-2 py-2 rounded-xl'>
                    <IoCall className='text-secondary text-2xl'/>
                    <p className='lg:text-base md:text-base text-sm'>(031) 582-862-00</p>
                </button></Link>
                <Link><button className='cursor-pointer lg:w-full md:w-full sm:w-full w-max flex gap-2 bg-deep-blue hover:bg-deep-blue/50 outline-white outline-1 items-center px-2 py-2 rounded-xl'>
                    <IoMdMail className='text-secondary text-2xl'/>
                    <p className='lg:text-base md:text-base text-sm'>maidafortuna@gmail.com</p>
                </button></Link>
            </div>
        </div>
      </div>
      <div className='-mt-5 flex items-center justify-center bg-light-yellow rounded-t-3xl py-2'>
        <h4 className='font-bold text-strong-blue text-center lg:text-base md:text-base text-xs'>2025 Maida Fortuna Group. All Right Reserved</h4>
      </div>
    </>
    
  )
}

export default Footer
