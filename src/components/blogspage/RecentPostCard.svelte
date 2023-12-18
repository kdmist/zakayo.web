<script lang="ts">
	export let recentBlog: any;

	const webUrl = 'http://localhost:1337';

	export let currentPath: string;
</script>

<a href={currentPath + recentBlog.id} class="w-full my-6 grid grid-cols-3 gap-4 group">
	<div class=" mb-2">
		<img
			class="w-[100px] h-[70px] rounded-xl transition ease-in-out duration-150 group-hover:scale-105"
			src={webUrl + recentBlog.attributes.media.data.attributes.url}
			alt=""
		/>
	</div>

	<div class=" mb-2 col-span-2">
		<p class="poppins mb-3 text-sm md:text-base md:w-[80%] text-neutral-500">
			{#if recentBlog.attributes.createdAt}
				{recentBlog.attributes.createdAt.slice(0, 10)}
			{/if}
		</p>

		<h3
			class="poppins transition ease-in-out duration-150 group-hover:text-zinc-700 group-hover:underline md:text-lg text-zinc-800 text-opacity-100 font-semibold"
		>
			{recentBlog.attributes.title}
		</h3>
	</div>
</a>
