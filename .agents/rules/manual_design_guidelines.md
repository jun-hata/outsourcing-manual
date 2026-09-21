# マニュアルデザイン統一ガイドライン（デザインシステム規約）

このリポジトリ（outsourcing-manual / manual-v2）内のマニュアルページを追加・編集する際は、本ガイドラインに厳密に従ってください。

## 1. 基本原則
- **文字数や文章を勝手に削らないこと**（100%保持したままデザイン化する）。
- 白地に文字がだらだら続く「文字だらけ」の状態を避け、ブロックやカード枠で視覚的なメリハリ（リズム感）を演出すること。
- 色は無秩序に使わず、下記のセマンティックカラー規則を厳密に遵守すること。

## 2. カラー＆コンポーネント規則

| 要素 | クラス・HTMLタグ | 役割・用途 |
| :--- | :--- | :--- |
| **超重要 / 厳禁 / 必須** | `<div class="point-box point-box--red" markdown="1">` / `<span class="red-text">` | 絶対に見落としてはならないポイント、禁止事項、誤認識チェック、必須基準 |
| **注意点 / 要確認** | `<div class="point-box point-box--yellow" markdown="1">` | つまずきやすい注意点、確認事項、補足注意事項 |
| **推奨 / コツ / メリット** | `<div class="point-box point-box--green" markdown="1">` | 効率化のコツ、推奨設定、メリット、方針 |
| **導入 / 通常概要** | `<div class="point-box" markdown="1">` | 章の冒頭のリード文、全体の概要説明 |
| **作業手順・ステップ** | `<div class="step-card" markdown="1">` ＋ `<span class="step-number">STEP 01</span>` | 手順・ワークフローのカード化 |
| **記入例・入力例** | `<div class="example-box" markdown="1">` | 記入例、具体例、リストアップのサンプル |
| **コピー用テキスト** | `<div class="copy-box"><pre>...</pre></div>` | プロンプト、テンプレートなどのワンクリックコピー枠 |
| **推測・検索ヒント** | `<div class="hint-card" markdown="1">` | 画像推測、Tips、補足ヒント |
| **2者比較（対比）** | `<div class="compare-grid" markdown="1">` 内に `<div class="compare-card compare-card--primary">` と `<div class="compare-card compare-card--secondary">` | 実重量 vs 容積重量、ChatGPT vs Gemini などの横並び比較 |

## 3. キャッシュバスティングについて
CSSの変更を行った際は、Cloudflare CDN のエッジキャッシュによるデザイン反映遅延を防ぐため、`mkdocs.yml` の `extra_css` 参照先ファイル名を更新すること。
