'use client';
import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '../../components/ui/input';
import { LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { RiWhatsappFill } from 'react-icons/ri';
import { TbMailFilled } from 'react-icons/tb';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  const [charCount, setCharCount] = useState(0);
  const [hasReachedLimit, setHasReachedLimit] = useState(false);

  const handleInputChange = (e: any) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 200) {
      setCharCount(inputValue.length);
    } else {
      e.target.value = inputValue.slice(0, 200);
    }
    setHasReachedLimit(inputValue.length >= 200);
  };

  return (
    <div className="flex flex-col p-4 md:px-24">
      <div className="max-w-4xl w-full py-6">
        <h1 className="text-3xl mb-6 text-center">Contact</h1>
        <div className="flex flex-col items-center space-y-2">
          <div className="flex flex-col items-start w-full max-w-md">
            <Label className="mb-1" htmlFor="email">
              E-mail
            </Label>
            <Input id="email" type="email" placeholder="username@domain.com" />
          </div>
          <div className="flex flex-col items-start w-full max-w-md">
            <Label className="mb-1" htmlFor="subject">
              Subject
            </Label>
            <Input
              id="subject"
              type="text"
              placeholder="Write your subject here"
            />
          </div>
          <div className="flex flex-col items-start w-full max-w-md">
            <Label className="mb-1" htmlFor="message">
              Message
            </Label>
            <Input
              placeholder="Write your message here"
              className="pt-4 pb-20"
              id="message"
              type="text"
              maxLength={200}
              onChange={handleInputChange}
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
            <Button className="w-full mt-2 font-bold transition-transform transform hover:scale-105 hover:dark:bg-violet-400 hover:bg-violet-700">
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
