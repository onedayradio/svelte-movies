<script>
  export let item;
  export let onRemove;
</script>

<style>
  .checked {
    text-decoration: line-through;
  }
</style>

<li class="my-1">
  <div class="flex flex-row items-center justify-between">
    <div>
      <input type="checkbox" bind:checked={item.checked} class="mr-2" />
      <span class={item.checked ? 'checked' : undefined}>{item.text}</span>
    </div>
    <button
      class="bg-red-500 hover:bg-red-700 rounded py-1 px-1 text-white"
      on:click={() => onRemove(item)}>
      X
    </button>
  </div>
</li>
