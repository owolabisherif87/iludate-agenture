<script>
  import CheckIcon from "./icons/CheckIcon.svelte";
</script>

<form>
  <div class="mb-5">
    <h1 class="text-sm font-bold mb-2">Nickname</h1>
    <p class="text-xs text-gray-500">Clientacc</p>
  </div>
  <div class="mb-5">
    <h1 class="text-sm font-bold mb-2">Email</h1>
    <div class="flex justify-between w-72">
      <p class="text-xs text-gray-500">clientacc@gmail.com</p>
    </div>
  </div>
  <div class="mb-5">
    <h1 class="text-sm font-bold mb-2">Message</h1>
    <textarea cols="50" rows="5" class="border border-gray-300" />
  </div>
  <div class="w-40">
    <button
      type="submit"
      class="w-full py-1.5 px-5 border border-gray-400 rounded-full bg-red-700 hover:bg-red-800 text-white hover:border-transparent"
      >Send</button
    >
  </div>
</form>
