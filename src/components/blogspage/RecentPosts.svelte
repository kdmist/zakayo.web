<script lang="ts">
	import RecentPostCard from './RecentPostCard.svelte';
	import { onMount } from 'svelte';
	import axios, { AxiosError } from 'axios';
	import type { Blog } from '$lib/types/Blog.interface';

	export let currentPath: string;

	const apiUrl = import.meta.env.VITE_API_URL_BLOGS;
	let recentBlogs: Array<Blog> = [];

	let error: AxiosError | null = null;

	onMount(async () => {
		try {
			const res = await axios.get(apiUrl);
			recentBlogs = res.data.data;
		} catch (e) {
			error = e as AxiosError;
			console.log(e);
		}
	});
</script>

<div class="mb-6 py-4 md:px-6 px-2 rounded-xl bg-white">
	<div class="lg:text-2xl text-xl text-center">
		<h1
			class="poppins mb-8 mt-3 whitespace-nowrap text-blue-500 text-opacity-100 leading-none font-semibold"
		>
			Recent Posts
		</h1>
	</div>

	{#if error !== null}
		<p>Error: {error.message}</p>
	{:else}
		<div class="">
			{#each recentBlogs as recentBlog (recentBlog.id)}
				<RecentPostCard {recentBlog} {currentPath} />
			{/each}
		</div>
	{/if}
</div>
