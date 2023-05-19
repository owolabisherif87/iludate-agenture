<script>
  import Tab from "$lib/shared/Tab.svelte";
  import Profile from "$lib/Profile.svelte";
  import Favourite from "$lib/Favourite.svelte";
  import Review from "$lib/Review.svelte";
  import Contact from "$lib/Contact.svelte";

  let active = 0;

  const handleChangeTab = (event) => {
    active = event.detail;
  };
</script>

<main>
  <Tab {active} on:change-tab={handleChangeTab}>
    {#if active == 0}
      <Profile />
    {/if}

    {#if active == 1}
      <Favourite />
    {/if}

    {#if active == 2}
      <Review />
    {/if}

    {#if active == 3}
      <Contact />
    {/if}
  </Tab>
</main>
