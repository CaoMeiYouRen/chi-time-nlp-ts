<h1 align="center">chi-time-nlp-ts </h1>
<p>
  <a href="https://www.npmjs.com/package/chi-time-nlp-ts" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/chi-time-nlp-ts.svg">
  </a>
<a href="https://www.npmjs.com/package/chi-time-nlp-ts" target="_blank">
    <img alt="npm downloads" src="https://img.shields.io/npm/dt/chi-time-nlp-ts?label=npm%20downloads&color=yellow">
  </a>
  <a href="https://github.com/CaoMeiYouRen/chi-time-nlp-ts/actions?query=workflow%3ARelease" target="_blank">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/CaoMeiYouRen/chi-time-nlp-ts/release.yml?branch=master">
  </a>
  <img src="https://img.shields.io/badge/node-%3E%3D16-blue.svg" />
  <a href="https://github.com/CaoMeiYouRen/chi-time-nlp-ts#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/CaoMeiYouRen/chi-time-nlp-ts/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/CaoMeiYouRen/chi-time-nlp-ts/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/CaoMeiYouRen/chi-time-nlp-ts?color=yellow" />
  </a>
</p>


> 中文语句中的时间语义识别。即通过分析中文语句，识别出话语中提到的时间。
>
> 本项目在 ChiTimeNLP 的基础上采用 TypeScript 重构，添加了类型。并修复了原有的关于“十”的时间解析错误的问题。

参考  [Time-NLP](https://github.com/shinyke/Time-NLP)、[ChiTimeNLP](https://github.com/JohnnieFucker/ChiTimeNLP)

## 🏠 主页

[https://github.com/CaoMeiYouRen/chi-time-nlp-ts#readme](https://github.com/CaoMeiYouRen/chi-time-nlp-ts#readme)


## 📦 依赖要求


- node >=16

## 🚀 安装

```sh
npm install chi-time-nlp-ts
```

## 👨‍💻 使用

```typescript
import NLP from 'chi-time-nlp-ts'

const n = new NLP()
n.parse('十一点五十九分五十九秒') // 2024-06-02 23:59:59
```

## 🛠️ 开发

```sh
npm run dev
```

## 🔧 编译

```sh
npm run build
```

## 🔍 Lint

```sh
npm run lint
```

## 💾 Commit

```sh
npm run commit
```


## 👤 作者


**CaoMeiYouRen**

* Website: [https://blog.cmyr.ltd/](https://blog.cmyr.ltd/)

* GitHub: [@CaoMeiYouRen](https://github.com/CaoMeiYouRen)


## 🤝 贡献

欢迎 贡献、提问或提出新功能！<br />如有问题请查看 [issues page](https://github.com/CaoMeiYouRen/chi-time-nlp-ts/issues). <br/>贡献或提出新功能可以查看[contributing guide](https://github.com/CaoMeiYouRen/chi-time-nlp-ts/blob/master/CONTRIBUTING.md).

## 💰 支持

如果觉得这个项目有用的话请给一颗⭐️，非常感谢

## 📝 License

Copyright © 2024 [CaoMeiYouRen](https://github.com/CaoMeiYouRen).<br />
This project is [MIT](https://github.com/CaoMeiYouRen/chi-time-nlp-ts/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [chi-time-nlp-ts](https://github.com/CaoMeiYouRen/chi-time-nlp-ts)_
