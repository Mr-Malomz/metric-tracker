<template>
  <div class="mt-20">
    <section class="flex items-center mb-10">
      <h1 class="text-3xl font-bold inline-block mr-4">Metrics</h1>
      <p
        class="
          px-2
          text-sm
          bg-indigo-900 bg-opacity-30
          text-indigo-900
          rounded-full
        "
      >
        premium
      </p>
    </section>
    <section class="flex" v-if="user?.isSubscribed">
      <div
        class="
          border
          w-full
          flex
          justify-center
          flex-col
          items-center
          h-96
          mr-2
          rounded-md
        "
      >
        <p class="text-gray-500 mb-4">Daily insight</p>
        <h1 class="text-4xl font-bold">456367</h1>
      </div>
      <div
        class="
          border
          w-full
          flex
          justify-center
          flex-col
          items-center
          h-96
          mr-2
          rounded-md
        "
      >
        <p class="text-gray-500 mb-4">Total insight</p>
        <h1 class="text-4xl font-bold">10956367</h1>
      </div>
    </section>
    <Locked v-else :name="user?.name" />
  </div>
</template>

<script setup>
import { getUserDetails } from "../components/utils";

//state
const user = ref(null);

//get user details
onMounted(async () => {
  getUserDetails()
    .then((res) => {
      user.value = res;
    })
    .catch((_) => {
      alert("Error loading user details");
    });
});
</script>