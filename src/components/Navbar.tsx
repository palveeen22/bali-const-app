// 'use client'
import React from 'react'
import { AiFillAlert } from "react-icons/ai";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const t = useTranslations("navbar");
  // const [showBorder, setShowBorder] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       setShowBorder(true);
  //     } else {
  //       setShowBorder(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    // <nav className={`w-full flex justify-between items-center py-4 px-20 fixed top-0 left-0 right-0 transition-all duration-300 ${showBorder ? 'border-b border-gray-200' : ''}`}>
    <nav className="w-full flex justify-between items-center py-4 px-20 bg-cgreendark">
      <div className='flex justify-start gap-2 items-center'>
        <AiFillAlert color='white' size={30}/>
        <h1>Constructopia</h1>
      </div>
      <div className='flex justify-start gap-8 items-center text-xs font-light'>
        <p>{t("about")}</p>
        <p>{t("service")}</p>
        <p>{t("blog")}</p>
        <p>{t("resource")}</p>
        <p>{t("contact")}</p>
        <p>{t("talk")}</p>
      </div>
    </nav>
  )
}

export default Navbar