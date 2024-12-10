<script lang="ts">
    export let form;

    import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';
    const toastStore = getToastStore();

    function toastCreateError(error: string): void {
        const t: ToastSettings = {
            message: error,
            background: 'variant-filled-error',
        };
        toastStore.trigger(t);
    }

    if (form?.error) {
		toastCreateError(form?.error);
    }
</script>

<div class="flex justify-center h-full pt-5">
	<div class="card p-4 w-modal shadow-xl space-y-4">
		<form class="modal-form border border-surface-500 p-4 space-y-4 rounded-container-token"
		      method="POST" action="?/createCourse">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div class="col-span-1">
					<label class="label">
						<input class="input" type="text" name="name" value={form?.name ?? ''} placeholder="Course name..." />
					</label>
				</div>
				<div class="col-span-1">
					<label class="label mx-1">
						<select class="select variant-ghost-surface" name="language">
							<option value="english">English</option>
							<option value="russian">Russian</option>
						</select>
					</label>
				</div>
				<div class="col-span-2">
					<label class="label">
						<input class="input" type="number" name="price" value={form?.price ?? ''} placeholder="Course price..." />
					</label>
				</div>
				<div class="col-span-2">
					<label class="label">
						<textarea class="textarea" name="description" rows="3" placeholder="Course description...">{form?.description ?? ''}</textarea>
					</label>
				</div>
			</div>
			<button class="input btn btn-md variant-ghost-primary" type="submit">CREATE</button>
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
