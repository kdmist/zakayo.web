<script lang="ts">
	import type { Blog } from '$lib/types/Blog.interface';
	export let popularBlog: Blog;

	// console.log('This is what is passed to card', blog);
	const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
	const webUrl = baseApiUrl;

	export let currentPath: string;

	// const pathToBlog = currentPath;
</script>

<a href={currentPath + popularBlog.id} class="w-full my-6 grid grid-cols-3 gap-4 group">
	<div class=" mb-2">
		<img
			class="w-[100px] h-[70px] rounded-xl transition ease-in-out duration-150 group-hover:scale-105"
			src={webUrl + popularBlog.attributes.media.data.attributes.url}
			alt=""
		/>
	</div>

	<div class=" mb-2 col-span-2">
		<p class="poppins mb-3 text-sm md:text-base md:w-[80%] text-neutral-500">
			{#if popularBlog.attributes.createdAt}
				{popularBlog.attributes.createdAt.slice(0, 10)}
			{/if}
		</p>

		<h3
			class="poppins transition ease-in-out duration-150 group-hover:text-zinc-700 group-hover:underline md:text-lg text-zinc-800 text-opacity-100 font-semibold"
		>
			{popularBlog.attributes.title}
		</h3>
	</div>
</a>
