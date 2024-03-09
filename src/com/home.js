import React,{useState}from 'react';
import './home.css';
import ImageSlider from './slider';
import Courses from '../com/courses.js'
import Testi from '../com/testi.js'
import Terminal from './terminal.js';
import Footer from './footer.js'
import Join from './group join.js'
import Group from './group price.js'
function Home() {
  const [name,setname]=useState({
     
      value:"I'm Umer Sohail",
      color:"white"
  })
  

  return (
    <>
      <section className="text-gray-600 body-font fff">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 c" >---Hello
            <br className="hidden lg:inline-block" />              <span style={{ color: name.color }}>{name.value}</span>

            </h1>
            <p className="mb-8 leading-relaxed n">Fullstack Developer & Instructor.</p>
            <p className="mb-8 leading-relaxed n">Hi there! My name is Umer Sohail  and I’m a software engineer with over 5 years of experience in the industry. I love all things tech and coding, and on my channel, I share my knowledge and experience with others.</p>

            <div className="flex justify-center ">
            <button className="hk ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Join Discord</button>

            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 d">
            <img className="object-cover object-center rounded-full" alt="hero" src='https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/378868324_860756278901093_1659713808052935769_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGA6ELVmJNjc5L0WRYr7nsaCDDZ7YhzllYIMNntiHOWVsWL2we4ZxQMTYdB0PIi4AqtdzjRcGwhR7-j0MzV0Jrj&_nc_ohc=JwilJpJSPnoAX9fnhFq&_nc_ht=scontent.flhe13-1.fna&oh=00_AfBjmZfrbj-TpnodBQ41qcVRENEU7-QPC1EVe6OsHybvbA&oe=65EFD2CC'></img>
          </div>
        </div>
      </section>
      <ImageSlider/>
      <Join/>
      <Group/>
      <Courses/>
      <Testi/>
      <Terminal/>
      <Footer/>
    </>
  );
}

export default Home;
