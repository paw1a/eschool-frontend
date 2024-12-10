<script lang="ts">
    import type {School} from "$lib/types.ts";

    export let data;
	const schools = data.schools as School[]
</script>

<div class="container h-full mx-auto w-5/6 text-token py-3">
	<div class="text-4xl">
		<h1>MY SCHOOLS</h1>
	</div>
	<a class="btn btn-md variant-ghost-surface my-5" href="/me/schools/create">+ CREATE</a>
	<div class="grid grid-cols-1 md:grid-cols-1 gap-4">
		{#each schools as school}
			<a class="card bg-initial card-hover overflow-hidden" href={'/me/schools/' + school.id}>
				<header>
					<div class="grid grid-cols-3 p-4">
						<div class="col-span-2 p-1">
							<p class="text-2xl">{school.name}</p>
						</div>
					</div>
				</header>
				<hr class="opacity-50" />
				<footer class="p-4 flex justify-start items-center space-x-4">
					<p class="text-1xl">{school.description}</p>
				</footer>
			</a>
		{/each}
	</div>
</div>
