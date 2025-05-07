import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bdryxvgb", userInfo);
      toast.success("Form submitted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mb-10"
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">Contact Us</h1>
      <p className="text-base md:text-lg text-center md:text-left">
        Please fill out the form below to contact us.
      </p>

      <div className="flex justify-center mt-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md bg-slate-200 p-6 md:p-8 rounded-xl shadow-md"
        >
          <h2 className="text-xl font-semibold mb-6 text-center">Send Your Message</h2>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Full Name:</label>
            <input
              {...register("name", { required: true })}
              type="text"
              id="name"
              name="name"
              className="w-full shadow rounded-lg border py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              placeholder="Enter Your Full Name"
            />
            {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email:</label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              name="email"
              className="w-full shadow rounded-lg border py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              placeholder="Enter Your Email"
            />
            {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-1">Message:</label>
            <textarea
              {...register("message", { required: true })}
              id="message"
              name="message"
              className="w-full shadow rounded-lg border py-2 px-3 text-gray-700 h-24 resize-none focus:outline-none focus:shadow-outline"
              placeholder="Enter Your Message"
            />
            {errors.message && <span className="text-red-500 text-sm">This field is required</span>}
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-slate-700 duration-200"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
