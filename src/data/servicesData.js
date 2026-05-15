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
    title: "AC Installation",
    price: "1199",
    image: "/split.jpg",
    desc: "Naya AC liya hai? Humare certified experts precision mounting aur perfect copper piping ke saath installation karte hain taaki gas leak na ho.",
    features: ["Safe Wall Mounting", "Copper Piping Layout", "Drain Pipe Setup", "Vacuuming & Leak Testing", "Performance Check"]
  },
  "re-installation": {
    title: "AC Re-Installation (Shifting)",
    price: "1499",
    image: "/Ac.png",
    desc: "Purane AC ko naye jagah shift karna? Hum karte hain safe dismantling aur professional fitting bina gas leak kiye Patna mein.",
    features: ["Gas Pump-Down (Gas Save)", "Safe Dismantling", "Precision Re-Fitting", "Leak Testing", "30-Day Service Warranty"]
  },
  "jet-foam": {
    title: "Advanced Jet Foam Service",
    price: "599",
    image: "/foam.jpeg",
    desc: "Normal service se 2 guna zyada safai. Hum use karte hain specialized alkaline foam jo coil ke andar chupi gandagi ko bahar nikal deta hai.",
    features: ["Deep Chemical Foam Cleaning", "2x Better Airflow", "Bacteria & Mold Removal", "Indoor Unit Jet Wash", "Cooling Efficiency Boost"]
  },
  "window-ac-installation": {
    title: "Window AC Installation",
    price: "1299",
    image: "/window.jpg",
    desc: "Professional installation of window AC units with proper mounting and electrical connections.",
    features: ["Safe Wall Mounting", "Proper Electrical Wiring", "Drain Pipe Setup", "Vacuuming & Leak Testing", "Performance Check"]
  }

};

export default servicesData;