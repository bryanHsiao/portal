import { useState } from 'react'

const Announcement = () => {
  const [collapsed, setCollapsed] = useState(true)

  return (
    <aside
      className={`relative transition-all duration-300 ease-in-out bg-gray-100 flex flex-col border-l border-gray-300
        ${collapsed ? 'w-0 overflow-hidden' : 'w-64'}`}
    >
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute top-4 -left-6 px-2 py-1 border rounded bg-white text-sm shadow"
      >
        {collapsed ? '<' : '>'}
      </button>

      {!collapsed && (
        <div className="flex flex-col gap-2 text-sm p-2">
          <h2 className="font-bold">公告欄</h2>
          <div>📢 公告一</div>
          <div>📢 公告二</div>
          <div>📢 公告三</div>
        </div>
      )}
    </aside>
  )
}

export default Announcement
