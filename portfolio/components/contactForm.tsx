"use client";
import { useState, FormEvent } from 'react';
import handleSubmit from './sendForm';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [sending, setSending] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState("Send");

  async function handleSubmitUI(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);

    const formData = new FormData(event.currentTarget);

    const data: FormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: "Portfolio Form - Subject: " + formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    const result = await handleSubmit(data);

    setButtonText(result);

    setSending(false);

    setTimeout(() => setButtonText("Send"), 3400);
    
  }

  return (
    <form className='' id="contact" onSubmit={handleSubmitUI}>
      <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-x-9 mb-1'>

        <div className='flex flex-col flex-wrap w-full lg:w-3/6'>
          <label className='text-xl text-neutral-50 mb-1' htmlFor="name">Name</label>
          <input className='text-xl bg-neutral-800 text-neutral-50 h-12 rounded-md px-2 px-2 py-2 focus:outline-none border-2 border-transparent focus:border-orange-600' type="text" name="name" id="name" required />
        </div>

        <div className='flex flex-col flex-wrap w-full lg:w-3/6'>
          <label className='text-xl text-neutral-50 mb-1' htmlFor="email">Email</label>
          <input className='text-xl bg-neutral-800 text-neutral-50 h-12 rounded-md px-2 px-2 py-2 focus:outline-none border-2 border-transparent focus:border-orange-600' type="email" name="email" id="email" required />
        </div>

      </div>

      <div className='flex flex-col flex-wrap w-full mb-1'>
        <label className='text-xl text-neutral-50 mb-1' htmlFor="subject">Subject</label>
        <input className='text-xl bg-neutral-800 text-neutral-50 h-12 rounded-md px-2 py-2 focus:outline-none border-2 border-transparent focus:border-orange-600' type="text" name="subject" id="subject" required />
      </div>

      <div className='flex flex-col flex-wrap w-full mb-4'>
        <label className='text-xl text-neutral-50 mb-1' htmlFor="message">Message</label>
        <textarea className='bg-neutral-800 text-xl text-neutral-50 rounded-md px-2 py-2 resizable-vertical min-h-64 focus:outline-none border-2 border-transparent focus:border-orange-600' name="message" id="message" required></textarea>
      </div>

      <button
        disabled={sending || buttonText !== "Send"}
        className="w-2/6 lg:w-1/6 text-xl bg-neutral-800 focus:bg-orange-600 focus:scale-105 hover:bg-orange-600 hover:scale-105 duration-300 ease-in-out rounded-md focus:outline-none flex gap-2 justify-center items-center h-10 px-2 py-2"
        type="submit">
        {sending ? (
          <svg width="24px" height="24px" viewBox="-1.6 -1.6 19.20 19.20" xmlns="http://www.w3.org/2000/svg"
            className="fill-orange-600 animate-spin"
            transform="rotate(0)">
            <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z" opacity=".2"></path>
            <path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z"></path>
          </svg>
        ) :
          (buttonText)}
      </button>
    </form>
  );
}
