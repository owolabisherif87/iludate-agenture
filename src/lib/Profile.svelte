<script>
  import CheckIcon from "./icons/CheckIcon.svelte";
</script>

<main>
  <div class="mb-5">
    <h1 class="text-sm font-bold mb-2">Nickname</h1>
    <p class="text-xs text-gray-500">Clientacc</p>
  </div>
  <div class="mb-5">
    <h1 class="text-sm font-bold mb-2">Email</h1>
    <div class="flex justify-between w-72">
      <p class="text-xs text-gray-500">clientacc@gmail.com</p>
      <div
        class="w-5 h-5 rounded-full bg-green-500 text-white font-bold flex justify-center items-center"
      >
        <CheckIcon />
      </div>
    </div>
  </div>
  <div class="mb-5">
    <div class="flex justify-between w-72">
      <p class="text-sm text-black">Country</p>
      <select>
        <option value="germany">Germany</option>
        <option value="nigeria">Nigeria</option>
      </select>
    </div>
  </div>
  <div class="mb-5">
    <div class="flex justify-between w-72">
      <p class="text-sm text-black">City</p>
      <select>
        <option value="germany">Germany</option>
        <option value="nigeria">Nigeria</option>
      </select>
    </div>
  </div>
</main>
