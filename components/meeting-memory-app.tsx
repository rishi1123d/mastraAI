"use client"

import { useState } from "react"
import { Header } from "./header"
import { TranscriptInput } from "./transcript-input"
import { ResultsSection } from "./results-section"
import { Footer } from "./footer"
import { motion } from "framer-motion"
import { summaryAgent } from "@/src/agents/summaryAgent"

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

    try {
      // Call the Mastra AI agent
      const result = await summaryAgent.run({ input: transcript });
      
      setResults({
        summary: result.summary,
        actionItems: result.actionItems,
        sentiment: result.sentiment,
        followUpEmail: result.followUpEmail,
      });
    } catch (error) {
      console.error("Error analyzing transcript:", error);
      // Optionally show an error message to the user
    } finally {
      setIsLoading(false);
    }
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
