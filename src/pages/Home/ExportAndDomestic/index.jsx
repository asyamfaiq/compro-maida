import { useState } from "react";
import Button from "../../../components/Button"
import { Carousel } from "primereact/carousel";
const LIST_MENU = [
    {
        label: "Frozen Seafoods",
        assets: ['/frozen seafoods/fs-1.png', '/frozen seafoods/fs-2.png', '/frozen seafoods/fs-3.png', '/frozen seafoods/fs-4.png', '/frozen seafoods/fs-5.png']
    },
    {
        label: "Vegetables & Fruits",
        assets: ['/vegetables fruits/vf-1.png', '/vegetables fruits/vf-2.png', '/vegetables fruits/vf-3.png', '/vegetables fruits/vf-4.png']
    },
    {
        label: "Dry Food & Baverages",
        assets: ['/dry food/df-1.png', '/dry food/df-2.png', '/dry food/df-3.png', '/dry food/df-4.png']
    },
];

const ExportAndDomestic = () => {
  const [ activeMenu, setActiveMenu ] = useState({
    label: "Frozen Seafoods",
    assets: ['/frozen seafoods/fs-1.png', '/frozen seafoods/fs-2.png', '/frozen seafoods/fs-3.png', '/frozen seafoods/fs-4.png', '/frozen seafoods/fs-5.png']
  });

  return (
    <div className="relative flex flex-col gap-4 mt-20 mx-20">
      <h1 className="text-deep-blue font-bold text-4xl">Export and <span className="text-light-yellow">Domestic</span></h1>
      <div className="flex gap-3">
        {
            LIST_MENU.map((menu) => <Button key={menu.label} label={menu.label} className={`outline-1 outline-primary ${activeMenu.label === menu.label ? 'bg-primary text-white' : 'bg-white text-primary hover:bg-blue-sky/30'} focus:outline-2 focus:outline-offset-2`} onClick={() => setActiveMenu(menu)}/>)
        }
      </div>
      <Carousel 
        value={activeMenu.assets} 
        className="custom-carousel" 
        numVisible={3}
        circular 
        autoplayInterval={5000} 
        showNavigators={false}
        itemTemplate={(data) => <div className="h-[20rem] w-full px-2"><img src={data} className="rounded-2xl h-full w-full object-cover shadow-xl"/></div>}
      />
      {/* <div className="bg-light-yellow absolute top-30 -right-60 rounded-2xl w-[30rem] h-[20rem] rotate-145 -z-1"></div> */}
    </div>
  )
}

export default ExportAndDomestic
