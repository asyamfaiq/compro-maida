import { useEffect, useState } from "react"

const Stepper = ({data=[], setDataActive, dataActive}) => {
  const [ activeIndex, setActiveIndex ] = useState(0);

  useEffect(() => {
    setActiveIndex(data.findIndex(item => item.id === dataActive.id));
  }, [data, dataActive]);

  return (
    <div className="flex flex-col">
      {
        data.map((step, index) => (
            <div key={index} className='flex flex-col items-center' onClick={() => setDataActive(step)}>
                <div className={`flex items-center justify-center size-17 rounded-full text-white font-bold p-2 ${index <= activeIndex ? 'bg-strong-blue' : 'bg-gray-300'} ${index === activeIndex && 'border-4 border-light-yellow'} cursor-pointer`}>
                    {step.year}
                </div>
                { (index !== (data.length - 1) ) && <div className={`border-3 ${index < activeIndex ? 'border-strong-blue' : 'border-gray-300'} h-15 transition-all duration-300`} /> }
            </div>
        ))
      }
    </div>
  )
}

export default Stepper