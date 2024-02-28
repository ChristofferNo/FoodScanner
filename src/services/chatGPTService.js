import axios from "axios";

const OPENAI_API_KEY = "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"; // Replace with your OpenAI API key

const chatGPTService = async (messages) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          ...messages,
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("ChatGPT API error:", error);
    throw error;
  }
};

export default chatGPTService;
