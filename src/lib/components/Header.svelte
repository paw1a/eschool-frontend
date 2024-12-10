<script lang="ts">
	export let session;

    import type { AutocompleteOption, PopupSettings } from '@skeletonlabs/skeleton';
    import {Autocomplete, AppBar, Avatar} from "@skeletonlabs/skeleton";
    import { popup } from '@skeletonlabs/skeleton';

    let inputPopupDemo: string = '';
    type FlavorOption = AutocompleteOption<string, { healthy: boolean }>;
    const flavorOptions: FlavorOption[] = [
        { label: 'Vanilla', value: 'vanilla', keywords: 'plain, basic', meta: { healthy: false } },
        { label: 'Chocolate', value: 'chocolate', keywords: 'dark, white', meta: { healthy: false } },
        { label: 'Strawberry', value: 'strawberry', keywords: 'fruit', meta: { healthy: true } },
        { label: 'Neapolitan', value: 'neapolitan', keywords: 'mix, strawberry, chocolate, vanilla', meta: { healthy: false } },
        { label: 'Pineapple', value: 'pineapple', keywords: 'fruit', meta: { healthy: true } },
        { label: 'Peach', value: 'peach', keywords: 'fruit', meta: { healthy: true } }
    ];

    function onPopupDemoSelect(event: CustomEvent<FlavorOption>): void {
        inputPopupDemo = event.detail.label;
    }

    let popupSettings: PopupSettings = {
        event: 'focus-click',
        target: 'popupAutocomplete',
        placement: 'bottom',
    };
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<strong class="text-xl uppercase">Eschool</strong>
	</svelte:fragment>
	<svelte:fragment slot="default">
		<a class="btn btn-md variant-soft-primary" href="/">
			CATALOG
		</a>
		<a class="btn btn-md variant-ghost-surface" href="/me/courses">
			LEARNING
		</a>
		<a class="btn btn-md variant-ghost-surface" href="/me/schools">
			TEACHING
		</a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<input
				class="input autocomplete"
				type="search"
				name="autocomplete-search"
				bind:value={inputPopupDemo}
				placeholder="Search..."
				use:popup={popupSettings}
		/>
		<div data-popup="popupAutocomplete" class="card w-full max-w-sm max-h-64 p-4 overflow-y-auto" tabindex="-1">
			<Autocomplete
					bind:input={inputPopupDemo}
					options={flavorOptions}
					on:selection={onPopupDemoSelect}
			/>
		</div>
		{#if !session}
			<a class="btn btn-md variant-ghost-surface" href="/auth/login">LOGIN</a>
			<a class="btn btn-md variant-ghost-surface" href="/auth/register">REGISTER</a>
		{:else}
			<form method="POST" action="/me?/logout">
				<button class="btn btn-md variant-ghost-surface" type="submit">LOGOUT</button>
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
		</svelte:fragment>
</AppBar>