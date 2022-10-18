# INIActors 公式サイト

INIAD 公認演劇サークル「INIActors」の公式サイトです。

## 環境構築について

1. 本リポジトリをクローンする  
   Github Desktop や CLI で[クローン](https://docs.github.com/ja/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository)してください。

2. 開発環境の準備
   開発には [Node.js](https://nodejs.org/ja/)（LTS 版）と [Yarn](https://classic.yarnpkg.com/lang/en/) を用います。  
   以下はセットアップ例です。

   - Windows の場合  
     Node.js の LTS 版を[このページ](https://nodejs.org/ja/)経由でインストールしてください。  
     その後 Powershell を起動し、以下のコマンドで Yarn をインストールしてください。
     ```shell
     npm install --global yarn
     ```
   - macOS, WSL の場合  
     Homebrew や、APT を使って Node.js の LTS 版をインストールしてください。  
     その後ターミナルや Ubuntu ターミナルを起動し、以下のコマンドで Yarn をインストールしてください。
     ```shell
     npm install --global yarn
     ```

3. 開発用サーバーの起動  
   以下のコマンドを実行すると開発用サーバーが起動し、表示された URL にアクセスするとページを見ることができます。
   ```shell
   yarn dev
   ```

## 公開（デプロイ）について

`main`ブランチにプッシュすると GitHub Actions という仕組みを使って自動的にファイル圧縮（ `yarn build` の実行）と`gh-pages`ブランチへのプッシュが行われ、GitHub Pages で公開されます。

## 開発メモ

- サイト作成に使用する技術に関しては、引き継ぎやすいように INIAD の授業内で触れるような基本的な Web 技術を用いています。
- このサイトは [Vite](https://ja.vitejs.dev) を使用しています。Vite は開発時のローカルサーバーやデプロイ時のビルドに使われます。
- 画像は WebP 版を[このサイト](https://lab.syncer.jp/Tool/Webp-Converter/)などで作成して、サイズを減らすようにしてください。

## ライセンスについて

Apache License 2.0（画像・動画・3Dモデルなどを除く）
