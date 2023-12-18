<script lang="ts">
	import BlogCard from './BlogCard.svelte';
	import { onMount } from 'svelte';
	import axios, { AxiosError } from 'axios';

	let blogs: Array<any> = [];
	let error: AxiosError | null = null;

	onMount(async () => {
		try {
			const res = await axios.get('http://localhost:1337/api/blogs?populate=*');
			blogs = res.data.data;

			// console.log('Repsonse data is:', blogs);
		} catch (e) {
			error = e as AxiosError;
			console.log(e);
		}
	});
</script>

<section class="py-10 overflow-hidden">
	<div class="container mx-auto px-4">
		<div class="py-16 md:px-8 px-4 rounded-3xl">
			<div class="max-w-7xl mx-auto">
				<div class="mb-12 md:max-w-4xl mx-auto text-center">
					<span
						class="inline-block poppins mb-4 text-sm text-red-500 font-bold uppercase tracking-widest"
						>We are here to help</span
					>
					<h2
						class="font-heading poppins mb-6 text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-zinc-800 font-semibold tracking-tight"
					>
						Here are some<br />
						articles to guide you
					</h2>
				</div>
				{#if error !== null}
					<p>Error: {error.message}</p>
				{:else}
					<div class="flex flex-wrap -m-4 mb-6 md:mt-24 mt-12">
						{#each blogs as blog (blog.id)}
							<BlogCard {blog} />
						{/each}
					</div>
				{/if}
				<div class="flex flex-wrap md:justify-center -m-2">
					<div class="w-full md:w-auto p-2">
						<a
							class="block poppins group transition ease-in-out duration-150 w-full px-12 py-3.5 text-md lg:text-lg text-center text-white font-semibold bg-red-500 hover:bg-red-400 focus:ring-4 focus:ring-gray-600 rounded-md"
							href="/">See More <i class="fas fa-arrow-right ml-1 group-hover:ml-3" /></a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
