/**
 *Intro:
 *Author:shine
 *Date:2017/11/1
 */
import TimeUnit from './timeUnit'
import preHandle from './strPreHandling'

export default class TimeNormalizer {
    timeBase: Date
    expression: string
    isPreferFuture: boolean
    constructor() {
        this.expression = ''
        this.isPreferFuture = true
    }

    static _preHandling(expression: string) {
        expression = preHandle.delKeyword(expression, '\\s+') // 清理空白符
        expression = preHandle.delKeyword(expression, '[的]+') // 清理语气助词
        expression = preHandle.DBC2CDB(expression)// 全角转半角
        expression = preHandle.numberTranslator(expression)// 大写数字转化
        return expression
    }

    turnOffPreferFuture() {
        this.isPreferFuture = false
    }

    getTimeBase() {
        return this.timeBase
    }

    setTimeBase(s: Date) {
        this.timeBase = s
    }

    parse(expression: string, timeBase?: string | number | Date): string | false {
        this.expression = expression
        const exp = TimeNormalizer._preHandling(expression)
        if (timeBase && (typeof timeBase === 'string' || typeof timeBase === 'number' || timeBase instanceof Date)) {
            this.timeBase = new Date(timeBase)
        } else {
            this.timeBase = new Date()
        }
        const tu = new TimeUnit(exp, this.isPreferFuture, this.timeBase)
        return tu.timeNormalization()
    }
}
