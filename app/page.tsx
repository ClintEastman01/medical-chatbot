import Chatbot from "@/app/components/Chatbot";

export default function Home() {
  return (
    <main className="min-h-screen p-4 bg-gray-100">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-center mb-8">
          Medical Assistant Chatbot
        </h1>
        <Chatbot />
      </div>
    </main>
  );
}
