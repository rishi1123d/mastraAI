# 🔍 Meeting Memory Agent Implementation Details

## 📂 Project Structure
```
meeting-memory-agent/
├── components/
│   ├── card.tsx              # Reusable card component for results
│   ├── footer.tsx            # Footer component
│   ├── header.tsx            # Header component
│   ├── meeting-memory-app.tsx # Main application component
│   ├── results-section.tsx   # Displays the agent's analysis results
│   ├── sentiment-badge.tsx   # Badge showing sentiment (positive/neutral/negative)
│   └── transcript-input.tsx  # Input for meeting transcript
├── src/
│   └── agents/
│       └── summaryAgent.ts   # Mastra AI agent for transcript analysis
├── app/
│   ├── layout.tsx            # App layout
│   ├── page.tsx              # Main page component
│   └── globals.css           # Global styles
├── mastra.config.ts          # Mastra configuration
└── .env.local                # Environment variables (API keys)
```

## 🧠 How It Works

### 1. The Mastra AI Agent (`summaryAgent.ts`)
This is the core of the application. It uses Mastra's `defineAgent` to create an AI agent that:
- Takes a meeting transcript as input
- Uses a series of AI prompts to:
  - Generate a summary
  - Extract action items
  - Analyze the sentiment/tone
  - Create a follow-up email
- Returns the structured results

```typescript
// Simplified version of how the agent works
export const summaryAgent = defineAgent({
  name: "MeetingMemoryAgent",
  description: "Summarizes a meeting transcript...",
  run: async ({ input }) => {
    const summary = await $prompt(`Summarize this meeting:\n${input}`);
    const actionItems = await $prompt(`Extract action items...\n${input}`);
    const sentiment = await $prompt(`What is the tone...\n${input}`);
    const emailDraft = await $prompt(`Write a follow-up email...\n${input}`);

    return { summary, actionItems, sentiment, emailDraft };
  },
});
```

### 2. Frontend Integration (`meeting-memory-app.tsx`)
The main app component:
- Handles the state for transcript input and results
- Calls the Mastra agent with the transcript text
- Displays the appropriate components based on the state

```typescript
// Key logic in the handleSubmit function
const handleSubmit = async (transcript: string) => {
  setIsLoading(true);
  try {
    const result = await summaryAgent.run({ input: transcript });
    setResults({
      summary: result.summary,
      actionItems: result.actionItems,
      sentiment: result.sentiment,
      followUpEmail: result.followUpEmail,
    });
  } catch (error) {
    console.error("Error analyzing transcript:", error);
  } finally {
    setIsLoading(false);
  }
}
```

### 3. User Interface
- **TranscriptInput:** Text area for entering the meeting transcript
- **ResultsSection:** Displays the agent's analysis in collapsible cards
- **SentimentBadge:** Visual indicator of the meeting's tone
- **Card:** Reusable component for displaying each result type

## 🔌 Mastra AI Integration

### Configuration (`mastra.config.ts`)
```typescript
import { defineConfig } from "@mastra/core";

export default defineConfig({
  agents: ["./src/agents/summaryAgent.ts"],
});
```

### Environment Setup
The `.env.local` file contains the OpenAI API key that Mastra uses to power the AI agent:
```
OPENAI_API_KEY=your_openai_api_key_here
```

## 🎨 User Experience
- Clean, modern UI with animations (Framer Motion)
- Responsive design (TailwindCSS)
- Loading states and error handling
- Collapsible result cards

## 📈 Future Enhancements
1. Add participant detection feature
2. Implement meeting transcription from audio files
3. Add support for custom email templates
4. Create a history of past meeting analyses 