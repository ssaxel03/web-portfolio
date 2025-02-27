"use client";
import { motion } from 'framer-motion';

export default function Divider() {

    return (
        <motion.hr style={{ transformOrigin: 'left' }} initial={{scaleX: 0}} whileInView={{scaleX: 1}} viewport={{ once: true}} transition={{ duration: 0.2 }} className="border-neutral-50 mb-16 w-full">
            
        </motion.hr>
    )
}