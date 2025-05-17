# Meeting Memory Agent Setup Guide

## Prerequisites
- Node.js v20.9.0 or higher
- OpenAI API key

## Setup Steps

1. **Add your OpenAI API key**

   Edit the `.env.development` file in the project root and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

2. **Install dependencies**

   Run the following command in the project root:
   ```bash
   npm install
   ```

3. **Start the Mastra agent server**

   In one terminal window, start the Mastra development server:
   ```bash
   npm run dev
   ```
   This will start the Mastra server at http://localhost:4111

4. **Start the web interface**

   In another terminal window, start the web interface:
   ```bash
   npm run start:ui
   ```
   This will start a web server at http://localhost:3000

5. **Use the application**

   Open your browser and navigate to http://localhost:3000
   
   - Paste a meeting transcript in the text area
   - Click "Analyze Transcript"
   - View the results (summary, action items, sentiment, and follow-up email)

## Example Transcript

You can use this sample transcript to test the application:

```
Hi everyone, thanks for coming. Sarah will revise the proposal by Friday. Tom, please connect with our marketing team. We're targeting a release next Thursday. Client still hasn't approved the budget.
```

## Troubleshooting

- **Error: Cannot connect to agent server**
  
  Make sure the Mastra development server is running. Check the terminal window where you ran `npm run dev`.

- **Error: Invalid API key or no API key provided**
  
  Check your `.env.development` file and ensure your OpenAI API key is correctly set.

- **Error: No response from agent**
  
  The agent may be processing a large transcript. Try with a smaller transcript or wait longer.

## Next Steps

To extend this project:
1. Add authentication for API access
2. Implement meeting transcription from audio files
3. Add support for multiple languages
4. Create a history of past meeting analyses 