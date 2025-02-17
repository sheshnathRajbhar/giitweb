import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-[80vh] flex flex-col">
      {/* Header Section */}
      <div className="w-full bg-[#441752] px-5 py-4">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-white text-2xl">Contact Us</h2>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="max-w-[1100px] mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
        {/* Contact Details */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold">GIIT Computer Education</h2>
          <p className="my-4"><strong>Phone No:</strong> 05461-222386</p>
          <p className="my-4"><strong>Mobile:</strong> +91-7607872680, 7754939906</p>
          <p className="my-4"><strong>Email:</strong> giit.gyansthaly@gmail.com</p>
          <p className="my-4"><strong>Address:</strong> Near Gandhi Tiraha, Majhwara Morh, Ghoshi - Mau (U.P.) 275105</p>
        </div>

        {/* Map Section (Placeholder for Map Integration) */}
        <div className="flex-1">
          <iframe
            className="w-full h-[300px] rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425508.9042519431!2d83.63428289279307!3d26.0642117869397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39918634017482b7%3A0xf900fc02b6c8af3f!2sGIIT%20Gyansthaly%20(GIIT%20COMPUTER%20EDUCATION)%2C%20Ghosi!5e1!3m2!1sen!2sus!4v1738667422946!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
