"use client"

import { useState } from "react"
import { Card } from "./card"
import { SentimentBadge } from "./sentiment-badge"
import { motion } from "framer-motion"

interface ResultsSectionProps {
  results: {
    summary: string
    actionItems: string[]
    sentiment: "positive" | "neutral" | "negative"
    followUpEmail: string
  }
}

export function ResultsSection({ results }: ResultsSectionProps) {
  const [openCards, setOpenCards] = useState<Record<string, boolean>>({
    summary: true,
    actionItems: true,
    sentiment: true,
    followUpEmail: true,
  })

  const toggleCard = (cardId: string) => {
    setOpenCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }))
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div className="space-y-6" variants={container} initial="hidden" animate="show">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 pl-2 border-l-4 border-indigo-500 py-1">Analysis Results</h2>

      <motion.div variants={item}>
        <Card title="Summary" isOpen={openCards.summary} onToggle={() => toggleCard("summary")} icon="summary">
          <p className="text-gray-700 leading-relaxed">{results.summary}</p>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card
          title="Action Items"
          isOpen={openCards.actionItems}
          onToggle={() => toggleCard("actionItems")}
          icon="action"
        >
          <ul className="space-y-3">
            {results.actionItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-indigo-600 text-sm font-medium">{index + 1}</span>
                </div>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card title="Sentiment" isOpen={openCards.sentiment} onToggle={() => toggleCard("sentiment")} icon="sentiment">
          <div className="flex items-center">
            <SentimentBadge sentiment={results.sentiment} />
            <p className="ml-3 text-gray-700">
              The overall tone of the meeting was <span className="font-medium">{results.sentiment}</span>.
            </p>
          </div>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card
          title="Follow-up Email"
          isOpen={openCards.followUpEmail}
          onToggle={() => toggleCard("followUpEmail")}
          icon="email"
        >
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
            <pre className="whitespace-pre-wrap text-gray-700 font-sans">{results.followUpEmail}</pre>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  )
}
