import './groupjoin.css';
function Join() {
  return (
    <>
      <section className="text-gray-600 body-font " class="home">
        <div className="container px-5 py-24 mx-auto home">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/12UP_HefB0U?si=a916HTZ5ZMDoOGKW"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Buy YouTube Videos</h2>
              <p style={{ color: 'white' }} className="leading-relaxed text-base">
               Inroduction to our Premium paid Course how to join what are the benifits for MERN and Trading Course
              </p>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/iWaXuMMlgls?si=ucjwGPOFfFHUgeyd"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">The Catalyzer</h2>
              <p style={{ color: 'white' }} className="leading-relaxed text-base">
                Basic Introduction Of Fundamental Analysis for Trading How to Differnce between Technical and Fundamental Analysis how to read ecnomic data ..
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Join;

