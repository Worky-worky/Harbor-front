import { useEffect, useState } from "react";
import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { getUserByEmail } from "@/data/users";

interface CardData {
  id: number;
  type: string;
  color: string;
  balance: number;
  number: string;
  expiry: string;
  holder: string;
  bank: string;
  bankType: string;
}

interface CardListProps {
  cards: CardData[];
}

export default function CardList({ cards }: CardListProps) {
  const [userCards, setUserCards] = useState<CardData[]>([]);

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      const user = getUserByEmail(userEmail);
      if (user) {
        setUserCards([
          {
            id: 1,
            type: "Main",
            color: "blue",
            balance: user.balance,
            number: user.accountNumber,
            expiry: `${user.cardExpiryMonth}/${user.cardExpiryYear}`,
            holder: `${user.firstName} ${user.lastName}`,
            bank: "Harborfront",
            bankType: user.accountType
          },
          // {
          //   id: 2,
          //   type: "Savings",
          //   color: "green",
          //   balance: user.savings,
          //   number: user.accountNumber,
          //   expiry: `${user.cardExpiryMonth}/${user.cardExpiryYear}`,
          //   holder: `${user.firstName} ${user.lastName}`,
          //   bank: "Harborfront Bank",
          //   bankType: "Savings"
          // }
        ]);
      }
    }
  }, []);

  const getCardNumber = (number: string) => {
    return `**** **** **** ${number.slice(-4)}`;
  };

  const getCardColor = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-500";
      case "purple":
        return "bg-purple-600";
      case "green":
        return "bg-green-500";
      case "orange":
        return "bg-orange-500";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <div className="space-y-">
      <div className="text-lg font-bold  text-primary">
        Total Cards: {userCards.length}
      </div>
      {userCards.map((card) => (
        <div key={card.id} className="flex items-center gap-4 py-3">
          <div className={`w-12 h-14 bg-primary rounded-lg  flex-shrink-0`}>
            <img src="../icons/mastercard.svg" 
                 alt="master card" 
                 className="flex items-center justify-center h-full w-full" />
          </div>

          <div className="grid grid-cols-4 flex-1 gap-2">
            <div>
              <p className="text-xs text-gray-500">Card Type</p>
              <p className="font-medium">{card.bankType}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Bank</p>
              <p className="font-medium">{card.bank}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Card Number</p>
              <p className="font-medium">{getCardNumber(card.number)}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Name on Card</p>
              <p className="font-medium">{card.holder}</p>
            </div>
          </div>


          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Freeze Card</DropdownMenuItem>
              <DropdownMenuItem className="text-red-500">Delete Card</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>
      ))}
    </div>
  );
}