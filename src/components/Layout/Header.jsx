import { User, Languages, Moon, LogOut, Banknote } from 'lucide-react';

export default function Header() {
  return (
    <div className="flex items-center justify-between px-4 h-14 bg-white border-b">
      {/* 左邊 LOGO */}
      <div className="flex items-center space-x-2">
        <Banknote className="w-6 h-6 text-green-600" />
        <span className="text-lg font-semibold">第一銀行</span>
      </div>

      {/* 中間 Option Actions */}
      {/*       <div className="flex space-x-4">
        <button className="text-sm text-gray-700 hover:text-blue-500">option1</button>
        <button className="text-sm text-gray-700 hover:text-blue-500">option2</button>
      </div> */}

      {/* 右邊 使用者資訊區 */}
      <div className="flex items-center gap-5">
        {/* 登入人員資訊 */}
        <div className="flex items-center gap-1 text-sm text-gray-700">
          <User className="w-5 h-5" />
          <span>測試員1</span>
        </div>

        {/* 語系切換 */}
        <button className="hover:text-blue-500">
          <Languages className="w-5 h-5" />
        </button>

        {/* 深色模式 */}
        <button className="hover:text-blue-500">
          <Moon className="w-5 h-5" />
        </button>

        {/* 登出 */}
        <button className="hover:text-blue-500">
          <LogOut className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
