import React, { useState, useEffect } from 'react';
import './slider.css';

const ImageSlider = () => {
  const images = ['https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/417538270_951404569836263_6836744951052527775_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeHSngUsgGFaPSmmEct9r9eiGgAwry5mgV4aADCvLmaBXrAlJYOey5MNjXoOFSLi5Y6LN9xePKmswRs74fXj7XGw&_nc_ohc=hEmwTeaF62QAX9DT0b7&_nc_ht=scontent.flhe13-1.fna&oh=00_AfCOkRynE5ak53FcpIpwHtGIeDkhpv21-1nEokxmNG366g&oe=65DF778C', 'https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/417457519_951414316501955_4345928328043934165_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeEaUTz9dUTCYaciZ3gzGXzl-XA9t0T8qlL5cD23RPyqUjmnT99EB_JBJGDv1WkGbNau3-JEx6HnFaE9co8l8BpD&_nc_ohc=_nvoAzlUjjcAX8S_oSV&_nc_ht=scontent.flhe13-1.fna&oh=00_AfCVsTGuPxImmcgp91Nib3_p6iKvC0YHsfmfrNMQAewmoA&oe=65E03CE8', 'https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/417487374_951409636502423_3106815885813642410_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeFVUZ5Sv199X9DT_mQfqOd6zYr1eSJsfn7NivV5Imx-frKYf_dz2wsro4iZaqRRjD-WSQA-G8opW5yaLjwM7kwZ&_nc_ohc=MCAdXwsItCAAX_cBYW8&_nc_ht=scontent.flhe13-1.fna&oh=00_AfDJrqgQwTLIuDBbie7CUkmHGmoxuStvEmWZ2AhCfTKnwg&oe=65E07468']; // Add your image URLs here
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);
 

  const subs=()=>{
    window.location.href="https://www.youtube.com/channel/UCqKh-pASyz1aryH9LrH0OzQ";
  }
  return (
    <div className='grid md:grid-cols-4 bm '>

      <div className="max-w-screen-lg mx-auto overflow-hidden col-span-1 slider as">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className=" w-full flex-shrink-0">
              <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>

      <div className='box2 col-span-1 rounded-r-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 '>
        <div className="flex items-center">
          <img src="https://cdn-icons-png.flaticon.com/128/6325/6325757.png" alt="Subscribe Icon" className="w-6 h-6 mr-2 jk" />
          92.3K Subscribers
        </div>
      </div>

      <div className='col-span-2 yo'>
        <h1 className='bx'>---Youtube</h1>
        <p className='bow'>Popular</p>
        <p>Uploads from My Youtube Channel</p>
        <p className='bow vs'>I would really appreciate it if you could check it out and maybe even hit the subscribe</p>
        <p className='bow vs'>button if you enjoy the content.</p>
        <p className='bow vs'>Thanks in advance!</p>
        <button className="sa flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0" onClick={subs}>subscribe</button>
      </div>

      <div className='box2 bpx col-span-1 col-start-2 rounded-r-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
        <img src="https://cdn-icons-png.flaticon.com/128/1709/1709973.png" alt="Subscribe Icon" className="w-6 h-6 mr-2 jk" />
        290 Videos Uploaded</div>
    </div>
  );
};

export default ImageSlider;
