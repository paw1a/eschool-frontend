<script lang="ts">
	import type {CourseBrief, Lesson} from "$lib/types.ts";
	import {Marked} from "marked";
	import {markedHighlight} from "marked-highlight";
	import hljs from "highlight.js";

	const marked = new Marked(markedHighlight({
		emptyLangClass: 'hljs',
		langPrefix: 'hljs language-',
		highlight(code, lang) {
			const language = hljs.getLanguage(lang) ? lang : 'plaintext';
			return hljs.highlight(code, { language }).value;
		}
	}));

	export let data;

	const course = data.course as CourseBrief;
	const lessons = data.lessons as Lesson[];

	let currIndex: number = 0;

	function submit() {

	}
</script>

<div class="grid grid-cols-12">
	<div class="col-span-3 p-4 pb-20 space-y-4 overflow-y-auto">
		<section>
			<p class="font-bold pl-4 text-2xl mb-4">LESSONS</p>
			<nav class="list-nav">
				<ul>
					{#each course.lessons as l, index}
						<li class:variant-filled-surface={index === currIndex}>
							<button class="btn btn-md px-10 w-full" on:click={() => currIndex = index}>
								<span class="flex-auto p-2">{index + 1}. {l.title}</span>
							</button>
						</li>
					{/each}
				</ul>
			</nav>
		</section>
	</div>

	<div class="col-span-8 p-4 pb-20 space-y-4 overflow-y-auto">
		{#if lessons[currIndex].type === 'theory'}
			<h1 class="text-3xl">{lessons[currIndex].title}</h1>
			<div class="preview">{@html marked.parse(lessons[currIndex].markdown)}</div>
		{:else if lessons[currIndex].type === 'practice'}
			<h1 class="text-3xl">{lessons[currIndex].title}</h1>
			<div class="preview">{@html marked.parse(lessons[currIndex].markdown)}</div>
			<div>
				{#each lessons[currIndex].tests[0].options as option}
					<div class="variant-ghost-surface flex items-center px-2 my-2">
						<input class="radio" type="radio" name="answer" value={option}/>
						<p class="mx-2 my-2">{option}</p>
					</div>
				{/each}
			</div>
		{/if}

		<div class="flex justify-between items-center">
			<button type="button" class="btn btn-md variant-ghost-surface px-10 flex-end" on:click={submit}>
				SUBMIT
			</button>
		</div>
		<div class="flex justify-between items-center">
			<button disabled={currIndex - 1 < 0} type="button" class="btn btn-md variant-ghost-surface px-10 flex-end" on:click={() => currIndex -= 1}>
				PREVIOUS
			</button>
			<button disabled={currIndex + 1 >= lessons.length} type="button" class="btn btn-md variant-ghost-surface px-10" on:click={() => currIndex += 1}>
				NEXT
			</button>
		</div>
	</div>
</div>

<style>
	.btn {
		text-align: left; /* Aligns text to the left inside the button */
	}
	span {
		justify-content: flex-start; /* Ensures flex items align to the left */
	}

	:global(.hljs) {
		background-color: #2f2826;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	:global(p) {
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	:global(h1) {
		font-size: 2rem;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	:global(h2) {
		font-size: 1.5rem;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	:global(h3) {
		font-size: 1.2rem;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	:global(h4) {
		font-size: 1.0rem;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}
</style>