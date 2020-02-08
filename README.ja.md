# 事前課題：Recursion - 再帰

**Recursion - 再帰関数**は、関数がその関数自体を呼び出すものです。この課題では、3つの問題に答えるのに再帰を使ってみましょう。

## objectives - 達成目標

この課題では、JavaScriptで再帰を使うことで以下を実現します。

- 🖐 _じゃんけんぽん_ を出せるようにする
- 💻 DOMツリーの要素をすべて見て、クラス名を取得する
- 🧵 JavaScriptの値をJSONに変換する

## Getting started - 始め方

- 🍴 コードクリサリスのGitのフロー説明を参考にしながら、このリポジトリをフォークしてクローンする
- 📄 ブラウザで `index.html` を開き、テストに失敗することを確認する
- 💬 コードを変更するときは頻繁にコミットする
- ✅ すべてのタスクを仕上げたら、コードクリサリスのGitのフロー説明を参考にしながら、`pull request` してください。

## Basic requirements - 基礎レベル

以下のファイルにコードを書いて、全てのテストがパスするようにしてください。

- `src/rockPaperScissors.js`
- `src/getElementByClassName.js`
- `src/stringifyJSON.js`

- [ ] `rockPaperScissors`:  再帰関数を使って _ジャンケンポン_ のパターンを洗い出してください。🌑 📄 ✂️
  - [ ] 再帰についてのブログ記事を読んでみましょう：
    - [Visualizing Recursion](https://medium.com/@sidiousvic/visualizing-recursion-b8107bd56b01)
    - [Rock Paper Scissors Part 1](http://blog.fanofyan.com/recursion/)
    - [Rock Paper Scissors Part 2](http://blog.fanofyan.com/recursion-with-javascript-pt-2/)
- [ ] `getElementByClassName`: 再帰の実践的な例です。**DOM** は 🌳 ツリー構造で再帰はツリー構造の要素を全て見るには効率的な方法です。
  - [ ] わからないときは参考資料をチェックしてみてください。
- [ ] `stringifyJSON`: `JSON.stringify` メソッドを自分で作ってみましょう。このメソッドはJavaScriptのあらゆる値を **JSON** に変換するメソッドです。これも再帰の実践的な使い方の例になります。

## Resources - 参考資料

- [Fun Fun Function's Recursion video](https://www.youtube.com/watch?v=k7-N8R0-KY4) を観てみましょう。
- `getElementsByClassName` をクリアする上で役に立つ知識
  - [JavaScript Info: DOM ノード](https://javascript.info/dom-nodes)
  - [JavaScript Info: DOM を渡り歩く](https://javascript.info/dom-navigation)
