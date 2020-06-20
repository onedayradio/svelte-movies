<script>
  export let text;
  export let onClick;
</script>

<div class="mb-2">
  <input
    class="px-2"
    type="text"
    bind:value={text}
    placeholder="Add a new todo item" />
  <button
    class="bg-blue-500 hover:bg-blue-700 rounded shadow font-semibold py-2 px-4
    text-white"
    on:click={onClick}>
    Add
  </button>
</div>
