# express-CRUD-example

## 初始化
先在 `index.js` 裡面初始化好 `Express` 以後，呼叫 `services.setupServices(app);` 初始化底下的各個模組

## 檔案結構

```
.
├── README.md
├── config.js  -- 設定檔
├── index.js   -- 程式起始點
├── package-lock.json
├── package.json
└── services   -- 存放所有模組
    ├── example -- 範例模組
    │   ├── action.js -- action 裡面放資料庫操作部分
    │   ├── index.js  -- 模組起始點和初始化操作
    │   └── middleware.js -- 對外服務的 API
    └── index.js -- 負責呼叫各個模組的初始化
```