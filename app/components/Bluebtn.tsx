"use client"
import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva('border h-12 px-[14px] py-[10px] border-[#D5D7DA]', {
    variants:{
        variant:{
            primary: 'bg-[#1570EF] text-white border-[#1570EF]',
            secondary: 'bg-white text-[#414651]',
        },
    }
})

export default function Bluebtn(props: {
    variant: "primary" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>
){
    const {variant, className, ...otherProps} = props;
    return (
        <button className={classes({variant, className})}
            {...otherProps}
        />
    )
}