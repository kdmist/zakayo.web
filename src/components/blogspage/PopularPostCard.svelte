<script>
	export let popularBlog;
</script>

<a href="/" class="w-full my-6 grid grid-cols-3 gap-4 group">
	<div class=" mb-2">
		<img
			class="w-[100px] h-[70px] rounded-xl transition ease-in-out duration-150 group-hover:scale-105"
			src={popularBlog.image}
			alt=""
		/>
	</div>

	<div class=" mb-2 col-span-2">
		<p class="poppins mb-3 text-sm md:text-base md:w-[80%] text-neutral-500">{popularBlog.date}</p>

		<h3
			class="poppins transition ease-in-out duration-150 group-hover:text-zinc-700 group-hover:underline md:text-lg text-zinc-800 text-opacity-100 font-semibold"
		>
			{popularBlog.title}
		</h3>
	</div>
</a>
