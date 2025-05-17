import { mastra } from './mastra';

async function main() {
  // Get a reference to our meeting memory agent
  const agent = await mastra.getAgent('meetingMemoryAgent');

  console.log("Meeting Memory Agent is ready!");
  console.log("To start the Mastra server, run `npm run dev`");
  console.log("Then you can interact with the agent via API calls to http://localhost:4111/api/agents/meetingMemoryAgent/generate");
}

main().catch(error => {
  console.error("Error starting agent:", error);
}); 