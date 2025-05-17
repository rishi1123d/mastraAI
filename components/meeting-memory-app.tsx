"use client"

import { useState } from "react"
import { Header } from "./header"
import { TranscriptInput } from "./transcript-input"
import { ResultsSection } from "./results-section"
import { Footer } from "./footer"
import { motion } from "framer-motion"

export function MeetingMemoryApp() {
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState<{
    summary: string
    actionItems: string[]
    sentiment: "positive" | "neutral" | "negative"
    followUpEmail: string
  } | null>(null)

  const handleSubmit = async (transcript: string) => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setResults({
        summary:
          "The team discussed the Q2 roadmap and agreed to prioritize the new analytics dashboard. Marketing will prepare a launch plan by next Friday. The customer feedback survey results were positive overall, with some concerns about the mobile experience that will be addressed in the next sprint.",
        actionItems: [
          "John to finalize the analytics dashboard design by Wednesday",
          "Sarah to prepare marketing launch plan by Friday",
          "Team to address mobile experience issues in next sprint",
          "Alex to schedule follow-up meeting with key stakeholders",
        ],
        sentiment: "positive",
        followUpEmail:
          "Dear Team,\n\nThank you for your participation in today's meeting about the Q2 roadmap. As discussed, we will be prioritizing the new analytics dashboard, with John taking the lead on finalizing the design by Wednesday.\n\nSarah will prepare the marketing launch plan by Friday, and we'll address the mobile experience issues in our next sprint.\n\nPlease let me know if you have any questions or concerns.\n\nBest regards,\nMeeting Organizer",
      })
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <TranscriptInput onSubmit={handleSubmit} isLoading={isLoading} />
        </motion.div>

        {results && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <ResultsSection results={results} />
          </motion.div>
        )}
      </main>
      <Footer />

      {/* Decorative elements */}
      <div className="fixed top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-purple-100 to-transparent opacity-50 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="fixed bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-blue-50 to-transparent opacity-50 rounded-full blur-3xl -z-10 transform -translate-x-1/4 translate-y-1/4"></div>
    </div>
  )
}
