import {
  X,
  Dribbble,
  GithubIcon,
  Linkedin,
  MailIcon,
  PhoneCall,
  PhoneIcon,
} from "lucide-react";
import CircleAnimation from "./components/animation/CircleAnimation";
import Header from "./components/Header";
import ProjectContainer from "./components/ProjectContainer";
import SkillContainer from "./components/SkillContainer";
import Footer from "./components/Footer";
import excelwayImg from "./assets/projects/Excelway.png";
import yelpcampinImg from "./assets/projects/yelpcampin.png";
import plantifyImg from "./assets/projects/plantify.png";
import ContactForm from "./components/ContactForm";
import qlinklogo from './assets/qlink-logo-light.svg';
import { useState } from "react";
import Modal from "./components/Modal";
import BlurIn from "./components/animation/BlurIn";
import { TextFade } from "./components/animation/TextFade";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  }

  return (
    <div className="relative font-youngserif w-full h-full">

      {/* modal */}
      <Modal showModal={showModal} >
      <div className="relative  lg:w-[70%]  lg:h-[70%] bg-white rounded-xl flex flex-col items-center px-10 py-20 md:p-16 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <div onClick={handleShowModal}><X className="absolute top-10 right-10 p-2 w-fit h-fit bg-gray-200 rounded-full hover:bg-gray-300"/></div>
              <div className="relative text-lg lg:text-2xl mb-10">
                Past Experince
              </div>
              <div  className="px-10 py-5 w-fit relative lg:w-[600px] lg:px-[76px] lg:py-[78px] bg-[#f3f0ff] rounded-2xl  overflow-hidden">
              <div className="absolute w-[200px] lg:w-[300px] aspect-square bg-[#8567ff]/10 rounded-full -right-7 -bottom-20"></div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
                <img src={qlinklogo} alt="logo" className="size-20 lg:size-20" />
                <div className="text-xs md:test-base">Oct 2024 - Present</div>
              </div>

              <div className="text-2xl lg:text-3xl text-start my-8 md:my-10">
                AI Software Engineer
              </div>

              <div className="text-sm bg-white w-fit px-5 py-1 md:px-3 md:py-2 rounded-full">
                Intern
              </div>
            </div>
            </div>
      </Modal>

      <Header />
      <CircleAnimation />

      {/* hero section */}
      <div className="text-4xl md:text-5xl relative w-full h-screen z-10 flex flex-col justify-center items-center text-white lg:text-6xl">
        <div className="w-[60%] md:w-[40%] lg:w-[30%] text-center leading-snug">
          <BlurIn>
            Design, Development & AI
          </BlurIn>
        </div>
        <div className="absolute text-base bottom-20">Swipe down</div>
      </div>

      {/* section container */}
      <div className="px-10 lg:px-20">
        {/* intro section */}
        <TextFade className="w-full h-full flex flex-col justify-center items-center gap-8 lg:gap-14 lg:mt-40 lg:mb-44 text-cente mt-10 mb-32 lg:px-32">
          <div className="text-2xl md:text-3xl lg:text-4xl text-ppurple">Hello 👋🏻</div>
          <div className="text-4xl md:text-5xl lg:text-6xl text-center w-full leading-snug">
            I&#39;m Software Developer,<br/> who Built things for web
          </div>
          <div className="text-lg lg:text-2xl text-center text-pgray leading-snug w-full">
            My Name is <span className="text-pblack">Pratham Paleriya, </span>
            Currently I'm in my 4th year of engineering as a Artificial
            Intelligence and Data Science Engineer. Have a keen intrest in
            building Web based application and solve user problems.
          </div>
        </TextFade>

        {/* teachnologies */}
        <div className="my-32 lg:my-44 text-center space-y-10 lg:space-y-20">
          <div className="text-xl md:text-3xl lg:text-4xl"><div>Technologies I've expertise in</div></div>

          <div className="space-y-5 lg:space-y-10">
            <TextFade className="w-full flex justify-center items-center gap-2 md:gap-5 lg:gap-10">
              <SkillContainer text="Python" />
              <SkillContainer text="Tailwind CSS" />
              <SkillContainer text="Javascript" />
            </TextFade>
            <TextFade className="w-full flex justify-center items-center gap-2 md:gap-5 lg:gap-10">
              <SkillContainer text="React.js" />
              <SkillContainer text="LLMs" />
              <div className="block md:hidden">
              <SkillContainer text="Databases" />
              </div>
            </TextFade>
            <TextFade className="w-full flex justify-center items-center gap-2 md:gap-5 lg:gap-10">
              <SkillContainer text="GenAI Integration" />
              <SkillContainer text="Backend" />
              <div className="hidden md:block">
              <SkillContainer text="Databases" />
              </div>
            </TextFade>
          </div>
        </div>

        {/* Projects */}
        <div className="my-32 lg:my-44 text-center space-y-12 md:space-y-24 lg:space-y-40">
          <TextFade className="flex flex-col items-center gap-3 lg:gap-5 z-10">
            <div className="text-base md:text-xl lg:text-2xl font-serif">Projects</div>
            <div className="text-2xl md:text-3xl lg:text-4xl">Solutions that I&#39;ve build</div>
          </TextFade>


          <ProjectContainer
            ascent={"#deeeff"}
            src={excelwayImg}
            title={"Excelway"}
            description={"Excel Analysis made as easy as chatting"}
            tags={["Python", "Langchain", "Flask", "LLama"]}
            site={"https://excelway.streamlit.app/"}
            github={"https://github.com/PrathamPaleriya/excelway"}
          />
          <ProjectContainer
            ascent={"#f0e6d5"}
            src={yelpcampinImg}
            title={"Yelpcampin"}
            description={"A place where you can add and find campground."}
            tags={["React", "Tailwind CSS", "Maria DB"]}
            alternate={true}
            site={"https://yelpcampin.vercel.app/"}
            github={"https://github.com/PrathamPaleriya/YaleCamp-React"}
          />
          <ProjectContainer
            ascent={"#e6f7e8"}
            src={plantifyImg}
            title={"Yelpcampin"}
            description={"A place where you can add and find campground."}
            tags={["React", "Tailwind CSS", "Maria DB"]}
            github={"https://github.com/PrathamPaleriya/Plantify"}
            site={"https://plantifystore.vercel.app/"}
          />
        </div>

        {/* Experince */}
        <div className="my-32 lg:my-44 w-full text-center space-y-12 lg:space-y-20 flex-col">
          <TextFade className="flex flex-col items-center gap-3 lg:gap-5 z-10">
            <div className="text-base md:text-xl lg:text-2xl font-serif">Experience</div>
            <div className="text-2xl md:text-3xl lg:text-4xl">
              Organizations I&#39;m currently working with
            </div>
          </TextFade>

          <div className="flex flex-col justify-center items-center gap-8">
            <div  className="px-10 py-5 w-fit md:w-[60%] relative lg:w-[600px] lg:px-[76px] lg:py-[78px] bg-[#f3f0ff] rounded-2xl  overflow-hidden">
              <div className="absolute w-[200px] lg:w-[300px] aspect-square bg-[#8567ff]/10 rounded-full -right-7 -bottom-20"></div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
                <img src={qlinklogo} alt="logo" className="size-20 lg:size-20" />
                <div className="text-xs md:test-base">Oct 2024 - Present</div>
              </div>

              <div className="text-2xl lg:text-3xl text-start my-8 md:my-10">
                AI Software Engineer
              </div>

              <div className="text-sm bg-white w-fit px-5 py-1 md:px-3 md:py-2 rounded-full">
                Intern
              </div>
            </div>

            <button onClick={handleShowModal} className="text-lg md:text-xl lg:text-2xl cursor-pointer underline text-pgray font-serif">
              view pervious
            </button>
          </div>
        </div>

        {/* Contact form */}
        <div className="flex gap-20 lg:gap-0 flex-col lg:flex-row w-full justify-center md:justify-between items-center my-20 lg:my-24">
          <TextFade className="text-center lg:text-start lg:w-[50%] flex flex-col justify-center gap-14 h-full">
            <div className="text-pblue font-serif text-2xl">
              Looking to Collaborate or Hire?
            </div>
            <div className="text-pblack text-5xl">
              Let's Build Something <br /> Amazing Together!
            </div>
            <div className="flex gap-5 w-full justify-center lg:justify-start">
              <a href="tel:+918432563408" target="_blank">
                <PhoneIcon size={30} className="hover:text-green-500" />
              </a>
              <a href="mailto:paleriyapratham@gmail.com" target="_blank">
                <MailIcon size={30} className="hover:text-red-500"/>
              </a>
              <a href="https://dribbble.com/prathampaleriya0" target="_blank">
                <Dribbble size={30} className="hover:text-ppink"/>
              </a>
              <a href="https://github.com/PrathamPaleriya" target="_blank">
                <GithubIcon size={30} className="hover:text-green-800" />
              </a>
              <a href="https://www.linkedin.com/in/prathampaleriya/" target="_blank">
                <Linkedin size={30} className="hover:text-pblue"/>
              </a>
            </div>
          </TextFade>

          <div className="relative w-full md:w-[80%] lg:w-[50%] h-full">
            <div className="absolute w-full h-full opacity-30 bg-gradient-to-r from-[#43ff9a] via-[#43b0ff] to-[#eaff6f] blur-[100.10px]"></div>
            <ContactForm/>
          </div>
        </div>
      </div>

      <Footer />
      <Analytics/>
    </div>
  );
}

export default App;
