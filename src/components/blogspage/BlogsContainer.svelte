<script lang="ts">
	import BlogsCard from './BlogsCard.svelte';
	import { onMount } from 'svelte';
	import axios, { AxiosError } from 'axios';
	import type { Blog } from '$lib/types/Blog.interface';

	let blogs: Array<Blog> = [];
	let error: AxiosError | null = null;

	const apiUrl = import.meta.env.VITE_API_URL_BLOGS;

	onMount(async () => {
		try {
			const res = await axios.get(apiUrl);
			blogs = res.data.data;

			// console.log('Repsonse data is:', blogs);
		} catch (e) {
			error = e as AxiosError;
			console.log(e);
		}
	});
</script>

<section class="pt-10 overflow-hidden">
	<div class="container mx-auto lg:px-4">
		<div class=" lg:px-8 rounded-3xl">
			<div class="lg:max-w-8xl w-full mx-auto">
				{#if error !== null}
					<p>Error: {error.message}</p>
				{:else}
					<div class="">
						{#each blogs as blog (blog.id)}
							<BlogsCard {blog} />
						{/each}
					</div>
				{/if}

				<div class="md:my-20 my-16">
					<ol class="flex justify-center poppins gap-1 text-xs font-medium">
						<li>
							<a
								href="/"
								class="transition ease-in-out duration-150 inline-flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-gray-100 bg-white text-gray-700 rtl:rotate-180 hover:scale-105 hover:bg-slate-50"
							>
								<span class="sr-only">Prev Page</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="sm:h-7 sm:w-7 h-3 w-3"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
							</a>
						</li>

						<li>
							<a
								href="/"
								class="transition ease-in-out duration-150 flex justify-center items-center h-9 w-9 sm:h-12 sm:w-12 sm:text-lg text-sm rounded-full border border-gray-100 bg-white text-center text-gray-700 hover:scale-105 hover:bg-slate-50"
							>
								1
							</a>
						</li>

						<li
							class="transition ease-in-out duration-150 flex justify-center items-center h-9 w-9 sm:h-12 sm:w-12 sm:text-lg text-sm rounded-full border-red-600 bg-red-600 text-white hover:scale-105"
						>
							2
						</li>

						<li>
							<a
								href="/"
								class="transition ease-in-out duration-150 flex justify-center items-center h-9 w-9 sm:h-12 sm:w-12 sm:text-lg text-sm rounded-full border border-gray-100 bg-white text-center text-gray-700 hover:scale-105 hover:bg-slate-50"
							>
								3
							</a>
						</li>

						<li>
							<a
								href="/"
								class="transition ease-in-out duration-150 flex justify-center items-center h-9 w-9 sm:h-12 sm:w-12 sm:text-lg text-sm rounded-full border border-gray-100 bg-white text-center text-gray-700 hover:scale-105 hover:bg-slate-50"
							>
								4
							</a>
						</li>

						<li>
							<a
								href="/"
								class="transition ease-in-out duration-150 inline-flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-gray-100 bg-white text-gray-700 rtl:rotate-180 hover:scale-105 hover:bg-slate-50"
							>
								<span class="sr-only">Next Page</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="sm:h-7 sm:w-7 h-3 w-3"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
							</a>
						</li>
					</ol>
				</div>
			</div>
		</div>
	</div>
</section>
