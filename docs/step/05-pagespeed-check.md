# Step 5: PageSpeed対応チェック

## Claude Code用プロンプト

```
PageSpeed対応のチェックを行ってください。

## 要件

1. build/index.htmlの内容を確認
2. 以下のチェックリストを確認
3. 問題があれば修正

## チェックリスト

### パフォーマンス
- [ ] 画像がAVIF/WebP形式に変換されているか
- [ ] <picture>タグでフォールバックが設定されているか
- [ ] loading="lazy"が画像に設定されているか
- [ ] CSSがバンドル・圧縮されているか
- [ ] JavaScriptがバンドル・圧縮されているか

### SEO
- [ ] <title>タグが設定されているか
- [ ] <meta name="description">が設定されているか
- [ ] OGPタグ(og:title, og:description, og:image)が設定されているか
- [ ] Twitter Cardタグが設定されているか

### アクセシビリティ
- [ ] 画像にalt属性が設定されているか
- [ ] htmlタグにlang属性が設定されているか

### ベストプラクティス
- [ ] viewport metaタグが設定されているか
- [ ] charsetが指定されているか

## 確認コマンド

# 各項目の確認
grep "<title>" build/index.html
grep "description" build/index.html
grep "og:" build/index.html
grep "<picture>" build/index.html
grep 'loading="lazy"' build/index.html
```

## 確認スクリプト

```bash
#!/bin/bash
echo "=== PageSpeed チェック ==="

echo ""
echo "1. Title タグ:"
grep -o "<title>.*</title>" build/index.html

echo ""
echo "2. Meta Description:"
grep 'name="description"' build/index.html

echo ""
echo "3. OGP タグ数:"
grep -c 'property="og:' build/index.html

echo ""
echo "4. Picture タグ数:"
grep -c "<picture>" build/index.html

echo ""
echo "5. Lazy Loading 画像数:"
grep -c 'loading="lazy"' build/index.html

echo ""
echo "6. Analytics タグ:"
grep -c "gtag\|fbq" build/index.html
```

## よくある問題と対処

### 画像がlazy loadingされていない

`<img>`タグに`loading="lazy"`を追加してください。ビューポート内の最初の画像は`loading="eager"`にすることを推奨します。

### OGP画像が表示されない

1. `VITE_OG_IMAGE_URL`が絶対URLか確認
2. 画像サイズが1200x630か確認
3. 画像がHTTPSでアクセス可能か確認

### alt属性が空

すべての`<img>`タグに適切な`alt`属性を設定してください。装飾的な画像は`alt=""`で問題ありません。

## 最終確認

ローカルサーバーで確認：

```bash
npx serve build
```

ブラウザで http://localhost:3000 を開いて動作確認してください。
