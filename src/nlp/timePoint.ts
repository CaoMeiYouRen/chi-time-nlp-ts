/**
 *Intro:
 *Author:shine
 *Date:2017/11/1
 */
export default class TimePoint {
    tunit: number[]
    constructor(date?: Date) {
        if (date) {
            const d = new Date(date)
            this.tunit = [
                d.getFullYear(),
                d.getMonth() + 1,
                d.getDate(),
                d.getHours(),
                d.getMinutes(),
                d.getSeconds(),
            ]
        } else {
            this.tunit = [-1, -1, -1, -1, -1, -1]
        }
    }
}
