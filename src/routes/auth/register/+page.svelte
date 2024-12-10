<script lang="ts">
    export let form;

    import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';
    const toastStore = getToastStore();

    function toastRegisterError(error: string): void {
        const t: ToastSettings = {
            message: error,
            background: 'variant-filled-error',
        };
        toastStore.trigger(t);
    }

    if (form?.error) {
        toastRegisterError(form?.error);
    }
</script>

<div class="flex justify-center h-full pt-5">
	<div class="card p-4 w-modal shadow-xl space-y-4">
		<form class="modal-form border border-surface-500 p-4 space-y-4 rounded-container-token"
		      method="POST" action="?/register">
			<label class="label">
				<span>Name</span>
				<input class="input" type="text" name="name" value={form?.name ?? ''} placeholder="Enter name..." />
			</label>
			<label class="label">
				<span>Surname</span>
				<input class="input" type="text" name="surname" value={form?.surname ?? ''} placeholder="Enter surname..." />
			</label>
			<label class="label">
				<span>Phone number</span>
				<input class="input" type="tel" name="phone" value={form?.phone ?? ''} placeholder="Enter phone number..." />
			</label>
			<label class="label">
				<span>Email</span>
				<input class="input" type="email" name="email" value={form?.email ?? ''} placeholder="Enter email..." />
			</label>
			<label class="label">
				<span>Password</span>
				<input class="input" type="password" name="password" value='' placeholder="Enter password..." />
			</label>
			<button class="input btn btn-md variant-ghost-primary" type="submit">Register</button>
		</form>
	</div>
</div>

<style>
    :global(body) {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
</style>
