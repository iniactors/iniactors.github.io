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

## 公開（デプロイ）について
`main`ブランチにプッシュするとGitHub Actionsという仕組みを使って自動的にビルドと`gh-pages`ブランチへのプッシュが行われ、GitHub Pagesで公開されます。

## ライセンスについて
Apache License 2.0（画像・動画を除く）
