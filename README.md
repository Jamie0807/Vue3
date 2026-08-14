# Vue3

一个基于 Vue 3、Vite 和 TypeScript 的前端练习项目，集成了路由、状态管理、单元测试、代码检查和格式化工具。

当前页面同时展示了 Options API 和 Composition API 的写法，用于对比 Vue 3 中常见的响应式状态、计算属性、事件方法、列表渲染、条件渲染、监听器和生命周期钩子。

## 技术栈

- [Vue 3](https://vuejs.org/)
- [Vite](https://vite.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vue Router](https://router.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Vitest](https://vitest.dev/)
- [ESLint](https://eslint.org/)
- [Oxlint](https://oxc.rs/docs/guide/usage/linter.html)

## 功能说明

- `src/App.vue`：应用入口布局，渲染 Options API 与 Composition API 示例组件，并提供路由导航。
- `src/components/OptionsApi.vue`：使用 Options API 演示 `data`、`computed`、`methods`、`watch` 和生命周期钩子。
- `src/components/CompositionApi.vue`：使用 Composition API 演示 `ref`、`computed`、`watch`、`watchEffect` 和生命周期钩子。
- `src/router/index.ts`：配置 `Home` 与 `About` 页面路由。
- `src/stores/counter.ts`：提供 Pinia 计数器状态示例。
- `src/components/__tests__/OptionsApi.spec.ts`：使用 Vitest 和 Vue Test Utils 测试 Options API 组件渲染。

## 目录结构

```text
src/
  App.vue
  main.ts
  router/
  stores/
  views/
  components/
    OptionsApi.vue
    CompositionApi.vue
    TheWelcome.vue
    WelcomeItem.vue
    __tests__/
```

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
