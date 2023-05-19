<script>
  let data = {
    email: "",
    password: "",
    rememberMe: false,
  };

  export let form;
</script>

<main>
  <div class="mx-auto w-72 my-20">
    <img class="w-full" src="/image/logo.png" alt="iludate" />

    <div class="w-[20rem] flex flex-col items-center justify-center mt-12">
      <h1 class="text-3xl text-yellow-500 uppercase">Login</h1>
      <p class="text-gray-400">Welcome to Iludate Agentur</p>
    </div>
    <div class="w-full mt-10">
      <p class="text-red-700">{form?.message || ""}</p>
      <form method="POST">
        <input
          type="text"
          placeholder="Email address"
          bind:value={data.email}
          name="email"
          class="w-full py-3 px-2 active:border-0 border-0 outline-none mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          bind:value={data.password}
          name="password"
          class="w-full py-3 px-2 active:border-0 border-0 outline-none"
        />

        <div class="flex justify-end">
          <a href="/" class="text-xs text-gray-400">Forget password</a>
        </div>
        <div class="flex items-center gap-1">
          <input
            type="checkbox"
            bind:checked={data.rememberMe}
            name="rememberMe"
          />
          <h1 class="text-sm text-gray-400">Remember me</h1>
        </div>

        <div class="flex flex-col gap-2 mt-3 justify-center items-center">
          <button
            type="submit"
            class="w-full py-1.5 px-5 border border-gray-400 rounded-full bg-red-700 hover:bg-red-800 text-white hover:border-transparent"
            >Login</button
          >
          <div class="text-sm text-gray-400">Or</div>
          <button
            type="submit"
            class="w-full py-1.5 px-5 border rounded-full hover:bg-red-800 hover:text-white text-gray-400 hover:border-transparent border-red-700"
            >Register now</button
          >
        </div>
      </form>
    </div>
  </div>
</main>
