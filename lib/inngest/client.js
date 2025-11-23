import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "Wealthwise", // Unique app ID
  name: "Wealthwise App",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});