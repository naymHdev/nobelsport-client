import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import { MdBlockFlipped } from "react-icons/md";

interface Contact {
  id: string;
  name: string;
  avatar: string;
  status: string;
}

interface MessageHeaderProps {
  contact: Contact;
}

export default function MessageHeader({ contact }: MessageHeaderProps) {
  return (
    <div className="flex items-center justify-between p-3.5 border-b">
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10">
          <Image
            src="https://shorturl.at/Ge8HU"
            alt="Image"
            width={40}
            height={40}
          />
        </Avatar>
        <div>
          <h2 className=" font-semibold text-xl text-ns-title">Sarah Adams</h2>
          <div className="flex items-center text-sm text-green-600">
            <span className="h-2 w-2 rounded-full bg-green-600 mr-1.5"></span>
            <span>Online</span>
          </div>
        </div>
      </div>
      <Button
        variant="ghost"
        className=" flex items-center gap-1 text-lg text-ns-title font-semibold"
      >
        <MdBlockFlipped />
        Block
      </Button>
    </div>
  );
}
