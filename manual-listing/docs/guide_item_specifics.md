# 04. Condition（状態）とItem Specificsの入力ルール（仮）

eBayのバイヤーはフィルター検索を使って商品を探します。
「状態（Condition）」と「商品スペック（Item Specifics）」を正確に入力することで、検索結果にヒットしやすくなります。

---

## 1. Condition（商品の状態）の選定

### 新品の場合
- **選択**: **`New`**
- 説明文は定型文（テンプレート）でOKです。

### 中古品（Used）の場合
- **選択**: **`Used`**
- **Condition Description**: 傷や汚れ、付属品の有無を具体的に英語で入力します。
  - Geminiに「この商品の傷や状態（例: 箱に少し凹みあり、本体は綺麗）を英語のCondition Description用に2行で書いて」と依頼するとスムーズです。

---

## 2. Item Specificsの必須入力項目

出品画面の中央にある「Item Specifics」セクションの設定手順です。

1. **Suggested item specifics（提案項目）**:
   - 画面上部に表示されるチェックボックス（BrandやPlayer数など）にチェックを入れ、**「Apply all」** を押して一括反映します。
2. **必須・重要項目の入力**:
   - **`Country/Region of Manufacture`**: **`Japan`** を必ず選択してください。
   - **`Brand`**: 正しいブランド名（Nintendo, Bandai, Hori等）
   - **`Model`**: 正しい型番やモデル名
   - **`Platform`**: ゲーム機本体や周辺機器の場合は対応機種（Nintendo Switch, PS5等）
3. **不明な項目の扱い**:
   - わからない項目や該当しない項目は、空欄のままにせず **`Does not apply`** または **`N/A`** を入力・選択してください。
