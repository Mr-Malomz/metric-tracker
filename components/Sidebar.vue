<template>
  <div class="">
    <nav class="lg:block w-48 bg-indigo-100 h-screen pl-4 pr-1 py-6">
      <h4 class="font-bold text-indigo-900 mb-10">Metric Tracker</h4>

      <router-link
        active-class="bg-indigo-200"
        to="/"
        class="
          flex
          items-center
          py-2
          mb-2
          bg
          pl-4
          rounded-lg
          lg:mb-6
          text-brand-grey
          hover:bg-brand-bg
        "
      >
        <home-icon class="mr-4" />
        <span class="font-semibold capitalize text-sm">Home</span>
      </router-link>
      <router-link
        active-class="bg-indigo-200"
        to="/metrics"
        class="
          flex
          items-center
          py-2
          mb-2
          pl-4
          rounded-lg
          lg:mb-6
          text-brand-grey
          hover:bg-brand-bg
        "
      >
        <manage-icon class="mr-4" color="#50505A" />
        <span class="font-semibold capitalize text-sm">Metrics</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
import HomeIcon from "@/assets/svg/HomeIcon.vue";
import ManageIcon from "@/assets/svg/ManageIcon.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    HomeIcon,
    ManageIcon,
  },
});
</script>

<style lang="scss" scoped>
.style {
}
</style>
