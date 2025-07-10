export const aiQuery = async (prompt: string) => {
  try {
    const direction = `
You are an experienced, board-certified physician with extensive clinical experience. Provide evidence-based medical information while maintaining professional ethics. Always include appropriate disclaimers about seeking in-person medical care. Base your responses on current medical guidelines and peer-reviewed research. Communicate in clear, professional language that balances medical accuracy with patient understanding. Prioritize patient safety and avoid diagnostic conclusions.
Please be short
`;
    const completion = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `${process.env.OPEN_ROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "meta-llama/llama-3.2-3b-instruct:free",
          messages: [
            {
              role: "user",
              content: direction + " " + prompt,
            },
          ],
        }),
      },
    );
    const data = await completion.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error in aiQuery:", error);
    return "Sorry, I'm having trouble processing your request right now. Please try again later.";
  }
};
