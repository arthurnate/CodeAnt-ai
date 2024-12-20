"use client"
import Image from "next/image"
import Logo from "../assets/Logo.svg"
import Lower from "../assets/Lower.svg"
import Bluebtn from "../components/Bluebtn"
import Home from "../assets/Home.svg"
import Ai from "../assets/Ai.svg"
import Cloud from "../assets/Cloud.svg"
import Book from "../assets/Book.svg"
import Settings from "../assets/Settings.svg"
import Support from "../assets/Support.svg"
import Logout from "../assets/Logout.svg"
import Menu from "../assets/Menu.svg"
import { useState } from "react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    
    return(
    <section className="flex p-5 xs:overflow-x-hidden">
        <div className="flex mx-auto flex-col lg:justify-between w-full">
        <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-[20px] ">
            <div className="flex justify-between ">
                <div className="flex gap-[11px] ">
                <Image src={Logo} alt="logo" />
                <h1 className="font-sans pt-1 text-[#181D27] text-2xl">CodeAnt AI</h1>
                </div>
                <Image src={Menu} alt="menu" className="flex lg:hidden" onClick={()=>setIsOpen(!isOpen)}/>
            </div>
            <div className="flex flex-row w-full  items-center border border-[#D5D7DA] rounded-lg px-3 py-2 gap-6 xs:hidden lg:flex ">
                <button className="text-[#181D27] text-[16px] overflow-x-hidden">UtkarshDhairyaPanwar</button>
                <Image src={Lower} alt="Lower-btn" />
            </div>
            {isOpen && (
            <div className="flex justify-between w-full items-center border border-[#D5D7DA] rounded-lg px-3 py-2 gap-6">
                <button className="text-[#181D27] text-[16px] overflow-x-hidden">UtkarshDhairyaPanwar</button>
                <Image src={Lower} alt="Lower-btn" />
            </div>
            )}
        </div>
        <div className="flex flex-col xs:hidden md:hidden lg:flex">
        <Bluebtn variant="primary" className="font-md w-auto rounded-lg flex gap-[8px] items-center">
            <Image src={Home} alt="home" />
            Repositories</Bluebtn>
        <Bluebtn variant="secondary" className="font-semibold w-[210px] rounded-lg flex gap-[8px] items-center outline-none border-none">
            <Image src={Ai} alt="ai" />
            AI Code Review
        </Bluebtn>
        <Bluebtn variant="secondary" className="font-semibold w-[210px] rounded-lg flex gap-[8px] items-center outline-none border-none">
            <Image src={Cloud} alt="ai" />
            Cloud Security
        </Bluebtn>
        <Bluebtn variant="secondary" className="font-semibold w-[210px] rounded-lg flex gap-[8px] items-center outline-none border-none">
            <Image src={Book} alt="ai" />
            How to Use
        </Bluebtn>
        <Bluebtn variant="secondary" className="font-semibold w-[210px] rounded-lg flex gap-[8px] items-center outline-none border-none">
            <Image src={Settings} alt="ai" />
            Settings
        </Bluebtn>
        </div>
        {isOpen && (
        <div className="flex flex-col">
        <Bluebtn variant="primary" className="font-md w-[210px] rounded-lg flex gap-[8px] items-center">
            <Image src={Home} alt="home" />
            Repositories</Bluebtn>
        <Bluebtn variant="secondary" className="font-semibold w-[210px] rounded-lg flex gap-[8px] items-center outline-none border-none">
            <Image src={Ai} alt="ai" />
            AI Code Review
        </Bluebtn>
        <Bluebtn variant="secondary" className="font-semibold w-[210px] rounded-lg flex gap-[8px] items-center outline-none border-none">
            <Image src={Cloud} alt="ai" />
            Cloud Security
        </Bluebtn>
        <Bluebtn variant="secondary" className="font-semibold w-[210px] rounded-lg flex gap-[8px] items-center outline-none border-none">
            <Image src={Book} alt="ai" />
            How to Use
        </Bluebtn>
        <Bluebtn variant="secondary" className="font-semibold w-[210px] rounded-lg flex gap-[8px] items-center outline-none border-none">
            <Image src={Settings} alt="ai" />
            Settings
        </Bluebtn>
        </div>
        )}
        </div>
        <div className="flex flex-col xs:hidden lg:block">
            <Bluebtn variant="secondary" className="font-semibold w-[210px] rounded-lg flex gap-[8px] items-center outline-none border-none">
                <Image src={Support} alt="support" />
                Support
            </Bluebtn>
            <Bluebtn variant="secondary" className="font-semibold w-[210px] rounded-lg flex gap-[8px] items-center outline-none border-none">
                <Image src={Logout} alt="support" />
                Logout
            </Bluebtn>
        </div>
        {isOpen && (
        <div className="flex flex-col">
            <Bluebtn variant="secondary" className="font-semibold w-[210px] rounded-lg flex gap-[8px] items-center outline-none border-none">
                <Image src={Support} alt="support" />
                Support
            </Bluebtn>
            <Bluebtn variant="secondary" className="font-semibold w-[210px] rounded-lg flex gap-[8px] items-center outline-none border-none">
                <Image src={Logout} alt="support" />
                Logout
            </Bluebtn>
        </div>
        )}
        </div>
    </section>
    )
}