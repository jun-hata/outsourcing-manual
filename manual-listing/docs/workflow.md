# 出品作業の一連の流れ（STEP①〜⑩）

<div class="point-box" markdown="1">
スプレッドシートを開いてからeBayへ出品完了し、Item IDを記録するまでの**全手順（STEP 01〜10）**を解説しています。  
作業時はこのページを上から順に進めることで、スムーズに出品作業を完結できます。
</div>

---

## 出品作業フロー確認

<div class="step-card" markdown="1">
<div class="step-header">
  <span class="step-number">STEP 01</span>
  <span class="step-title">仕入れ元（Yahoo!フリマ等）を開く</span>
</div>

1. 配布された**管理用Googleスプレッドシート**を開きます。
2. 作業対象行の **「J列（仕入れ元URL）」** にあるリンク（Yahoo!フリマなど）を確認します。
3. URLを右クリックし、「リンクを新しいタブで開く」で仕入れ元の出品ページを表示します。

※1商品ずつタブを管理して進めると混乱を防げます。
</div>

<div class="step-card" markdown="1">
<div class="step-header">
  <span class="step-number">STEP 02</span>
  <span class="step-title">ebayリサーチサポートツールで送料・重量確認</span>
</div>

1. 仕入れ元ページ（Yahoo!フリマ）を開いた状態で、Chrome拡張機能 **「ebayリサーチサポートツール」** のアイコンをクリックします。
2. 表示された画面で **「送料を取得」** をクリックします。
3. スプレッドシートの **G列（商品重量）** に記載されている数値（例: `202` [g]）を確認し、ツールの「重量」入力欄に正確に入力します。

<div class="point-box point-box--red" markdown="1">
<div class="point-box__title">⚠️ 重量の入力ミスに注意</div>
重量がずれると送料計算が狂い、赤字出品の原因になります。スプレッドシート記載のグラム数（g）を正確に入力してください。
</div>
</div>

<div class="step-card" markdown="1">
<div class="step-header">
  <span class="step-number">STEP 03</span>
  <span class="step-title">eBayで最安値リサーチ（Sold & Active）</span>
</div>

1. Chrome拡張機能 **「Buy and sell all things on eBay」** をクリックし、eBayの検索ページを開きます。
2. **Sold Listing（販売済み）の確認**:
   - フィルターで **「Japan」** を選択し、日本セラーの販売履歴に絞り込みます。
   - 出品対象と**完全に同一の商品**の最安値を確認します。
3. **Active Listing（出品中）の確認**:
   - 現在出品中の最安値商品を特定し、その商品ページを開きます。

※検索キーワードの調整や詳しい判断基準は [最安値リサーチの判断基準（仮）](guide_ebay_research.md) を参照してください。
</div>

<div class="step-card" markdown="1">
<div class="step-header">
  <span class="step-number">STEP 04</span>
  <span class="step-title">eShipへ情報転記 & 利益確認（500円ルール）</span>
</div>

1. eBayの出品中（Active）最安値ページを開いた状態で、Chrome拡張機能 **「eShip」** をクリックします。
2. **「商品情報取得」ボタン（電球アイコン）** をクリックし、eBay URL、Item ID、商品名、最安値、送料などを自動転記させます。
3. eShipポップアップ下部の **「eShip転記」** ボタンを押し、利益計算ページへ移動します。
4. **利益額が「500円以上」** あることを必ず確認します。

<div class="point-box point-box--red" markdown="1">
<div class="point-box__title">🚫 利益500円未満は出品ストップ</div>
利益が500円を下回る場合は出品を見送るか、管理者・リサーチ担当者へ確認してください。確認せずにそのまま出品することは厳禁です。
</div>
</div>

<div class="step-card" markdown="1">
<div class="step-header">
  <span class="step-number">STEP 05</span>
  <span class="step-title">Gemini（AI）でSEOタイトル作成（80文字）</span>
</div>

1. Yahoo!フリマの日本語商品名をコピーします。
2. **Google Gemini** を開き、専用プロンプトで英語タイトルを作成します。

<div class="copy-box">
<pre>[日本語商品名を貼り付け]

あなたはebay物販のコンサルタントです。
SEOを意識し、海外のバイヤーが検索するキーワードを網羅して、この商品の売れるebay titleを80文字以内で作成してください。</pre>
<button class="copy-btn" onclick="navigator.clipboard.writeText(this.previousElementSibling.innerText); this.innerText='コピー完了!'; setTimeout(()=>this.innerText='コピー', 2000);">コピー</button>
</div>

3. 生成された英文タイトルをコピーし、eShipの「商品名」欄に貼り付けます。
4. **【最重要】半角80文字以内** に収まっていることを確認します。オーバーしている場合はGeminiに「80文字以内で短縮して」と指示してください。

※プロンプトの調整方法は [Geminiタイトル作成テクニック（仮）](guide_gemini_title.md) をご覧ください。
</div>

<div class="step-card" markdown="1">
<div class="step-header">
  <span class="step-number">STEP 06</span>
  <span class="step-title">メルカリから画像収集・eShipへ登録</span>
</div>

1. **メルカリ** で商品名を検索し、絞り込み条件で **「新品・未使用」**、販売状況で **「売り切れ（SOLD）」** にチェックを入れます。
2. パッケージや本体が綺麗に、鮮明に写っている画像を**複数枚（推奨2枚以上）**選定します。
3. 画像をPCにダウンロードし、eShip画面の画像アップロード欄にドラッグ＆ドロップします。
</div>

<div class="step-card" markdown="1">
<div class="step-header">
  <span class="step-number">STEP 07</span>
  <span class="step-title">Custom Label（SKU）とShipping Policy設定</span>
</div>

1. **Custom Label (SKU)**:
   - スプレッドシート **B列（リサーチ担当者名）**（例: `yukan`）をコピーし、eShipの「Custom Label (SKU)」欄に貼り付けます。
2. **Shipping Policy**:
   - スプレッドシートの **「送料設定」タブ** を開き、出品価格（ドル）から推奨ポリシー名（例: `**EXP SpeedPak Ex $75-99.9`）をコピーして貼り付けます。
3. **重量設定**:
   - パッケージ重量欄に指定値（例: `2`）、単位に **`lbs`** を設定します。

※詳しい選び方は [Shipping Policyの選び方（仮）](guide_shipping_policy.md) を確認してください。
</div>

<div class="step-card" markdown="1">
<div class="step-header">
  <span class="step-number">STEP 08</span>
  <span class="step-title">eBay出品ページへ転記・Item Specifics・広告設定</span>
</div>

1. eShip下部の **「Listing転記」** ボタンをクリックし、eBayの出品画面を開きます。
2. **Condition**:
   - 新品は **「New」**、中古は **「Used」**（状態説明文を入力）。
3. **Item Specifics**:
   - Suggested item specifics を「Apply all」で一括反映。
   - **`Country of Origin` は必ず「Japan」** を選択。
   - 不明な項目は「Does not apply」または「N/A」を選択。
4. **画像のトリミング**: 余白を整えて保存。
5. **広告設定（Promoted Listing）**:
   - Generalタブで **「Listing ad rate」を必ず「2%」** に設定。

※詳細は [Item Specifics入力ルール（仮）](guide_item_specifics.md) を参照してください。
</div>

<div class="step-card" markdown="1">
<div class="step-header">
  <span class="step-number">STEP 09</span>
  <span class="step-title">最終確認・出品実行（List it）</span>
</div>

出品ボタンを押す前に、以下のチェックリストを再確認します：

- [ ] タイトルが80文字以内で、適切な英文になっているか？
- [ ] 画像が複数枚、鮮明にセットされているか？
- [ ] 利益が500円以上取れているか？
- [ ] Custom Label（リサーチ者名）が入っているか？
- [ ] Shipping Policyが合っているか？
- [ ] Item Specificsの `Country of Origin` が「Japan」になっているか？
- [ ] Promoted Listing が「2%」になっているか？

確認完了後、ページ下部の **「List it」** ボタンをクリックして出品を実行します。
</div>

<div class="step-card" markdown="1">
<div class="step-header">
  <span class="step-number">STEP 10</span>
  <span class="step-title">Item IDの記録・フィードバック対応</span>
</div>

1. 出品完了画面に表示される **「Item ID（数字の羅列）」** をコピーします。
2. 管理スプレッドシートの該当行 **「出品状況」列** にItem IDを貼り付けます。
3. リサーチ担当者から修正依頼やコメントが入っていた場合は、内容を確認して速やかに修正を行い、**日付入りで返信コメント** を記入します。

※返信ルールは [フィードバック対応（仮）](guide_feedback.md) をご覧ください。
</div>
