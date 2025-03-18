import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Contact = () => {
  return (
    <div className="relative w-screen bg-[#151518]">
      <div className="flex justify-between pt-24 p-14">
        <h2 className="uppercase font-[font7] text-7xl text-[#696969]">
          Get in touch
        </h2>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <h3 className="font-[font7] text-xl text-[#696969]">
              Have Questions or Need Assistance? We're here to Help!
            </h3>
            <h3 className="font-[font7] text-xl text-[#696969]">
              Reach out to our Team, And we'll Respond as soon as Possible
            </h3>
          </div>
          <div className="flex items-center gap-2 font-[font3] text-2xl text-[#696969]">
            Customer Support hotline <MdArrowOutward />
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-[50%] p-14">
          <h3 className="uppercase font-[font3] text-[#696969]">
            Fill in the details below, and our team will get back to you
          </h3>
          <form className="flex flex-col gap-8 mt-12 pl-3 pr-20" action="">
            <div className="flex flex-col">
              <label className="font-[font3] text-[#696969]">Your Name</label>
              <input
                className="border-b bg-transparent border-[#696969]"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-[font3] text-[#696969]">
                Email Address
              </label>
              <input
                className="border-b bg-transparent border-[#696969]"
                type="email"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-[font3] text-[#696969]">
                Phone Number
              </label>
              <input
                className="border-b bg-transparent border-[#696969]"
                type="tel"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-[font3] text-[#696969]">
                Your Message
              </label>
              <input
                className="border-b bg-transparent border-[#696969]"
                type="text"
              />
            </div>

            <div className="w-full flex justify-end align-middle items-center">
              <button className="font-[font3] text-[#696969] items-center justify-end flex gap-2 border-b border-[#696969] underline-offset-4 p-3">
                <h3>Submit</h3>
                <MdArrowOutward />
              </button>
            </div>
          </form>
          <div className="mt-10 flex flex-col gap-2">
            <h3 className="font-normal text-[2.5rem] font-[font7]">
              SEND US A MESSAGE
            </h3>
            <h4 className="font-[font3] text-[#696969] text-[0.78rem]">
              FEEL FREE TO WRITE US AND ASK ANY QUESTION YOU HAVE
            </h4>
          </div>
        </div>

        {/* right section */}
        <div className="w-[50%] h-[100vh] overflow-hidden mt-10 flex gap-4 p-4">
          <div className="left w-[50%]">
            <img
              className="object-contain"
              src="https://cdn.dribbble.com/userupload/17993178/file/original-b3ed58ce98b8aee37ce2df7f2570ff8c.jpeg?resize=1024x4280&vertical=center"
              alt=""
            />
          </div>

          <div className="right w-[50%] flex-col gap-4 flex">
            <div className="left2 h-[50%]">
              <img
                className="object-contain"
                src="https://images.pexels.com/photos/1590549/pexels-photo-1590549.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </div>
            <div className="right2  h-[50%]">
              <img
                className="object-contain"
                src="https://plus.unsplash.com/premium_photo-1667619417834-3d7de6f5d8d2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2dyb3VuZCUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// //
// <div className="border-b underline-offset-4 p-3 w-fit">

// </div>;
