"use client"
import Image from "next/image";
import PublicImg from "../assets/Public.svg"
import PrivateImg from "../assets/Private.svg"
import Db from "../assets/Db.svg"
import DotImg from "../assets/Dot.svg"

export default function Repo(props:{title:string,
    keyword1: string,
    keyword2: string,
    keyword3: string,
    privacy: boolean,
}){
    const {title, keyword1, keyword2, keyword3, privacy} = props
    return (
        <div className="border-y border-[#E9EAEB] shadow-sm p-5 flex flex-col gap-4 hover:bg-gray-200/100">
            <div className="flex gap-2">
            <h3 className="text-[#181D27] text-md font-semibold">{title}</h3>
            <Image src={privacy?PrivateImg:PublicImg} alt="public-private" />
            </div>
            <div className="text-[#181D27] flex flex-row xs:gap-4 lg:gap-10 ">
                <div className="flex gap-1">
                    <p>{keyword1}</p>
                    <Image src={DotImg} alt="dot"/>
                </div>
                <div className="flex gap-1">
                    <Image src={Db} alt="db" />
                    <p>{keyword2}</p>
                </div>
                <p>{keyword3}</p>
            </div>
        </div>
    )
}