# 社内勉強会用の開発環境

***
## 前提
***

既にインストール済みであれば読み飛ばしてください。

### Node.jsのインストール

開発環境構築にはnode.jsが必要です。

以下公式サイトから安定版をダウンロードしてください。

[node.js公式](https://nodejs.org/en/ "node.js")

### gitのインストール

#### Windows
[git公式](https://git-for-windows.github.io/ "git")

#### Mac
xcodeがあるなら入ってます。

***
## 使い方
***

### 環境のダウンロード

ターミナルで以下のコマンドを実行してください。
(Windowsの人はコマンドプロンプトで実行してください。)

例)デスクトップで作業する場合

```
cd /Users/user/Desktop
git clone git@github.com:inhouseuse/frontend_dev.git
cd frontend_dev
```

以上でGithubからダウンロードが完了です。(ダウンロードにしばらく時間がかかります。)

### Package.jsonに従って、puluginをインストールします。

```
npm install
```

以上で完了です。