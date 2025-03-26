const CardProduct = ({product}) => {
  return (
    <div className='relative flex flex-col justify-between bg-white border-1 border-gray-200 rounded-2xl shadow-xl group transition-all duration-200'>
      <div className="bg-deep-blue absolute -top-6 -left-5 rounded-2xl w-[8rem] h-[6rem] -z-1 hidden group-hover:block transition-all duration-200"></div>
      <div className='w-full h-full flex justify-center items-center px-10 py-4'>
        <img src={product.assets} className='max-h-[10rem] rounded-t-2xl'/>
      </div>
      <div className='bg-primary text-white rounded-b-2xl flex items-center justify-center py-5'>
        <h3 className='font-bold text-xl'>{product.name}</h3>
      </div>
      <div className="bg-light-yellow absolute -bottom-6 -right-5 rounded-2xl w-[8rem] h-[6rem] -z-1 hidden group-hover:block transition-all duration-200"></div>
    </div>
  )
}

export default CardProduct
