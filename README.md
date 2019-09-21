# moment-week-range

## moment-week-rangeとは

指定した日付の週単位の範囲を取得できる JavaScript 用のライブラリです。

[moment.js](https://github.com/moment/moment)  を利用しています。

## 利用イメージ

画像予定

## 使い方

##### 読み込み

moment.js を一緒に読み込んでください。

```js
const moment = require('moment');
const WeekRange = require('./moment-week-range');
```

##### インスタンスを作成

moment で開始日、今日、終了日を引数に与えてください。

```js
const startDate = moment('2019-09-01');
const today = moment('2019-09-05');
const endDate = moment('2019-09-05');
const wr = new WeekRange(startDate, today, endDate);
```

##### 週範囲の取得

開始日、今日、終了日のそれぞれの週の範囲が配列で取得できます。

```js
wr.startRange; // 開始日の週範囲
wr.currentRange; // 今日の週範囲
wr.endRange; // 終了日の週範囲
```

結果

```
[ moment("2019-09-01T00:00:00.000"),
  moment("2019-09-05T00:00:00.000") ]
```

##### 指定した日付の範囲の配列取得

```js
WeekRange.arrayDatesRange(moment('2019-09-01'), moment('2019-09-07'));
```

結果

```
[ moment("2019-09-01T00:00:00.000"),
  moment("2019-09-02T00:00:00.000"),
  moment("2019-09-03T00:00:00.000"),
  moment("2019-09-04T00:00:00.000"),
  moment("2019-09-05T00:00:00.000"),
  moment("2019-09-06T00:00:00.000"),
  moment("2019-09-07T00:00:00.000") ]
```

