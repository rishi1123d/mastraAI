import { defineAgent } from "@mastra/core";

export const summaryAgent = defineAgent({
  name: "MeetingMemoryAgent",
  description: "Summarizes a meeting transcript, extracts action items, sentiment, and a follow-up email",
  run: async ({ input }) => {
    const summary = await $prompt(`Summarize this meeting in a concise paragraph:\n${input}`);
    
    const actionItems = await $prompt(`Extract action items from the meeting as a list. Format each item with the person responsible and the task. Only include clear assignments with deadlines or ownership:\n${input}`);
    
    const sentiment = await $prompt(`What is the tone of this conversation? Respond in one word: positive, negative, or neutral.\n${input}`);
    
    const emailDraft = await $prompt(`Write a professional follow-up email based on this meeting. Include a summary, key decisions, action items, and next steps. Format it with proper email structure including greeting and signature:\n${input}`);

    // Parse action items into an array
    const actionItemsList = actionItems
      .split('\n')
      .filter(item => item.trim().length > 0)
      .map(item => item.trim());

    return { 
      summary, 
      actionItems: actionItemsList, 
      sentiment: sentiment.toLowerCase().trim() as "positive" | "neutral" | "negative", 
      followUpEmail: emailDraft 
    };
  },
}); 