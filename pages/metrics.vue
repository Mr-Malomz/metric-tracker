<template>
  <div class="mt-20">
    <section class="flex items-center mb-10">
      <h1 class="text-3xl font-bold inline-block mr-4">Metrics</h1>
      <p class="px-2 text-sm bg-indigo-900 bg-opacity-30 text-indigo-900 rounded-full">
        premium
      </p>
    </section>
    <Locked v-if="true"/>
    <section class="flex" v-else>
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
  </div>
</template>