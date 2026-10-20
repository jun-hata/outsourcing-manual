# 出品手順（STEP①〜⑦）

<div class="point-box" markdown="1">
スプレッドシートを開いてからeBayへ出品完了し、Item IDを記録するまでの**全手順（STEP 01〜07）**を解説しています。  
日常の出品作業時は、このページを上から順に進めることで迷わず作業を完了できます。
</div>

---

## 出品作業フロー確認

<div class="step-card" markdown="1">
<div class="step-header">
  <span class="step-number">STEP 01</span>
  <span class="step-title">スプレッドシートのURLを開く</span>
</div>

1. 配布された**管理用Googleスプレッドシート**を開きます。
2. 作業対象行の **「J列（仕入れ元URL）」** にあるリンク（Yahoo!フリマなど）を確認します。
3. URLを右クリックし、「リンクを新しいタブで開く」で仕入れ元の出品ページを表示します。

※1商品ずつタブを整理しながら進めると、誤入力を防げます。
</div>

<div class="step-card" markdown="1">
<div class="step-header">
  <span class="step-number">STEP 02</span>
  <span class="step-title">拡張機能（リサーチサポートツール）に必要事項の吸い上げ・記入</span>
</div>

1. 仕入れ元ページ（Yahoo!フリマ）を開いた状態で、Chrome拡張機能 **「ebayリサーチサポートツール」** のアイコンをクリックします。
2. 表示された画面で **「送料を取得」** をクリックします。
3. スプレッドシートの **G列（商品重量）** に記載されている数値（例: `202` [g]）を確認し、ツールの「重量」入力欄に入力します。
4. 拡張機能 **「Buy and sell all things on eBay」** をクリックしてeBayを開き、最安値（Sold Listing / Active Listing）を確認します。
   - **Sold Listing（販売実績）**: 「Japan」フィルターを適用し、完全に同一の商品の相場を確認。
   - **Active Listing（出品中）**: 現在出品されている最安値ページを特定します。

<div class="point-box point-box--red" markdown="1">
<div class="point-box__title">⚠️ 重量の入力ミスに注意</div>
重量がずれると送料計算が狂い、赤字出品の原因になります。スプレッドシート記載のグラム数（g）を正確に入力してください。
</div>

※キーワード調整や価格調査の詳しい基準は [最安値リサーチの判断基準（仮）](guide_ebay_research.md) を参照してください。
</div>

<div class="step-card" markdown="1">
<div class="step-header">
  <span class="step-number">STEP 03</span>
  <span class="step-title">eShipに転記し、利益を確認</span>
</div>

1. eBayの出品中（Active）最安値ページを開いた状態で、Chrome拡張機能 **「eShip」** をクリックします。
2. **「商品情報取得」ボタン（電球アイコン）** をクリックし、eBayのURL、Item ID、商品名、最安値、送料などの情報を自動取得させます。
3. eShipポップアップ下部の **「eShip転記」** ボタンを押し、利益計算ページを開きます。
4. **利益額が「500円以上」** 取れていることを必ず確認します。

<div class="point-box point-box--red" markdown="1">
<div class="point-box__title">🚫 利益500円未満は出品ストップ</div>
利益が500円を下回る商品は出品を見送るか、管理者・リサーチ担当者へ確認してください。確認せずにそのまま出品することは厳禁です。
</div>
</div>

<div class="step-card" markdown="1">
<div class="step-header">
  <span class="step-number">STEP 04</span>
  <span class="step-title">タイトル作成・販売価格の入力</span>
</div>

1. **Geminiでタイトル作成**:
   - Yahoo!フリマの日本語商品名をコピーし、Geminiに投げてSEOに強い英語タイトルを生成します。

<div class="copy-box">
<pre>[日本語商品名を貼り付け]

あなたはebay物販のコンサルタントです。
SEOを意識し、海外のバイヤーが検索するキーワードを網羅して、この商品の売れるebay titleを80文字以内で作成してください。</pre>
<button class="copy-btn" onclick="navigator.clipboard.writeText(this.previousElementSibling.innerText); this.innerText='コピー完了!'; setTimeout(()=>this.innerText='コピー', 2000);">コピー</button>
</div>

   - 生成された英文タイトルをeShipの「商品名」欄に貼り付けます。
   - **【最重要】半角80文字以内** に収まっていることを確認します（超えている場合は短縮指示）。

2. **販売価格の入力**:
   - eShip画面で、リサーチした最安値に基づき適正な販売価格を入力します。

3. **商品画像の収集と登録**:
   - メルカリ（新品・未使用 / 売り切れ）から鮮明で綺麗な画像を複数枚（推奨2枚以上）ダウンロードし、eShipへ登録します。

4. **SKU & 送料ポリシー設定**:
   - **Custom Label (SKU)**: スプレッドシートB列の「リサーチ担当者名」（例: `yukan`）を貼り付け。
   - **Shipping Policy**: シートの「送料設定」タブから算出された推奨ポリシー名を貼り付け、パッケージ重量（例: `2`、単位 **`lbs`**）を設定。

※詳細は [Geminiタイトル作成テクニック（仮）](guide_gemini_title.md) や [Shipping Policyの選び方（仮）](guide_shipping_policy.md) を参照してください。
</div>

<div class="step-card" markdown="1">
<div class="step-header">
  <span class="step-number">STEP 05</span>
  <span class="step-title">eBayの出品ページに転記</span>
</div>

1. eShip下部の **「Listing転記」** ボタンをクリックし、eBayの出品画面を開きます。
2. **Condition（状態）**:
   - 新品は **「New」** を選択。中古は **「Used」**（状態説明文を英文で入力）。
3. **Item Specifics（商品詳細スペック）**:
   - Suggested item specifics を「Apply all」で一括反映。
   - **`Country of Origin` は必ず「Japan」** を選択。
   - 空欄の必須項目を埋め、不明な項目は「Does not apply」または「N/A」を選択。
4. **画像のトリミング**:
   - 画像の余白をカットし、明るさを整えて保存します。
5. **広告設定（Promoted Listing）**:
   - Generalタブで **「Listing ad rate」を必ず「2%」** に設定します。

※詳細は [Item Specifics入力ルール（仮）](guide_item_specifics.md) を参照してください。
</div>

<div class="step-card" markdown="1">
<div class="step-header">
  <span class="step-number">STEP 06</span>
  <span class="step-title">出品</span>
</div>

出品ボタンを押す前に、以下のチェックリストを上から順に最終確認します：

- [ ] タイトルが80文字以内で、適切な英文になっているか？
- [ ] 画像が複数枚、鮮明にセットされているか？
- [ ] 利益が500円以上取れているか？
- [ ] Custom Label（リサーチ担当者名）が入っているか？
- [ ] Shipping Policyが合っているか？
- [ ] Item Specificsの `Country of Origin` が「Japan」になっているか？
- [ ] Promoted Listing が「2%」になっているか？

確認完了後、ページ下部の **「List it」** ボタンをクリックして出品を実行します。
</div>

<div class="step-card" markdown="1">
<div class="step-header">
  <span class="step-number">STEP 07</span>
  <span class="step-title">出品後のItemIDをスプレッドシートに記入</span>
</div>

1. 出品完了画面に表示される **「Item ID（数字の羅列）」** をコピーします。
2. 管理スプレッドシートの該当行 **「出品状況」列** にItem IDを貼り付けます。
3. リサーチ担当者から修正依頼やコメントが入っていた場合は、内容を確認して速やかに修正を行い、**日付入りで返信コメント** を記入します。

※返信ルールは [フィードバック対応（仮）](guide_feedback.md) をご覧ください。
</div>
