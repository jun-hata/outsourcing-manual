# リサーチを行う前に

<div class="point-box" markdown="1">
このページでは、リサーチを始める前に必ず確認していただきたい重要事項について説明します。  
実践的な詳細については、次のページ以降で動画コンテンツなどを用いて詳しく解説していきます。
</div>

---

## 表示言語について

<div class="point-box point-box--yellow" markdown="1">
リサーチ時の表示言語は、原則「英語」のままでお願いいたします。

日本語表示にすると、一部ページが正しく翻訳されないことがあり、販売データやフィルター項目の意味を誤って理解してしまう可能性があります。

また、eBayは英語を基準に構成されているため、売れている商品のタイトル構造やSEOの傾向も、英語表示のほうがより正確に把握できます。

リサーチの精度を保つためにも、できるだけ英語表示のまま作業を進めていただけると助かります。

英語が読みにくい場合は、Chromeのページ翻訳機能を一時的に使ったり、Google翻訳の拡張機能で気になる単語だけを調べるなどの方法で対応してください。

英語のプラットフォームではありますが、使っているうちに自然と慣れていきますのでご安心ください。
</div>

---

## Ship To の確認

<div class="point-box point-box--red" markdown="1">
「Ship To」の設定によっては、eBay上に商品が表示されなくなる場合があります。

Ship Toとは「商品のお届け先情報」のことです。

お届け先が日本のままリサーチを行うと、  
<span class="red-text">アメリカ向けの需要データを正しく確認することができません。</span>  
その結果、実際には売れている商品を見逃したり、誤った販売判断につながる可能性があります。

リサーチを行う際には、**必ずShip Toが「アメリカ」になっているか確認**してください。
</div>

### 確認方法・設定変更方法

<div class="step-card" markdown="1">
<div class="step-header">
  <span class="step-number">STEP 01</span>
  <span class="step-title">画面右上の国旗を確認</span>
</div>

画面右上の国旗を確認します。

![Ship To確認](images/research_before/ship1.png)
</div>

<div class="step-card" markdown="1">
<div class="step-header">
  <span class="step-number">STEP 02</span>
  <span class="step-title">お届け先をアメリカに変更</span>
</div>

日本になっている場合は「Ship to」をクリックし、プルダウンから「United States（アメリカ）」を選択します。

![Ship To変更](images/research_before/ship2.png)
</div>

<div class="step-card" markdown="1">
<div class="step-header">
  <span class="step-number">STEP 03</span>
  <span class="step-title">設定を適用する</span>
</div>

「Done」をクリックして適用します。

![Ship To確認](images/research_before/ship3.png)
</div>

---

## リサーチの基準

### 利益額が500円以上出るもののみリストアップ対象

<div class="point-box point-box--red" markdown="1">
商品の利益は、仕入れ価格・送料・販売価格などを元に計算しますが、実際の発送時には以下のような要因によって利益が変動する可能性があります。

- 発送時の送料変動  
- 関税や手数料の変動  
- 為替レートの変動  

これらの影響により、リサーチ時の計算上は利益が出ている商品でも、実際には利益が減少したり、赤字になる場合があります。

そのため、利益に余裕を持たせる目的で、この基準を設定しています。

**この基準を必ず守るようにしてください。**
</div>

---

### 利益計算時のルール

リサーチを行う際は、以下の2つのルールに基づいて利益計算を行います。

<div class="compare-grid" markdown="1">
<div class="compare-card compare-card--primary" markdown="1">
<div class="compare-card__title">① 「条件を満たした」日本人最安値を基準にする</div>

eBayで主な競合となるのは同じ日本人セラーです。ただし、**単純に一番安い商品を選ぶのではなく**、後述する4つの基準を満たしたセラーの販売価格（送料込み）を「正しい最安値」として認識し、利益計算を行います。
</div>

<div class="compare-card compare-card--secondary" markdown="1">
<div class="compare-card__title">② 最安値の「-1ドル」で自動計算</div>

ライバルより安く出品し成約率を高めるため、認定した最安値から「-1ドル」した価格を基準に利益計算を行います。  
※eBayリサーチサポートツール側で自動的に「-1ドル」された状態で利益計算が行われます。作業者側で手動で引き算をする必要はありません。  
（例：最安値が $150 の場合、ツールが自動で $149 として計算します）
</div>
</div>

---

### 最安値として認定する4つの基準

「どの出品者を最安値のライバルとして認識するか」は、以下の**優先順位①〜④**に沿って判断します。

<div class="step-card" markdown="1">
<div class="step-header">
  <span class="label label-blue">優先度 1</span>
  <span class="step-title">日本人出品者（From Japan）であること</span>
</div>

海外セラー（中国やアメリカ等）は除外します。必ず**「From Japan」の日本人セラーのみ**をライバル対象とします。
</div>

<div class="step-card" markdown="1">
<div class="step-header">
  <span class="label label-blue">優先度 2</span>
  <span class="step-title">配送方法が「Expedited」以上であること</span>
</div>

[eBay配送方法表示ツール](env_extensions.md#shipping-extractor) の「Shipping」ボタンをクリックし、表示される配送バッジを確認します。

- ◯ **最安値の対象（認定）**  
  <span class="ebse-doc-badge ebse-doc-badge--express" style="display:inline-block; font-size:11px; font-weight:700; padding:2px 10px; border-radius:999px; color:#fff !important; background-color:#d63384;">Express</span> 最速便 ／ <span class="ebse-doc-badge ebse-doc-badge--expedited" style="display:inline-block; font-size:11px; font-weight:700; padding:2px 10px; border-radius:999px; color:#fff !important; background-color:#e85d04;">Expedited</span> 速達便
- ✕ **除外（最安値として扱わない）**  
  <span class="ebse-doc-badge ebse-doc-badge--standard" style="display:inline-block; font-size:11px; font-weight:700; padding:2px 10px; border-radius:999px; color:#fff !important; background-color:#0654ba;">Standard</span> 通常便 ／ <span class="ebse-doc-badge ebse-doc-badge--economy" style="display:inline-block; font-size:11px; font-weight:700; padding:2px 10px; border-radius:999px; color:#fff !important; background-color:#6c757d;">Economy</span> 小型・格安便

<div class="point-box point-box--yellow" markdown="1">
※StandardやEconomyを使っているセラーがどれだけ安く出品していても、**配送スピードが遅いためライバル最安値からは除外（無視）** します。私は<span class="red-text">Expedited</span>の配送方法で勝負するため、遅いセラーに無理に価格を合わせる必要はありません。
</div>
</div>

<div class="step-card" markdown="1">
<div class="step-header">
  <span class="label label-blue">優先度 3</span>
  <span class="step-title">コンディション（状態）の一致</span>
</div>

コンディションは大きく**「新品」「中古」「ジャンク」の3パターン**に分けて考え、仕入れ対象の商品と同じ区分のものを最安値として認定します。  
（例：仕入れ先が「中古良品」なのに、eBayの「ジャンク品」を最安値にしてしまうと価格が合いません）

| コンディション区分 | eBay上の主な表記例 | 判定の目安 |
| :---: | :--- | :--- |
| **新品** | `Brand New`<br>`New`<br>`New with box`<br>`New without tags`<br>`Open box` など | 未使用品・未開封品・開封のみの新品 |
| **中古** | `Like New`<br>`Pre-owned`<br>`Used`<br>`Refurbished`（認定再生品）など | 通常の中古品・美品・動作確認済みのもの |
| **ジャンク** | `For parts or not working`<br>`Parts only`<br>`Junk` など | 故障品・部品取り用・動作未確認のもの |

![コンディション表記例](images/research_before/condition_example.png)
</div>

<div class="step-card" markdown="1">
<div class="step-header">
  <span class="label label-blue">優先度 4</span>
  <span class="step-title">付属品の一致（箱の有無は特に注意）</span>
</div>

付属品の有無も加味して最安値を判断します。  
ただし、付属品の完全一致をルール化しすぎるとリサーチが難しくなってしまうため、**柔軟に（ケースバイケースで）判断してOK**です。以下の重要ポイントを押さえてください。

<div class="point-box point-box--yellow" markdown="1">
**ポイント１：箱の有無**  
**「箱あり」と「箱なし」では、価値が新品と中古くらい大きく変わります。**  
仕入れ商品が「箱付き」の場合、eBay上の「箱なし（本体のみ）」の格安出品に無理に価格を合わせる必要はありません。
</div>

<div class="point-box point-box--yellow" markdown="1">
**ポイント２：買い手目線を持つ**  
「厳格な一致」にこだわりすぎず、**『もし自分が買い手（バイヤー）なら、この付属品の状態で、どのくらいの価格差なら買いたいと思うか？』** を考えるクセをつけてみてください。  
付属品が充実している商品は、本体のみの商品よりも高く売れるのがeBayの基本です。
</div>
</div>

