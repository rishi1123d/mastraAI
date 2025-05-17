"use client"

import { ThumbsUp, Minus, ThumbsDown } from "lucide-react"
import { motion } from "framer-motion"

interface SentimentBadgeProps {
  sentiment: "positive" | "neutral" | "negative"
}

export function SentimentBadge({ sentiment }: SentimentBadgeProps) {
  const config = {
    positive: {
      colors: "bg-gradient-to-r from-green-400 to-emerald-500 text-white",
      icon: <ThumbsUp className="h-4 w-4 mr-1" />,
    },
    neutral: {
      colors: "bg-gradient-to-r from-amber-400 to-yellow-500 text-white",
      icon: <Minus className="h-4 w-4 mr-1" />,
    },
    negative: {
      colors: "bg-gradient-to-r from-red-400 to-rose-500 text-white",
      icon: <ThumbsDown className="h-4 w-4 mr-1" />,
    },
  }

  return (
    <motion.span
      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium shadow-sm ${config[sentiment].colors}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {config[sentiment].icon}
      {sentiment.charAt(0).toUpperCase() + sentiment.slice(1)}
    </motion.span>
  )
}
