"use client";

import React, { FormEvent, useRef, useState } from "react";

import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

// import { Form } from "../ui/form";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  User,
  MailIcon,
  PhoneCall,
  ArrowRightIcon,
  MessageSquare,
} from "lucide-react";

interface ContactUsProps {}

// interface ContactFormData {
//   name: string;
//   email: string;
//   phone: string;
//   message: string;
// }


const ContactForm: React.FC<ContactUsProps> = () => {

  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage]     = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);

  // const [formValues, setFormValues] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   message: ""
  // });
  // const [nameError, SetNameError] = useState("");
  // const [emailError, setEmailError] = useState("");
  // const [messageError, setMessageError] = useState("");

  // const validateFields = () => {
  // }

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    

    if (formRef.current) {
      // const formData = new FormData(formRef.current) as ContactFormData;
      emailjs.sendForm(
        "service_3tqfzie",
        "template_aox1lxb",
        formRef.current,
        "8o4Uw65gsxKfNhBmj"
      )
      .then((result: EmailJSResponseStatus) => {
        setSuccessMessage(true);
        setTimeout(() => {
          setSuccessMessage(false);
        }, 3000);
      }, (error: EmailJSResponseStatus) => {
        // console.error(error.text);
        setErrorMessage(true);
        setTimeout(() => {
          setErrorMessage(false);
        }, 3000);
      });
    }
  };

  return (
    <form ref={formRef} className="grid grid-cols-12 gap-6" onSubmit={sendEmail}>
      <div className="col-span-12 relative flex items-center">
        <Input
          type="text"
          id="name"
          placeholder="Name"
          className="form-control-theme"
          name="name"
          required
        />
        <User size={18} className="absolute right-6" />
      </div>
      {/* <div className="col-span-full">
        <span className="text-sm text-muted text-red-500">This field is required</span>
      </div> */}
      <div className="col-span-full md:col-span-6 relative flex items-center">
        <Input
          type="email"
          id="email"
          placeholder="Email Address"
          className="form-control-theme"
          name="email"
          required
        />
        <MailIcon size={18} className="absolute right-6" />
      </div>
      <div className="col-span-full md:col-span-6 relative flex items-center">
        <Input
          type="telephone"
          id="phone"
          placeholder="Phone Number"
          className="form-control-theme"
          name="phone"
        />
        <PhoneCall size={18} className="absolute right-6" />
      </div>
      <div className="col-span-12 relative">
        <Textarea
          placeholder="Type your message here"
          rows={5}
          className="form-control-theme"
          name="message"
          required
        />
        <MessageSquare size={18} className="absolute right-6 top-4" />
      </div>
      <div className="col-span-12">
        <Button type="submit" className="btn btn-primary btn-md w-full gap-x-2">
          Let's Connect
          <ArrowRightIcon size={20} />
        </Button>
      </div>
      <div className="col-span-full">
        {
          successMessage && (
            <p className="text-sm text-green-400">Message Sent! I'll reach out to you shortly, thanks.</p>
          )
        }{
          errorMessage && (
            <p className="text-sm text-red-500">Sending Failed! Your message was not sent, please try again later.</p>
          )
        }
      </div>
    </form>
  );
};

export default ContactForm;
