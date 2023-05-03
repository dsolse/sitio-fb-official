import React, {useState} from 'react';
import { nanoid } from "nanoid";
import Image from "next/image";
import {useInView} from "react-intersection-observer"
import { AnimatePresence, motion } from 'framer-motion';

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
    const { ref, inView, entry } = useInView({
        threshold: 0.7,

    });
    const services = [
        {service: "Data Visualization as a Service", desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. sit amet consectetur."},
        {service: "Data Visualization as Projects", desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. sit amet consectetur."}
    ]
    return (
        <section ref={ref} className="flex flex-row min-w-full bg-slate-100" id="services">
        
        <AnimatePresence>
        <div className="md:w-1/2 flex flex-col justify-center space-y-10 items-center w-full">
            <h1 className='top-24 text-4xl'>Technologies we use</h1>
            <motion.div 
            transition={{duration:0.7,}}
            animate={{ opacity: inView? 1: 0, x: inView ? 0: -200}}
            
            className='grid grid-cols-3 grid-rows-3 gap-x-5 gap-y-2'>
                {technologies.map((tech) => {
                    return (
                    <div
                        
                    key={nanoid()} className='max-w-sm text-center py-3 px-6 rounded-lg  shadow-md shadow-slate-400'>
                        <Image width={70} height={70} alt={tech} src='/logo.png'/>
                        <p>{tech}</p>
                    </div>)
                })}
            </motion.div>
        </div>
        
        {inView && 
        <motion.div
        initial={{height:0}}
        animate={{height: "auto"}}
        exit={{height:0}}
        
        transition={{duration:0.7, delay:0.4}}
        // exit={{height:0}}
        className="hidden md:flex min-h-full flex-col items-center justify-center">
            <div className="bg-blue-700 rounded-full h-3 w-3"></div>
            <div className="bg-blue-700 h-4/5 w-0.5"></div>
            <div className="bg-blue-700 rounded-full h-3 w-3"></div>
        </motion.div>}

        <div className="flex flex-col justify-center space-y-10 items-center w-full md:w-1/2 px-20">
            <h1 className="top-24 text-4xl">What we offer</h1>
            
                
            <motion.div 
                transition={{duration:0.7}}
                animate={{opacity: inView ? 1: 0, x: inView ? 0: 200}}
                className="grid grid-col-1 xl:grid-cols-2 gap-8">
                {services.map(({service, desc}) => {
                    return (
                        <div key={nanoid()} className="space-y-4 max-w-sm py-11 px-7 rounded-lg rounded-tr-3xl shadow-md shadow-slate-400">
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
                        </div>
                    )
                })}
            </motion.div>
        </div>
        </AnimatePresence>
        </section>
    );
};

export default Services;
