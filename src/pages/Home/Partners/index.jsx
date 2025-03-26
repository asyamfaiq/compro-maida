import Slider from "react-slick";

const LIST_PARTNERS = [
    {
        cluster: "Exports",
        list: [
            '/partners/exports/export-1.png',
            '/partners/exports/export-2.png',
            '/partners/exports/export-3.png',
            '/partners/exports/export-4.png',
            '/partners/exports/export-5.png',
            '/partners/exports/export-6.png'
        ]
    },
    {
        cluster: "Domestics",
        list: [
            '/partners/domestics/domestic-1.png',
            '/partners/domestics/domestic-2.png',
            '/partners/domestics/domestic-3.png',
            '/partners/domestics/domestic-4.png',
            '/partners/domestics/domestic-5.png'
        ]
    },
    {
        cluster: "Networking",
        list: [
            '/partners/networking/networking-1.png',
            '/partners/networking/networking-2.png',
            '/partners/networking/networking-3.png',
            '/partners/networking/networking-4.png',
            '/partners/networking/networking-5.png',
            '/partners/networking/networking-6.png'
        ]
    }
]

const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    variableWidth: true,
    className: "slider variable-width",
    pauseOnHover: false,
    pauseOnFocus: true,
}

const Partners = () => {
  return (
    <div className='my-20'>
      <h1 className='font-bold text-deep-blue md:text-4xl text-3xl text-center mb-5 mx-5'>Partners <span className='text-light-yellow'>and Networks</span></h1>
      <div className='flex flex-col lg:gap-8 md:gap-8 gap-3'>
        {
            LIST_PARTNERS.map((partner) => (
                <div key={partner.cluster} className='flex flex-col gap-4'>
                    <h3 className='font-bold lg:text-lg md:text-lg sm:text-base text-sm text-center'>{partner.cluster}</h3>
                    <Slider {...settings}>
                        {partner.list.map((srcAssets, index) => (
                            <div key={index} className="lg:mx-8 md:mx-8 sm:mx-5 mx-3">
                                <img src={srcAssets} alt={`Maida ${partner.cluster} Partner`} className="mx-auto max-h-[5rem] lg:h-[5rem] md:h-[5rem] h-[3rem]" />
                            </div>
                        ))}
                    </Slider>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Partners
