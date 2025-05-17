"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, Wand2 } from "lucide-react"
import { motion } from "framer-motion"

interface TranscriptInputProps {
  onSubmit: (transcript: string) => void
  isLoading: boolean
}

export function TranscriptInput({ onSubmit, isLoading }: TranscriptInputProps) {
  const [transcript, setTranscript] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (transcript.trim()) {
      onSubmit(transcript)
    }
  }

  return (
    <div className="relative">
      <motion.div
        className={`bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 transition-all duration-300 ${
          isFocused ? "shadow-indigo-100" : ""
        }`}
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <form onSubmit={handleSubmit}>
          <label htmlFor="transcript" className="block text-lg font-medium text-gray-700 mb-3">
            Paste your meeting transcript
          </label>
          <div className="relative">
            <textarea
              id="transcript"
              className={`w-full h-48 p-6 border rounded-xl resize-none transition-all duration-300 focus:outline-none ${
                isFocused
                  ? "border-indigo-400 ring-2 ring-indigo-100"
                  : "border-gray-200 focus:ring-2 focus:ring-indigo-100"
              }`}
              placeholder="Paste your meeting transcript here..."
              value={transcript}
              onChange={(e) => setTranscript(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              disabled={isLoading}
            />
            <div className="absolute bottom-4 right-4 text-gray-400 text-sm">
              {transcript.length > 0 ? `${transcript.length} characters` : ""}
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <Button
              type="submit"
              disabled={isLoading || !transcript.trim()}
              className={`px-6 py-6 rounded-xl font-medium text-white transition-all duration-300 ${
                isLoading || !transcript.trim()
                  ? "bg-gray-300"
                  : "bg-gradient-to-r from-indigo-500 to-purple-600 hover:shadow-md hover:shadow-indigo-200"
              }`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-5 w-5" />
                  Analyze Transcript
                </>
              )}
            </Button>
          </div>
        </form>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute -top-10 -left-10 w-20 h-20 bg-indigo-100 rounded-full opacity-50 blur-2xl -z-10"></div>
      <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-purple-100 rounded-full opacity-50 blur-2xl -z-10"></div>
    </div>
  )
}
