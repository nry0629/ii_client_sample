# ii_client_sample
![ii_client_sample](/ii_client_sample_animation.gif)
## 概要
javascriptでローカル環境のインターネットアイデンティティを使用して認証するサンプルプロジェクトです。typescriptやreactを使用しないシンプルなサンプルとなっています。
より作りこまれたサンプルをお探しの方は [こちら](https://smartcontracts.org/docs/samples/index.html)をどうぞ。

## ローカルでインターネットアイデンティティと連携する
まず本プロジェクトを展開します。

```bash
dfx start --background
dfx deploy 
```

次に[インターネットアイデンティティ](https://github.com/dfinity/internet-identity)をローカル環境で実行します。
```
http://localhost:8080
```
でインターネットアイデンティティのフロントを起動し終えたなら本プロジェクトのフロントを起動します。
```
http://{asset_canister_id}.localhost:8000
```
もしくは次のコマンドで
```bash
npm start
```
フロントを開きます。

```
http://localhost:8081
```

## 参考
ii_client_sampleは以下のドキュメントをもとに構築されています。

- [Quick Start](https://smartcontracts.org/docs/quickstart/quickstart-intro.html)
- [SDK Developer Tools](https://smartcontracts.org/docs/developers-guide/sdk-guide.html)
- [Rust Canister Devlopment Guide](https://smartcontracts.org/docs/rust-guide/rust-intro.html)
- [ic-cdk](https://docs.rs/ic-cdk)
- [ic-cdk-macros](https://docs.rs/ic-cdk-macros)
- [Candid Introduction](https://smartcontracts.org/docs/candid-guide/candid-intro.html)
- [JavaScript API Reference](https://erxue-5aaaa-aaaab-qaagq-cai.raw.ic0.app)

