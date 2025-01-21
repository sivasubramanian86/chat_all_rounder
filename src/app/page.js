// filepath: /c:/Users/USER/Desktop/ChatAllRounder/src/app/page.js
import './globals.css';
import ThemeToggle from '../components/ThemeToggle';
import ChatAllRounderBody from "@/components/ChatAllRounder";
import Sidebar from "@/components/Sidebar";
import ContextProvider from "@/context/ContextProvider";

export default function Home() {
  return (
    <ContextProvider>
      <div className="flex contain">
        <Sidebar />
        <div className="flex-1">
          <ThemeToggle />
          <ChatAllRounderBody />
        </div>
      </div>
    </ContextProvider>
  );
}