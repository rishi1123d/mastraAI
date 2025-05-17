import { Mastra } from '@mastra/core';
import { meetingMemoryAgent } from './agents/meetingMemoryAgent';

export const mastra = new Mastra({
  agents: { meetingMemoryAgent },
}); 