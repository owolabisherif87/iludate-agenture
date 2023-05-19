<script>
  import { createEventDispatcher } from "svelte";
  import User from "../icons/User.svelte";
  const dispatch = createEventDispatcher();

  export let active = 0;

  const changeTab = (payload) => {
    dispatch("change-tab", payload);
  };
</script>

<main class="max-w-7xl mx-auto my-10">
  <div class="flex gap-3">
    <button
      type="submit"
      class="w-auto py-1.5 px-5 border rounded-full hover:bg-red-800 hover:text-white text-red-500 border-red-700 flex items-center gap-2"
      class:bg-red-700={active == 0}
      class:active={active == 0}
      on:click={() => changeTab(0)}
    >
      <User />
      <p>Manage my profile</p>
    </button>
    <button
      type="submit"
      class="w-auto py-1.5 px-5 border rounded-full hover:bg-red-800 hover:text-white text-red-500 border-red-700 flex items-center gap-2"
      class:bg-red-700={active == 1}
      class:active={active == 1}
      on:click={() => changeTab(1)}
    >
      <User />
      <p>My favourites</p>
    </button>
    <button
      type="submit"
      class="w-auto py-1.5 px-5 border rounded-full hover:bg-red-800 hover:text-white text-red-500 border-red-700 flex items-center gap-2"
      class:bg-red-700={active == 2}
      class:active={active == 2}
      on:click={() => changeTab(2)}
    >
      <User />
      <p>My reviews</p>
    </button>
    <button
      type="submit"
      class="w-auto py-1.5 px-5 border rounded-full hover:bg-red-800 hover:text-white text-red-500 border-red-700 flex items-center gap-2"
      class:bg-red-700={active == 3}
      class:active={active == 3}
      on:click={() => changeTab(3)}
    >
      <User />
      <p>Contact Us</p>
    </button>
  </div>

  <div class="mt-10">
    <slot />
  </div>
</main>

<style lang="postcss">
  .active {
    color: #fff;
  }
</style>
