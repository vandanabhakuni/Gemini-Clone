const apiKey = "AIzaSyAjMkt9zzPprrrDIh5-R4fkkzNtAd4ovlw";

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "AIzaSyAjMkt9zzPprrrDIh5-R4fkkzNtAd4ovlw";

async function runChat(prompt) {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
        temprature: 0.9,
        topK: 1,
        topP: 1,
        maxOutputTOkens: 2048,
    }

    const safetySettings = [
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
    ];

    const chat = model.startChat({
        generationConfig,
        safetySettings,
        history: [
        ],
    });

    const result = await chat.sendMessage(prompt);
    const response = result.response;
    console.log(response.text());

}

export default runChat;

// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

// import {
//   GoogleGenAI,
// } from '@google/genai';
// import mime from 'mime';
// import { writeFile } from 'fs';

// function saveBinaryFile(fileName, content) {
//   writeFile(fileName, content, 'utf8', (err) => {
//     if (err) {
//       console.error(`Error writing file ${fileName}:`, err);
//       return;
//     }
//     console.log(`File ${fileName} saved to file system.`);
//   });
// }

// async function main() {
//   const ai = new GoogleGenAI({
//     apiKey: "AIzaSyAjMkt9zzPprrrDIh5-R4fkkzNtAd4ovlw",
//   });
//   const config = {
//     responseModalities: [
//         'IMAGE',
//         'TEXT',
//     ],
//   };
//   const model = 'gemini-2.5-flash-image-preview';
//   const contents = [
//     {
//       role: 'user',
//       parts: [
//         {
//           text: `INSERT_INPUT_HERE`,
//         },
//       ],
//     },
//   ];

//   const response = await ai.models.generateContentStream({
//     model,
//     config,
//     contents,
//   });
//   let fileIndex = 0;
//   for await (const chunk of response) {
//     if (!chunk.candidates || !chunk.candidates[0].content || !chunk.candidates[0].content.parts) {
//       continue;
//     }
//     if (chunk.candidates?.[0]?.content?.parts?.[0]?.inlineData) {
//       const fileName = `ENTER_FILE_NAME_${fileIndex++}`;
//       const inlineData = chunk.candidates[0].content.parts[0].inlineData;
//       const fileExtension = mime.getExtension(inlineData.mimeType || '');
//       const buffer = Buffer.from(inlineData.data || '', 'base64');
//       saveBinaryFile(`${fileName}.${fileExtension}`, buffer);
//     }
//     else {
//       console.log(chunk.text);
//     }
//   }
// }

// export default main;
