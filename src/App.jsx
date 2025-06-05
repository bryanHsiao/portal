import { useEffect, useState } from 'react'
import Header from "./components/Layout/Header";
import Navbar from "./components/Layout/Navbar";
import Sidebar from "./components/Layout/Sidebar";
import Announcement from "./components/Layout/Announcement";

export default function App() {
  const [isDark, setIsDark] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches,
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <div className="flex flex-col min-h-screen dark:text-gray-100">
      {/* 頁首區塊 */}
      <header className="bg-white shadow dark:bg-gray-800">
        <Header isDark={isDark} toggleDark={() => setIsDark(!isDark)} />
      </header>

      {/* 導覽列 + 頁籤 + 跑馬燈 */}
      <nav className="bg-gray-100 border-b dark:bg-gray-900 dark:border-gray-700">
        <Navbar />
      </nav>

      {/* 主要內容區 */}
      <main className="flex flex-1">
        {/* 左側側邊欄 */}
        <aside className="bg-gray-50 border-r dark:bg-gray-900 dark:border-gray-700">
          <Sidebar />
        </aside>


        {/* 中央內容 */}
        <section className="flex-1 p-4">
          <div>動作按鈕群</div>
          <div>搜尋區塊</div>
          <div>資料列表</div>
          <div>分頁器(上)</div>
          <div>分頁器(下)</div>
        </section>

        {/* 公布欄 */}
        <aside className="w-80 bg-gray-50 border-l hidden xl:block dark:bg-gray-900 dark:border-gray-700">
          <Announcement />
        </aside>
      </main>

      {/* 頁尾區塊 */}
      <footer className="bg-white border-t text-center p-2 text-sm text-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
        表尾區
      </footer>
    </div>
  );
}
