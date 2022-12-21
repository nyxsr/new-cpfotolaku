import React from "react";

function Footer() {
  return (
    <footer id="footer" className="relative bg-[#1c1c1c] flex flex-col gap-3 py-5 px-5 z-10">
      <div className="flex flex-col gap-2">
        <p className="text-white font-bold">Kantor Pusat</p>
        <p className="text-[#9d9d9d]">
          Ruko Tematik Paramount R35, Tanggerang Selatan
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-white font-bold">Say Hello</p>
        <p className="text-[#9d9d9d]">hi@unmute.com</p>
        <p className="text-[#9d9d9d]">+6281 3946 8339</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-white font-bold">Social Media</p>
        <p className="text-[#9d9d9d]">Instagram</p>
        <p className="text-[#9d9d9d]">Tiktok</p>
        <p className="text-[#9d9d9d]">YouTube</p>
      </div>
      <p className="text-[#9d9d9d] text-xs mt-2">
        &copy; {new Date().getFullYear()} Fotolaku All Right Reserved
      </p>
    </footer>
  );
}

export default Footer;
