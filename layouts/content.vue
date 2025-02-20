<script setup lang="ts">
import type { Collections } from "@nuxt/content";
import DefaultLayout from "./default.vue";

const route = useRoute();

const collection = computed(
	() => route.path.split("/")[1]! as keyof Collections
);

const { data: nav } = await useAsyncData(
	() => queryCollectionNavigation(collection.value),
	{ watch: [() => route.path] }
);
</script>

<template>
	<DefaultLayout>
		<span>Collection Navigation</span>
		<ul v-if="nav">
			<li v-for="item in nav" :key="item.path">
				<NuxtLink :to="`/${collection}${item.path}`">
					{{ item.title }}
				</NuxtLink>
			</li>
		</ul>
		<slot />
	</DefaultLayout>
</template>
