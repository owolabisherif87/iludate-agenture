<script>
  import User from "../icons/User.svelte";

  export let payload = {};

  const getBgStatus = () => {
    return "bg-green-600";
  };
</script>

<div
  class="w-auto h-auto bg-white shadow-md rounded-sm cursor-pointer hover:shadow-lg overflow-hidden"
>
  <div class="w-full bg-gray-700 relative">
    <img src="/image/lady3.jpg" alt="" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-gray-500 bg-opacity-40 p-3">
      <div class="relative h-full w-full px-3 z-20">
        <div
          class="{payload?.status.toLowerCase() == 'online'
            ? 'bg-green-600'
            : payload?.status.toLowerCase() == 'offline'
            ? 'bg-gray-600'
            : 'bg-yellow-600'} w-fit py-1 px-2 rounded-full text-white text-sm absolute right-0 top-0 flex items-center justify-center gap-2"
        >
          <p>{payload?.status}</p>
          <div class="bg-white w-1.5 h-1.5 rounded-full" />
        </div>
        <div
          class="absolute bottom-0 left-0 flex items-center justify-center gap-2"
        >
          <div
            class="w-auto py-1.5 px-7 rounded-full bg-white shadow-md text-sm"
          >
            <p>Book</p>
          </div>
          <div
            class="w-8 h-8 rounded-full bg-white shadow-md text-red-700 text-sm flex justify-center items-center"
          >
            <User />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="p-3">
    <h1 class="font-semibold text-2xl">{payload?.name}, {payload?.age}</h1>
    <p class="text-sm text-gray-400">{payload?.location}</p>
  </div>
</div>
