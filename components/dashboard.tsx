"use client"
import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Pencil,
  EllipsisVertical,
  MessageCircle,
  Star,
  ArrowRight,
  Menu,
  ArrowUpRight,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import { SemiCircleGauge } from "./charts/gauge"
import GradientBarChart from "./charts/horizontal"
import DottedAreaChart from "./charts/area"
import { SidebarContent } from "./SideBarContent"

const newDeals = [ 
  "Fruit2Go", "CCNT", "Joana Mini-market", "Target",  "Morello’s", "Little Brazil Vegan", "Marshall’s MKT", "Organic Place",
]

export default function Component() {
  const [selectedPeriod, setSelectedPeriod] = useState("Yearly")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-[#F6F6F3]">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex w-80 bg-[#F6F6F3] py-4 pl-4 flex-col">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="p-0 w-64">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-gray-200">
          <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
          </Sheet>
          <div className="flex items-center gap-2">
            <div className=" flex items-center justify-center">
              <Image src="/logo.png" alt="OrangeFarm" width={25} height={25} />
            </div>
            <span className="font-archivo font-bold text-2xl text-black text-sm">OrangeFarm</span>
          </div>
          <div className="w-10" /> {/* Spacer for centering */}
        </div>

        <div className="p-4 sm:p-6 lg:p-8">
          {/* Top Stats */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8">
            {/* Revenues */}
            <Card className="flex-1">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold text-black">Revenues</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-1 mb-1">
                  <span className="px-6 text-4xl sm:text-5xl font-semibold">15%</span>
                  <ArrowUpRight className="w-4 h-4 sm:w-10 sm:h-10 text-green-500" />
                </div>
                <p className="px-6 text-xs sm:text-sm text-[#454545] mb-3 sm:mb-4">Increase compared to last week</p>
                <div className="flex justify-start mt-3 px-4 sm:mt-4">
                  <Button variant="link" className="pt-15 h-auto text-[#734A00] text-xs sm:text-sm">
                    Revenues report <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Lost Deals */}
            <Card className="flex-1">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold text-black">Lost deals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="px-6 text-4xl sm:text-5xl font-semibold mb-1">4%</div>
                <p className="px-6 text-xs sm:text-sm text-[#454545] mb-3 sm:mb-4">You closed 96 out of 100 deals</p>
                <div className="flex justify-start px-4 sm:mt-4">
                  <Button variant="link" className="pt-15 h-auto text-[#734A00] text-xs sm:text-sm">
                    All deals <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quarter Goal */}
            <Card className="w-full sm:w-60 md:w-56 lg:w-60 xl:w-68">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold text-black text-center">Quarter goal</CardTitle>
              </CardHeader>
              <CardContent>
                <SemiCircleGauge/>
                <div className="flex justify-center mt-3 sm:mt-4">
                  <Button variant="link" className="p-0 h-auto text-[#734A00] text-xs sm:text-sm">
                    All goals <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Middle Section */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Customers */}
            <Card>
              <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
                <CardTitle className="text-lg sm:text-xl">Customers</CardTitle>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-full sm:w-40 border-0 bg-white shadow-none">
                    <SelectValue>
                      <span className="text-gray-500">Sort by</span>
                      <span className="text-gray-700 ml-1">Newest</span>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="oldest">Oldest</SelectItem>
                    <SelectItem value="name">Name</SelectItem>
                  </SelectContent>
                </Select>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="group flex items-center hover:bg-[#FFF7E8] p-3 mx-2 rounded-xl gap-3 transition-colors duration-200">
                    <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
                      <AvatarImage src="/cfAvatar.png" />
                      <AvatarFallback>CF</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm sm:text-base truncate">Chris Friedkly</div>
                      <div className="text-xs sm:text-sm text-gray-500 truncate">Supermarket Villanova</div>
                    </div>
                    <div className="flex gap-1 text-[#734A00] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <Button variant="ghost" size="icon" className="w-6 h-6 sm:w-8 sm:h-8">
                        <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="w-6 h-6 sm:w-8 sm:h-8">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="w-6 h-6 sm:w-8 sm:h-8 hidden sm:flex">
                        <Pencil className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="w-6 h-6 sm:w-8 sm:h-8">
                        <EllipsisVertical className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="group flex items-center hover:bg-[#FFF7E8] p-3 mx-2 rounded-xl gap-3 transition-colors duration-200">
                    <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
                      <AvatarImage src="/mjAvatar.png" />
                      <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm sm:text-base truncate">Maggie Johnson</div>
                      <div className="text-xs sm:text-sm text-gray-500 truncate">Oasis Organic Inc.</div>
                    </div>
                    <div className="flex gap-1 text-[#734A00] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <Button variant="ghost" size="icon" className="w-6 h-6 sm:w-8 sm:h-8">
                        <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="w-6 h-6 sm:w-8 sm:h-8">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="w-6 h-6 sm:w-8 sm:h-8 hidden sm:flex">
                        <Pencil className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="w-6 h-6 sm:w-8 sm:h-8">
                        <EllipsisVertical className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="group flex items-center hover:bg-[#FFF7E8] p-3 mx-2 rounded-xl gap-3 transition-colors duration-200">
                    <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
                      <AvatarImage src="/ghAvatar.png" />
                      <AvatarFallback>GH</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm sm:text-base truncate">Gael Harry</div>
                      <div className="text-xs sm:text-sm text-gray-500 truncate">New York Finest Fruits</div>
                    </div>
                    <div className="flex gap-1 text-[#734A00] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <Button variant="ghost" size="icon" className="w-6 h-6 sm:w-8 sm:h-8">
                        <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="w-6 h-6 sm:w-8 sm:h-8">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="w-6 h-6 sm:w-8 sm:h-8 hidden sm:flex">
                        <Pencil className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="w-6 h-6 sm:w-8 sm:h-8">
                        <EllipsisVertical className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="group flex items-center hover:bg-[#FFF7E8] p-3 mx-2 rounded-xl gap-3 transition-colors duration-200">
                    <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
                      <AvatarImage src="/jsAvatar.png" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm sm:text-base truncate">Jenna Sullivan</div>
                      <div className="text-xs sm:text-sm text-gray-500 truncate">Walmart</div>
                    </div>
                    <div className="flex gap-1 text-[#734A00] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <Button variant="ghost" size="icon" className="w-6 h-6 sm:w-8 sm:h-8">
                        <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="w-6 h-6 sm:w-8 sm:h-8">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="w-6 h-6 sm:w-8 sm:h-8 hidden sm:flex">
                        <Pencil className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="w-6 h-6 sm:w-8 sm:h-8">
                        <EllipsisVertical className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start px-6">
                  <Button variant="link" className="pt-45 h-auto text-[#734A00] mt-3 sm:mt-4 text-xs sm:text-sm font-medium">
                    All customers <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Growth Chart */}
            <div>
              <Card>
                <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
                  <CardTitle className="text-lg sm:text-xl">Growth</CardTitle>
                  <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                    <SelectTrigger className="w-full sm:w-24">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Yearly">Yearly</SelectItem>
                      <SelectItem value="Monthly">Monthly</SelectItem>
                      <SelectItem value="Weekly">Weekly</SelectItem>
                    </SelectContent>
                  </Select>
                </CardHeader>
                <CardContent>
                  <DottedAreaChart/>
                </CardContent>
              </Card>
            {/* Summary Cards - now outside the Growth card */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 sm:mt-6">
                <Card className="bg-white border-gray-200">
                    <CardContent className="px-4">
                      <div className="text-center sm:text-left">
                        <div className="text-md font-semibold sm:text-base text-[#7D7D7D] mb-2 pb-10">Top month</div>
                        <div className="font-bold text-xl sm:text-2xl text-[#734A00] mb-1">November</div>
                        <div className="text-md sm:text-base text-[#FFA500]">2019</div>
                      </div>
                    </CardContent>
                </Card>
                  <Card className="bg-white border-gray-200">
                    <CardContent className="px-4">
                      <div className="text-center sm:text-left">
                        <div className="text-md font-semibold sm:text-base text-[#7D7D7D] mb-2 pb-10">Top year</div>
                        <div className="font-bold text-xl sm:text-2xl text-[#734A00] mb-1">2023</div>
                        <div className="text-md sm:text-base text-gray-500">96K sold so far</div>
                      </div>
                    </CardContent>
                  </Card>
                <Card className="bg-white border-gray-200">
                  <CardContent className="px-4">
                    <div className="text-left">
                      <div className="text-md font-bold text-[#7D7D7D] mb-4">Top buyer</div>
                      <div className="flex flex-col items-start gap-3">
                        <Avatar className="w-6 h-6 sm:w-8 sm:h-8">
                          <AvatarImage src="/mjAvatar.png" />
                          <AvatarFallback>MJ</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-sm sm:text-base text-black mb-1">Maggie Johnson</div>
                          <div className="text-sm sm:text-base text-gray-600">Oasis Organic Inc.</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                </div>
                </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {/* Chats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Chats</CardTitle>
                <p className="text-xs sm:text-sm text-gray-500">2 unread messages</p>
              </CardHeader>
              <CardContent>
                <div className="flex px-6 gap-2 justify-center sm:justify-start">
                  {/* <div className="bg-[#FFF7E8] p-4 rounded-md relative">
                    <Avatar className="w-8 h-8 sm:w-10 sm:h-10 relative">
                      <AvatarImage src="/mjAvatar.png" />
                      <AvatarFallback>MJ</AvatarFallback>
                      <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white z-20"></div>
                    </Avatar>
                  </div> */}
                  <div className="bg-[#FFF7E8] p-4 rounded-md relative">
                  <div className="relative inline-block">
                    <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
                      <AvatarImage src="/mjAvatar.png" />
                      <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    <div className="absolute -top-0 -right-0 w-3 h-3 bg-[#EB5050] rounded-full border-2 border-[#FFF7E8] z-20"></div>
                  </div>
                </div>

                <div className="bg-[#FFF7E8] p-4 rounded-md relative">
                  <div className="relative inline-block">
                    <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
                      <AvatarImage src="/pqAvatar.png" />
                      <AvatarFallback>CF</AvatarFallback>
                    </Avatar>
                    <div className="absolute -top-0 -right-0 w-3 h-3 bg-[#EB5050] rounded-full border-2 border-[#FFF7E8] z-20"></div>
                  </div>
                </div>
                  
                  <div className="p-4">
                  <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
                    <AvatarImage src="/xyAvatar.png" />
                    <AvatarFallback>GH</AvatarFallback>
                  </Avatar>
                  </div>
                  <div className=" p-4 ">
                  <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
                    <AvatarImage src="/yzAvatar.png" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Top States */}
            <Card>
              {/* <CardHeader>
                {/* <CardTitle className="text-lg sm:text-xl">Top states</CardTitle> */}
              {/* </CardHeader> */}
              <CardContent>
                <GradientBarChart/>
              </CardContent>
            </Card>

            {/* New Deals */}
            <Card className="md:col-span-2 xl:col-span-1">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">New deals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center justify-start px-5 gap-2">
                  {newDeals.map((text, index) => (
                    <span key={index} className="flex flex-row items-center justify-center p-2 rounded-xl bg-[#FFF7E8]">
                    <Image alt="Plus Icon" src={"/plusSquaredRounded.png"} height={24} width={24}/>
                    <p className="text-[#734A00] pl-2 pr-2 py-2 rounded-md text-md">
                      {text}
                    </p>
                  </span>
                  ))} 
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
