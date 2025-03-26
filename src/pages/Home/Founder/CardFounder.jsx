const CardFounder = ({data}) => {
  return (
    <div className='rounded-xl bg-white dark:bg-gray-800 hover:bg-deep-blue hover:text-white hover:z-2 relative shadow-xl duration-300 group w-[20rem] -ml-20'>
        <div className='h-[170px]'>
            <img src={data.img} alt="-" className='max-h-[250px] object-contain mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'/>
        </div>
        <div className='flex flex-col gap-1 text-center px-5 py-3'>
            <p className='text-gray-600 italic group-hover:text-white'>{data.name}</p>
            <h1 className='font-bold text-lg'>{data.title}</h1>
            <p className='text-xs text-gray-800 group-hover:text-white'>{data.desc}</p>
        </div>
    </div>
  )
}

export default CardFounder
