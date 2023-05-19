<script>
  import Card from "$lib/shared/Card.svelte";

  let models = [
    {
      id: 1,
      name: "Emery Muller",
      location: "Hannover, Gottingen, Weltwein",
      age: 22,
      status: "Online",
      imageUrl: "image/lady1.png",
    },
    {
      id: 2,
      name: "Lotte Wagner",
      location: "Bremen, Osnabruck, Weltwein",
      age: 21,
      status: "Offline",
      imageUrl: "image/lady2.png",
    },
    {
      id: 3,
      name: "Tilda Meier",
      location: "Bremen, Osnabruck, Weltwein",
      age: 24,
      status: "Away",
      imageUrl: "image/lady3.png",
    },
    {
      id: 4,
      name: "Luisa Thomas",
      location: "Dusseldorf, Dortmund, Weltwein",
      age: 21,
      status: "Away",
      imageUrl: "image/lady3.png",
    },
    {
      id: 5,
      name: "Gerda Roth",
      location: "Dusseldorf, Dortmund, Weltwein",
      age: 24,
      status: "Offline",
      imageUrl: "image/lady3.png",
    },
  ];
</script>

<main class="max-w-7xl mx-auto">
  <div class="grid grid-cols-12 gap-2 w-full">
    {#each models as model (model.id)}
      <div class="col-span-3">
        <Card payload={model} />
      </div>
    {/each}
  </div>
</main>
