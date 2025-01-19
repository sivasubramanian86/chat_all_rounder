import ChatAllRounderBody from "@/components/ChatAllRounder";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex contain">
      <Sidebar />
      <ChatAllRounderBody />
  
    </div>
  );
}
