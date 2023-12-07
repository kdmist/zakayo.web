<script>
	import PopularPostCard from './PopularPostCard.svelte';

	let popularBlogs = [
		{
			image: 'images/blogs/tax.png',
			title: 'What is Tax?',
			date: '22/10/2023'
		},
		{
			image: 'images/blogs/image.jpg',
			title: 'How To Pay Taxes?',
			date: '22/10/2023'
		},

		{
			image: 'images/blogs/image2.jpg',
			title: 'Register New KRA Pin?',
			date: '22/10/2023'
		},

		{
			image: 'images/blogs/image1.jpg',
			title: 'Changes in Tax Laws',
			date: '22/10/2023'
		}
	];
</script>

<div class="mb-6 py-4 md:px-6 px-2 rounded-xl bg-white">
	<div class="lg:text-2xl text-xl text-center">
		<h1
			class="poppins mb-8 mt-3 whitespace-nowrap text-red-500 text-opacity-100 leading-none font-semibold"
		>
			Popular Posts
		</h1>
	</div>

	<div class="">
		{#each popularBlogs as popularBlog (popularBlog.title)}
			<PopularPostCard {popularBlog} />
		{/each}
	</div>
</div>
