import { useState } from "react";
import Button from "../../../components/Button";
import { Carousel } from "primereact/carousel";

// Helper untuk menambahkan BASE URL (wajib untuk GitHub Pages)
const withBase = (folder, files) =>
  files.map(file => `${import.meta.env.BASE_URL}${folder}/${file}`);

// Daftar menu dengan path gambar yang aman untuk production
const LIST_MENU = [
  {
    label: "Frozen Seafoods",
    assets: withBase('frozen seafoods', [
      'fs-1.png', 'fs-2.png', 'fs-3.png', 'fs-4.png', 'fs-5.png'
    ])
  },
  {
    label: "Vegetables & Fruits",
    assets: withBase('vegetables fruits', [
      'vf-1.png', 'vf-2.png', 'vf-3.png', 'vf-4.png'
    ])
  },
  {
    label: "Dry Food & Baverages",
    assets: withBase('dry food', [
      'df-1.png', 'df-2.png', 'df-3.png', 'df-4.png'
    ])
  }
];

const responsiveOptions = [
  {
    breakpoint: '1400px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
];

const ExportAndDomestic = () => {
  const [activeMenu, setActiveMenu] = useState(LIST_MENU[0]);

  return (
    <div
      id="export-&-Domestic"
      className="relative flex flex-col gap-4 mt-20 lg:mx-20 md:mx-15 sm:mx-10 mx-5 lg:text-start md:text-start text-center"
    >
      <h1 className="text-deep-blue font-bold lg:text-4xl md:text-4xl text-3xl">
        Export and <span className="text-light-yellow">Domestic</span>
      </h1>

      <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col lg:justify-start md:justify-start justify-center gap-3">
        {LIST_MENU.map((menu) => (
          <Button
            key={menu.label}
            label={menu.label}
            className={`outline-1 outline-primary ${
              activeMenu.label === menu.label
                ? 'bg-primary text-white'
                : 'bg-white text-primary hover:bg-blue-sky/30 lg:text-base md:text-base text-sm'
            } focus:outline-2 focus:outline-offset-2`}
            onClick={() => setActiveMenu(menu)}
          />
        ))}
      </div>

      <Carousel
        value={activeMenu.assets}
        className="custom-carousel"
        numVisible={3}
        circular
        autoplayInterval={5000}
        showNavigators={false}
        itemTemplate={(data) => (
          <div className="h-[20rem] w-full px-2">
            <img
              src={data}
              alt="Export & Domestic"
              className="rounded-2xl h-full w-full object-cover shadow-xl"
            />
          </div>
        )}
        responsiveOptions={responsiveOptions}
      />
    </div>
  );
};

export default ExportAndDomestic;
