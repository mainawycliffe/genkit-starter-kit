import { googleAI } from '@genkit-ai/google-genai';
import { genkit } from 'genkit';

const ai = genkit({
  plugins: [googleAI()],
  model: googleAI.model('gemini-2.0-flash'),
});

async function main() {
  const { text } = await ai.generate('Tell me a joke?');
  console.log('...............');
  console.log('Gemini Response');
  console.log(text);
}

main();
