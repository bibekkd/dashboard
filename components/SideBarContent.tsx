import Image from "next/image";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";
import { useState } from "react";

export const SidebarContent = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  return (
    <div className="flex flex-col h-full bg-white rounded-xl">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className=" flex items-center justify-center">
            <Image src="/logo.png" alt="OrangeFarm" width={25} height={25} />
          </div>
          <span className="font-archivo font-semibold text-2xl text-gray-900">OrangeFarm</span>
        </div>
      </div>

      {/* Search */}
      <div className="px-4 pb-4">
        <div className="relative" >
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input placeholder="Search" className="pl-10 bg-white border-[#F1F1F1] rounded-full shadow-none" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <div className="space-y-3 px-2">
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3 rounded-xl hover:bg-[#FFF7E8] px-4 py-3 hover:text-[#734A00] text-black"
            onMouseEnter={() => setHoveredItem('dashboard')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Image src="/dashboardIcon.png" alt="Dashboard" width={20} height={20}/>
            Dashboard
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-center gap-3 rounded-xl hover:bg-[#FFF7E8] px-4 mx-1 py-3 hover:text-[#734A00] text-black"
            onMouseEnter={() => setHoveredItem('customers')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Image src={hoveredItem === 'customers' ? "/hoverCustomers.png" : "/customer.png"} alt="Customers" width={20} height={20}/>
            Customers
            <ChevronDown className="w-4 h-4 ml-auto text-gray-400" />
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3 rounded-xl hover:bg-[#FFF7E8] px-4 py-3 hover:text-[#734A00] text-black"
            onMouseEnter={() => setHoveredItem('reports')}
            onMouseLeave={() => setHoveredItem(null)}
          >
          <Image src={hoveredItem === 'reports' ? "/hoverReport.png" : "/reports.png"} alt="Reports" width={20} height={20}/>
            All reports
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3 rounded-xl hover:bg-[#FFF7E8] px-4 py-3 hover:text-[#734A00] text-black"
            onMouseEnter={() => setHoveredItem('geography')}
            onMouseLeave={() => setHoveredItem(null)}
          >
          <Image src={hoveredItem === 'geography' ? "/hoverGeography.png" : "/geography.png"} alt="Geography" width={20} height={20}/>
            Geography
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3 rounded-xl hover:bg-[#FFF7E8] px-4 py-3 hover:text-[#734A00] text-black"
            onMouseEnter={() => setHoveredItem('conversations')}
            onMouseLeave={() => setHoveredItem(null)}
          >
          <Image src={hoveredItem === 'conversations' ? "/hoverConversation.png" : "/conversation.png"} alt="Conversations" width={20} height={20}/>
            Conversations
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3 rounded-xl hover:bg-[#FFF7E8] px-4 py-3 hover:text-[#734A00] text-black"
            onMouseEnter={() => setHoveredItem('deals')}
            onMouseLeave={() => setHoveredItem(null)}
          >
          <Image src={hoveredItem === 'deals' ? "/hoverDeals.png" : "/deals.png"} alt="Deals" width={20} height={20}/>
            Deals
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3 rounded-xl hover:bg-[#FFF7E8] px-4 py-3 hover:text-[#734A00] text-black"
            onMouseEnter={() => setHoveredItem('exports')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Image src={hoveredItem === 'exports' ? "/hoverExport.png" : "/exports.png"} alt="Exports" width={20} height={20}/>
            Export
          </Button>
        </div>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/Avatar.png" />
            <AvatarFallback className="bg-gray-200">GX</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-gray-900 truncate">Gustavo Xavier</div>
            <div className="text-xs text-black bg-[#FFCD71] px-2 py-0.5 rounded-full inline-block">Admin</div>
          </div>
        </div>
        <div className="space-y-1">
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3 px-2 py-3 hover:bg-[#FFF7E8] rounded-xl hover:text-[#734A00] text-black"
            onMouseEnter={() => setHoveredItem('settings')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Image src="/settings.png" alt="Settings" width={20} height={20}/>
            Settings
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3 px-2 py-3 hover:bg-[#FFF7E8] rounded-xl hover:text-[#734A00] text-[#B01212]"
            onMouseEnter={() => setHoveredItem('logout')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <LogOut className="w-4 h-4" />
            Log out
          </Button>
        </div>
      </div>
    </div>
  );
};