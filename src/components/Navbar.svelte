<script>
	let isNavOpen = false;
	function toggleNav() {
		isNavOpen = !isNavOpen;
	}

	import { onMount } from 'svelte';

	let scrollPosition = 0;

	onMount(() => {
		window.addEventListener('scroll', () => {
			scrollPosition = window.scrollY;
		});
	});
</script>

<section
	class="poppins {scrollPosition > 50 ? 'bg-red-100' : 'bg-transparent'} sticky top-0 left-0 z-50"
>
	<div class="container px-4 mx-auto">
		<div class="flex items-center justify-between md:pt-6 md:pb-2 pt-4">
			<div class="w-auto">
				<div class="flex flex-wrap items-center">
					<div class="w-auto pr-2">
						<a href="/">
							<img src="logo.png" class="w-48" alt="" />
						</a>
					</div>
				</div>
			</div>
			<div class="w-auto">
				<div class="flex flex-wrap items-center">
					<div class="w-auto hidden lg:block">
						<ul class="flex items-center">
							<li
								class="mr-14 font-medium transition ease-in-out duration-150 hover:text-red-400 hover:underline tracking-tight"
							>
								<a href="/">Home</a>
							</li>
							<li
								class="mr-14 font-medium transition ease-in-out duration-150 hover:text-red-400 hover:underline tracking-tight"
							>
								<a href="/about">About</a>
							</li>
							<li
								class="mr-14 font-medium transition ease-in-out duration-150 hover:text-red-400 hover:underline tracking-tight"
							>
								<a href="/blogs">Blogs</a>
							</li>
							<li
								class="font-medium transition ease-in-out duration-150 hover:text-red-400 hover:underline tracking-tight"
							>
								<a href="/">Contact Us</a>
							</li>
						</ul>
					</div>
					<div class="w-auto lg:hidden">
						<button on:click={toggleNav}>
							<svg
								class="navbar-burger text-red-500"
								width="51"
								height="51"
								viewBox="0 0 56 56"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect width="56" height="56" rx="28" fill="currentColor" />
								<path
									d="M37 32H19M37 24H19"
									stroke="white"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	{#if isNavOpen}
		<div
			class="lg:hidden transition ease-in-out duration-150 navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50"
		>
			<div
				role="button"
				tabindex="0"
				on:keydown={toggleNav}
				on:click={toggleNav}
				class="navbar-backdrop transition ease-in-out duration-150 fixed inset-0 bg-gray-800 opacity-80"
			/>
			<nav
				class="relative z-10 px-9 pt-8 transition ease-in-out duration-150 bg-red-100 h-full overflow-y-auto"
			>
				<div class="flex flex-wrap justify-between">
					<div class="w-full">
						<div class="flex items-center justify-between -m-2">
							<div class="w-auto p-2" />
							<div class="w-auto p-2">
								<button on:click={toggleNav} class="navbar-burger">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M6 18L18 6M6 6L18 18"
											stroke="#111827"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</button>
							</div>
						</div>
						<div class="w-auto p-2 mt-10">
							<a class="inline-block" href="/">
								<img src="logo.png" class="w-40" alt="" />
							</a>
						</div>
					</div>
					<div class="flex flex-col justify-center py-6 w-full">
						<ul>
							<li
								class="mb-12 font-medium transition ease-in-out duration-150 hover:text-red-400 hover:underline tracking-tight"
							>
								<a href="/">Home</a>
							</li>
							<li
								class="mb-12 font-medium transition ease-in-out duration-150 hover:text-red-400 hover:underline tracking-tight"
							>
								<a href="/about">About</a>
							</li>
							<li
								class="mb-12 font-medium transition ease-in-out duration-150 hover:text-red-400 hover:underline tracking-tight"
							>
								<a href="/blogs">Blogs</a>
							</li>
							<li
								class="font-medium transition ease-in-out duration-150 hover:text-red-400 hover:underline tracking-tight"
							>
								<a href="/">Contact Us</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	{/if}
</section>
