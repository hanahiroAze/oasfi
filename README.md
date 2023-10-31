## 使い方

### Download

- [releases](https://github.com/oasysgames/explorer-csv-cli/releases) から latest の oasys-csv-cli-* を Download
- MaxOS, Windows, Linux のうちどれか
- DLする箇所: 任意（ここでは Downloads とする）
- csv は同一ディレクトリにあるとする

### Terminal から実行

- cmd + space で 「terminal」→ enter で実行
- Terminal で `cd Download` → enter
- 環境に合わせて以下を実行

#### MacOS:

```bash
./oasys-csv-cli-macos correct-csv -i=input.csv -o=output.csv -c=chain_name

# example
# ./oasys-csv-cli-macos -i=foo.csv -o=bar.csv -c=hub_mainnet
```

#### Windows:

```bash
oasys-csv-cli-win.exe correct-csv -i=input.csv -o=output.csv -c=chain_name
```

#### Linux:

```bash
./oasys-csv-cli-linux correct-csv -i=input.csv -o=output.csv -c=chain_name
```

ここで、input.csvは読み込むCSVファイルのパス、output.csvは出力されるCSVファイルのパスを指定します。


詳細な例
./oasys-csv-cli-linux correct-csv -i=./target_csv/token-transfers.csv -o=./output_csv/token-transfers.output.csv -c=hub_mainnet

---


### for developer
#### 実行ファイル作成

```bash
nvm use 18
git clone https://github.com/oasysgames/explorer-csv-cli.git
cd explorer-csv-cli
npm i
npm i -g pkg
npm run compile
```

# sheet API
https://console.cloud.google.com/apis/library/browse?hl=ja&project=nftwars-357707&q=sheet

# service account
https://firebase.google.com/docs/app-distribution/authenticate-service-account?hl=ja&platform=ios
https://docs.biztex.co.jp/cobit-docs/google_spreadsheet_settings/for_serviceaccount.html

# export
```
export SPREADSHEET_ID=xx
export GOOGLE_APPLICATION_CREDENTIALS=xx
export COINGECKO_API_KEY=xx
```
# NOTE optional:  
* --export_csv_online SPREADSHEET_ID と GOOGLE_APPLICATION_CREDENTIALS が指定されていれば、オンラインでエクスポートされます。--export_csv_online フラグを設定しない場合、デフォルトはローカルにエクスポートされます。 --output フラグを使用してエクスポート先を指定できます。

* --from_data、--to_data のデフォルトはローカル タイムゾーンです。 タイムゾーンを変更する場合は、--time_zone=timezone を使用できます。

* --price はエクスポートする通貨を指定します。それ以外の場合、--price のデフォルト フラグは [jpy,usd,krw,eur,sgd] になります。

* --price_time は価格を取得する時間(UTC)を渡します。 --price_time フラグが設定されていない場合、デフォルトは 00:00:00 UTC になります。

* COINGECKO_API_KEYが指定されていない場合、価格列はエクスポートされません



#### 使い方
上記「使い方」と同上



 ./oasys-csv-cli-linux  export-commission-reward 0x272d6bd040c2b8454f4f6f43115758fbe318ee2c -c=hub_mainnet 
 ./oasys-csv-cli-linux  export-commission-reward 0x272d6bd040c2b8454f4f6f43115758fbe318ee2c -c=hub_mainnet --export_csv_online=true -o=output.csv
 ./oasys-csv-cli-linux  export-commission-reward 0x272d6bd040c2b8454f4f6f43115758fbe318ee2c -c=hub_mainnet --from_epoch=100
 ./oasys-csv-cli-linux  export-commission-reward 0x272d6bd040c2b8454f4f6f43115758fbe318ee2c -c=hub_mainnet --to_epoch=100
 ./oasys-csv-cli-linux  export-commission-reward 0x272d6bd040c2b8454f4f6f43115758fbe318ee2c -c=hub_mainnet --from_epoch=100 --to_epoch=200
 ./oasys-csv-cli-linux  export-commission-reward 0x272d6bd040c2b8454f4f6f43115758fbe318ee2c -c=hub_mainnet --from_data=2023-10-16T10:00:00
 ./oasys-csv-cli-linux  export-commission-reward 0x272d6bd040c2b8454f4f6f43115758fbe318ee2c -c=hub_mainnet --to_data=2023-10-16T10:00:00
 ./oasys-csv-cli-linux  export-commission-reward 0x272d6bd040c2b8454f4f6f43115758fbe318ee2c -c=hub_mainnet --from_data=2023-08-16T10:00:00 --to_data=2023-10-16T10:00:00
 ./oasys-csv-cli-linux  export-commission-reward 0x272d6bd040c2b8454f4f6f43115758fbe318ee2c -c=hub_mainnet  --from_epoch=246 --to_epoch=247 --price_time=10:00:00 --price=jpy

 --from_data=2023-01-06T19:22:28
 --to_data=2023-01-08T19:22:28

 --from_data=2023-01-07T02:22:28
--to_data=2023-01-08T02:22:28

