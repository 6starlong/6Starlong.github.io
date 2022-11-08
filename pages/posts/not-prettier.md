---
title: 使用 Eslint、Stylelint 代替 Prettier
date: 2022-11-03T15:04:20.000Z
duration: 4min
---

通常我的项目中都会集成 [Prettier](https://prettier.io/) 格式化工具，它为我节省了很多时间，不用过多的去关心代码格式，并在多个项目中保持一致性。Prettier 做了很多硬性的风格决策，仅提供最小的配置接口，这使得它非常易于使用。

## 不使用 Prettier 的原因

> Prettier 是一个固执己见的代码格式化程序。它通过解析您的代码并使用自己的规则重新打印它来执行一致的样式，这些规则考虑了最大行长度，并在必要时包装代码。

Prettier 自称是[一个固执己见的代码格式化工具](https://github.com/prettier/prettier)，**固执己见**(Opinionated) 也意味着我无法对代码风格做细微的调整，当我要修改部分格式却无法解决时就很让人恼火。

### 换行带来的困扰

Prettier 提供了一个 `printWidth` 的选项，默认是**80个字符**。限制每行代码的宽度，超出则会被换行，这破坏了代码结构和可读性。当我在一行代码中修改内容时，超出了 `printWidth` 设置的值，Prettier 就会强制将其换行。或者我删除部分内容后，Prettier 又会强制将其合并成一行。在代码审查中，这破坏了行与行之间的差异。并且我无法决定部分代码块是否换行，这在突出代码逻辑和结构时很有用，然而所有的格式都必须严格按照 Prettier 的规则。

于是我把 `printWidth` 的值从80修改成了120来避免触发换行，但是问题依然存在。由于我无法决定代码在什么地方换行，这也违背了格式化代码的初衷，使代码更具可读性。如果使用 `// prettier-ignore` 来忽略格式化规则，好像又丢失了使用 Prettier 的意义。

### 与 Eslint 的冲突

由于 Prettier 只专注格式化，一般我们还会使用 [ESLint](http://eslint.cn/) 来检查代码逻辑。两者一起使用又带来了新的问题，Prettier 的格式化与 Eslint 的部分功能重叠，因为 Eslint 也可以检查代码风格。Eslint 社区维护者推荐使用 [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)，这是禁用 ESLint 中所有与 Prettier 冲突的格式化规则的配置。

**BUT**，这种方案也有问题。重叠的规则会被禁用，如果需要 Prettier + Eslint 一起使用，任然需要更多的配置，并非开箱即用。最终也会两次解析源代码，如果配置了保存自动修复，就会看到代码先按照 Eslint 的规则去修复，然后又变成 Prettier 的格式，这很奇怪。个人认为，在项目中单独使用 Prettier 或者作为脚本工具使用更加合理。

既然 Eslint 的自动修复也可以像 Prettier 一样格式化修复代码，那直接使用 Eslint 不是更好。

## 解决方案

### 完全使用 Eslint 来代替 Prettier

Eslint 是我工作流中不可或缺的部分，使用 Eslint 确保代码质量的同时还能代替 Prettier 格式化，但也意味着需要更多的 Eslint 配置。不过 [@nuxt/eslint-config](https://github.com/nuxt/eslint-config) 和 [@antfu/eslint-config](https://github.com/antfu/eslint-config) 提供了完善的 Eslint 预设配置开箱即用，在必要时覆盖其规则。

#### 使用方法

安装依赖

```bash
npm i -D eslint @nuxtjs/eslint-config
# or
npm i -D eslint @antfu/eslint-config
```

`.eslintrc` 配置

```json
{
  "extends": "@nuxtjs"
  // "extends": "@antfu"
}
```

在 `.vscode/setting.json` 中添加设置，配合 IDE 扩展，保存时触发自动修复。

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": false
}
```

添加脚本到 `package.json`

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

#### TypeScript

如果使用的是 TypeScript，仅需要把 `@nuxtjs/eslint-config` 替换为 `@nuxtjs/eslint-config-typescript` 。

```json
{
  "extends": "@nuxtjs/eslint-config-typescript"
  // "extends": "@antfu"
}
```

### 使用 Stylelint 来检查样式

> Stylelint 是一个强大、先进的 CSS 代码检查器（linter），可以帮助你规避 CSS 代码中的错误并保持一致的编码风格。

顾名思义，[Stylelint](https://stylelint.io/) 主要负责样式部分的检查修复工作，也可以搭配插件和 CSS 预处理器一起使用。

Vue 3 项目推荐预设配置：

```bash
npm i -D stylelint stylelint-config-standard stylelint-config-idiomatic-order postcss-html
```

```json
// .stylelintrc
{
  "customSyntax": "postcss-html",
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-idiomatic-order"
  ],
  "rules": {
    "alpha-value-notation": "number",
    "color-function-notation": "legacy",
    "declaration-empty-line-before": "never",
    "function-no-unknown": [
      true,
      {
        "ignoreFunctions": [
          "v-bind"
        ]
      }
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        "ignorePseudoClasses": [
          "deep"
        ]
      }
    ],
  },
  "ignoreFiles": []
}
```

```json
// .vscode/setting.json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  },
  "editor.formatOnSave": false,
  "stylelint.validate": [
    "css",
    "vue"
  ]
}
```

## 最后

目前这是我比较推荐的方式，使用 Eslint 和 Stylelint 代替 Prettier 减少了很多不必要的麻烦。非常简单的配置可以快速开始，格式化的同时自动检查修复，确保代码风格质量，也更加尊重你的选择。基于 [@nuxt/eslint-config](https://github.com/nuxt/eslint-config) 和 [@antfu/eslint-config](https://github.com/antfu/eslint-config) 的配置也可以当作一份参考，方便以后创建属于自己的配置。

---

- [没有 Prettier](https://v3.nuxtjs.org/community/contribution#no-prettier)
- [为什么我不使用 Prettier](https://antfu.me/posts/why-not-prettier-zh)
