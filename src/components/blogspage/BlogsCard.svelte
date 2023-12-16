<script>

	export let blog;

</script>

<div class="w-full my-5 px-3">
	<div class="h-full bg-white group rounded-3xl p-2">
		<a href="/">
			<div class="relative mb-2">
				<img
					class="w-full md:h-[45vh] rounded-3xl transition ease-in-out duration-150 group-hover:scale-105"
					src={blog.image}
					alt=""
				/>
				<img class="w-16 absolute -bottom-7 left-6 rounded-full" src="images/calendar.jpg" alt="" />
			</div>
			<div class="py-4 px-4">
				<div class="md:flex justify-between items-center mt-5 poppins">
					<div class="flex items-center">
						<p class=" poppins text-sm md:text-base font-semibold my-3 text-red-500">
							• {blog.category}
						</p>
						<div class="flex items-center ml-10">
							<i class="fas fa-user mr-2 text-indigo-500" />
							<div class="font-poppins text-sm text-neutral-500 text-opacity-100 font-semibold">
								{blog.author}
							</div>
						</div>
					</div>
					<div class="flex items-center">
						<i class="fas fa-calendar mr-2 text-indigo-500" />
						<div class="font-poppins text-sm text-neutral-500 text-opacity-100 font-semibold">
							{blog.date}
						</div>
					</div>
				</div>

				<h3
					class="poppins md:mt-0 mt-3 transition ease-in-out duration-150 group-hover:text-zinc-700 group-hover:underline text-xl lg:text-2xl text-zinc-800 text-opacity-100 font-semibold"
				>
					{blog.title}
				</h3>

				<div>
					<p class="poppins my-3 text-sm md:text-base md:w-[80%] text-gray-700">

						{blog.description.slice(0, 153)}...

					</p>
				</div>
			</div>
		</a>
	</div>
</div>
