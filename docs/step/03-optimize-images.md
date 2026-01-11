# Step 3: 画像の最適化

## Claude Code用プロンプト

```
画像を最適化してください。

## 要件

1. npm run optimize:images を実行
2. design/, src/assets/, public/ 内の画像をAVIF/WebP形式に変換
3. 変換結果を確認

## 実行コマンド

npm run optimize:images

## 期待する出力

各画像ファイルに対して以下が生成されます：
- image.png → image.avif, image.webp
- image.jpg → image.avif, image.webp

## 確認事項

- [ ] すべての画像が変換されているか
- [ ] エラーが発生していないか
- [ ] ファイルサイズが適切に削減されているか
```

## 対象ディレクトリ

- `design/` - デザインファイル
- `src/assets/` - アセットファイル
- `public/` - 公開ファイル

## 対応形式

| 入力 | 出力 |
|-----|------|
| `.png` | `.avif`, `.webp` |
| `.jpg` | `.avif`, `.webp` |
| `.jpeg` | `.avif`, `.webp` |

## トラブルシューティング

### 画像が変換されない

```bash
# sharpがインストールされているか確認
npm ls sharp

# 再インストール
npm install sharp
```

### 特定の画像でエラーが発生

- 画像ファイルが破損していないか確認
- ファイル名に日本語や特殊文字が含まれていないか確認
