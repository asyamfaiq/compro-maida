import { RxHamburgerMenu } from "react-icons/rx";
import { Sidebar } from 'primereact/sidebar';
import { FaTimes } from 'react-icons/fa';
import Button from "../Button";

const SidebarMain = ({visible, visibleHandler, sections, activeSection}) => {
  return (
    <Sidebar visible={visible} onHide={visibleHandler} position="right" content={
        <div className='w-full surface-section h-screen block flex-shrink-0 absolute lg:static left-0 top-0 border-right-1 surface-border select-none'>
          <div className='flex flex-col h-full'>
            <div className="flex flex-col gap-5 align-items-center justify-content-between px-3 pt-3 flex-shrink-0">
              <div className='w-full flex justify-between items-center'>
                <img src='/edufic-logo.png' alt='Edufic' className='max-w-[10rem]'/>
                <button><FaTimes className='text-secondary text-2xl border-1 rounded-full p-1' onClick={() => visibleHandler()} /></button>
              </div>
              <div className='flex flex-col gap-2 px-3'>
                {
                  sections.map((data) => (
                    <a href={`#${data}`} key={data} className='text-xl'><h5 className={`px-2 py-1 rounded-xl ${activeSection === data ? "text-secondary" : ""}`}>{(data.charAt(0).toUpperCase()+data.slice(1)).replace("-", " ")}</h5></a>
                  ))
                }
              </div>
              <Button label={"Contact Us"} className="bg-secondary text-white font-medium hover:bg-secondary/80"/>
            </div>
          </div>
        </div>
    }>

    </Sidebar>
  )
}

export default SidebarMain
