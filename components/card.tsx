"use client"

import type React from "react"
import { ChevronDown, FileText, CheckSquare, BarChart, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface CardProps {
  title: string
  children: React.ReactNode
  isOpen: boolean
  onToggle: () => void
  icon: "summary" | "action" | "sentiment" | "email"
}

export function Card({ title, children, isOpen, onToggle, icon }: CardProps) {
  const icons = {
    summary: <FileText className="h-5 w-5" />,
    action: <CheckSquare className="h-5 w-5" />,
    sentiment: <BarChart className="h-5 w-5" />,
    email: <Mail className="h-5 w-5" />,
  }

  const getGradient = () => {
    switch (icon) {
      case "summary":
        return "from-blue-500 to-indigo-600"
      case "action":
        return "from-indigo-500 to-purple-600"
      case "sentiment":
        return "from-purple-500 to-pink-600"
      case "email":
        return "from-pink-500 to-rose-600"
      default:
        return "from-indigo-500 to-purple-600"
    }
  }

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
      whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-5 text-left focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-inset"
        aria-expanded={isOpen}
      >
        <div className="flex items-center">
          <div
            className={`flex-shrink-0 h-10 w-10 rounded-lg bg-gradient-to-br ${getGradient()} text-white flex items-center justify-center mr-4`}
          >
            {icons[icon]}
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="h-5 w-5 text-gray-500" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-2 border-t border-gray-100">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
