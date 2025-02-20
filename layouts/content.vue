<script setup lang="ts">
import type { Collections } from "@nuxt/content";
import DefaultLayout from "./default.vue";

const route = useRoute();

const collection = computed(() => route.params.collection as keyof Collections);

const { data: nav } = await useAsyncData(
	"navigation",
	() => queryCollectionNavigation(collection.value),
	{ watch: [collection] }
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
