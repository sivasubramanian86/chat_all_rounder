// filepath: /c:/Users/USER/Desktop/ChatAllRounder/src/components/Sidebar.jsx
"use client";
import React, { useContext, useState } from "react";
import { Menu, Plus, MessageSquare } from "lucide-react";
import { Context } from "@/context/ContextProvider";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { setDisplayResult, setInput, recentPrompts, submit } = useContext(Context);

  const loadPrompt = (prompt) => {
    setInput(prompt);
    submit({ preventDefault: () => {} });
  };

  return (
    <div className="min-h-[100vh] inline-flex flex-col justify-between bg-bgSecondaryColor py-6 px-4">
      <div>
        <button className="flex items-center space-x-2 text-white">
          <Plus size={20} />
          <span>New Prompt</span>
        </button>
      </div>
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Recent Prompts</h2>
          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu size={24} className="text-white" />
          </button>
        </div>
        {isOpen && (
          <ul className="space-y-4">
            {Array.isArray(recentPrompts) && recentPrompts.map((item, index) => (
              <li key={index} className="cursor-pointer" onClick={() => loadPrompt(item.prompt)}>
                <div className="flex items-center space-x-2">
                  <MessageSquare size={20} className="text-white" />
                  <div>
                    <p className="text-white font-semibold">{item.prompt}</p>
                    <p className="text-gray-400 text-sm">{item.response}</p>
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