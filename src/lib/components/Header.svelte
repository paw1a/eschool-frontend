<script lang="ts">
	export let session;
	import {AppBar, Avatar} from "@skeletonlabs/skeleton";
</script>

<AppBar>
	<div slot="lead">
		<strong class="text-xl uppercase">Eschool</strong>
	</div>
	<div slot="default" class="hidden md:flex">
		<a class="btn btn-md variant-soft-primary mx-0.5" href="/">
			CATALOG
		</a>
		<a class="btn btn-md variant-ghost-surface mx-0.5" href="/me/courses">
			LEARNING
		</a>
		<a class="btn btn-md variant-ghost-surface mx-0.5" href="/me/schools">
			TEACHING
		</a>
	</div>
	<div slot="trail" class="hidden md:flex">
		{#if !session}
			<a class="btn btn-md variant-ghost-surface mx-0.5" href="/auth/login">LOGIN</a>
			<a class="btn btn-md variant-ghost-surface mx-0.5" href="/auth/register">REGISTER</a>
		{:else}
			<form method="POST" action="/me?/logout">
				<button class="btn btn-md variant-ghost-surface mx-1" type="submit">LOGOUT</button>
			</form>
			<a href="/me">
				<Avatar
						border="border-4 border-surface-300-600-token hover:!border-primary-500"
						cursor="cursor-pointer"
						width="w-10"
						initials="PS"
						fontSize="200"
				/>
			</a>
		{/if}
	</div>
</AppBar>
