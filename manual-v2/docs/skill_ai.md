# ＡＩ活用

<div class="point-box" markdown="1">
ここではＡＩを活用しながら、リサーチ業務をより効率的に行う為の解説です。  
また、本ページは  
「[拡張機能導入](env_extensions.md) ＞ おすすめ拡張機能 ＞ ②Insert Blurb」  
が導入されている事を前提とします。  
ぺージ最下部の「Insert Blurbを使用したAI活用の解説動画」も併せてご確認ください。
</div>

---

## おすすめのＡＩ

- [ChatGPT](https://chatgpt.com/)  
- [Gemini](https://gemini.google.com/)

### 簡単な特徴

<div class="compare-grid" markdown="1">
<div class="compare-card compare-card--primary" markdown="1">
<div class="compare-card__title">🤖 ChatGPT</div>

- 文章構成が安定している  
- プロンプトへの追従性が高い  
- リサーチ用途との相性が良い  
</div>

<div class="compare-card compare-card--secondary" markdown="1">
<div class="compare-card__title">✨ Gemini</div>

- 検索寄りの情報整理が得意  
- 複数情報の比較整理がしやすい  
</div>
</div>

<p>どちらも無料版で十分です。</p>

<div class="point-box point-box--red" markdown="1">
<div class="point-box__title">🚨 AI利用時の超重要注意点</div>
AIは、事実ではない情報をもっともらしく出力してしまうことがあります。  
特に、商品型番、サイズ、重量、発売年、限定情報などの具体的な数値や仕様は誤りが含まれる可能性があるため、  
<span class="red-text">必ずご自身で最終確認を行ってください。</span>

AIは正解を提示する道具ではなく、考える時間を短縮し、確認・整理・発想をサポートするための補助ツールとして活用するまでにとどめてください。
</div>

---

## 活用例

### ランダムキーワードの作成

[リサーチキーワード](research_keywords.md) で解説したランダムキーワードリサーチ用のキーワード作成に活用します。

こちらを全文コピーして使用してください。

<div class="copy-box"><pre>
eBayリサーチ用にランダムな英単語リストを作成してください。
■条件
・固有名詞は禁止
・果物、色、質感、状態、形容詞、副詞などの一般単語のみ
・camera、speakerなどのメジャー商品ジャンルに直結する単語は禁止
・順番は完全ランダム
・単語はすべて小文字
・重複禁止

■出力形式
・コードブロック形式
・英単語のみ改行区切り
・解説不要

■生成数
20個
</pre></div>

---

### 容積重量、重量の予測

商品名を伝え、その商品の容積重量と重量がどれだけになるか予想をしてもらうためのプロンプトです。

AI側がその商品を正しく認識していない場合は、全く別のサイズが提案される可能性があります。

<div class="point-box point-box--yellow" markdown="1">
<div class="point-box__title">⚠️ 予測利用の注意</div>
<span class="red-text">
必ず事前に自分で調査して、把握している内容の確認作業にとどめてください。
</span>
また、付属品がある場合は付属品も明記して伝えるとより正確になります。
</div>

こちらを全文コピーして使用してください。

<div class="copy-box"><pre>
この商品の実重量と、梱包後の箱サイズを『商品サイズの各辺に＋5cmした寸法』と仮定して算出した容積重量（縦×横×高さ÷5000）のうち、
どちらが重くなるかを教えてください。
梱包材は段ボール、プチプチ、新聞を使用します。
付属品がある場合は、それぞれにプチプチを1周巻いた状態を想定し、空間が最小になる最適な配置で箱詰めした前提で計算してください。
実重量は未確定の場合、推定せず「不明」と記載してください。
梱包サイズは仮定条件の妥当性も明示してください。
推定を含む場合は必ずその旨を明記してください。
</pre></div>

---

### 商品の予測

国内で検索する為に、正式名称・型番などの確定情報を整理する為のプロンプトです。

こちらを全文コピーして使用してください。

<div class="copy-box"><pre>
この商品が何か教えてください。メーカー、型番、カラー展開、その他補足情報を正確な事実に基づいて教えてください。日本国内での仕入れ先検索として有効な検索キーワードも提案してください。
</pre></div>

---

## Insert Blurbを使用したAI活用の解説動画

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;">
  <iframe 
    src="https://www.youtube.com/embed/u1F5KpEzHtE" 
    title="Insert Blurbを使用したAI活用の解説動画"
    style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
    allowfullscreen>
  </iframe>
</div>