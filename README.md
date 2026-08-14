# Vue3

一个基于 Vue 3、Vite 和 TypeScript 的前端项目模板，集成了路由、状态管理、单元测试、代码检查和格式化工具，适合作为 Vue 3 应用开发的起点。

## 技术栈

- [Vue 3](https://vuejs.org/)
- [Vite](https://vite.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vue Router](https://router.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Vitest](https://vitest.dev/)
- [ESLint](https://eslint.org/)
- [Oxlint](https://oxc.rs/docs/guide/usage/linter.html)

## 环境要求

- Node.js `^22.18.0 || >=24.12.0`
- pnpm

## 安装依赖

```sh
pnpm install
```

## 本地开发

```sh
pnpm dev
```

## 构建生产版本

```sh
pnpm build
```

## 预览构建结果

```sh
pnpm preview
```

## 测试

```sh
pnpm test:unit
```

## 代码检查

```sh
pnpm lint
```

也可以单独运行：

```sh
pnpm lint:eslint
pnpm lint:oxlint
pnpm type-check
```

## 格式化

```sh
pnpm format
```
