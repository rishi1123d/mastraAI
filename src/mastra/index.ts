import { Mastra } from '@mastra/core';
import { meetingMemoryAgent } from './agents/meetingMemoryAgent';

// This is the format specifically required by Mastra
const mastra = new Mastra({
  agents: { meetingMemoryAgent },
});

// Export in all formats that might be needed
export { mastra };
export default mastra; 