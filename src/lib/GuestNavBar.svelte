<script>
  import { page } from "$app/stores";

  let lang = "en";

  const changeLang = (payload) => {
    lang = payload;
  };
</script>

<nav
  class="flex justify-between items-center p-3 border-b border-gray-300 shadow-sm"
>
  <div class="flex items-center gap-8 text-sm">
    <div class="w-64">
      <a href="/">
        <img class="w-full" src="/image/logo.png" alt="iludate-agentur" />
      </a>
    </div>
    <a
      href="/"
      class="hover:text-red-700 font-semibold"
      class:text-red-700={$page.url.pathname == "/"}>Start</a
    >
    <a
      href="/"
      class="hover:text-red-700 font-semibold"
      class:text-red-700={$page.url.pathname == "/info"}>Info</a
    >
    <a
      href="/"
      class="hover:text-red-700 font-semibold"
      class:text-red-700={$page.url.pathname == "/honorar"}>Honorar</a
    >
    <a
      href="/"
      class="hover:text-red-700 font-semibold"
      class:text-red-700={$page.url.pathname == "/select"}>Select</a
    >
    <a
      href="/"
      class="hover:text-red-700 font-semibold"
      class:text-red-700={$page.url.pathname == "/video"}>Viceo Call</a
    >
    <a
      href="/"
      class="hover:text-red-700 font-semibold"
      class:text-red-700={$page.url.pathname == "/contact"}>Contact us</a
    >
    <a
      href="/profile"
      class="hover:text-red-700 font-semibold"
      class:text-red-700={$page.url.pathname == "/profile"}>News</a
    >
  </div>
  <div class="flex items-center gap-5 text-sm">
    <div class="flex items-center gap-3">
      <button
        class:active={lang == "en"}
        class:inactive={lang !== "en"}
        on:click={() => changeLang("en")}>EN</button
      >
      <button
        class:active={lang == "de"}
        class:inactive={lang !== "de"}
        on:click={() => changeLang("de")}>DE</button
      >
    </div>
    <a
      href="/login"
      class="py-1.5 px-5 border border-gray-400 rounded-full hover:bg-red-700 hover:text-white hover:border-transparent"
      class:bg-red-700={$page.url.pathname == "/login"}
      class:text-white={$page.url.pathname == "/login"}
      class:border-transparent={$page.url.pathname == "/login"}>Login</a
    >
  </div>
</nav>

<style lang="postcss">
  .active {
    border-bottom: 2px solid red;
  }

  .inactive {
    border-bottom: 2px solid transparent;
  }
</style>
