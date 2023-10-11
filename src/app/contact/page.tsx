'use client';

import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '../../components/ui/input';
import { LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { RiWhatsappFill } from 'react-icons/ri';
import { TbMailFilled } from 'react-icons/tb';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Resend } from 'resend';

const ContactPage = () => {
  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
  const [charCount, setCharCount] = useState(0);
  const [hasReachedLimit, setHasReachedLimit] = useState(false);

  // States for email, subject, and message.
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  console.log('ContactPage rendering');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSubject(e.target.value);

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setMessage(inputValue);
    setCharCount(inputValue.length);
    setHasReachedLimit(inputValue.length >= 200);
    if (inputValue.length > 200) {
      setMessage(inputValue.slice(0, 200));
    }
  };

  const handleSendClick = async () => {
    try {
      console.log({
        from: 'onboarding@resend.dev',
        to: 'giovannifvicentin@gmail.com',
        subject: `From ${email}: ${subject}`,
        html: `<p>Email from: ${email}</p><p>${message}</p>`,
      });

      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'giovannifvicentin@gmail.com',
        subject: `From ${email}: ${subject}`,
        html: `<p>Email from: ${email}</p><p>${message}</p>`,
      });
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Email sending error:', error);
      alert(`Failed to send the email. Error: ${(error as Error).message}`);
    }
  };

  return (
    <div className="flex flex-col p-4 md:px-24 opacity-0 transform translate-y-10 animate-fadeInSlideUp">
      <div className="max-w-4xl w-full py-6">
        <h1 className="text-3xl mb-6 text-center">Contact</h1>
        <div className="flex flex-col items-center space-y-2">
          <div className="flex flex-col items-start w-full max-w-md">
            <Label className="mb-1" htmlFor="email">
              E-mail
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="username@domain.com"
            />
          </div>
          <div className="flex flex-col items-start w-full max-w-md">
            <Label className="mb-1" htmlFor="subject">
              Subject
            </Label>
            <Input
              id="subject"
              type="text"
              value={subject}
              onChange={handleSubjectChange}
              placeholder="Write your subject here"
            />
          </div>
          <div className="flex flex-col items-start w-full max-w-md">
            <Label className="mb-1" htmlFor="message">
              Message
            </Label>
            <Input
              className="pt-4 pb-20"
              id="message"
              type="text"
              value={message}
              onChange={handleMessageChange}
              maxLength={200}
              placeholder="Write your message here"
            />
            <span
              className={
                hasReachedLimit
                  ? 'text-red-500 text-xs pt-1'
                  : 'text-muted-foreground text-xs pt-1'
              }
            >
              {charCount} / 200
            </span>
          </div>
          <div className="flex flex-col items-start w-full max-w-md">
            <Button
              className="w-full mt-2 font-bold transition-transform transform hover:scale-105 hover:dark:bg-violet-400 hover:bg-violet-700"
              onClick={handleSendClick}
            >
              Send
            </Button>
          </div>
          <div className="flex pt-8 gap-2">
            <Link href="https://github.com/giovannivicentin">
              <GitHubLogoIcon className="w-7 h-7 ml-4 transition-transform transform hover:scale-110 hover:dark:text-violet-400 hover:text-violet-700" />
            </Link>
            <Link href="https://www.linkedin.com/in/giovannivicentin/">
              <LinkedInLogoIcon className="w-7 h-7 ml-4 transition-transform transform hover:scale-110 hover:dark:text-violet-400 hover:text-violet-700" />
            </Link>
            <Link href="https://wa.me//5511942010707?text=Hey%20Giovanni">
              <RiWhatsappFill className="w-7 h-7 ml-4 transition-transform transform hover:scale-110 hover:dark:text-violet-400 hover:text-violet-700" />
            </Link>
            <Link href="mailto:giovannifvicentin@gmail.com">
              <TbMailFilled className="w-7 h-7 ml-4 transition-transform transform hover:scale-110 hover:dark:text-violet-400 hover:text-violet-700" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
