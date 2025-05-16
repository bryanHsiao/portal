import { useState } from "react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, label: "頁籤1" },
    { id: 2, label: "頁籤2" },
    { id: 3, label: "頁籤3" },
  ];

  return (
    <div className="flex items-center h-12 bg-gray-100 border-b">
      {/* 左側 系統名稱 占位 w-64 (與 Sidebar 對齊) */}
      <div className="w-50 px-7 font-bold text-lg whitespace-nowrap">
        ISO文管系統
      </div>

      {/* 頁籤區塊 緊接著在右 */}
      <div className="flex gap-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-2 py-1 text-sm transition
              ${activeTab === tab.id ? "font-semibold text-blue-600" : "text-gray-700 hover:text-blue-500"}
            `}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded" />
            )}
          </button>
        ))}
      </div>

      {/* 空白撐開用的flex-grow */}
      <div className="flex-grow" />
    </div>
  );
}
