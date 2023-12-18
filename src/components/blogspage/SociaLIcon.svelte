<script lang="ts">
	export let socialIcon: any;
</script>

<a
	class="transition ease-in-out duration-150 flex justify-center items-center w-10 h-10 mr-4 bg-red-500 hover:bg-red-400 hover:-translate-y-1 rounded-full"
	href={socialIcon.link}
>
	<span class="text-white text-2xl"><i class={socialIcon.icon} /></span>
</a>
