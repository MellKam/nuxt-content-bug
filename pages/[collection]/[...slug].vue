<script setup lang="ts">
import type { Collections } from "@nuxt/content";

definePageMeta({
	layout: "content",
});

const route = useRoute();
const collection = computed(() => route.params.collection as keyof Collections);

const pagePath = computed(() => {
	return (
		"/" +
		(Array.isArray(route.params.slug)
			? (route.params.slug as string[]).filter((part) => part !== "").join("/")
			: (route.params.slug as string))
	);
});

const { data: page } = await useAsyncData(
	`${collection.value}:${pagePath.value}:page`,
	() => {
		return queryCollection(collection.value).path(pagePath.value).first();
	}
);

const { data: surroundings } = await useAsyncData(
	`${collection.value}:${pagePath.value}:surroundings`,
	() => {
		return queryCollectionItemSurroundings(collection.value, pagePath.value);
	}
);

useSeoMeta({
	title: page.value?.title,
	description: page.value?.description,
});
</script>

<template>
	<main v-if="page">
		<ContentRenderer :value="page" />
		{{ surroundings }}
	</main>
	<div v-else>Page not found</div>
</template>
