# Medical Assistant Chatbot

A modern, responsive medical assistant chatbot built with Next.js, TypeScript, and Tailwind CSS. This AI-powered chatbot provides evidence-based medical information while maintaining professional ethics and encouraging users to seek appropriate medical care.

## Features

- **AI-Powered Responses**: Uses OpenRouter API with Llama 3.2 model for intelligent medical assistance
- **Professional Medical Guidance**: Provides evidence-based information with appropriate disclaimers
- **Real-time Chat Interface**: Modern, responsive chat UI with typing indicators
- **Message History**: Persistent chat history during the session
- **Mobile Responsive**: Optimized for all device sizes
- **Error Handling**: Robust error handling with user-friendly messages
- **Accessibility**: Built with accessibility best practices

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- OpenRouter API key (free tier available)

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd medical-chatbot
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Set Up Environment Variables

1. Copy the example environment file:
```bash
cp .env.example .env.local
```

2. Get your OpenRouter API key:
   - Visit [OpenRouter](https://openrouter.ai/keys)
   - Sign up for a free account
   - Generate an API key
   - Copy your API key

3. Update your `.env.local` file:
```env
OPEN_ROUTER_API_KEY=Bearer your_actual_api_key_here
```

**Important**: Make sure to include `Bearer ` before your API key!

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### 5. Open Your Browser

Navigate to [http://localhost:3000](http://localhost:3000) to see your medical chatbot in action!

## Test Environment

### Testing the Chatbot

1. **Start the development server** following the steps above
2. **Open your browser** to `http://localhost:3000`
3. **Test with sample questions**:
   - "What are the symptoms of a common cold?"
   - "How can I manage stress?"
   - "What should I do if I have a headache?"
   - "Tell me about healthy eating habits"

### Expected Behavior

- The chatbot should respond with professional medical advice
- Responses should include disclaimers about seeking medical care
- Error messages should be user-friendly if API fails
- Chat interface should be responsive and smooth

### Troubleshooting

If you encounter issues:

1. **Check your API key**:
   - Ensure it's correctly formatted with `Bearer ` prefix
   - Verify it's valid on [OpenRouter](https://openrouter.ai/keys)

2. **Check the console**:
   - Open browser developer tools (F12)
   - Look for error messages in the console

3. **Verify environment variables**:
   - Restart the development server after changing `.env.local`
   - Check that the file is named `.env.local` (not `.env`)

## Project Structure

```
medical-chatbot/
├── app/
│   ├── ai/
│   │   └── llmQuery.ts          # AI query logic and OpenRouter integration
│   ├── api/
│   │   └── chat/
│   │       └── route.ts         # API endpoint for chat functionality
│   ├── components/
│   │   └── Chatbot.tsx          # Main chatbot component
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # Home page
├── public/                      # Static assets
├── .env.example                 # Environment variables template
├── .env.local                   # Your environment variables (create this)
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

## Configuration

### AI Model Configuration

The chatbot uses the Llama 3.2 3B Instruct model via OpenRouter. You can modify the model in `app/ai/llmQuery.ts`:

```typescript
model: "meta-llama/llama-3.2-3b-instruct:free"
```

### Customizing the Medical Prompt

The medical assistant behavior is defined in `app/ai/llmQuery.ts`. You can customize the system prompt to adjust the chatbot's personality and expertise level.

## Styling

This project uses:
- **Tailwind CSS** for styling
- **React Icons** for UI icons
- **Custom CSS animations** for loading states

## Security & Privacy

- API keys are stored securely in environment variables
- No chat history is stored on the server
- All communication happens over HTTPS in production

## Medical Disclaimer

This chatbot is for informational purposes only and should not replace professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare providers for medical concerns.

## Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

Make sure to set these in your deployment platform:

```env
OPEN_ROUTER_API_KEY=Bearer your_production_api_key
```

## API Key Setup Guide

### Step-by-Step API Key Configuration

1. **Visit OpenRouter**:
   - Go to [https://openrouter.ai/keys](https://openrouter.ai/keys)
   - Create an account if you don't have one

2. **Generate API Key**:
   - Click "Create Key"
   - Give it a descriptive name (e.g., "Medical Chatbot")
   - Copy the generated key

3. **Configure Environment**:
   - Create `.env.local` file in your project root
   - Add: `OPEN_ROUTER_API_KEY=Bearer sk-or-v1-your-key-here`
   - Replace `sk-or-v1-your-key-here` with your actual key

4. **Test Configuration**:
   - Restart your development server
   - Try sending a message in the chatbot
   - Check browser console for any errors

### Free Tier Limits

OpenRouter's free tier includes:
- Limited requests per day
- Access to select models including Llama 3.2
- Perfect for development and testing

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

If you encounter any issues:

1. Check the troubleshooting section above
2. Review the [OpenRouter documentation](https://openrouter.ai/docs)
3. Open an issue in this repository

---

**Happy coding!**