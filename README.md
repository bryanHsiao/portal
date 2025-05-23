
# 📄 Portal 專案

本專案使用 Vite + React + UnoCSS 建置，支援：
- ✅ Domino Server 正式部署
- ✅ GitHub Pages 預覽展示

---

## 🚀 本地開發指令

| 指令 | 功能 |
|-------|------|
| `npm install` | 安裝專案依賴 |
| `npm run dev` | 啟動開發模式 (localhost 預覽) |
| `npm run build` | 打包生產環境版本 (用於 Domino 部署) |
| `npm run build:ghpages` | 為 GitHub Pages 打包（帶入 base 路徑） |
| `npm run deploy:ghpages` | 打包並發佈到 gh-pages 分支 (GitHub Pages) |

---

## 🌐 GitHub Pages 預覽網址
[👉 https://bryanhsiao.github.io/portal/](https://bryanhsiao.github.io/portal/)

---

## 🏢 Domino 部署說明
1. 執行 `npm run build`
2. 取得 `dist/` 資料夾
3. 將 dist/ 內容部署到 Domino Server (如 /domino/html/portal/)
4. 使用內網網址存取：http://domino.server/portal/index.html

---

## ✅ 【專案整體流程示意】

```
本地端開發 (Vite + React + UnoCSS)
        │
        │
        ├───▶ git push origin main
        │         │
        │         └──▶ GitHub Repo (main 分支) <─ 原始碼、src、public、package.json
        │
        ├───▶ npm run deploy:ghpages
        │         │
        │         └──▶ GitHub Repo (gh-pages 分支) <─ 打包後 /dist (index.html, assets/)
        │
        └───▶ npm run build
                  │
                  └──▶ /dist (index.html, assets/)
                             │
                             └──▶ 複製到 Domino Server (html/portal/目錄)
```

---

## ✅ 【訪問時使用者會去哪】

| 使用者瀏覽器 | 來源位置 |
|--------------|----------|
| 打開 GitHub Pages 網址 | https://bryanhsiao.github.io/portal/ (gh-pages 分支) |
| 打開 Domino 內網網址 | http://domino.server/portal/index.html (Domino Web Serve) |

---

## ✅ 【你只要記得這三步】

| 動作 | 指令 |
|------|------|
| 🚀 開發完推 GitHub | `git push origin main` |
| 🚀 發佈到 GitHub Pages 預覽 | `npm run deploy:ghpages` |
| 🚀 發佈到 Domino | `npm run build` + 複製 dist/ 到 Domino |

---

## 📝 注意事項
- main 分支是專案原始碼 (src, public, vite.config.js)
- gh-pages 分支是靜態網站內容 (dist, index.html, assets)
- GitHub Pages 不會動到 Domino，兩邊互不干擾
