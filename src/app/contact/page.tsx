import { Label } from '@/components/ui/label';
import { Input } from '../../components/ui/input';

const ContactPage = () => {
  return (
    <div className="flex flex-col p-4 md:px-24">
      <div className="max-w-4xl w-full py-6">
        <h1 className="text-3xl mb-6 text-center">Contact</h1>
        <div className="">
          <Label htmlFor="picture">E-mail</Label>
          <Input type="email" placeholder="Email" className="max-w-md" />
          <Label htmlFor="picture">Title</Label>
          <Input type="text" placeholder="Title" className="max-w-md" />
          <Label htmlFor="picture">Message</Label>
          <Input type="text" placeholder="Message" className="max-w-md" />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
