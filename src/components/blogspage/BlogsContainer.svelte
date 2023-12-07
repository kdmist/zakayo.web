<script>
	import BlogsCard from './BlogsCard.svelte';

	let blogs = [
		{
			image: 'images/blogs/image.jpg',
			title: 'Why do i need to pay?',
			category: 'Category ',
			date: '22/10/2023',
			author: 'Japheth',
			description:
				"In Kenya, taxes are collected to fund public services, infrastructure, and essential government functions, ensuring economic stability and fostering national development. The revenue generated from taxes plays a pivotal role in sustaining crucial services that directly impact the lives of citizens. These include healthcare, education, and security, all of which contribute to the overall well-being and progress of the nation. By paying taxes, individuals contribute to the creation of a robust and functioning society, enabling the government to fulfill its responsibilities and meet the needs of the population.Moreover, taxes in Kenya serve as a vital source of funding for the maintenance and expansion of essential infrastructure. Roads, bridges, and public transportation systems are integral components of a thriving economy, facilitating the movement of goods and people. Through tax contributions, citizens actively participate in the development of an efficient and interconnected infrastructure network that enhances economic activities, creates job opportunities, and promotes overall prosperity. Thus, the financial commitment to taxation is a collective investment in the nation's growth and advancement.Additionally, taxes contribute to the stability of the economy by providing the government with the necessary resources to manage public debt, regulate monetary policies, and respond to economic challenges. A well-funded government can implement measures to address inflation, unemployment, and other economic fluctuations, fostering an environment conducive to sustainable growth. In essence, paying taxes in Kenya is not just a legal obligation but a fundamental civic duty that empowers individuals to contribute to the nation's socio-economic development and ensures a better quality of life for all citizens."
		},
		{
			image: 'images/blogs/man.jpg',
			title: 'Forgot Your KRA pin?',
			category: 'Category 2',
			date: '22/10/2023',
			author: 'Evans',
			description:
				"Lost your KRA PIN in Kenya? Don't worry; we've got you covered. In this blog post, we'll guide you on how to recover or obtain your KRA PIN hassle-free. The first step is to visit the official Kenya Revenue Authority (KRA) website, where you'll find a dedicated portal for PIN-related services. Look for the option to 'Forgot Password' or 'Retrieve PIN.' Clicking on this link will prompt you to enter essential details such as your ID number and date of birth. Follow the instructions provided, and the system will guide you through the process of resetting your password or recovering your KRA PIN.Once you've submitted the required information, the KRA system will verify your details, and if everything aligns, you'll receive instructions on how to reset your password or retrieve your KRA PIN. It's crucial to provide accurate and up-to-date information during this process to ensure a smooth and successful recovery. If you encounter any issues or have difficulty retrieving your PIN online, you can contact the KRA support center for assistance. They are equipped to guide you through the necessary steps or address any concerns you may have, offering personalized support to help you regain access to your KRA PIN promptly.In conclusion, the process of retrieving a lost KRA PIN in Kenya is designed to be user-friendly and efficient. By following the steps outlined on the official KRA website or seeking assistance from their support center, you can quickly recover your PIN and resume your tax-related activities without unnecessary delays. Remember to keep your personal information secure to prevent any future inconveniences, and always rely on official channels for PIN retrieval to ensure the authenticity of the process."
		},

		{
			image: 'images/blogs/image1.jpg',
			title: 'How to Fill Nill Returns?',
			category: 'Category 1',
			date: '22/10/2023',
			author: 'Jonas',
			description:
				"Wondering how to file Nil Returns? It's simpler than you think. In this blog post, we'll walk you through the easy steps to fulfill your tax obligations. First and foremost, it's important to understand that even if you haven't earned any income during a specific tax period, you are still required to file Nil Returns with the Kenya Revenue Authority (KRA). To initiate the process, visit the official KRA website and log in to the iTax platform using your credentials. Once logged in, navigate to the 'Returns' menu and select the appropriate tax obligation, such as Income Tax for Individuals or Companies.Next, within the selected tax obligation, you'll find an option to file Nil Returns. Click on this option, and the system will guide you through a straightforward process where you confirm that you have no taxable income for the specified period. It's essential to review and verify all the information before submitting your Nil Returns to ensure accuracy. By completing this process, you fulfill your obligation to the tax authorities, even when there is no income to declare, maintaining compliance with Kenya's tax regulations. Filing Nil Returns on time is crucial to avoid any potential penalties or legal consequences.In conclusion, filing Nil Returns in Kenya is a straightforward process that can be easily accomplished through the iTax platform provided by the Kenya Revenue Authority. By following the outlined steps, taxpayers can fulfill their obligations and maintain compliance with tax regulations, even in situations where there is no taxable income to declare. Regularly checking and filing Nil Returns when necessary is a responsible practice that ensures individuals and businesses remain in good standing with the tax authorities."
		}
	];
</script>

<section class="pt-10 overflow-hidden">
	<div class="container mx-auto lg:px-4">
		<div class=" lg:px-8 rounded-3xl">
			<div class="lg:max-w-8xl w-full mx-auto">
				<div class="">
					{#each blogs as blog (blog.title)}
						<BlogsCard {blog} />
					{/each}
				</div>

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
