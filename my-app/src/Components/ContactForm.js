import React, {useState} from "react";
import firebase from "../firebase";
import { getDatabase, ref, push } from "firebase/database";


import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {


  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission



    // Get form data
    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value
    };
 
// console.log(firebase.options.databaseURL);
  // Reference to the database node where you want to store the data
  const database = getDatabase(firebase);  // Use getDatabase to get the database instance
  const dataRef = ref(database, 'contacts');

  try {
    // Push the form data to the database
    push(dataRef, formData);
      console.log('Data sent successfully!');
      toast.success("Thanks, We will contact you ", {
        icon: "🚀",
        position: "top-center"
      });


      setFormValues({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
      });


    } catch (error) {
      toast.error("Please try to contact directly to authors 😞 !", {
        position: "top-center"
      })

      console.error('Error sending data:', error.message);
    }

  };

   // Update formValues state when input changes
   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };


  return (
    <div className="min-h-screen max-md:p-3 mt-52 max-sm:pb-44 bg-teal-50">
      <div className="flex justify-center items-center">
        <div className="container h-screen max-w-3xl  mx-auto my-8">
          <h1 className="text-4xl text-center font-semibold text-[#f7644c]">
            Want to Connect with the Authors?
          </h1>
          
          <p className="pt-7 text-gray-500 leading-8 text-center mt-3">
            Are you interested in buying The Everything Token in bulk, having us
            speak to your team or organization, or want to chat about something
            else? Fill out the form below.
          </p>
          <ToastContainer />
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto   ">
            <label
              htmlFor="firstName"
              className="block text-lg  py-5 font-normal text-gray-600"
            >
              Name <Required />
            </label>

            <div className="flex max-w-3xl gap-[11px]">
              <div className=" w-1/2 mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-base font-normal text-gray-600"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formValues.firstName}
                  onChange={handleInputChange}
                  className="mt-1 p-[11px]  hover:bg-teal-50 w-full border border-gray-300 "
                />
              </div>

              <div className="mb-4  w-1/2 ">
                <label
                  htmlFor="lastName"
                  className="block text-base font-normal text-gray-600"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formValues.lastName}
                  onChange={handleInputChange}
                  className="mt-1 p-[11px] hover:bg-teal-50 w-full border border-gray-300 "
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-base font-normal text-gray-600"
              >
                Email <Required />
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formValues.email}
                onChange={handleInputChange}
                className="mt-1 p-[11px] hover:bg-teal-50 w-full border border-gray-300 "
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-base font-normal text-gray-600"
              >
                Phone <Required />
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formValues.phone}
                onChange={handleInputChange}
                className="mt-1 p-[11px] hover:bg-teal-50 w-full border border-gray-300 "
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-base font-normal text-gray-600"
              >
                Message <Required />
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formValues.message}
                onChange={handleInputChange}
                rows="4"
                className="mt-1 p-[11px] hover:bg-teal-50 w-full border border-gray-300 "
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#f7644c] w-24 cursor-pointer hover:bg-orange-500  font-semibold text-gray-100 py-3 rounded-full px-5   transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Required = () => {
  return (
    <span>
      <span className="text-gray-400">(required)</span>
    </span>
  );
};

export default ContactForm;
