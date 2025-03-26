import { useEffect, useState } from "react";
import Button from "../Button";
import { RxHamburgerMenu } from "react-icons/rx";
import SidebarMain from "../Sidebar";

const Navbar = ({sections=[]}) => {
  const [ activeSection, setActiveSection ] = useState("");
  const [ activeSidebar, setActiveSidebar ] = useState(false);

  const onClickBarButton = () => {
    setActiveSidebar(!activeSidebar);
    if (window.innerWidth >= 770) setActiveSidebar(false);  
  }

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setActiveSection(entry.target.id);
  //         }
  //       });
  //     },
  //     { threshold: 0.1 }
  //   );

  //   sections.forEach((id) => {
  //     const section = document.getElementById(id);
  //     if (section) observer.observe(section);
  //   });

  //   return () => observer.disconnect();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <>
      <div className="w-full bg-primary text-white py-2 fixed shadow-xl z-999">
        <div className="flex justify-between items-center lg:mx-10 md:mx-10 sm:mx-10 mx-5">
          <h1 className="font-bold text-xl">MAIDA FORTUNA</h1>
          <div className="lg:flex md:flex hidden gap-4">
            {
              sections.map((data) => (
                <a href={`#${data}`} key={data}><h5 className={activeSection === data ? "text-light-yellow" : ""}>{(data.charAt(0).toUpperCase()+data.slice(1)).replace("-", " ")}</h5></a>
              ))
            }
          </div>
          <Button label={"Contact Us"} className="bg-secondary text-white font-medium hover:bg-secondary/80 lg:block md:block hidden"/>
          <div className='lg:hidden md:hidden block cursor-pointer' onClick={onClickBarButton}>
            <RxHamburgerMenu className='text-3xl text-light-yellow font-bold' />
          </div>
        </div>
      </div>
      <SidebarMain visible={activeSidebar} visibleHandler={onClickBarButton} sections={sections} activeSection={activeSection}/>
    </>
  )
}

export default Navbar
