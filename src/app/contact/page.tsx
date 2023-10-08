import { Label } from '@/components/ui/label';
import { Input } from '../../components/ui/input';

const ContactPage = () => {
  return (
    <div className="flex flex-col p-4 md:px-24">
      <div className="max-w-4xl w-full py-6">
        <h1 className="text-3xl mb-6 text-center">Contact</h1>
        <div className="flex flex-col items-center space-y-2">
          <div className="flex flex-col items-start w-full max-w-md">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="giovanni.vicentin@email.com"
            />
          </div>
          <div className="flex flex-col items-start w-full max-w-md">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              type="text"
              placeholder="Write your subject here"
            />
          </div>
          <div className="flex flex-col items-start w-full max-w-md">
            <Label htmlFor="message">Message</Label>
            <Input
              id="message"
              type="text"
              placeholder="Write your message here"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
