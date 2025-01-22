// filepath: /c:/Users/USER/Desktop/ChatAllRounder/src/components/Sidebar.jsx
"use client";
import React, { useContext, useState } from "react";
import { Menu, Plus, MessageSquare } from "lucide-react";
import { Context } from "@/context/ContextProvider";
import "../app/globals.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { setInput, recentPrompts, submit, setDisplayResult } = useContext(Context);

  const loadPrompt = (prompt) => {
    setInput(""); // Clear the current input
    setTimeout(() => {
      setInput(prompt); // Set the new prompt
      submit(null, prompt); // Call submit with the new prompt
    }, 0);
  };

  const handleNewPrompt = () => {
    setDisplayResult(false);
    setInput(""); // Clear the input field
  };

  return (
    <div className="min-h-[100vh] inline-flex flex-col justify-between bg-bgSecondaryColor py-6 px-4">
      <div>
        <Menu
          size={25}
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer text-softTextColor"
        />
        <div
          className="mt-2.5 inline-flex py-2.5 items-center gap-2.5 px-4 bg-bgPrimaryColor rounded-full text-md text-gray-400 cursor-pointer"
          onClick={handleNewPrompt}
        >
          <Plus size={20} className="cursor-pointer text-softTextColor" />
          {isOpen ? <p className="text-softTextColor font-bold">New Prompt</p> : null}
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Recent Prompts</h2>
          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu size={24} className="text-white" />
          </button>
        </div>
        {isOpen && (
          <ul className="space-y-4">
            {Array.isArray(recentPrompts) && recentPrompts.slice(-5).map((prompt, index) => (
              <li key={index} className="cursor-pointer" onClick={() => loadPrompt(prompt)}>
                <div className="flex items-center space-x-2">
                  <MessageSquare size={20} className="text-white" />
                  <div className="sidebar-prompt" style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap', overflow: 'hidden' }}>
                    <p className="font-semibold">{prompt}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;