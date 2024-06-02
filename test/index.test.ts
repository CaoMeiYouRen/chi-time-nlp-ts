import NLP from '../src/index'
import dayjs from 'dayjs'

describe('NLP Time Parser', () => {
    const n = new NLP()

    test('Parses "十点十分"', () => {
        const s = dayjs(n.parse('十点十分') || '').format('hh:mm:ss') // hh 12 小时制
        expect(s).toEqual('10:10:00')
    })

    test('Parses "八点十七分"', () => {
        const s = dayjs(n.parse('八点十七分') || '').format('hh:mm:ss') // hh 12 小时制
        expect(s).toEqual('08:17:00')
    })

    test('Parses "九点二十分"', () => {
        const s = dayjs(n.parse('九点二十分') || '').format('hh:mm:ss') // hh 12 小时制
        expect(s).toEqual('09:20:00')
    })

    test('Parses "十一点五十九分五十九秒"', () => {
        const s = dayjs(n.parse('十一点五十九分五十九秒') || '').format('hh:mm:ss') // hh 12 小时制
        expect(s).toEqual('11:59:59')
    })

    test.skip('Parses "早上八点五十九分"', () => {
        const s = dayjs(n.parse('早上八点五十九分') || '').format('HH:mm:ss') // HH 24 小时制
        expect(s).toEqual('08:59:00')
    })

    test.skip('Parses "晚上八点五十九分"', () => {
        const s = dayjs(n.parse('晚上八点五十九分') || '').format('HH:mm:ss') // HH 24 小时制
        expect(s).toEqual('20:59:00')
    })

    test.skip('Parses "2019-5-3 19:00"', () => {
        expect(n.parse('2019-5-3 19:00')).toEqual('2019-05-03 19:00:00')
    })

    test.skip('Parses "2019-05-3 19:00"', () => {
        expect(n.parse('2019-05-3 19:00')).toEqual('2019-05-03 19:00:00')
    })

    test('Parses "2019-5-03 19:00"', () => {
        expect(n.parse('2019-5-03 19:00')).toEqual('2019-05-03 19:00:00')
    })

    test.skip('Parses "2019-05-03 19:00"', () => {
        expect(n.parse('2019-05-03 19:00')).toEqual('2019-05-03 19:00:00')
    })

    test('Parses "没有时间点"', () => {
        expect(n.parse('没有时间点')).toBeFalsy()
    })

    test('Parses "Hi，all。下周一下午三点开会"', () => {
        const date = dayjs().day(1).hour(15).minute(0).second(0).format('YYYY-MM-DD HH:mm:ss')
        const s = dayjs(n.parse('Hi，all。下周一下午三点开会') || '').format('YYYY-MM-DD HH:mm:ss') // HH 24 小时制
        expect(s).toEqual(date)
    })

    test('Parses "周一开会"', () => {
        const date = dayjs().day(1).format('YYYY-MM-DD')
        const s = dayjs(n.parse('周一开会') || '').format('YYYY-MM-DD')
        expect(s).toEqual(date)
    })

    test('Parses "周五开会"', () => {
        const date = dayjs().day(5).format('YYYY-MM-DD')
        const s = dayjs(n.parse('周五开会') || '').format('YYYY-MM-DD')
        expect(s).toEqual(date)
    })

    test('Parses "下下周一开会"', () => {
        const date = dayjs().day(1 + 7).format('YYYY-MM-DD')
        const s = dayjs(n.parse('下下周一开会') || '').format('YYYY-MM-DD')
        expect(s).toEqual(date)
    })

    test.skip('Parses "6:30 起床"', () => {
        // expect(n.parse('6:30 起床')).toEqual({ hour: 6, minute: 30 })
        const date = dayjs().hour(6).minute(30).second(0).format('YYYY-MM-DD HH:mm:ss')
        const s = dayjs(n.parse('6:30 起床') || '').format('YYYY-MM-DD HH:mm:ss') // HH 24 小时制
        expect(s).toEqual(date)
    })

    test.skip('Parses "明天6:30 起床"', () => {
        const date = dayjs().add(1, 'day').hour(6).minute(30).second(0).format('YYYY-MM-DD HH:mm:ss')
        const s = dayjs(n.parse('明天6:30 起床') || '').format('YYYY-MM-DD HH:mm:ss') // HH 24 小时制
        expect(s).toEqual(date)
    })

    // test('Parses "6-3 春游"', () => {
    //     expect(n.parse('6-3 春游')).toEqual({ month: 6, day: 3 })
    // })

    // test('Parses "6月3日 春游"', () => {
    //     expect(n.parse('6月3日 春游')).toEqual({ month: 6, day: 3 })
    // })

    // test('Parses "12-1 春游"', () => {
    //     expect(n.parse('12-1 春游')).toEqual({ month: 12, day: 1 })
    // })

    test('Parses "明天早上跑步"', () => {
        const date = dayjs().add(1, 'day').hour(8).minute(0).second(0).format('YYYY-MM-DD HH:mm:ss')
        const s = dayjs(n.parse('明天早上跑步') || '').format('YYYY-MM-DD HH:mm:ss') // HH 24 小时制
        expect(s).toEqual(date)
    })

    test('Parses "本周日到下周日出差"', () => {
        const date = dayjs().day(7).format('YYYY-MM-DD')
        const s = dayjs(n.parse('本周日到下周日出差') || '').format('YYYY-MM-DD') // HH 24 小时制
        expect(s).toEqual(date)
    })

    test('Parses "周四下午三点到五点开会"', () => {
        const date = dayjs().day(4).hour(15).minute(0).second(0).format('YYYY-MM-DD HH:mm:ss')
        const s = dayjs(n.parse('周四下午三点到五点开会') || '').format('YYYY-MM-DD HH:mm:ss') // HH 24 小时制
        expect(s).toEqual(date)
    })

    test('Parses complex text', () => {
        const date = dayjs().add(-1, 'day').hour(10).minute(0).second(0).format('YYYY-MM-DD HH:mm:ss')
        const text = '昨天上午，第八轮中美战略与经济对话气候变化问题特别联合会议召开。中国气候变化事务特别代表解振华表示，今年中美两国在应对气候变化多边进程中政策对话的重点任务，是推动《巴黎协定》尽早生效。'
        const s = dayjs(n.parse(text) || '').format('YYYY-MM-DD HH:mm:ss') // HH 24 小时制
        expect(s).toEqual(date)
    })
})
