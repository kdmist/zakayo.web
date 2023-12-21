<script lang="ts">
	import PopularPostCard from './PopularPostCard.svelte';
	import { onMount } from 'svelte';
	import axios, { AxiosError } from 'axios';

	export let currentPath: string;

	const apiUrl = import.meta.env.VITE_API_URL_BLOGS;

	let popularBlogs: Array<any> = [];
	let error: AxiosError | null = null;

	onMount(async () => {
		try {
			const res = await axios.get(apiUrl);
			popularBlogs = res.data.data;
		} catch (e) {
			error = e as AxiosError;
			console.log(e);
		}
	});
</script>

<div class="mb-6 py-4 md:px-6 px-2 rounded-xl bg-white">
	<div class="lg:text-2xl text-xl text-center">
		<h1
			class="poppins mb-8 mt-3 whitespace-nowrap text-red-500 text-opacity-100 leading-none font-semibold"
		>
			Popular Posts
		</h1>
	</div>

	{#if error !== null}
		<p>Error: {error.message}</p>
	{:else}
		<div class="">
			{#each popularBlogs as popularBlog (popularBlog.id)}
				<PopularPostCard {popularBlog} {currentPath} />
			{/each}
		</div>
	{/if}
</div>
