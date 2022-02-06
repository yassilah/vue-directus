# useItems

This composable allows you to access a given collection's items reactively.

> To know more about items, please check out the [Directus Docs](https://docs.directus.io/reference/sdk/#items).

## Basic usage

```vue
<script lang="ts" setup>
import { useItems } from "vue-directus";

const items = useItems("collectionName");

// Or

const collectionName = ref("collectionName");
const items = useItems(itemsName);

// Or

const route = useRoute();
const items = useItems(() => route.params.collectionName);
</script>

<template>
  <div v-for="item in items" :key="item.id">
    <h1>{{ item.title }}</h1>
  </div>
</template>
```

## Usage with controls

By default, the composable returns a `ref` containing all your items. You can however turn the `controls` option to `true` to return an object with a few convenience methods and refs.

```vue
<script lang="ts" setup>
import { useItems } from "vue-directus";

const { items, deleteOne, errors, loading } = useItems("collectionName", {
  controls: true,
});
</script>

<template>
  <div v-if="loading.fetch">
    <p>Loading...</p>
  </div>

  <div v-else-if="errors.fetch">
    <p>Oops! Looks like there was an error.</p>
    <pre>{{ errors.fetch }}</pre>
  </div>

  <template v-else>
    <div v-for="item in items" :key="item.id">
      <h1>{{ item.title }}</h1>
      <button @click="deleteOne(item.id)">Delete</button>
    </div>
  </template>
</template>
```

Here is the complete list of the returned object properties:

| Key        |   Type   |                                                                            Description |
| ---------- | :------: | -------------------------------------------------------------------------------------: |
| loading    |  Object  |                                                         Loading states for each method |
| errors     |  Object  |                                                         List of errors for each method |
| items      |   Ref    |                                                                  List of fetched items |
| fetch      | Function |         [Read many items](https://docs.directus.io/reference/sdk/#read-multiple-items) |
| createOne  | Function |           [Create an item](https://docs.directus.io/reference/sdk/#create-single-item) |
| createMany | Function | [Create multiple items](https://docs.directus.io/reference/sdk/#create-multiple-items) |
| updateOne  | Function |           [Update an item](https://docs.directus.io/reference/sdk/#update-single-item) |
| updateMany | Function | [Update multiple items](https://docs.directus.io/reference/sdk/#update-multiple-items) |
| deleteOne  | Function |           [Update an item](https://docs.directus.io/reference/sdk/#delete-single-item) |
| deleteMany | Function | [Update multiple items](https://docs.directus.io/reference/sdk/#delete-multiple-items) |

## Prevent initial fetch

By default, the composable will fetch the collection items on initialization. You may turn off that behaviour by setting the `fetchOnInit` option to false. Please note that this will automatically turn on the `controls` (see above) to let you fetch when necessary.

```vue
<script lang="ts" setup>
import { useItems } from "vue-directus";

const { items, fetch } = useItems("collectionName", {
  fetchOnInit: false,
});

// Do something.

await fetch();
</script>
```
