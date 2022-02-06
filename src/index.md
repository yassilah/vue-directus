<div class="flex items-center justify-center gap-8 my-12">
    <img class="h-48" src="https://raw.githubusercontent.com/vuejs/art/master/logo.svg" alt="Vue"/>
    <strong class="text-5xl">+</strong>
    <img class="h-48" alt="Directus" src="https://user-images.githubusercontent.com/522079/127886783-ae6b4ec6-e2ad-4615-8df9-d77c33e92d7e.png">
</div>

# Introduction

This plugin allows you to easily set up and use the official [Directus SDK](https://docs.directus.io/reference/sdk/) in your [Vue 3](https://v3.vuejs.org/) application.

## What is `vue-directus`?

The [Directus SDK](https://docs.directus.io/reference/sdk/) is an excellent tool to interact with your Directus API. This plugin only gives you a few more convenient composables and methods to make it even easier inside a Vue application. It should be installed as a regular Vue plugin and will then you access to your Directus SDK instance using the `useDirectus` composable anywhere in your app 🚀

## Getting started

Here is how you can add the plugin into your Vue app.

#### Step 1: Install the plugin

```bash
yarn add vue-directus # or npm install vue-directus
```

#### Step 2: Add it to your Vue app

```ts
// main.ts
import { createApp } from "vue";
import VueDirectus from "vue-directus";

const app = createApp({});

app.use(VueDirectus);
```

#### Step 3: Use the plugin 👍

```vue
<script lang="ts" setup>
import { useDirectus } from "vue-directus";

const directus = useDirectus(); // Access the full Directus SDK
</script>
```

## Configuration

By default, the plugin sets your Directus API to `http://localhost:8055`. You may change that as well as all other Directus SDK options when adding the plugin. More information on these options are available [here](https://docs.directus.io/reference/sdk/#constructor).

```ts
// main.ts
import { createApp } from "vue";
import VueDirectus from "vue-directus";

const app = createApp({});

app.use(VueDirectus, {
  apiUrl: "http://localhost:4000",
  auth: "storage",
  transport: {},
  storage: {},
});
```

## TypeScript

This plugin is written entirely in TypeScript and makes it really easy to enjoy fully-typed collections in your code and auto-completion in your IDE. To add types to your collections simply extend the `vue-directus` module in your project.

```ts
// types.d.ts
declare module "vue-directus" {
  interface Collections {
    articles: {
      title: string;
      subtitle?: string;
      likes: number;
    };
  }
}
```

```vue
<script setup lang="ts">
import { useItem } from "vue-directus";

const article = useItem("articles", 1); // auto-completion for "articles"

article.value.title; // string

article.value.bar; // TypeError
</script>
```
