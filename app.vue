<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
::-webkit-scrollbar {
  @apply w-0;
}

::-webkit-scrollbar-track {
  @apply bg-transparent;
}

html {
  @apply overflow-x-hidden scroll-smooth;
}
</style>
