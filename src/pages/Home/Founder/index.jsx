import { Carousel } from "primereact/carousel";
import CardFounder from "./CardFounder";

const LIST_FOUNDER = [
    {
        id: 1,
        title: 'Chief Executive Officer',
        img: `${import.meta.env.BASE_URL}founder/ceo.png`,
        name: 'Saiful Azis',
        desc: 'is CEO of Maida Fortuna. He has more than 16 years of experience leadership leading companies in various business fields, He is a professional expert on pasteurised crab canning, frozen & fillet of chepalopodha and baby anchovy & tobiko dried product.'
    },
    {
        id: 2,
        title: 'Chief Operating Officer',
        img: `${import.meta.env.BASE_URL}founder/coo.png`,
        name: 'Khoiruddin',
        desc: 'is Chief Operating Officer at Maida Fortuna. He has 15 years of forged-experiences in shrimp pond hatchery and pasteurised crab picking station'
    },
    {
        id: 3,
        title: 'Chief Procurement Officer',
        img: `${import.meta.env.BASE_URL}founder/cpo.png`,
        name: 'Mahbub Junaidy',
        desc: 'is Chief Procurement Officer, He has experiences 13 years on crab picking  station,  mud  crab production  at  East Kalimantan, frozen fish, and chepalopoda in Kendari and Makasar then dried seafood products.'
    },
    {
        id: 4,
        title: 'Chief Financial Officer',
        img: `${import.meta.env.BASE_URL}founder/cfo.png`,
        name: 'Agudz Zulkarnain',
        desc: 'is Chief Financial Officer Maida Fortuna.  2005-2017 : Asmen Procurement Crab, area Sulawesi. 2017-2019 : Factory Manager Unit Fish Kendari. 2019-2022 : Factory Manager Unit Fish Makassar.'
    },
    {
        id: 5,
        title: 'Business Development & Partnership',
        img: `${import.meta.env.BASE_URL}founder/bdo.png`,
        name: ' Arifianto M. P',
        desc: 'Has 17 years of experience in Seafood Industries Unit Crab, Fish, Shrimp.'
    },
    {
        id: 6,
        title: 'Quality And Food Safety Management',
        img: `${import.meta.env.BASE_URL}founder/qms.png`,
        name: 'Eddo Kurniawan',
        desc: 'is expert for Seafood Industries for more than 14 years. Certified Lean Six Sigma Green Belt. With Maida Team, controlling productivity rates, quality rates by implementing quality control programmes'
    }
];
const LIST_FOUNDER_REVERSE = LIST_FOUNDER.reverse(); 
const responsiveOptions = [
  {
    breakpoint: '700px',
    numVisible: 1,
    numScroll: 1
  }
];

const Founder = () => {
  return (
    <div id="founder" className="relative bg-blue-sky mt-30 lg:pt-35 md:pt-35 sm:pt-35 pt-20 pb-20 px-10">
      <div className="bg-primary absolute -top-7 left-0 rounded-e-md lg:px-10 md:px-10 px-5 py-3">
        <h1 className="font-bold text-white lg:text-4xl md:text-4xl text-3xl">Founder</h1>
      </div>
      <div className="lg:flex md:flex sm:flex hidden flex-row-reverse gap-3 pl-20">
        {
          LIST_FOUNDER_REVERSE.map((founder) => <CardFounder key={founder.id} data={founder} className={'w-[20rem] -ml-20'}/>)
        } 
      </div>
      <div className="lg:hidden md:hidden sm:hidden block">
        <Carousel
          value={LIST_FOUNDER}
          className="custome-carousel"
          numVisible={3}
          circular
          autoplayInterval={3000}
          showNavigators={false}
          showIndicators={false}
          itemTemplate={(founder) => <CardFounder data={founder}/>}
          responsiveOptions={responsiveOptions}
        />
      </div>
      <div className="bg-light-yellow absolute -bottom-7 right-0 rounded-e-md w-[12rem] h-[4rem] md:px-10 px-5 py-3"></div>
    </div>
  )
}

export default Founder
