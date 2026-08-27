import Html from './Assets/Html.png';
import CSS from './Assets/css.png'
import JavaScript from './Assets/javascript.png'
import react from './Assets/reactjs.png'
import redux from './Assets/redux.png'
import bootstrap from './Assets/bootstrap.png'
import tailwind from './Assets/tailwindcss.png'
import nodejs from './Assets/nodejs.png'
import express from './Assets/express.png'
import mongodb from './Assets/mongodb.png'
import mysql from './Assets/mysql.png'
import c  from './Assets/c.png'
import vercel from './Assets/vercel.png'
import vscode from './Assets/vscode.png'
import postman from './Assets/postman.png'
import git from './Assets/git.png'
import Wanderlust from './Assets/Wanderlust.png'
import HealthScreeningVoice from './Assets/HealthScreeningVoice.png'
import Convertor from './Assets/Convertor.png'
import Echoboard from './Assets/Echoboard.png'
import E_plantShopping from './Assets/E_plantShopping.png'
import github from './Assets/github.png'
import reactProjects from './Assets/reactProjects.png'
import simonSays_Game from './Assets/simonSays_Game.png'
import TMU from './Assets/TMU.jpeg'
import School from './Assets/School.png'
import TodoApp from './Assets/TodoApp.png'
import Hoppscotch from './Assets/Hoppscotch.png'
import java from "./Assets/java.png";
import render from "./Assets/render.png";
import NPTEL from "./Assets/NPTEL.png";
import javaC from "./Assets/javaC.png";
import IEEE from "./Assets/IEEE.png";
import codec from "./Assets/codec.png";
import rc from "./Assets/rc.png";
import ba from "./Assets/ba.png";
import fr from "./Assets/fr.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: 
    [
      { name: 'HTML', logo: Html },
      {
          name:'CSS',logo:CSS
      },
      {
        name:'Javascript',logo:JavaScript
      },
  
      {
        name:"react.js",logo:react
      },
      {
        name:"redux",logo:redux
      },
      {
        name:"bootstrap",logo:bootstrap
      },
      {
        name:"tailwind css",logo:tailwind
      }
    ]
  },
{

  title:"Backend",
  skills:[
    {
      name:'Node.js',logo:nodejs
    },{
        name:'Express.js',logo:express
    },{
      name:'MongoDB',logo:mongodb
    },{
      name:'MySQL',logo:mysql
    },
  ]

},
{
    title:"Languages",
    skills:[
      {
        name:"Java",logo:java
      },{
        name:'C',logo:c
      },{
        name:'JavaScript',logo:JavaScript
      }
    ]

},
{
  title:'Tools',
  skills:[
    {
      name:'git',logo:git
    },{
      name:'github',logo:github
    },{
      name:'Hoppscotch',logo:Hoppscotch
    },
    {
      name:'postman',logo:postman
    },{
      name:'vercel',logo:vercel
    },{
      name:'render',logo:render
    },
    {
      name:'vscode',logo:vscode
    }
  ]
} ];



export const education=[
  {

     id: 0,
      img: TMU,
      school: "Teerthanker Mahaveer University",
      date: "Sept 2022 - July 2026",
      grade: "7.77 CGPA",
      desc:"I am a 4rd-year B.Tech Computer Science student at Teerthanker Mahaveer University with strong skills in full-stack web development using the MERN stack (MongoDB, Express.js, React.js, Node.js). I have built multiple real-world projects such as Wanderlust, Echoboard, currency converter apps, and an e-plantShopping app. I have a solid understanding of Data Structures and Algorithms, Object-Oriented Programming (OOPs), and core CS subjects like Operating Systems, DBMS, Computer Networks, and Software Engineering, which help me write efficient and scalable code. My frontend expertise includes Tailwind CSS, Redux Toolkit, and responsive design, and I am currently exploring advanced domains like AI agents (LangGraph + FastAPI), DevOps, and Data Analytics to stay aligned with industry trends and future career opportunities.",
      degree: "Bachelor of Technology - B.Tech(CSE)",
  },
  {

    id: 1,
      img: School,
      school: "St.Mary's School Najibabad ",
      date: "Apr 2020 - March 2021",
      grade: "77%",
      desc: "I completed my class 12 education from St.Mary's School Najibabad, under the ISC board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "ISC(XII) - Science",
  },{
    id: 2,
    img: School,
      school: "St.Mary's School Najibabad ",
      date: "Apr 2018 - March 2019",
      grade: "85%",
      desc: "I completed my class 10 education from St.Mary's School Najibabad, under the ICSE board.",
      degree: "ICSE(X)",
  }
]


 export const projects = [
     {
      id:1,
      title:"Wanderlust",
      description: "A full-stack travel accommodation platform built using Node.js, Express.js, MongoDB, and EJS. Integrated Passport.js for secure authentication, Cloudinary for image storage, and CRUD operations for managing property listings and user reviews.",
      image:Wanderlust,
      tags:["HTML","CSS","JavaScript","Node js","express js","mongoDb","Tailwind CSS", "EJS", "Passport.js", "Cloudinary"],
      github:"https://github.com/MohdArham421/WanderLust",
      webapp:"https://wanderlust-e40y.onrender.com/"
    },


    {
      id:2,
      title:"Voice-AI Medical Intake Screening Platform",
      description:"A full-stack conversational voice-AI application that conducts preliminary clinical screenings. Built with React.js, Node.js, WebSockets, and OpenAI (Whisper, GPT-4, TTS) to handle bilingual dialogue, barge-in detection, and structured medical summaries.",
      image:HealthScreeningVoice,
      tags:["React.js", "Node.js", "WebSockets", "OpenAI API", "Web Audio API"],
      github:"https://github.com/MohdArham421/health-screening-voice",
      webapp:"https://health-screening-voice.vercel.app/"
    },


    {
      id:3,
      title:"Echoboard",
      description:"A full-stack collaboration platform featuring EchoWall for blogging, EchoChat for real-time communication, and EchoTask for project management. Built with React.js, Node.js, Express.js, MongoDB, and Socket.io to enable seamless team collaboration and productivity.",
      image:Echoboard,
      tags:["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
      github:"https://github.com/MohdArham421/Echoboard",
     // webapp:"https://ellie-clone.vercel.app/"
    },


    {
      id: 4,
      title: "React Projects",
      description: "Collection of my React.js Projects.",
      image: reactProjects ,
      tags: ["React.js Concepts"],
      github: "https://github.com/MohdArham421/React-Projects",
    },
    
   
    {
      id:5,
      title:"E-Plant Shopping App",
      description:"An e-commerce application for browsing and purchasing indoor plants. Features product categorization, shopping cart functionality, and responsive UI to provide a smooth online shopping experience.",
      image:E_plantShopping,
      tags:["React.js", "HTML","CSS","JavaScript",],
      github:"https://github.com/MohdArham421/e-plantShopping",
      webapp:"https://mohdarham421.github.io/e-plantShopping/"
    },


    {
      id: 6,
      title: "To-Do App",
      description: "A React-based task management application that enables users to add, edit, delete, and organize tasks efficiently. Implemented Context API for centralized state management and Local Storage for persistent task data, ensuring tasks remain available across browser sessions.",
      image: TodoApp,
      tags: ["React.js", "Context API", "Local Storage", "JavaScript", "CSS"],
      github: "https://github.com/MohdArham421/React-Projects/tree/main/todoLocal",
     },


    {
      id: 7,
      title: "Currency Convertor",
      description:
      "The Currency Converter is a simple and easy-to-use web app made with React and Tailwind CSS. It lets users convert one currency into another using the latest exchange rates. The app is fast, works on all devices, and has a clean, user-friendly design",
      image:Convertor,
      tags: ["HTML", "CSS", "JavaScript", "React JS","Tailwind CSS",],
      github: "https://github.com/MohdArham421/Currency-Convertor",
      webapp: "https://currency-convertor-imgh.onrender.com",
    },

    {
      id: 8,
      title: "Simon Says Game",
      description: "An interactive memory game where players repeat increasingly complex color sequences. Implemented game logic, score tracking, and responsive user interactions using JavaScript.",
      image: simonSays_Game,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/MohdArham421/Simon-Says-Game",
   },
 ]



 export const certificates = [
  {
    id: 1,
    title: "Data Structures and Algorithms using Java",
    issuer: "NPTEL",
    description:
      "Earned Elite Certification in Data Structures and Algorithms using Java, demonstrating proficiency in algorithm design, data structures, and problem-solving techniques.",
    image: NPTEL,
    credential: "https://drive.google.com/file/d/19dEmRLCJmuit10srL0QiivxVzIxWTlai/view?usp=drivesdk",
  },

  
    {
  id: 2,
  title: "Introduction to HTML, CSS & JavaScript",
  issuer: "IBM (Coursera)",
  description:
    "Learned the fundamentals of web development, including HTML for structuring web pages, CSS for styling, and JavaScript for creating interactive and dynamic user experiences.",
  image: fr,
  credential: "https://drive.google.com/file/d/1ti0lnZBow-NQ3hg-tmRQqO05QCROSadX/view?usp=drivesdk",
},

  {
  id: 3,
  title: "Developing Front-End Apps with React",
  issuer: "IBM (Coursera)",
  description:
    "Built interactive and responsive user interfaces using React.js. Gained hands-on experience with components, props, state management, hooks, routing, and modern frontend development practices.",
  image: rc,
  credential: "https://drive.google.com/file/d/1TQJatmdK6Mrm0mXHynEYaUAGtW8gr4q2/view?usp=drivesdk",
  },

{
  id: 4,
  title: "Developing Back-End Apps with Node.js and Express",
  issuer: "IBM (Coursera)",
  description:
    "Learned backend application development using Node.js and Express.js, including RESTful APIs, middleware, routing, server-side programming, and integration with databases.",
  image: ba,
  credential: "https://drive.google.com/file/d/1Scz1rBmtyzKgmE3F58y0Nu5XcqJcVSPl/view?usp=drivesdk",
},

  {
    id: 5,
    title: "Full Stack Development Training",
    issuer: "Codec Technologies Pvt Ltd",
    description:
      "Completed a 3-month Full Stack Development training covering React.js, Node.js, Express.js, MongoDB, JavaScript, REST APIs, and modern web development practices.",
    image: codec,
    credential: "https://drive.google.com/file/d/1br83XiR7v3ihgJQAI6JoDw5jjyw8BPs7/view?usp=drivesdk",
  },


{
  id: 6,
  title: "Java Training Program",
  issuer: "IIT Bombay",
  description:"Successfully completed Java Programming Training conducted by IIT Bombay. Developed a strong foundation in Object-Oriented Programming (OOP), Java application development, and software engineering principles.",
  image: javaC,
  credential: "https://drive.google.com/file/d/18P-bGzUvVBg2J0XFdeQFJMxdCpgytz5U/view?usp=drivesdk",
},

{
  id: 7,
  title: "Research Paper Presentation - India's Heredity: AI Enabled Website",
  issuer: "International Conference on Modern Trends in Computers and Electronics (ICMCE-2025)",
  description: "Presented the research paper 'India's Heredity: AI Enabled Website' at the International Conference on Modern Trends in Computers and Electronics (ICMCE-2025). Demonstrated the application of Artificial Intelligence in preserving and promoting India's cultural heritage through innovative web technologies.",
  image: IEEE,
  credential: "https://drive.google.com/file/d/1MYO5XwEJrZzCazwiKOeJ-_7xN5Kb-Ady/view?usp=drivesdk",
},
];