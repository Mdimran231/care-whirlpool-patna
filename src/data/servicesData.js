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
    image: "/Gallery 1.jpeg",
    price: "299",
    features: ["Gas Leakage Check", "Compressor Repair", "Water Leakage Fix", "Filter Cleaning"]
  },
  "microwave-repair": {
    title: "Microwave Repair",
    desc: "Fast and reliable repair for all microwave ovens.",
    image: "/micro.jpg",
    price: "399",
    features: ["Magnetron Repair", "Capacitor Replacement", "Door Switch Fix", "Control Panel Repair"]
  },
  "installation": {
    "title": "AC Installation",
    "price": "1199",
    "image": "/split.jpg",
    "desc": "Bought a new AC? Our certified experts provide precision mounting and perfect copper piping installation to ensure zero gas leakage and maximum cooling.",
    "features": ["Safe Wall Mounting", "Copper Piping Layout", "Drain Pipe Setup", "Vacuuming & Leak Testing", "Performance Check"]
  },
  "re-installation": {
    "title": "AC Re-Installation (Shifting)",
    "price": "1499",
    "image": "/Ac.png",
    "desc": "Shifting your existing AC to a new location? We provide safe dismantling and professional re-fitting in Patna without any gas loss.",
    "features": ["Gas Pump-Down (Gas Saving)", "Safe Dismantling", "Precision Re-Fitting", "Leak Testing", "30-Day Service Warranty"]
  },
  "jet-foam": {
    "title": "Advanced Jet Foam Service",
    "price": "599",
    "image": "/foam.jpeg",
    "desc": "Get 2x better cleaning than normal servicing. We use specialized alkaline foam that deep cleans the coils, removing hidden dirt and allergens.",
    "features": ["Deep Chemical Foam Cleaning", "2x Better Airflow", "Bacteria & Mold Removal", "Indoor Unit Jet Wash", "Cooling Efficiency Boost"]
  },
  "window-ac-installation": {
    "title": "Window AC Installation",
    "price": "1299",
    "image": "/window.jpg",
    "desc": "Professional installation of window AC units with precise window frame mounting and secure electrical connections.",
    "features": ["Safe Wall Mounting", "Proper Electrical Wiring", "Drain Pipe Setup", "Vacuuming & Leak Testing", "Performance Check"]
  }

};

export default servicesData;