<script lang="ts">
	import { page } from '$app/stores';
	const blogId = $page.params.blogId;

	import { onMount } from 'svelte';
	import axios, { AxiosError } from 'axios';
	import SvelteMarkdown from 'svelte-markdown';

	import Footer from '../../../components/Footer.svelte';
	import BlogSideBar from '../../../components/blogspage/BlogSideBar.svelte';
	import type { Blog } from '$lib/types/Blog.interface';

	let blogDetail: Partial<Blog> = {};
	let error: AxiosError | null = null;

	const singleBlogApiUrl = import.meta.env.VITE_API_URL_SINGLE_BLOG;

	const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
	const webUrl = baseApiUrl;

	let blogImage: any = '';

	let currentPath: string;

	currentPath = '/blogs/';

	onMount(async () => {
		try {
			const res = await axios.get(`${singleBlogApiUrl}${blogId}?populate=*`);

			blogImage = webUrl + res.data.data.attributes.media.data.attributes.url;

			blogDetail = res.data.data;

			// console.log('Data API Response:', blogDetail);
		} catch (e) {
			error = e as AxiosError;
			console.log(e);
		}
	});
</script>

{#if error !== null}
	<p>Error: {error.message}</p>
{:else}
	<div class="lg:flex max-w-7xl mx-auto mb-16">
		<div class="lg:w-4/6 mx-auto w-full">
			<div class=" mb-6 mt-8">
				<img
					class="w-full rounded-3xl transition ease-in-out duration-150 hover:scale-90"
					src={webUrl + blogDetail.attributes?.media?.data.attributes.url}
					alt=""
				/>
			</div>
			<div class=" bg-white group rounded-3xl p-2">
				<div class="py-4 px-4">
					<div class="md:flex justify-between items-center mt-5 poppins">
						<div class="flex items-center">
							<p class=" poppins text-sm md:text-base font-semibold my-3 text-red-500">
								• {blogDetail.attributes?.category}
							</p>
							<div class="flex items-center ml-10">
								<i class="fas fa-user mr-2 text-indigo-500" />
								<div class="font-poppins text-sm text-neutral-500 text-opacity-100 font-semibold">
									{blogDetail.attributes?.author}
								</div>
							</div>
						</div>
						<div class="flex items-center">
							<i class="fas fa-calendar mr-2 text-indigo-500" />
							<div class="font-poppins text-sm text-neutral-500 text-opacity-100 font-semibold">
								{#if blogDetail.attributes?.createdAt}
									{blogDetail.attributes?.createdAt.slice(0, 10)}
								{/if}
							</div>
						</div>
					</div>

					<h3
						class="poppins md:mt-0 mt-3 transition ease-in-out duration-150 text-xl lg:text-2xl text-zinc-800 text-opacity-100 font-semibold"
					>
						{blogDetail.attributes?.title}
					</h3>

					<div>
						<p class="poppins my-3 text-sm md:text-base text-gray-700">
							<SvelteMarkdown source={blogDetail.attributes?.description} />
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="lg:w-2/6 w-full">
			<BlogSideBar {currentPath} />
		</div>
	</div>
{/if}

<Footer />
