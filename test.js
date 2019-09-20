'use strict'

const assert = require('assert');
const moment = require('moment-timezone');
const WeekRange = require('./moment-week-range.js');

describe('WeekRange', () => {
  describe('range', () => {
    it('開始日、今日、終了日のそれぞれの週の範囲を返す', () =>  {
      const startDate = moment('2019-09-01');
      const today = moment('2019-09-05');
      const endDate = moment('2019-10-01');
      const wr = new WeekRange(startDate, today, endDate);
      assert.equal(wr.startRange[0].format('YYYY-MM-DD'), moment('2019-09-01').format('YYYY-MM-DD'));
      assert.equal(wr.startRange[1].format('YYYY-MM-DD'), moment('2019-09-07').format('YYYY-MM-DD'));
      assert.equal(wr.currentRange[0].format('YYYY-MM-DD'), moment('2019-09-01').format('YYYY-MM-DD'));
      assert.equal(wr.currentRange[1].format('YYYY-MM-DD'), moment('2019-09-07').format('YYYY-MM-DD'));
      assert.equal(wr.endRange[0].format('YYYY-MM-DD'), moment('2019-09-29').format('YYYY-MM-DD'));
      assert.equal(wr.endRange[1].format('YYYY-MM-DD'), moment('2019-10-01').format('YYYY-MM-DD'));
    });

    it('引数が moment のインスタンスでなければエラーを返す', () =>  {
      const startDate = moment('2019-09-01');
      const today = '2019-09-05';
      const endDate = moment('2019-10-01');
      assert.throws(() => {
        new WeekRange(startDate, today, endDate);
      },
      (err) => {
        assert(err instanceof Error);
        assert(/^Error: 2019-09-05 is not instance of moment.$/);
        return true;
      });
    });

    // TODO:
    it('開始日、今日、終了日の日付の大きさが不正の場合はエラーを返す', () =>  {
      const startDate = moment('2019-09-01');
      const today = '2019-09-05';
      const endDate = moment('2019-10-01');
      assert.throws(() => {
        new WeekRange(startDate, today, endDate);
      },
      (err) => {
        assert(err instanceof Error);
        assert(/^Error: 2019-09-05 is not instance of moment.$/);
        return true;
      });
    });
  });

  describe('arrayDatesRange', () => {
    it('指定した範囲の日付の配列を返す', () => {
      const startDate = moment('2019-09-05');
      const endDate = moment('2019-09-10');
      const results = WeekRange.arrayDatesRange(startDate, endDate);
      assert.equal(results.length, 6);
      assert.equal(results[0].format('YYYY-MM-DD'), moment('2019-09-05').format('YYYY-MM-DD'));
      assert.equal(results[1].format('YYYY-MM-DD'), moment('2019-09-06').format('YYYY-MM-DD'));
      assert.equal(results[2].format('YYYY-MM-DD'), moment('2019-09-07').format('YYYY-MM-DD'));
      assert.equal(results[3].format('YYYY-MM-DD'), moment('2019-09-08').format('YYYY-MM-DD'));
      assert.equal(results[4].format('YYYY-MM-DD'), moment('2019-09-09').format('YYYY-MM-DD'));
      assert.equal(results[5].format('YYYY-MM-DD'), moment('2019-09-10').format('YYYY-MM-DD'));
    });
    
    // TODO:
    it('指定した範囲の日付が不正の場合は例外を返す', () => {

    });
  });

  describe('elapsedDays', () => {
    it('開始日から今日までの経過日数を返す', () =>  {
      const startDate = moment('2019-09-01');
      const today = moment('2019-10-15');
      const endDate = moment('2019-10-17');
      const wr = new WeekRange(startDate, today, endDate);
      assert.equal(wr.elapsedDays(), 45);
    });
  });

  describe('remainingDays', () => {
    it('今日から終了日までの残り日数を返す(今日を含む)', () =>  {
      const startDate = moment('2019-09-01');
      const today = moment('2019-10-15');
      const endDate = moment('2019-10-17');
      const wr = new WeekRange(startDate, today, endDate);
      assert.equal(wr.remainingDays(), 3);
    });
  });
});
