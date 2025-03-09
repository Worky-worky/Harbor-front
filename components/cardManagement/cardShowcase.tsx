"use client"

import { useState } from "react"
import { Plus, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import CardList from "./card-list"
import CardStatistic from "./card-statistic"
import CardCarousel from "./card-carousel"

export default function CardShowcase() {
  const [cards, setCards] = useState([
    {
      id: 1,
      type: "Main",
      color: "blue",
      balance: 673412.66,
      number: "**** **** **** 1234",
      expiry: "08/21",
      holder: "Franklin Jr.",
      bank: "ABC Bank",
      bankType: "Primary",
    },
    {
      id: 2,
      type: "Purple",
      color: "purple",
      balance: 45662,
      number: "**** **** **** 1234",
      expiry: "08/21",
      holder: "Franklin Jr.",
      bank: "Fineline Bank",
      bankType: "Secondary",
    },
    {
      id: 3,
      type: "Green",
      color: "green",
      balance: 23511,
      number: "**** **** **** 1234",
      expiry: "08/21",
      holder: "Franklin Jr.",
      bank: "Makan Bank",
      bankType: "Secondary",
    },
    {
      id: 4,
      type: "Orange",
      color: "orange",
      balance: 34000,
      number: "**** **** **** 1234",
      expiry: "08/21",
      holder: "Franklin Jr.",
      bank: "Where Bank",
      bankType: "Secondary",
    },
  ])

  return (
    <div className="mx-auto mt-5 max-w-6xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-1xl font-bold text-primary border-b-2 border-primary">Cards Center</h1>
        {/* <Button className="bg-primary hover:bg-primary/100 text-white rounded-full">
          <Plus className="mr-2 h-5 w-5" />
          Add Card
        </Button> */}
      </div>

      <CardCarousel/>

      <div className="grid grid-cols-1 lg:grid-cols- gap-6 mt-8">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  {/* <h2 className="text-lg font-semibold">Card List</h2> */}
                  {/* <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur</p> */}
                </div>
                {/* <div className="relative">
                  <Button variant="outline" className="flex items-center gap-2">
                    Newest
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </div> */}
              </div>
              <CardList cards={cards} />
            </CardContent>
          </Card>
        </div>
        <div>
          {/* <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold">Card Statistic</h2>
              <p className="text-sm text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur</p>
              <CardStatistic cards={cards} />
            </CardContent>
          </Card> */}
        </div>
      </div>
    </div>
  )
}