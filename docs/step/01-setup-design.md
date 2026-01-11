# Step 1: デザインファイルの配置

## Claude Code用プロンプト

```
design/ディレクトリに初期デザインのHTML&CSSを配置してください。

## 要件

1. design/ディレクトリ構造を確認
2. 提供されたHTML/CSSファイルをdesign/に配置
3. 画像ファイルをdesign/images/に配置
4. ファイル構造を確認して報告

## 期待するディレクトリ構造

design/
├── index.html
├── css/
│   └── style.css
└── images/
    ├── hero.png
    ├── logo.png
    └── ...

## 確認事項

- [ ] HTMLファイルが配置されているか
- [ ] CSSファイルが配置されているか
- [ ] 画像ファイルが配置されているか
- [ ] リンク切れがないか（相対パスの確認）
```

## 手動で行う場合

1. `design/`ディレクトリを確認
2. HTML/CSSファイルをコピー
3. 画像ファイルを`design/images/`にコピー

## 注意事項

- 画像は`.png`, `.jpg`, `.jpeg`形式を使用
- CSSは外部ファイルとして配置推奨
- 相対パスでリンクを設定
