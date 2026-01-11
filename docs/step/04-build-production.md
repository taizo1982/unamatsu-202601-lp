# Step 4: 本番ビルド

## Claude Code用プロンプト

```
本番ビルドを実行してください。

## 要件

1. npm run build:production を実行
2. ビルド結果を確認
3. build/ディレクトリの内容を確認

## 実行コマンド

npm run build:production

## ビルドプロセス

このコマンドは以下を順番に実行します：

1. optimize:images - 画像最適化
2. build:ssg - SSGビルド
   - build:demo - Viteビルド
   - inject:all - メタ情報注入
     - inject:meta - OGP/metaタグ
     - inject:analytics - GA/Meta Pixel
     - convert:images - <img>→<picture>変換
   - build:ssr - SSRビルド
   - prerender - HTMLプリレンダリング

## 確認事項

- [ ] ビルドが正常に完了したか
- [ ] build/index.htmlが生成されているか
- [ ] OGPタグが注入されているか
- [ ] <picture>タグに変換されているか
- [ ] アナリティクスタグが注入されているか
```

## ビルド成果物

```
build/
├── index.html      # プリレンダリング済みHTML
├── assets/         # バンドル済みJS/CSS
└── (その他ファイル)
```

## 確認コマンド

```bash
# OGPタグの確認
grep -A 20 "ogp:start" build/index.html

# pictureタグの確認
grep -c "<picture>" build/index.html

# アナリティクスタグの確認
grep -A 5 "analytics:start" build/index.html
```

## トラブルシューティング

### ビルドが失敗する

```bash
# TypeScriptエラーの確認
npm run typecheck

# 依存関係の再インストール
rm -rf node_modules && npm install
```

### OGPタグが注入されない

```bash
# .envファイルの確認
cat .env

# 手動で注入
npm run inject:meta
```
