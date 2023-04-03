

# Alphitter

這是一個簡單的 Twitter 模擬網站，使用者可以在此註冊帳號、
發佈貼文、追蹤其他使用者、以及收藏喜愛的貼文。 採用前後端分離四人一組，開發類似Twitter的網站


## 線上使用

可以訪問以下網址：[simple-twitter](https://noseble.github.io/simple-twitter)

## 測試帳號
以下提拱兩組測試帳號，前後台不能互相登入，使用者亦可自行註冊帳號
| 使用者       | 帳號             | 密碼                                                          |
| --    | ----------------- | ------------------------------------------------------------------ |
|前台| user1 | 12345678 |
|後台| root | 12345678 |

## 在電腦上安裝

`下載`

```bash
可以下載zip或在Terminal輸入https://github.com/Noseble/simple-twitter.git

```
`進入專案資料夾`
```bash
cd simple-twitter
```
`安裝`
```bash
npm install
```
`啟動`
```bash
npm run start
```

## 登入

![1680484320252](https://user-images.githubusercontent.com/51280671/229390982-17798a84-6c9c-40d8-a257-316e30fb352e.jpg)

`使用測試帳號登入`
`1.註冊新帳號`
`2.後台登入`

## 註冊

![1680484339552](https://user-images.githubusercontent.com/51280671/229390759-ad8e5dd0-7d07-40f2-94c3-c0ba4ce5b0d1.jpg)


`依序輸入資料註冊`
`注意! Eamil須符合xxx@xxx.xxx格式`

## 前台頁面

![1680484262055](https://user-images.githubusercontent.com/51280671/229391483-6e4ae7a8-ab8e-4f00-8005-e09dfbbf3355.jpg)
`首頁`

`1.輸入推文內容`

`1.1點擊推按鈕，再彈窗處輸入推文內容 注意! 推文不能超過140字`

`2.按下推文按鈕送出推文`

`3.追蹤其他用戶`

`4.點擊回復按鈕，回復推文 注意! 回文不能超過140字`

`5.喜歡該推文按鈕`

`6.使用者個人資料`

`7.設定使用者資料`

## 使用者頁面

![person page](https://user-images.githubusercontent.com/51280671/229400964-083ecae5-5afe-45c7-a53f-7cb22a404f35.jpg)

`6-1.編輯個人資料`

`6-2.看該使用者推文清單`

`6-3.看該使用者回復清單`

`6-4.看該使用者喜歡清單`

`6-5.看該使用者追隨者清單`

![setting info](https://user-images.githubusercontent.com/51280671/229400874-fdb3b05a-25ec-4017-80ed-27d04225d630.jpg)

`1.上傳背景圖片`

`1.1.刪除此次上傳背景圖片`

`2.上傳大頭貼`

`3.編輯個人名稱 注意! 名稱不能超過50字`

`4.編輯自我介紹 注意! 自我介紹不能超過160字`

`5.儲存編輯內容`

![setting](https://user-images.githubusercontent.com/51280671/229401105-9dfdfeda-f1c4-4e81-bd6d-b0aea6d80c87.jpg)

`編輯個人資訊`

## 後台頁面

![root](https://user-images.githubusercontent.com/51280671/229401501-8666426b-b9f7-4c16-88fd-d6d9ac49a060.jpg)

`1.所有推文清單`

`2.所有使用者清單`

`3.瀏覽所有使用者推文`

`4.點擊ｘ刪除該貼文`

![UESR](https://user-images.githubusercontent.com/51280671/229401918-6d318869-ea02-472b-b9fe-3f5610b6dfac.jpg)

`瀏覽所有使用者清單`

## 後端Repo

https://github.com/chikunmark/twitter-api-2020

## 開發工具

- [Express](https://expressjs.com/) - 服務器框架
- [React.Js](https://react.dev/) - Web框架
- [Node.Js](https://nodejs.org/en/) - 服務器環境

## Authors
前端

- [Noseble](https://github.com/Noseble)
- [shanyueel](https://github.com/shanyueel)

後端

- [chikumark](https://github.com/chikunmark)
- [LinTzuAn](https://github.com/LinTzuAn)
