# Meeting Memory Agent Setup Guide

## Prerequisites
- Node.js (LTS version)
- OpenAI API key

## Setup Steps

1. **Install Dependencies**
   ```bash
   npm install @mastra/core
   ```

2. **Create .env File**
   Create a `.env.local` file in the root directory with your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

3. **Start the Development Server**
   ```bash
   npm run dev
   ```

4. **Testing the Application**
   - Open your browser and go to `http://localhost:3000`
   - Paste a meeting transcript in the textarea
   - Click "Analyze Transcript" to see the results

## Example Transcript
You can use the following example to test the application:

```
Hi everyone, thanks for coming. Sarah will revise the proposal by Friday. Tom, please connect with our marketing team. We're targeting a release next Thursday. Client still hasn't approved the budget.
```

## Troubleshooting
- If you encounter errors related to the Mastra AI agent, make sure your OpenAI API key is correctly set in the `.env.local` file.
- If the components don't load properly, try restarting the development server. 