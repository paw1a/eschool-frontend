<script lang="ts">
    import type {Course, School} from "$lib/types.ts";

    export let data;
    const courses = data.courses as Course[]
    const school = data.school as School
</script>

<div class="container h-full mx-auto w-5/6 text-token py-3">
	<h1 class="text-4xl">SCHOOL {school.name}</h1>
	<h1 class="text-2xl my-5">COURSES</h1>
	<a class="btn btn-md variant-ghost-surface mb-5" href={'/me/schools/' + school.id + '/create'}>+ CREATE</a>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
		{#each courses as course}
		<a class="card bg-initial card-hover overflow-hidden my-3" href={"/me/schools/" + school.id + "/" + course.id}>
			<header>
				<div class="grid grid-cols-3 p-4">
					<div class="col-span-2 p-1">
						<p class="text-2xl">{course.name}</p>
					</div>
					<img src={course.image_url} class="bg-black/50 w-full aspect-[9/9]" alt="course avatar" />
				</div>
			</header>
			<hr class="opacity-50" />
			<footer class="p-4 flex justify-start items-center space-x-4">
				<div class="flex-auto flex justify-between items-center">
					<h6 class="font-bold variant-filled-surface p-1" data-toc-ignore>{course.price} RUB</h6>
					<button class="btn btn-md variant-filled-surface">EDIT</button>
				</div>
			</footer>
		</a>
		{/each}
	</div>
</div>
