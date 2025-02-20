<template>
	<div>
		<span>Collections</span>
		<ul>
			<li>
				<NuxtLink to="/blog">Blog</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/docs">Docs</NuxtLink>
			</li>
		</ul>
		<slot />
	</div>
</template>
