'use strict';
/**
 * @constructor
 * @param {number} low Minimum value, inclusive.
 * @param {number} high Maximum value, inclusive.
 * @param {Array<gamesense.SingleLineFrame | gamesense.MultiLineFrame | gamesense.ImageFrame>} datas
 */
gamesense.RangeScreenData = function RangeScreenData(low, high, datas) {
    /**
     * @type {number}
     */
    this.low = low;

    /**
     * @type {number}
     */
    this.high = high;
    /**
     * @type {Array<gamesense.SingleLineFrame | gamesense.MultiLineFrame | gamesense.ImageFrame>}
     */
    this.datas = datas
}

