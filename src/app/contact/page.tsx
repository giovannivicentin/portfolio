import { Label } from '@/components/ui/label';
import { Input } from '../../components/ui/input';
import { LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { RiWhatsappFill } from 'react-icons/ri';
import { TbMailFilled } from 'react-icons/tb';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  return (
    <div className="flex flex-col p-4 md:px-24">
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
              placeholder="giovanni.vicentin@email.com"
            />
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
            />
          </div>
          <div className="flex flex-col items-start w-full max-w-md">
            <Button className="w-full mt-2 font-bold">Send</Button>
          </div>
          <div className="flex pt-8 gap-2">
            <Link href="https://github.com/giovannivicentin">
              <GitHubLogoIcon className="w-7 h-7 ml-4" />
            </Link>
            <Link href="https://www.linkedin.com/in/giovannivicentin/">
              <LinkedInLogoIcon className="w-7 h-7 ml-4" />
            </Link>
            <Link href="https://wa.me//5511942010707?text=Hey%20Giovanni">
              <RiWhatsappFill className="w-7 h-7 ml-4" />
            </Link>
            <Link href="mailto:giovannifvicentin@gmail.com">
              <TbMailFilled className="w-7 h-7 ml-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
