<script>
	import Footer from '../Footer.svelte';
	import BlogSideBar from './BlogSideBar.svelte';
	import BlogsContainer from './BlogsContainer.svelte';
</script>

<div class="max-w-4xl mx-auto">
	<div class="lg:text-7xl md:text-5xl sm:text-4xl text-2xl text-center lg:text-left">
		<h1
			class="poppins my-5 whitespace-nowrap text-zinc-800 text-opacity-100 leading-none font-semibold"
		>
			Popular Articles
		</h1>
		<h1
			class="poppins text-center lg:text-left my-1 whitespace-nowrap text-red-500 text-opacity-100 leading-none font-semibold"
		>
			To Guide You
		</h1>
	</div>
</div>

<div class="lg:flex max-w-7xl mx-auto">
	<div class="lg:w-4/6 w-full">
		<BlogsContainer />
	</div>

	<div class="lg:w-2/6 w-full">
		<BlogSideBar />
	</div>
</div>

<Footer />
