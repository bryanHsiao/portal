import { Home, FileText, Settings } from 'lucide-react';

const sidebarItems = [
  { icon: <Home size={20} />, label: '首頁' },
  { icon: <FileText size={20} />, label: '文件' },
  { icon: <Settings size={20} />, label: '設定' },
];

export default function Sidebar() {
  return (
    <aside className="group flex flex-col bg-gray-50 transition-all duration-300
      w-48 max-sm:w-16 dark:bg-gray-900">

      <div className="flex-1 flex flex-col px-4 max-sm:px-0">
        {sidebarItems.map((item, index) => (
          <div key={index}
            className="flex items-center gap-2 px-2 py-2 hover:bg-gray-200 rounded
            max-sm:justify-center max-sm:px-0 dark:hover:bg-gray-700"
            title={item.label}>

            {item.icon}
            <span className="max-sm:hidden">{item.label}</span>
          </div>
        ))}
      </div>

    </aside>
  );
}
