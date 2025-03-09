import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

export default function QuickTransfer() {
  const contacts = [
    { id: 1, name: "Mary", avatar: "/avatars/avata6.jpg" },
    { id: 2, name: "Rasky", avatar: "/avatars/avata8.jpg" },
    { id: 3, name: "Jeremy", avatar: "/avatars/avata7.jpg" },
    { id: 4, name: "Young", avatar: "/avatars/avata4.jpg" },
  ];

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Transfer</h2>
          <a href="sendMoney" className="text-sm text-blue-600">
            Send Money
            
          </a>
        </div>

        <div className="flex overflow-x-auto gap-4 pb-4 -mx-1 px-1">
          <div className="flex flex-col items-center min-w-[60px]">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-2">
              <Plus className="h-6 w-6 text-gray-500" />
            </div>
            <span className="text-xs text-center">Add</span>
          </div>

          {contacts.map((contact) => (
            <div key={contact.id} className="flex flex-col items-center min-w-[60px]">
              <div className="w-12 h-12 rounded-full overflow-hidden mb-2">
                <Image
                  src={contact.avatar}
                  alt={contact.name}
                  width={48}
                  height={48}
                  className="object-cover object-center"
                />
              </div>
              <span className="text-xs text-center">{contact.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <label htmlFor="accountNumber" className="text-sm font-medium text-gray-700 block mb-1">
            Account Number
          </label>
          <div className="flex items-center">
            <Input id="accountNumber" defaultValue="0818 3322 4854 2239" className="flex-1 border-gray-300" />
            <span className="ml-2 text-xs font-medium text-gray-500">Master</span>
            <Button className="ml-4 bg-black text-white hover:bg-gray-800">Send</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}