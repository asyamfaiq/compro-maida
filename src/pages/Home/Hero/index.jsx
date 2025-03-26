import { Carousel } from "primereact/carousel"

const srcAssets = [
    '/hero/hero-1.png',
    '/hero/hero-2.png',
    '/hero/hero-3.png',
    '/hero/hero-4.png',
    '/hero/hero-5.png'
]

const carouselTemplate = (data) => (
    <div className="flex rounded-xl">
        <img src={data} className="rounded-xl"/>
    </div>
)

const Hero = () => {
  return (
    <div className="flex items-center gap-15 pt-25 mx-10">
      <div className="h-full relative max-w-[40rem]">
        <div className="bg-light-yellow absolute -top-10 left-0 rounded-2xl w-[12rem] h-[8rem]"></div>
        <Carousel 
            value={srcAssets} 
            numVisible={1} 
            numScroll={1} 
            className="custom-carousel" 
            circular 
            autoplayInterval={4000} 
            itemTemplate={carouselTemplate}
        />
        <div className="bg-light-yellow absolute -bottom-0 right-0 rounded-2xl w-[12rem] h-[8rem] -z-1"></div>
      </div>
      <div className="flex flex-col gap-3 lg:pb-20">
        <h1 className="text-primary text-4xl font-bold">Maida Fortuna</h1>
        <p className="text-lg">
            Maida Fortuna Group is a company engaged in seafood processing and supplying 
            groceries based in Central Java, Indonesia. We have experience exporting frozen 
            fish products to United States, Europe and several countries in SouthAsia. 
            Currently, we also supply daily needs such as meat and poultry, vegetables and 
            fruits, dry goods, beverages, and even chemical materials to several mining 
            companies in Eastern Indonesia.
        </p>
      </div>
    </div>
  )
}

export default Hero
