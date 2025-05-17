# 🤖 Meeting Memory Agent

A Mastra AI-powered agent that analyzes meeting transcripts.

## 🚀 Features
- Summarizes meeting transcripts
- Extracts action items with assignees
- Detects sentiment (positive, neutral, negative)
- Generates professional follow-up emails

## 🛠️ Tech Stack
- [Mastra AI](https://mastra.ai/) - AI agent framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [OpenAI GPT-4o](https://openai.com/gpt-4) - LLM for intelligent analysis

## 🔧 Setup

### Prerequisites
- Node.js (LTS version)
- OpenAI API key

### Installation
1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Add your OpenAI API key to `.env.development`:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

### Running the Agent
Start the Mastra development server:
```bash
npm run dev
```

The agent will be available at:
```
http://localhost:4111/api/agents/meetingMemoryAgent/generate
```

## 📚 API Usage

Send a POST request to the agent endpoint:

```bash
curl -X POST http://localhost:4111/api/agents/meetingMemoryAgent/generate \
  -H "Content-Type: application/json" \
  -d '{"messages": ["Hi everyone, thanks for coming. Sarah will revise the proposal by Friday. Tom, please connect with our marketing team. We're targeting a release next Thursday. Client still hasn't approved the budget."]}'
```

## 🧪 Example Response

```json
{
  "summary": "The team discussed an upcoming release, with Sarah assigned to revise the proposal by Friday and Tom tasked with connecting with the marketing team. The target release date is next Thursday, though the client has not yet approved the budget.",
  "actionItems": [
    "Sarah to revise the proposal by Friday",
    "Tom to connect with the marketing team",
    "Team to follow up on client budget approval"
  ],
  "sentiment": "neutral",
  "followUpEmail": "Dear Team,\n\nThank you for your participation in today's meeting. As discussed, we are targeting a release next Thursday and have outlined the following action items:\n\n- Sarah will revise the proposal by Friday\n- Tom will connect with our marketing team\n- We need to follow up on client budget approval\n\nPlease complete your assigned tasks by the specified deadlines. I'll schedule a follow-up meeting early next week to review our progress.\n\nBest regards,\n[Your Name]"
}
```

## 📝 License
Open source under the MIT license. 