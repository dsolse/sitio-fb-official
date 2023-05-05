import React, {useRef, useState} from 'react';
import { nanoid } from "nanoid";
import Image from "next/image";
import { MotionValue, motion, useInView, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';

const technologies = [
    "Python",
    "R Studio",
    "Power BI",
    "Tableau",
    "Bizagui",
    "Excel vba",
    "Tableau",
    "Bizagui",
    "Excel vba"
]

const Services = () => {
    
    const rootRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({target: rootRef});
    const y = useParallax(scrollYProgress, 100 );
    const yTitle = useParallax(scrollYProgress, -50 );

    const services = [
        {service: "Data Visualization as a Service", desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. sit amet consectetur."},
        {service: "Data Visualization as Projects", desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. sit amet consectetur."}
    ]
    return (
        <section  className="flex flex-row min-w-full" id="services">
        
        <div
             className="md:w-1/2 flex flex-col justify-center space-y-10 items-center w-full">
            <motion.h1 style={{y:yTitle}} className='top-24 text-4xl'>Technologies we use</motion.h1>
            <div  className='grid grid-cols-3 grid-rows-3 gap-x-5 gap-y-2'>
                {technologies.map((tech, index) => {
                    return (
                    <Technology root={rootRef} index={index} key={nanoid()} tech={tech} img={'/logo.png'}/>)
                })}
            </div>
        </div>
        
        <motion.div
            initial={{scaleY:0}}
            whileInView={{scaleY: 1}}
            exit={{scaleY:0}}
            viewport={{amount: 0.5}}
            transition={{duration:0.3, delay:.3}}
            className="hidden md:flex min-h-full flex-col items-center justify-center">
            <div className="bg-blue-700 rounded-full h-3 w-3"></div>
            <div className="bg-blue-700 h-4/5 w-0.5"></div>
            <div className="bg-blue-700 rounded-full h-3 w-3"></div>
        </motion.div>

        <motion.div 
            className="flex flex-col justify-center space-y-10 items-center w-full md:w-1/2 px-20">
            <motion.h1 style={{y:yTitle}}
            className="top-24 text-4xl">What we offer</motion.h1>
            <div
                className="grid grid-col-1 xl:grid-cols-2 gap-8">
                {services.map(({service, desc}, index) => {
                    return (
                        <motion.div
                            style={{y}}
                            transition={{duration:0.3}}
                            initial={{backgroundColor:"#fff", color:"inherit", opacity:0, x:100}}
                            exit={{backgroundColor:"#fff", color:"inherit", opacity:0, x:200}}
                            whileHover={{backgroundColor: "#0352fc", color:"#fff"}}
                            whileInView={{opacity:1, x:0}}
                            viewport={{amount:.7}}
                            key={nanoid()} className="space-y-4 max-w-sm py-11 px-7 rounded-lg rounded-tr-3xl shadow-md shadow-slate-400">
                            <Image
                                width={50}
                                height={50}
                                src={"/logo.png"}
                                alt="log"
                            />
                            <h1 className="font-bold text-xl">{service}</h1>
                            <p>{desc}</p>
                            <div className="group hover:text-blue-800">
                                <a href="#">Read more <span className="translate-x-1 duration-150 ease-out group-hover:mx-1">{"➜"}</span></a>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </motion.div>
        </section>
    );
};

export default Services;

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

const Technology = ({img, tech, index, root}:{img:string, tech:string, index:number, root:React.RefObject<HTMLElement>}) => {
    const { scrollYProgress } = useScroll({target: root});
    const y = useParallax(scrollYProgress, 100 );

    // useMotionValueEvent(scrollYProgress, "change", (latest) => {
    //     console.log("Page scroll: ", latest)
    // })
    const offset = 100;
    return (
            <motion.div
                initial={{ opacity: 0, x:-offset }}
                exit={{ opacity: 0, x: -offset }}
                whileInView={{ opacity: 1, x:0 }}
                transition={{duration:0.6}}
                style={{y}}
                viewport={{amount: 0.95}}
                key={nanoid()} className='max-w-sm text-center py-3 px-6 rounded-lg  shadow-md shadow-slate-400'>
                <Image width={70} height={70} alt={tech} src={img}/>
                <p>{tech}</p>
            </motion.div>
    )
}
