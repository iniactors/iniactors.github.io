# INIActors公式サイト
[English](README.en.md)  

## 環境構築について
1. 本リポジトリをクローンする  
Github DesktopやCLIで[クローン](https://docs.github.com/ja/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository)してください。  

2. 開発用サーバーの起動  
以下のコマンドを実行すると開発用サーバーが起動し、`http://localhost:8000`にアクセスするとページを見ることができます。  
    ```shell
    python3 serve.py
    ```  
    もしくは、 [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)を用いてください。（推奨）

## 公開（デプロイ）について
`main`ブランチにプッシュするとGitHub Actionsという仕組みを使って自動的にファイル圧縮と`gh-pages`ブランチへのプッシュが行われ、GitHub Pagesで公開されます。

## 開発メモ
- サイト作成に使用する技術に関しては、INIADの授業内で触れるような基本的なWeb技術を用いる。
- このサイトは[Bootstrap](https://getbootstrap.jp)をCDN経由で使用しています。
- 画像はwebp版を[このサイト](https://lab.syncer.jp/Tool/Webp-Converter/)などで作成して、サイズを減らすようにする。

## ライセンスについて
Apache License 2.0（画像・動画を除く）
