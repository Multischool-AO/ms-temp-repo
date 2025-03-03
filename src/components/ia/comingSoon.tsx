import { Bot } from "lucide-react";

export default function ComingSoon() {
  return (
    <div className="flex items-center justify-center  h-[80vh] bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg w-full max-w-md">
        <div className="flex items-center justify-center w-24 h-24 bg-green-500 rounded-full">
          <Bot className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-2xl font-bold mt-4 text-gray-900 dark:text-gray-100">
          Brevemente
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Em breve, a inteligência artificial estará ao seu lado para
          transformar dados em insights poderosos!
        </p>
      </div>
    </div>
  );
}
