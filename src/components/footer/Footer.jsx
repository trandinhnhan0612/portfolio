import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#000814] pt-2 pb-1 md:pt-8 md:pb-5">
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full text-center">
            <h2 className="text-[14px] text-smallTextColor leading-5 md:leading-10 font-[500] mb-2 md:mb-5 md:text-[30px]">
              Thank you for spending time looking at my portfolio
            </h2>
            <p className="text-gray-500 text-[10px] md:text-[16px]">
              Copyright {year} developed by Dinh Nhan - All right reserverd.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
