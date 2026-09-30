# 各種拡張機能導入

<div class="point-box" markdown="1">
このページでは、リサーチ業務で使用する拡張機能について説明します。  
拡張機能を導入することで、作業効率を大幅に向上させることができます。
</div>

---

## 必須拡張機能

<div class="point-box point-box--red" markdown="1">
<span class="red-text">
この項目で紹介する拡張機能は、本業務を行う上で必須となります。必ず導入をお願いいたします。  
</span>
</div>

<div class="point-box point-box--yellow" markdown="1">
※①・②・③の拡張機能については、こちらで権限を付与しないとストアで「このアイテムはご利用いただけません」と表示されます。  
その際は管理者宛にご連絡をお願いいたします。なお、権限の付与には1～2日ほどお時間をいただく場合がございます。
</div>

### ① ebayリサーチサポートツール

👉 [Chromeウェブストアで開く](https://chromewebstore.google.com/detail/ebay%E3%83%AA%E3%82%B5%E3%83%BC%E3%83%81%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88%E3%83%84%E3%83%BC%E3%83%AB-legacy/fdhefmpbcdkclnleajeldbeafdhemlai)

仕入商品の検索作業、商品情報の取得、出品作業の支援を行うツールです。  

※リサーチサポートツールについての詳細は[コチラ](tool_support_setup.md)

---

### ② ebay送料込み価格表示

👉 [Chromeウェブストアで開く](https://chromewebstore.google.com/detail/ebay%E9%80%81%E6%96%99%E8%BE%BC%E4%BE%A1%E6%A0%BC%E8%A1%A8%E7%A4%BA/hbeapmbjnjmifoceiibcobffhgppmhge)

eBayの検索画面で、通常は日本円で表示される送料をUSドルに変換し、商品価格と合算して表示する機能です。  
送料が合算された金額は「オレンジ色」で表示されます（※送料無料の商品は黒文字のまま表示されます）。導入後の特別な操作は一切不要です。

<div class="step-card" markdown="1">
<div class="step-header">
  <span class="step-number">表示例 1</span>
  <span class="step-title">検索結果一覧での合算表示例</span>
</div>

![検索結果画面での表示例](images/env_extensions/shipping_search.png)
</div>

<div class="step-card" markdown="1">
<div class="step-header">
  <span class="step-number">表示例 2</span>
  <span class="step-title">個別商品ページ内での合算表示例</span>
</div>

個別商品ページ内でも同様に合算表示されます。  
※検索結果画面と個別ページで金額に差異が生じる場合がありますが、個別商品ページ内の合算金額が正しい金額です。

![個別商品ページでの表示例](images/env_extensions/shipping_detail.png)
</div>

---

### ③ eBay配送方法表示ツール（eBay Search Shipping Method Extractor） {: #shipping-extractor }

👉 [Chromeウェブストアで開く](https://chromewebstore.google.com/detail/jkfgbjebhacggddhcdfeabaichfackkh)

eBayの検索結果一覧で、日本の出品者（Japan listings）の商品に対して「Shipping」ボタンを追加する拡張機能です。  
個別商品ページを1つずつ開くことなく、検索一覧画面上でワンクリックで配送方法（配送スピード・配送業者）を確認できます。

#### 使い方

<div class="step-card" markdown="1">
<div class="step-header">
  <span class="step-number">STEP 01</span>
  <span class="step-title">「Shipping」ボタンをクリック</span>
</div>

eBayの検索結果一覧で、商品タイトルの下に表示される **「Shipping」** ボタンをクリックします。  
配送方法が自動取得され、速度に応じたカラーバッジと詳細な配送方法名が表示されます。

![Shippingボタンをクリック](images/env_extensions/shipping_extractor_click.png)
</div>

#### 表示される配送アイコン（バッジ）の種類

配送スピードに応じて、以下の4色のバッジで分かりやすく表示されます：

| 表示アイコン | 配送区分 | 配送スピード・主な配送方法 |
| :---: | :---: | :--- |
| <span class="ebse-doc-badge ebse-doc-badge--express" style="display:inline-block; font-size:11px; font-weight:700; padding:2px 10px; border-radius:999px; color:#fff !important; background-color:#d63384;">Express</span> | 最速便 | FedEx Priority / DHL Express など |
| <span class="ebse-doc-badge ebse-doc-badge--expedited" style="display:inline-block; font-size:11px; font-weight:700; padding:2px 10px; border-radius:999px; color:#fff !important; background-color:#e85d04;">Expedited</span> | 速達便 | EMS / FedEx International / Expedited Shipping など |
| <span class="ebse-doc-badge ebse-doc-badge--standard" style="display:inline-block; font-size:11px; font-weight:700; padding:2px 10px; border-radius:999px; color:#fff !important; background-color:#0654ba;">Standard</span> | 通常便 | ePacket / Standard Shipping など |
| <span class="ebse-doc-badge ebse-doc-badge--economy" style="display:inline-block; font-size:11px; font-weight:700; padding:2px 10px; border-radius:999px; color:#fff !important; background-color:#6c757d;">Economy</span> | 小型・格安便 | eBay SpeedPAK Economy / 小型包装物 など |

※バッジの横には、実際の配送設定名（例：`eBay SpeedPAK Economy` など）が小さく表示されます。

---

### ④ Insert Blurb

👉 [Chromeウェブストアで開く](https://chromewebstore.google.com/detail/insert-blurb/bkoknijjdnlaenldjopbkngkoegfmejf)

保存した定型文をワンクリックで挿入できるツールです。  
AIへ定型文の指示を送る場合などに使用します。

※AI活用についての詳細は[コチラ](skill_ai.md)

#### 使い方

<div class="example-box" markdown="1">
- 文章入力欄で右クリック  
- Insert Blurbにカーソルを合わせる  
- 保存した定型文一覧から入力したい文章を選択  

![Insert Blurbの使用画面](images/env_extensions/ext1.png)
</div>

---

## おすすめ拡張機能

<div class="point-box point-box--green" markdown="1">
こちらは必須ではありませんが、導入することで作業効率が向上します。
</div>

### ① Google翻訳

👉 [Chromeウェブストアで開く](https://chromewebstore.google.com/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb)

海外サイトの商品説明や英語ページを翻訳する際に使用します。  
英語ページを閲覧する機会が多いため、導入を推奨します。

---

### ② Double Click Image Downloader

👉 [Chromeウェブストアで開く](https://chromewebstore.google.com/detail/double-click-image-downlo/piheafhalbmhiaffagiaehdlnhgphcpd)

保存したい画像の上でダブルクリックするだけで、PCのダウンロードフォルダに画像が保存されます。  
フリマサイトや一部のECサイトでは画像のダウンロードができませんが、この拡張機能を使用することでダウンロードが可能です。  
AI向けプロンプト【[送料・重量の判定](skill_ai.md#2)】の使用時に活用してください。

---

### ③ 素晴らしい画面の並べ替えとスクリーンショット

👉 [Chromeウェブストアで開く](https://chromewebstore.google.com/detail/awesome-screen-recorder-s/nlipoenfbbikpbjkfpfillcgkoblgpmj)

ブラウザ上の指定範囲をスクリーンショットできるツールです。  
不明点が発生した場合、作業画面を共有していただくことで問題をスムーズに解決できます。

#### 使い方

<div class="step-card" markdown="1">
<div class="step-header">
  <span class="step-number">STEP 01</span>
  <span class="step-title">拡張機能アイコンをクリック</span>
</div>

![拡張機能アイコン](images/env_extensions/ext2.png)
</div>

<div class="step-card" markdown="1">
<div class="step-header">
  <span class="step-number">STEP 02</span>
  <span class="step-title">撮影範囲を選択してドラッグ保存</span>
</div>

- 撮影範囲を「表示部分」「フルページ」「選択範囲」から選択  
- 撮影したい範囲をドラッグし保存  

![撮影範囲の選択](images/env_extensions/ext3.png)
</div>

<div class="step-card" markdown="1">
<div class="step-header">
  <span class="step-number">STEP 03</span>
  <span class="step-title">編集とダウンロード</span>
</div>

- 左矢印マークで画像編集が可能  
- 「Done」→「Download」で保存  

![編集画面](images/env_extensions/ext4.png)
</div>