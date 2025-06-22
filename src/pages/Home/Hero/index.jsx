import { Carousel } from "primereact/carousel"

const srcAssets = [1, 2, 3, 4, 5].map(n => `${import.meta.env.BASE_URL}hero/hero-${n}.png`);

const carouselTemplate = (data) => (
    <div className="flex rounded-xl">
        <img src={data} className="rounded-xl"/>
    </div>
)

const Hero = () => {
  return (
    <div id="home" className="flex lg:flex-row md:flex-row flex-col items-center gap-15 pt-25 lg:mx-10 md:mx-10 sm:mx-10 mx-5">
      <div className="h-full relative lg:max-w-[40rem] md:max-w-[40rem] sm:max-w-[40rem] max-w-full lg:px-10 md:px-7 px-5">
        <div className="bg-light-yellow absolute -top-10 left-0 rounded-lg w-[12rem] h-[8rem]"></div>
        <Carousel 
          value={srcAssets} 
          numVisible={1} 
          numScroll={1} 
          className="custom-carousel" 
          circular 
          autoplayInterval={4000} 
          itemTemplate={carouselTemplate}
          showNavigators={false}
        />
        <div className="bg-light-yellow absolute -bottom-0 right-0 rounded-lg w-[12rem] h-[8rem] -z-1"></div>
      </div>
      <div className="flex flex-col gap-3 lg:pb-20">
        <h1 className="text-deep-blue lg:text-4xl md:text-4xl text-3xl font-bold">Maida Fortuna</h1>
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
