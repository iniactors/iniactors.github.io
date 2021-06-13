# INIActors公式サイト
[English](README.en.md)  

## 環境構築について
WSL, macOSを想定しています。
1. 本リポジトリをクローンする  
Github DesktopやCLIで[クローン](https://docs.github.com/ja/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository)してください。  

2. Node.jsをインストールする  
[公式サイト](https://nodejs.org/ja/)からNode.jsをダウンロードし、インストールしてください。ダウンロードするバージョンは`.node-version`ファイルに記載されたもの。  
慣れている人は[nodenv](https://github.com/nodenv/nodenv)や[nvm](https://github.com/nvm-sh/nvm)、[n](https://github.com/tj/n)などのバージョン管理ツールを用いても良いです。  

3. ライブラリのセットアップ  
このディレクトリ上で以下のコマンドを実行してください。  
    ```shell
    npm install
    ```

## 開発方法について
以下のコマンドを実行すると開発用サーバーが起動します。  
```shell
npm run dev
```
`.vue`や`.js`、`.scss`ファイルを編集すると自動的に反映されます。（ホットリローディング）  
使用するNode.jsのバージョンはその時点でのLTSバージョンを基本とします。
  

## 公開（デプロイ）について
mainブランチにプッシュするとGitHub Actionsという仕組みを使って自動的にビルドとgh-pagesブランチへのプッシュが行われ、GitHub Pagesで公開されます。