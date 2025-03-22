export interface FAQData {
  id: number;
  question: string;
  answer: string;
}
export const faqData: FAQData[] = [
  {
    id: 1,
    question: 'Is there a second gen planned?',
    answer:
      '- Yes, we plan to start working on the next gen after the game launches. We need this to expand our community.',
  },
  {
    id: 2,
    question: 'How do I get a whitelist for the next gene?',
    answer:
      ' You must be a genesis collection holder or participate in our game. Information about this will be available later.',
  },
  {
    id: 3,
    question: 'Will the game be public?',
    answer:
      '- Only a special location in the game will be available to the public, where you can try to get whitelisted for the next gen. This event will be a limited time event.',
  },
];
