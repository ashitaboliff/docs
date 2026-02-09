---
sidebar_position: 1
---

# 1. HTMLとは

**HTML**（HyperText Markup Language）は、ウェブページを作成するための基本的な言語です。なんそれ？と思った方は今その場でパソコンの「F12」キーを押下してください。すると、ウェブページの裏側にあるコードが見えます。これがHTMLです(F12キーで開発者ツール出せない場合は...ごめん)。

HTMLは、SafariやChromeなどのいわゆるブラウザに対して、文字、画像、リンク、フォームなどをどのように表示するかを示します。

## 1.1 HTMLの基本構造
HTMLは、以下のような基本的な構造を持っています。

```html
<!DOCTYPE html>
<html>
  <head>
      <title>ページのタイトル</title>
  </head>
  <body>
      <h1>見出し1</h1>
      <p>これは段落です。</p>
  </body>
</html>
```

深くは知る必要がありません(今はね)。この`<>`で囲まれたものをタグと呼びます。終了タグは`</タグ名>`のようにスラッシュが付きます。  
上記の例では、`<html>`タグがHTMLドキュメント全体を囲み、`<head>`タグ内はそのサイトのメタ情報が含まれ、`<body>`タグ内は実際に表示されるコンテンツが含まれます。

## 1.2 よく使うHTMLタグ
以下は、よく使われるHTMLタグの一部です。

:::info 
ライブプレビューになっているので、編集することができますから試してみてください。(例: `<p>うんこ💩</p>`と入れてみるなど)
:::

``` html live
<div>
  <h1>見出し1</h1>
  <p>これは段落です。</p>

  <ul>
    <li>リストアイテム1</li>
    <li>リストアイテム2</li>
    <li>リストアイテム3</li>
  </ul>

  <h2>見出し2</h2>

  <table>
    <tr>
      <th>見出しA</th>
      <th>見出しB</th>
    </tr>
    <tr>
      <td>データ1</td>
      <td>データ2</td>
    </tr>
  </table>

  <a href="https://www.ashitabo.net">あしたぼホームページへ移動</a>

  <img src="https://raw.githubusercontent.com/watabegg/watabegg.github.io/refs/heads/master/public/images/product/ashitabo-v1.png" alt="あしたぼホームページのスクリーンショット" width="800" />
</div>
```

適当に書くだけで電波が悪いときに一瞬映るWebサイトみたいな見た目のものができます。

## 1.3 HTMLの属性
HTMLタグには、属性という追加情報を指定することができます。例えば、`<a>`タグの`href`属性はリンク先のURLを指定します。

``` html
<a href="https://www.ashitabo.net">あしたぼホームページへ移動</a>
```

この例では、`href`属性に`https://www.ashitabo.net`が指定されており、クリックするとそのページに移動します。`<img>`タグの`src=`とかも属性で、画像のURLを指定することでその画像を表示できます。

## 1.4 HTMLの役割
HTMLは、基本的にはただの文字列でしかありませんが、ChromeやSafariなどのブラウザがこのHTMLを解釈して、視覚的に見やすいウェブページとして表示します。HTMLはウェブページの構造を定義し、CSSやJavaScriptと組み合わせて、スタイルや動的な機能を追加することができます。

## 1.5 HTMLの学習リソース
HTMLをさらに学びたい場合、以下のリソースが役立ちます。
- [MDN Web Docs - HTML](https://developer.mozilla.org/ja/docs/Web/HTML)

まあ普通に初学者がMDNを読むのは大変なので、あしたぼドキュメントの他の部分も読んでください。僕も最近やっとわかるようになってきた、MDN。  
なんか難しいし正確に書こうとしすぎてて長いんだよな、ショート動画世代のドパガキには辛い。

## まとめ
HTMLはウェブページの基礎を形成する重要な言語です。次はこのHTMLをめぐるサーバーやクライアント、ブラウザの関係性についてやります。

## おまけ

以下のコードをコピペしてメモ帳に貼り付けて、適当な場所に`sample.html`として保存し、Chromeとかで開いてみてください。簡単なウェブページが表示されます。

```html
<!DOCTYPE html>
<html>
<head>
    <title>サンプルページ</title>
</head>
<body>
    <h1>ようこそ、あしたぼホームページへ！</h1>
    <p>これはサンプルのHTMLページです。</p>
    <a href="https://www.ashitabo.net">あしたぼホームページへ移動</a>
</body>
</html>
```

良ければこれを編集して遊んでみてください。なんかいいの出来たら教えてや
