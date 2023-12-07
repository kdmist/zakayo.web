<script>
	import SociaLIcon from './SociaLIcon.svelte';

	let socialIcons = [
		{
			link: '/',
			title: 'fb',
			icon: 'fab fa-facebook'
		},

		{
			link: '/',
			title: 'ig',
			icon: 'fab fa-instagram'
		},
		{
			link: '/',
			title: 'twitter',
			icon: 'fab fa-x-twitter'
		},
		{
			link: '/',
			title: 'linkedin',
			icon: 'fab fa-linkedin-in'
		}
	];
</script>

<div class="mb-6 pt-4 pb-8 md:px-6 px-2 rounded-xl bg-white">
	<div class="lg:text-2xl text-xl text-center">
		<h1
			class="poppins mb-8 mt-3 whitespace-nowrap text-zinc-800 text-opacity-100 leading-none font-semibold"
		>
			Follow Us
		</h1>
	</div>
	<div class="flex justify-center mb-6 lg:mb-0">
		{#each socialIcons as socialIcon (socialIcon.title)}
			<SociaLIcon {socialIcon} />
		{/each}
	</div>
</div>
