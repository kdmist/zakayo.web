<script>
	import AdsBanner from './AdsBanner.svelte';
	import PopularPosts from './PopularPosts.svelte';
	import RecentPosts from './RecentPosts.svelte';
	import SearchBar from './SearchBar.svelte';
	import SocialMedia from './SocialMedia.svelte';
</script>

<section class="md:pt-16 pt-3 overflow-hidden md:px-4 px-3">
	<div class="md:mb-16 mb-8">
		<SearchBar />
	</div>
	<div class="md:mb-16 mb-8">
		<PopularPosts />
	</div>

	<div class="md:mb-16 mb-8">
		<RecentPosts />
	</div>

	<div class="md:mb-16 mb-8">
		<SocialMedia />
	</div>

	<div class="md:mb-16 mb-8">
		<AdsBanner />
	</div>
</section>
