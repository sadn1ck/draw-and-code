<template>
  <header
    class="fixed top-[15px] z-40 w-full"
  >
    <nav
      class="max-w-[1200px] mx-auto flex py-2 px-8 transition-all duration-500 rounded-full backdrop-filter backdrop-blur ring-3 ring-violet-300 transform-gpu bg-gradient-11 from-pink-200 via-purple-300 to-red-500"
    >
      <slot />
    </nav>
  </header>
</template>
