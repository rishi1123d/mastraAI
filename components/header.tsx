"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export function Header() {
  return (
    <header className="bg-white bg-opacity-80 backdrop-blur-sm sticky top-0 z-10 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <div className="mr-3 bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-xl text-white">
            <Sparkles size={24} />
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Meeting Memory Agent
            </h1>
            <p className="text-gray-500 mt-1">Summarize, analyze, and act on your meetings effortlessly</p>
          </div>
        </motion.div>
      </div>
    </header>
  )
}
