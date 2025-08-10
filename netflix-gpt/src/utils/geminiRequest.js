import { GEMINI_API_KEY } from "./constants";
export const geminiRequest = async (prompt) => {
    const apiKey = GEMINI_API_KEY; 
    const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

    if (!apiKey) {
      alert("API Key not found. Please add it to your .env.local file.");
      return;
    }

    // 3. Prepare the request body
    const requestBody = {
      contents: [
        {
          parts: [
            {
              "text": prompt
            }
          ]
        }
      ]
    };
      const response = await fetch(`${url}?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error.message || `API Error: ${response.status}`);
      }

      const data = await response.json();
      return data
}

