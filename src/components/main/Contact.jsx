import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="pb-10">
      <div className="container">
        <h2 className="text-headingColor text-[32px] font-[700] mb-2">
          Get in touch
        </h2>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.643391200977!2d106.67417181494201!3d10.838578661006807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752854b3394b79%3A0xbda568e128ddc7bd!2zMzUwIE5ndXnhu4VuIFbEg24gTMaw4bujbmcsIFBoxrDhu51uZyAxMCwgR8OyIFbhuqVwLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1680705094020!5m2!1sen!2s"
              className="border w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
