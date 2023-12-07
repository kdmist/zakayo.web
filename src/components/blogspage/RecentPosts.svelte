<script>
	import RecentPostCard from './RecentPostCard.svelte';

	let recentBlogs = [
		{
			image: 'images/blogs/post.jpg',
			title: 'Get Tax Certificate?',
			date: '22/10/2023'
		},
		{
			image: 'images/blogs/post2.jpg',
			title: ' Tax for Businesses?',
			date: '22/10/2023'
		},

		{
			image: 'images/blogs/post3.jpg',
			title: ' Tax Compliance?',
			date: '22/10/2023'
		},

		{
			image: 'images/blogs/post4.jpg',
			title: ' Tax Obligations?',
			date: '22/10/2023'
		}
	];
</script>

<div class="mb-6 py-4 md:px-6 px-2 rounded-xl bg-white">
	<div class="lg:text-2xl text-xl text-center">
		<h1
			class="poppins mb-8 mt-3 whitespace-nowrap text-blue-500 text-opacity-100 leading-none font-semibold"
		>
			Recent Posts
		</h1>
	</div>

	<div class="">
		{#each recentBlogs as recentBlog (recentBlog.title)}
			<RecentPostCard {recentBlog} />
		{/each}
	</div>
</div>
