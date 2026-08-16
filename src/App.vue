<script setup lang="ts">
import { ref } from 'vue'
import CompositionApi from './components/CompositionApi.vue'
import OptionsApi from './components/OptionsApi.vue'
import CompositionPropsEmit from './components/CompositionPropsEmit.vue'
import OptionPropsEmit from './components/OptionPropsEmit.vue'
import CompositionSlots from './components/CompositionSlots.vue'
import SuspenseFather from './components/SuspenseFather.vue'
import DirectiveDemo from './components/DirectiveDemo.vue'
import CounterDemo from './components/CounterDemo.vue'

const age = ref(25)

const say = (val: string) => {
  console.log(val)
}
</script>

<template>
  <header>
    <div class="wrapper">
      <OptionsApi />
      <CompositionApi />

      <h2>Composition API</h2>
      <CompositionPropsEmit name="Jamie" :age="age" @say="say" />
      <button @click="age++">增加年龄</button>

      <h2>Options API</h2>
      <OptionPropsEmit OptionsName="King" :OptionsAge="10" />

      <CompositionSlots>
        <template v-slot:header="{ count }">
          <h1>父给子组件传递的header 子组件给父组件传递的参数:{{ count }}</h1>
        </template>
        <template #body="{ count }">
          <h1>父给子组件传递的body 子组件给父组件传递的参数:{{ count }}</h1>
        </template>
        <template #footer="{ count }">
          <h1>父给子组件传递的footer 子组件给父组件传递的参数:{{ count }}</h1>
        </template>
      </CompositionSlots>

      <SuspenseFather />

      <DirectiveDemo />

      <CounterDemo />
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
