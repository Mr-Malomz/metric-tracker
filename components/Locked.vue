<template>
  <div class="flex w-full flex-col items-center justify-center h-96">
    <p class="text-center justify-center mb-4">
      Oops! Looks like you don't have access to this page
    </p>
    <p class="text-center justify-center mb-4">
      Get full access for by subscribing
    </p>
    <button
      class="px-8 py-2 bg-indigo-800 text-white rounded hover:bg-indigo-700"
      @click="onSubmit"
    >
      Upgrade to paid
    </button>
  </div>
</template>

<script setup>
import {
  createSubscription,
  updateUserSubscription,
} from "../components/utils";
const props = defineProps(["name"]);

const onSubmit = () => {
  createSubscription()
    .then((_) => {
      updateUserSubscription(props.name, true)
        .then((_) => {
          alert("Subscription created successfully!");
          window.location.reload();
        })
        .catch((_) => {
          alert("Error subscribing user!");
        });
    })
    .catch((_) => {
      alert("Error subscribing user!");
    });
};
</script>