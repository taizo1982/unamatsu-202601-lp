# Step 2: 環境変数の設定

## Claude Code用プロンプト

```
.envファイルを設定してください。

## 要件

1. .env.exampleを.envにコピー
2. 以下の情報を設定（クライアントから提供された値を使用）

## 設定項目

### 必須設定
- VITE_BASE_PATH: デプロイ先のパス（例: /lp-name）
- VITE_OG_TITLE: ページタイトル
- VITE_OG_DESCRIPTION: ページの説明
- VITE_SITE_DESCRIPTION: meta descriptionの内容

### アナリティクス（提供された場合）
- VITE_GA_MEASUREMENT_ID: Google Analytics ID
- VITE_GA_ADS_ID: Google Ads ID
- VITE_META_PIXEL_ID: Meta Pixel ID

### OGP設定
- VITE_OG_URL: ページのURL
- VITE_OG_IMAGE_URL: OGP画像のURL
- VITE_OG_SITE_NAME: サイト名

### Twitter Card
- VITE_TWITTER_SITE: Twitterアカウント

## 確認事項

- [ ] .envファイルが作成されているか
- [ ] VITE_BASE_PATHが正しく設定されているか
- [ ] OGP情報が設定されているか
```

## 設定例

```bash
# ベースパス
VITE_BASE_PATH=/winter-event

# OGP
VITE_OG_TYPE=website
VITE_OG_TITLE=Winter Event 2025
VITE_OG_DESCRIPTION=冬季限定イベントのご案内
VITE_SITE_DESCRIPTION=冬季限定イベントのご案内
VITE_OG_SITE_NAME=Sample Company
VITE_OG_URL=https://example.com/winter-event
VITE_OG_IMAGE_URL=https://example.com/winter-event/og-image.jpg
VITE_OG_IMAGE_WIDTH=1200
VITE_OG_IMAGE_HEIGHT=630

# Twitter
VITE_TWITTER_CARD=summary_large_image

# Analytics（設定がある場合）
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 注意事項

- `.env`ファイルはgitignoreに含まれているため、リポジトリにはコミットされません
- 本番環境では別途環境変数を設定する必要があります
