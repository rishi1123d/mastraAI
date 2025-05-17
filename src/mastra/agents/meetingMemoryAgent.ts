import { Agent } from "@mastra/core/agent";
import { openai } from "@ai-sdk/openai";

export const meetingMemoryAgent = new Agent({
  name: "meetingMemoryAgent",
  instructions: `You are an AI assistant specializing in analyzing meeting transcripts.
    Your task is to:
    1. Provide a concise summary of the meeting
    2. Extract clear action items with owners and deadlines
    3. Analyze the overall sentiment/tone of the meeting
    4. Create a professional follow-up email
    
    Be accurate, concise, and professional in your analysis.`,
  model: openai("gpt-4o"),
  async process({ messages }) {
    const transcript = messages[messages.length - 1].content;
    
    if (typeof transcript !== 'string') {
      return { text: "Please provide a text transcript of the meeting." };
    }
    
    const summary = await this.generate(`Summarize this meeting in a concise paragraph:\n${transcript}`);
    
    const actionItemsResponse = await this.generate(`Extract action items from the meeting as a list. Format each item with the person responsible and the task. Only include clear assignments with deadlines or ownership:\n${transcript}`);
    
    const sentimentResponse = await this.generate(`What is the tone of this conversation? Respond in one word: positive, negative, or neutral.\n${transcript}`);
    
    const emailDraftResponse = await this.generate(`Write a professional follow-up email based on this meeting. Include a summary, key decisions, action items, and next steps. Format it with proper email structure including greeting and signature:\n${transcript}`);
    
    // Parse action items into an array
    const actionItems = actionItemsResponse.text
      .split('\n')
      .filter(item => item.trim().length > 0)
      .map(item => item.trim());
    
    const sentiment = sentimentResponse.text.toLowerCase().trim() as "positive" | "neutral" | "negative";
    
    return { 
      text: "Analysis complete",
      summary: summary.text, 
      actionItems, 
      sentiment,
      followUpEmail: emailDraftResponse.text
    };
  }
}); 