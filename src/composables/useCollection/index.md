# useCollection

This composable allows you to access a given collection reactively.

> To know more about collections, please check out the [Directus Docs](https://docs.directus.io/reference/sdk/#collections).

## Basic usage

```vue
<script lang="ts" setup>
import { useCollection } from "vue-directus";

const collection = useCollection("collectionName");
</script>
```

## Reactive collection name

You may also use a reactive name for your collection.

```vue
<script lang="ts" setup>
import { useCollection } from "vue-directus";

const collectionName = ref("collectionName");
const collection = useCollection(collectionName);

// Or

const route = useRoute();
const collection = useCollection(() => route.params.collectionName);
</script>
```
