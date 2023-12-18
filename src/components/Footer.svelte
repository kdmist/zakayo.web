<script>
	import SociaLIcon from './blogspage/SociaLIcon.svelte';

	//  get the current year
	let currentYear = new Date().getFullYear();

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

<div
	style="background-image: url('data:image/svg+xml,%3Csvg version=%221.0%22 xmlns=%22http://www.w3.org/2000/svg%22 width=%221276.000000pt%22 height=%22285.000000pt%22 viewBox=%220 0 1276.000000 285.000000%22 preserveAspectRatio=%22xMidYMid meet%22%3E%3Cg transform=%22translate(0.000000,285.000000) scale(0.100000,-0.100000)%22 fill=%22%23eb4242%22 stroke=%22none%22%3E%3Cpath d=%22M0 2025 l0 -825 36 -15 c140 -58 808 -270 1226 -389 2118 -601 4105 -867 5808 -776 1490 80 3143 385 4800 885 278 84 837 268 873 286 16 9 17 59 17 834 l0 825 -6380 0 -6380 0 0 -825z%22 /%3E%3C/g%3E%3C/svg%3E');"
	class="md:flex flex-col justify-start items-center pt-16 md:pt-24 md:bg-contain bg-no-repeat bg-cover"
>
	<h2
		class="font-heading text-center text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white pb-16 md:pb-24 font-bold poppins"
	>
		Want More Updates?
	</h2>
	<div class="relative bg-white rounded-2xl mb-16">
		<div class=" mx-auto px-4">
			<div class="p-12 bg-gradient-cyan2 rounded-10">
				<div class="flex flex-wrap items-center justify-between">
					<div class="w-full md:w-1/3 pb-6">
						<h2 class="font-heading text-md sm:text-2xl text-gray-900 poppins text-center">
							Subscribe NewsLetters
						</h2>
					</div>
					<div class="w-full md:w-2/3">
						<div class="flex flex-wrap justify-center md:justify-end md:-m-2">
							<div
								class="p-0.5 mb-7 border mx-auto bg-gradient-cyan focus-within:ring focus-within:ring-red-400 rounded-xl"
							>
								<div class="p-0.5 flex flex-col md:flex-row bg-white rounded-lg">
									<input
										class="block flex-1 px-5 py-4 md:py-0 text-base text-gray-500 bg-transparent outline-none placeholder-gray-500 rounded-tl-xl rounded-bl-xl"
										type="text"
										placeholder="Enter Your Email "
									/>
									<button
										class="group relative font-heading font-semibold w-full md:w-auto py-5 px-8 text-xs text-white bg-red-500 hover:bg-red-400 rounded-md tracking-px"
									>
										<div
											class="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full transition ease-in-out duration-500 bg-gradient-cyan"
										/>
										<p class="relative z-10">Subscribe</p>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class=" mx-auto">
	<div class="md:mb-16 flex flex-wrap items-center justify-between">
		<div class="w-full mb-6 md:mb-0 md:w-1/2">
			<img class="mx-auto w-[200px]" src="logo.png" alt="" />
		</div>

		<div class="w-full md:w-1/2">
			<div class="flex justify-center mb-6 lg:mb-0">
				{#each socialIcons as socialIcon (socialIcon.title)}
					<SociaLIcon {socialIcon} />
				{/each}
			</div>
		</div>
	</div>

	<div class="border-b border-gray-400 h-2 w-2/3 mx-auto" />
	<p class="text-gray-600 text-center py-8 md:text-lg poppins md:px-0 px-4">
		© Copyright {currentYear}. All Rights Reserved by Zakayo.
	</p>
</div>
