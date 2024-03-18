import './groupjoin.css';
import { useEffect, useRef } from 'react';

function Join() {
  const joinRef = useRef(null);

  useEffect(() => {
    const joinElement = joinRef.current;
    const handleScroll = () => {
      if (joinElement) {
        const topPosition = joinElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (topPosition < windowHeight - 100) {
          joinElement.classList.add('reveal');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section ref={joinRef} className="text-gray-600 body-font ppl">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4 kl ml">
              <div className="rounded-lg h-64 overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/12UP_HefB0U?si=xnSMvn0CjPuY7rLu"
                  frameBorder="0"
                  allowFullScreen
                  title="Introduction"
                ></iframe>
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3 w">Introduction</h2>
              <p className="leading-relaxed text-base w">Introduction About Me My Experience My Achievements.</p>
              <button className="gjt flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Video 1</button>
            </div>
            <div className="sm:w-1/2 mb-10 px-4 ml">
              <div className="rounded-lg h-64 overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/yuH7O8zpwNc?si=HX-e4JW-fTF7en1J"
                  frameBorder="0"
                  allowFullScreen
                  title="What is Trading"
                ></iframe>
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3 w">What is Trading</h2>
              <p className="leading-relaxed text-base w">Introduction what is trading skill how much this profession will make you financially stable.</p>
              <button className="gjt flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded ">Video 2</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Join;
