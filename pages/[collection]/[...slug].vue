<script setup lang="ts">
import type { Collections } from "@nuxt/content";

definePageMeta({
	layout: "content",
});

const route = useRoute();

const { data: page } = await useAsyncData(() => {
	const path =
		"/" +
		(Array.isArray(route.params.slug)
			? (route.params.slug as string[]).filter((part) => part !== "").join("/")
			: (route.params.slug as string));
	return queryCollection(route.params.collection as keyof Collections)
		.path(path)
		.first();
});

useSeoMeta({
	title: page.value?.title,
	description: page.value?.description,
});
</script>

<template>
	<ContentRenderer v-if="page" :value="page" />
	<div v-else>Page not found</div>
</template>
