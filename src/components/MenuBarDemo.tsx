
"use client"

import { useState } from "react"
import { Home, Settings, Bell, User, Camera, Package, Users, CalendarDays } from "lucide-react"
import { MenuBar } from "@/components/ui/menu-bar"
import { useNavigate } from "react-router-dom"

const menuItems = [
  {
    icon: Home,
    label: "Home",
    href: "/",
    gradient:
      "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500",
  },
  {
    icon: Camera,
    label: "Wedding",
    href: "/packages/wedding",
    gradient:
      "radial-gradient(circle, rgba(234,56,76,0.15) 0%, rgba(234,56,76,0.06) 50%, rgba(194,25,25,0) 100%)",
    iconColor: "text-[#ea384c]",
  },
  {
    icon: CalendarDays,
    label: "Events",
    href: "/packages/event",
    gradient:
      "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
    iconColor: "text-orange-500",
  },
  {
    icon: Users,
    label: "Family",
    href: "/packages/family",
    gradient:
      "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-green-500",
  },
  {
    icon: Package,
    label: "Packages",
    href: "/pricing",
    gradient:
      "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(109,40,217,0.06) 50%, rgba(91,33,182,0) 100%)",
    iconColor: "text-purple-500",
  },
]

export function MenuBarDemo() {
  const [activeItem, setActiveItem] = useState<string>("Home")
  const navigate = useNavigate()
  
  const handleItemClick = (label: string) => {
    setActiveItem(label)
    const item = menuItems.find(item => item.label === label)
    if (item) {
      navigate(item.href)
    }
  }
  
  return (
    <div className="w-full max-w-3xl mx-auto">
      <MenuBar
        className="w-full"
        items={menuItems}
        activeItem={activeItem}
        onItemClick={handleItemClick}
      />
    </div>
  )
}

export default MenuBarDemo
