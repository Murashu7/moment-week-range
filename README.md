# moment-week-range

## moment-week-rangeとは

指定した日付の範囲で、週単位の範囲を取得できる JavaScript 用のライブラリです。

[moment.js](https://momentjs.com/)  を利用しています。

## 利用イメージ

![イメージ図](https://raw.githubusercontent.com/Murashu7/moment-week-range/media/moment-week-rangeのイメージ図.png)

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
const startDate = moment('2019-10-03');
const today = moment('2019-10-17');
const endDate = moment('2019-10-29');
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
[ moment.parseZone("2019-10-03T00:00:00.000+09:00"),
  moment.parseZone("2019-10-05T00:00:00.000+09:00") ]
  
// 今日の週範囲
[ moment.parseZone("2019-10-13T00:00:00.000+09:00"),
  moment.parseZone("2019-10-19T00:00:00.000+09:00") ]

// 終了日の週範囲
[ moment.parseZone("2019-10-27T00:00:00.000+09:00"),
  moment.parseZone("2019-10-29T00:00:00.000+09:00") ]
```

##### 指定した範囲の日付の配列取得

```js
WeekRange.arrayDatesRange(wr.start, wr.current);
```

結果

```
[ moment.parseZone("2019-10-03T00:00:00.000+09:00"),
  moment.parseZone("2019-10-04T00:00:00.000+09:00"),
  moment.parseZone("2019-10-05T00:00:00.000+09:00"),
  moment.parseZone("2019-10-06T00:00:00.000+09:00"),
  moment.parseZone("2019-10-07T00:00:00.000+09:00"),
  moment.parseZone("2019-10-08T00:00:00.000+09:00"),
  moment.parseZone("2019-10-09T00:00:00.000+09:00"),
  moment.parseZone("2019-10-10T00:00:00.000+09:00"),
  moment.parseZone("2019-10-11T00:00:00.000+09:00"),
  moment.parseZone("2019-10-12T00:00:00.000+09:00"),
  moment.parseZone("2019-10-13T00:00:00.000+09:00"),
  moment.parseZone("2019-10-14T00:00:00.000+09:00"),
  moment.parseZone("2019-10-15T00:00:00.000+09:00"),
  moment.parseZone("2019-10-16T00:00:00.000+09:00"),
  moment.parseZone("2019-10-17T00:00:00.000+09:00") ]
```

##### 開始日から今日までの経過日数を取得

```js
wr.elapsedDays(); // 15
```

##### 今日から終了日までの残り日数を取得

```js
wr.remainingDays(); // 13
```

## 更新予定

- 週範囲が 1 日の場合は、配列の要素は重複なしにする。

