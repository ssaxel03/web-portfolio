"use client";
import { motion } from 'framer-motion';

export default function Divider() {

    return (
        <div className='w-full py-8'>
            <motion.hr style={{ transformOrigin: 'left' }} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.2 }}
                className="border-neutral-50 w-full">

            </motion.hr>
        </div>

    )
}