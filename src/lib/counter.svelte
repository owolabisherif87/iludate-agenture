<script>
  let count = 0;

  const increment = () => {
    count += 1;
  };
</script>

<main>
  <button class="border-0 px-2 py-3 bg-blue-500 text-white" on:click={increment}
    >Click {count}</button
  >

  <input type="text" bind:value={count} class="border-2 border-gray-600" />
</main>
