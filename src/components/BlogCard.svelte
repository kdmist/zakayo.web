<script lang="ts">
	export let blog: any;

	// console.log('This is what is passed to card', blog);

	const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
	const webUrl = baseApiUrl;

	const pathToBlog = 'blogs/';
</script>

<div class="w-full md:w-1/2 lg:w-1/3 my-5 md:px-4">
	<div class="h-full bg-white group rounded-3xl p-2">
		<a href={pathToBlog + blog.id}>
			<div class="relative mb-2">
				<img
					class="w-full rounded-3xl md:h-60 transition ease-in-out duration-150 group-hover:scale-105"
					src={webUrl + blog.attributes.media.data.attributes.url}
					alt=""
				/>
				<img class="w-16 absolute -bottom-7 left-6 rounded-full" src="calendar.jpg" alt="" />
			</div>
			<div class="py-4 px-4">
				<p class="text-sm poppins font-semibold my-3 text-red-500">• {blog.attributes.category}</p>
				<h3
					class="poppins transition ease-in-out duration-150 group-hover:text-zinc-700 group-hover:underline text-xl lg:text-2xl text-zinc-800 text-opacity-100 font-semibold"
				>
					{blog.attributes.title}
				</h3>

				<div class="flex justify-between items-center mt-5 poppins">
					<div class="flex items-center">
						<i class="fas fa-calendar mr-2 text-indigo-500" />
						<div class="font-poppins text-sm text-neutral-500 text-opacity-100 font-semibold">
							{#if blog.attributes.createdAt}
								{blog.attributes.createdAt.slice(0, 10)}
							{/if}
						</div>
					</div>
					<div class="flex items-center">
						<i class="fas fa-user mr-2 text-indigo-500" />
						<div class="font-poppins text-sm text-neutral-500 text-opacity-100 font-semibold">
							{blog.attributes.author}
						</div>
					</div>
				</div>
			</div>
		</a>
	</div>
</div>
