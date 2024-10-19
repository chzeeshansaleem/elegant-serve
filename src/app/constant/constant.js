// Clients Logo
import Client1 from "../assets/log-1.png";
import Client2 from "../assets/log-2.png";
import Client3 from "../assets/log-3.png";
import Client4 from "../assets/log-4.png";
import Client5 from "../assets/log-5.png";
import Client6 from "../assets/log-6.png";
import Client7 from "../assets/log-7.png";
import Client8 from "../assets/log-8.png";
import Client9 from "../assets/log-9.png";
import Client10 from "../assets/log-10.png";
import Client11 from "../assets/log-12.png";




// exports clients logo
export const clients = [Client1, Client2, Client3, Client4, Client5, Client6, Client7, Client8, Client9, Client10, Client11]; // List of client logos


// export testimonials data
export const testimonials = [
   {
      id: 1,
      name: "Alex Regelman",
      position: "Co-founder, Colabrio",
      message: "I would highly recommend Vie Digital. I worked with the team on an animation for our ‘Click & Collect’ service.",
      image: "https://images.unsplash.com/photo-1528109688329-6a043167789d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual image link
   },
   {
      id: 2,
      name: "John Doe",
      position: "CEO, Company",
      message: "The team exceeded my expectations in every way, providing an innovative and creative approach.",
      image: "https://images.unsplash.com/photo-1528109688329-6a043167789d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   },
   {
      id: 3,
      name: "Jane Smith",
      position: "Marketing Lead, Business",
      message: "I was impressed with their speed, communication, and quality of work.",
      image: "https://images.unsplash.com/photo-1528109688329-6a043167789d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   },
   {
      id: 4,
      name: "Alex Regelman",
      position: "Co-founder, Colabrio",
      message: "I would highly recommend Vie Digital. I worked with the team on an animation for our ‘Click & Collect’ service.",
      image: "https://images.unsplash.com/photo-1528109688329-6a043167789d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual image link
   },
   {
      id: 5,
      name: "John Doe",
      position: "CEO, Company",
      message: "The team exceeded my expectations in every way, providing an innovative and creative approach.",
      image: "https://images.unsplash.com/photo-1528109688329-6a043167789d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   },
   {
      id: 6,
      name: "Jane Smith",
      position: "Marketing Lead, Business",
      message: "I was impressed with their speed, communication, and quality of work.",
      image: "https://images.unsplash.com/photo-1528109688329-6a043167789d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   }
];


// export services data
import { FaServer, FaDesktop, FaCogs, FaCamera, FaMusic, FaToolbox } from "react-icons/fa";

export const services = [
   {
      id: 1,
      title: "INFORMATION TECHNOLOGY SOLUTION",
      description: "Unified Communication Solutions integrate voice, video, messaging, and collaboration technologies to streamline business operations. These include IP Telephony/PABX systems for efficient call management, end-user computers for productivity, video and voice collaboration tools, network security solutions, software services, and LAN, WAN, and wireless infrastructure for seamless connectivity across networks.",
      icon: <FaDesktop />,
      side: "left",
   },
   {
      id: 2,
      title: "INFRASTRUCTURE SOLUTION",
      description: "Physical network design and deployment involves the structured planning and installation of network components such as routers, switches, and cabling to ensure efficient, reliable, and scalable data transmission. Intelligent cabling systems like CAT6, CAT6A, and CAT7 offer high-speed data transfer with increased bandwidth and shielding, supporting advanced network performance. ",
      icon: <FaServer />,
      side: "right",
   },
   {
      id: 3,
      title: "AUDIO VISUAL SOLUTION",
      description: "Projection and presentation systems are used to display visual content for meetings, conferences, and educational settings, enhancing communication and engagement. Collaboration technologies enable seamless teamwork through shared platforms, enhancing productivity in group projects. Video/audio conference systems allow real-time remote communication, integrating voice and video for more interactive discussions.",
      icon: <FaCamera />,
      side: "left",
   },
   {
      id: 4,
      title: "ELV SOLUTION",
      description: "Projection and presentation systems are used to display visual content for meetings, conferences, and educational settings, enhancing communication and engagement. Collaboration technologies enable seamless teamwork through shared platforms, enhancing productivity in group projects. Video/audio conference systems allow real-time remote communication, integrating voice and video for more interactive discussions.",
      icon: <FaMusic />,
      side: "right",
   },
   {
      id: 5,
      title: "MAINTENANCE & SUPPORT SERVICES",
      description: "Projection and presentation systems are used to display visual content for meetings, conferences, and educational settings, enhancing communication and engagement. Collaboration technologies enable seamless teamwork through shared platforms, enhancing productivity in group projects. Video/audio conference systems allow real-time remote communication, integrating voice and video for more interactive discussions.",
      icon: <FaCogs />,
      side: "left",
   },
   {
      id: 6,
      title: "HARDWARE TRADING",
      description: "Projection and presentation systems are used to display visual content for meetings, conferences, and educational settings, enhancing communication and engagement. Collaboration technologies enable seamless teamwork through shared platforms, enhancing productivity in group projects. Video/audio conference systems allow real-time remote communication, integrating voice and video for more interactive discussions.",
      icon: <FaToolbox />,
      side: "right",
   },
];
