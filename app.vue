<template>
  <div class="min-h-screen bg-brand-bg lg:flex lg:justify-between">
    <Sidebar />
    <section class="w-full h-auto px-4 py-2 lg:px-8">
      <NuxtPage></NuxtPage>
    </section>
  </div>
</template>

<script setup>
import { account } from "./components/utils";

//check session
onMounted(async () => {
  account
    .get()
    .then()
    .catch((_) => account.createAnonymousSession());
});
</script>