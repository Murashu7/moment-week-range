# moment-week-range

## moment-week-rangeとは

週単位の日付範囲を取得できる JavaScript 用のライブラリです。

[moment.js](https://momentjs.com/)  を利用しています。

## 利用イメージ

画像予定

## 使い方

##### 読み込み

moment.js と一緒に読み込んでください。

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
// 開始日の週範囲
[ moment("2019-09-01T00:00:00.000"),
  moment("2019-09-05T00:00:00.000") ]
  
// 今日の週範囲
[ moment("2019-09-01T00:00:00.000"),
  moment("2019-09-05T00:00:00.000") ]

// 終了日の週範囲
[ moment("2019-09-01T00:00:00.000"),
  moment("2019-09-05T00:00:00.000") ]
```

##### 指定した範囲の日付の配列取得

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

##### 開始日から今日までの経過日数を取得

```js
wr.elapsedDays();
```

##### 今日から終了日までの残り日数を取得

```js
wr.remainingDays();
```

## 更新予定

- 引数の日付（ moment ）を `moment().startOf('date')` で前処理する。
- 週範囲が 1 日の場合は、配列の要素は重複なしにする。

