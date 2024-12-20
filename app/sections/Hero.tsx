"use client"
import Image from "next/image";
import Bluebtn from "../components/Bluebtn";
import Refresh from "../assets/Reload.svg"
import Add from "../assets/Add.svg"
import Search from "../assets/Search.svg"
import Repo from "../components/Repo";

export default function Hero(){
    return(
        <section className="p-6 flex bg-[#FAFAFA] w-full xs:overflow-x-clip lg:ml-7">
            <div className="border border-[#E9EAEB] rounded-xl shadow-sm sm:overflow-x-clip">
                <div className="p-6 flex flex-col gap-4">
                    <div className="flex w-[1180px] xs:flex-col xs:gap-3 lg:flex-row lg:justify-between">
                        <div className="">
                        <h3 className="text-[#181D27] font-semibold text-2xl">Repositories</h3>
                        <p className="text-[#414651] text-sm">33 total repositories</p>
                        </div>
                        <div className="flex gap-3 max-w-[500px]">
                            <Bluebtn variant="secondary" className="font-md  max-w-[155px] xs:w-auto rounded-lg flex gap-[8px] items-center border border-[#D5D7DA] backdrop-blur-sm shadow-lg">
                                <Image src={Refresh} alt="refresh" />
                                Refresh All
                            </Bluebtn>
                            <Bluebtn variant="primary" className="font-md  max-w-[175px] xs:w-auto rounded-lg flex gap-[8px] items-center">
                                <Image src={Add} alt="Add" />
                                Add Repository
                            </Bluebtn>
                        </div>
                    </div>
                    <div className="max-w-[366px] flex gap-1 py-[10px] px-[14px] border border-[#D5D7DA] rounded-md shadow-sm">
                        <Image src={Search} alt="search" />
                        <input type="text" className="bg-transparent outline-none text-black" placeholder="Search Repositories"></input>
                    </div>
                </div>
                <div>
                    <Repo title="design-system" keyword1="React" keyword2="7320KB" keyword3="Updated 1 day ago" privacy={false} />
                    <Repo title="codeant-ci-app" keyword1="Javascript" keyword2="5871KB" keyword3="Updated 2 day ago" privacy={true}/>
                    <Repo title="analytics-dashboard" keyword1="Python" keyword2="4521KB" keyword3="Updated 5 day ago" privacy={true}/>
                    <Repo title="mobile-app" keyword1="Swift" keyword2="3096KB" keyword3="Updated 3 day ago" privacy={false}/>
                    <Repo title="e-commerce-platform" keyword1="Java" keyword2="6210KB" keyword3="Updated 6 day ago" privacy={true}/>
                    <Repo title="blog-website" keyword1="HTML/CSS" keyword2="1876KB" keyword3="Updated 4 day ago" privacy={false}/>
                    <Repo title="social-network" keyword1="PHP" keyword2="5432KB" keyword3="Updated 7 day ago" privacy={true}/>
                </div>
                
            </div>
        </section>
    )
}