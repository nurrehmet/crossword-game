// pages/index.tsx
import { useState } from "react";
import Head from "next/head";
import Crossword from "../components/Crossword";
import crosswordData from "../utils/data.json";

const Home: React.FC = () => {
  const [crosswordState, setCrosswordState] = useState<"#FFF" | "#E8FFB7" | "#EAE0FF">("#FFF");

  const handleAnswerCorrect = () => {
    setCrosswordState("#E8FFB7");
  };
  const handleAnswerIncorrect = () => {
    setCrosswordState("#EAE0FF");
  };

  return (
    <div>
      <Head>
        <title>SDC Crossword Game</title>
        <meta name="description" content="Simple Crossword Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="layout bg-[#252775] mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img width={'45px'} src="https://seniorsdiscountclub.com.au/data/assets/logo/logo-mobile-3x.png" alt="" />
          <span className="text-white font-semibold">Senior Discount Club - Crossword Game</span>
        </div>
        <div className="flex space-x-3">
          <a href="/login" className="text-white px-3 py-1 border border-white rounded-full">Login</a>
          <a href="/join" className="text-white px-3 py-1 bg-pink-600 rounded-full">Join The Club</a>
        </div>
      </div>

      <div className="px-5 py-2 bg-gray-50">
        {crosswordState === "#E8FFB7" && (
          <div className="mt-2 mb-4 border bg-green-100 border-l-4 border-green-500 text-green-700 p-4">
            Congratulations! You solved the crossword correctly.
          </div>
        )}
        {crosswordState === "#EAE0FF" && (
          <div className="mt-2 mb-4 border bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
            Oops! Some of your answers are incorrect. Please try again.
          </div>
        )}
      </div>

      <main className="bg-gray-50 h-screen mx-auto py-10 px-10">
        <div>
          <Crossword
            data={crosswordData}
            onAnswerCorrect={handleAnswerCorrect}
            onAnswerIncorrect={handleAnswerIncorrect}
            crosswordState={crosswordState}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
