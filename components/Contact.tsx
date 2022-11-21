import React from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto: nushrat.j01@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`
  };

  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row
        max-w-7xl px-10 justify-evenly mx-auto items-center mb-20"
    >
      <h4 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h4>

      <div className="px-5 md:px-10 space-y-5 w-screen absolute top-[22%]">
        <h3 className="text-2xl sm:text-3xl font-semibold text-center text-gray-500">
          I`d love to <span className="text-[#F7AB0A]">hear</span> from you
        </h3>

        
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-6 w-6 animate-pulse fill-[#607EAA]" />
            <p className="text-sm sm:text-base text-gray-500">+880 1980784503</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-6 w-6 animate-pulse fill-[#607EAA]" />
            <p className="text-sm sm:text-base text-gray-500">nushrat.j01@gmail.com</p>
          </div>

          <div className="flex items-start space-x-2 justify-center">
            <MapPinIcon className="h-6 w-6 animate-pulse fill-[#607EAA]" />
            <p className="text-sm sm:text-base text-gray-500">Niketon, Dhaka</p>
          </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
              required
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
              required
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
            required
          />
          <button
            type="submit"
            className="bg-purple-500 py-3 px-10 rounded-md text-white font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;