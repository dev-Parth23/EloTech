import React from "react";

const Contact = () => {
  return (
    <div className="relative w-screen h-screen bg-[#ffffff] text-[#313131]">
      {/* First Section */}
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex items-center">
        <h3 className="text-5xl font-[font1] text-nowrap">Consult with</h3>
        <div className="w-20 h-20 overflow-hidden mx-4">
          <img
            className="object-fill rounded-full"
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGRpZ2l0YWx8ZW58MHx8MHx8fDA%3D"
            alt="Consult with"
          />
        </div>
        <h3 className="text-5xl font-[font1]">us</h3>
      </div>

      {/* Second Section */}
      <div className="absolute top-[70%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex items-center">
        <h3 className="text-5xl font-[font1] text-nowrap">Before you</h3>
        <div className="w-20 h-20 overflow-hidden mx-4">
          <img
            className="object-fill rounded-full"
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGRpZ2l0YWx8ZW58MHx8MHx8fDA%3D"
            alt="Before you commit"
          />
        </div>
        <h3 className="text-5xl font-[font1]">commit</h3>
      </div>
    </div>
  );
};

export default Contact;
