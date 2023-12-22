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

const ContactForm = () => {
  return (
    <form className="grid grid-cols-12 gap-6">
      <div className="col-span-12 relative flex items-center">
        <Input
          type="text"
          id="name"
          placeholder="Name"
          className="form-control-theme"
        />
        <User size={18} className="absolute right-6" />
      </div>
      <div className="col-span-full md:col-span-6 relative flex items-center">
        <Input
          type="email"
          id="email"
          placeholder="Email Address"
          className="form-control-theme"
        />
        <MailIcon size={18} className="absolute right-6" />
      </div>
      <div className="col-span-full md:col-span-6 relative flex items-center">
        <Input
          type="number"
          id="number"
          placeholder="Phone Number"
          className="form-control-theme"
        />
        <PhoneCall size={18} className="absolute right-6" />
      </div>
      <div className="col-span-12 relative">
        <Textarea
          placeholder="Type your message here"
          rows={5}
          className="form-control-theme"
        />
        <MessageSquare size={18} className="absolute right-6 top-4" />
      </div>
      <div className="col-span-12">
        <Button className="w-full gap-x-2">
          Let's Connect
          <ArrowRightIcon size={20} />
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
