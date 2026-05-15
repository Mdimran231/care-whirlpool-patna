// src/data/servicesData.js

// 1. Is import ko hata dein, iski zaroorat nahi hai aur ye error de sakta hai
import { image } from "framer-motion/client"; 

export const servicesData = {
  "fridge-repair": {
    title: "Fridge Repair",
    desc: "Samsung, LG, Whirlpool - All cooling issues fixed in 60 mins.",
    image: "/freeze.png", // '/' lagana best practice hai public folder ke liye
    price: "499",
    features: ["Compressor Troubleshooting", "Gas Charging", "PCB Repair", "Door Gasket Replacement"]
  },
  "washing-machine": {
    title: "Washing Machine",
    desc: "Expert drum & motor repair for all top/front load models.",
    image: "/washing.jpg",
    price: "599",
    features: ["Drum Deep Cleaning", "Motor Vibration Fix", "Drain Pump Repair", "PCB/Timer Replacement"]
  },
  "ac-repair": {
    title: "AC Repair",
    desc: "Jet foam cleaning & gas filling for all AC types.",
    image: "/Ac.png",
    price: "299",
    features: ["Gas Leakage Check", "Compressor Repair", "Water Leakage Fix", "Filter Cleaning"]
  }
};

export default servicesData;