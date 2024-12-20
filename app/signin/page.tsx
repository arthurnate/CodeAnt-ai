'use client'

import { useState } from 'react';

import Image from "next/image"
import Bigl from "../assets/Biglogo.svg"
import logo from "../assets/Logo.svg"
import left from "../assets/Leftlogo.svg"
import right from "../assets/Rightlogo.svg"
import github from "../assets/github.svg"
import gitlab from "../assets/gitlab.svg"
import azure from "../assets/azure.svg"
import bucket from "../assets/Bitbucket.svg"
import sso from "../assets/sso.svg"
import Bluebtn from "../components/Bluebtn"

export default function SignIn() {
    
    const [selectedOption, setSelectedOption] = useState('selfHosted');
    
    return (
      <section className="">
        <div className="grid xs:grid-cols-1 lg:grid-cols-2">
            <div className="w-full xs:hidden lg:block">
                <div className="relative">
                <Image src={left} alt="left" className="absolute top-[219px] left-[140px]"/>
                <Image src={right} alt="right" className="absolute top-[377px] left-[340px]"/>
                </div>
                <Image src={Bigl} alt="logo" className="absolute bottom-[0px] left-[0px]"/>
            </div>
        <div className="bg-[#FAFAFA] lg:w-[100vh] xs:w-auto flex items-center justify-center h-[100vh] p-6">
            <div className="flex flex-col bg-white rounded-xl px-6 py-9 gap-5">
                <div className="flex-col flex gap-5">
                <div className="flex flex-col items-center justify-center gap-5">
                <div className="flex items-center gap-[14px] max-w-[250px] text-[30px]">
                    <Image src={logo} alt="" />
                    <h2 className="font-sans pt-1 text-[#181D27] text-2xl">CodeAnt AI</h2>
                </div>
                <div>
                    <h1 className="text-3xl text-[#181D27] font-md">Welcome to CodeAnt AI</h1>
                </div>
                </div>
                <div className="flex justify-center">
                    <Bluebtn variant="primary" className="lg:w-[311px] min-w-[187px] border rounded-lg" onClick={()=>setSelectedOption('saas')}>SAAS</Bluebtn>
                    <Bluebtn variant="secondary" className="lg:w-[311px] min-w-[187px] border rounded-lg font-semibold" onClick={()=>setSelectedOption('selfHosted')}>Self Hosted</Bluebtn>
                </div>
                </div>
                {selectedOption === 'saas' ? (
                <div className="flex py-6 justify-center items-center gap-4">
                    <div className="flex flex-col gap-4">
                        <Bluebtn variant="secondary" className="w-[445px] border flex items-center gap-4 justify-center rounded-lg font-semibold">
                            <Image src={github} alt="github" />
                            Sign in with GitHub
                        </Bluebtn>
                        <Bluebtn variant="secondary" className="w-[445px] border flex items-center gap-4 justify-center rounded-lg font-semibold">
                            <Image src={bucket} alt="github" />
                            Sign in with BitBucket
                        </Bluebtn>
                        <Bluebtn variant="secondary" className="w-[445px] border flex items-center gap-4 justify-center rounded-lg font-semibold">
                            <Image src={azure} alt="github" />
                            Sign in with Microsoft Azure
                        </Bluebtn>
                        <Bluebtn variant="secondary" className="w-[445px] border flex items-center gap-4 justify-center rounded-lg font-semibold">
                            <Image src={gitlab} alt="github" />
                            Sign in with GitLab
                        </Bluebtn>
                    </div>
                </div> 
                ) : ( 
                <div className='flex flex-col justify-center items-center'>
                <div className='flex py-6 flex-col gap-4'>
                    <Bluebtn variant="secondary" className="w-[445px] border flex items-center gap-4 justify-center rounded-lg font-semibold">
                            <Image src={gitlab} alt="github" />
                            Self Hosted GitLab
                        </Bluebtn>
                    <Bluebtn variant="secondary" className="w-[445px] border flex items-center gap-4 justify-center rounded-lg font-semibold">
                        <Image src={sso} alt="github" />
                         Sign in with SSO
                    </Bluebtn>
                    </div>
                    </div>
                )}
                <div className="flex justify-center">
                <p className="text-[16px] text-[#181D27]">By signing up you agree to the{" "}
                    <span className="font-semibold text-[16px] text-[#181D27]">Privacy Policy.</span>
                </p>
                </div>
            </div>
        </div>
        </div>
      </section>
    )
  }