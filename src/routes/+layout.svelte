<script>
  import "../app.css";
  import { page } from "$app/stores";

  let active = $page.url.pathname.replace("/", "");
</script>

<svelte:head>
  <title>iludate | {active ?? "Home"}</title>
</svelte:head>

<slot />
