"use client";
import React, { useContext, useState } from "react";
import {
  CircleUserRound,
  SendHorizontal,
} from "lucide-react";
import { Context } from "@/context/ContextProvider";
import { FaRegCopy } from "react-icons/fa";
import { ClipLoader } from "react-spinners";

const ChatAllRounderBody = () => {
  const {
    submit: contextSubmit,
    recentPrompts,
    displayResult,
    result,
    input,
    setInput,
  } = useContext(Context);

  const [loading, setLoading] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await contextSubmit();
    } catch (error) {
      console.error("Error during submission:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 min-h-[100vh] pb-[15vh] relative">
      <div className="flex items-center justify-between p-5 text-xl text-gray-400">
        <p>ChatAllRounder</p>
        <img src="/chatallrounder.png" alt="ChatAllRounder Icon" className="w-10 h-10" />
      </div>
      <div className="w-full max-w-[900px] m-auto">
        {!displayResult ? (
          <div className="my-12 text-5xl font-medium p-5 text-center">
            <p>
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Welcome!
              </span>
            </p>
            <p>How can I make your day magical?</p>
          </div>
        ) : (
          <></>
        )}
    
      <div className="w-full max-w-[900px] p-5">
        {loading && (
          <div className="flex justify-center items-center">
            <ClipLoader size={50} color={"#e94560"} loading={loading} />
          </div>
        )}
        {!loading && displayResult && (
          <div className="result">
            <div className="my-10 flex items-center gap-5">
              <CircleUserRound size={40} className="text-softTextColor" />
              <p>{recentPrompts}</p>
            </div>
            <div className="flex items-start gap-5">
              <img src="/chatallrounder.png" alt="ChatAllRounder Icon" className="w-10 h-10" />
              <div className="flex items-center gap-2 flex-1">
                <p
                  className="text-md font-normal leading-6 text-gray-400 flex-1"
                  dangerouslySetInnerHTML={{ __html: result }}
                ></p>
                {result && (
                  <FaRegCopy className="copy-icon" size={20} onClick={copyToClipboard} />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="absolute bottom-0 w-full max-w-[900px] px-5 m-auto">
        <form onSubmit={submit} className="w-full">
          <div className="flex items-center justify-between gap-5 bg-bgSecondaryColor py-2.5 px-5 rounded-full">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none p-2 text-md text-gray-400"
              placeholder="Enter a prompt here and press enter..."
            />
            <button type="submit" className="text-primaryColor">
              <SendHorizontal size={24} />
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ChatAllRounderBody;
