<template>
    <div>
        <nav class="bg-gray-800 fixed w-full z-10">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <router-link to="/">
                      <img class="h-8 w-8" src="./assets/dharma-logo.png" alt="Dharma Inquiry">
                  </router-link>
                </div>
                <div class="block md:block">
                  <div class="ml-10 flex items-baseline space-x-4">
                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                    <router-link to="/"
                      :class="currentPage === '/' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'"
                      class="px-3 py-2 rounded-md text-sm font-medium">
                      Play
                    </router-link>
      
                    <router-link to="/about"
                    :class="currentPage.includes('about') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'"
                    class="px-3 py-2 rounded-md text-sm font-medium">
                      About
                    </router-link>
                  </div>
                </div>
              </div>
     
              <div class="-mr-2 flex hidden md:hidden">
                <!-- Mobile menu button -->
                <button @click="navOpen = !navOpen" class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span class="sr-only">Open main menu</span>
                  <!--
                    Heroicon name: menu
      
                    Menu open: "hidden", Menu closed: "block"
                  -->
                  <svg :class="navOpen ? 'hidden' : 'block'" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <!--
                    Heroicon name: x
      
                    Menu open: "block", Menu closed: "hidden"
                  -->
                  <svg :class="navOpen ? 'block' : 'hidden'" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
      
          <!--
            Mobile menu, toggle classes based on menu state.
      
            Open: "block", closed: "hidden"
          -->
          <div :class="navOpen ? 'block' : 'hidden'" class="md:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <router-link to="/"
                :class="currentPage === '/' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'"
                class="block px-3 py-2 rounded-md text-base font-medium">Play</router-link>

              <router-link to="/about"
                :class="currentPage.includes('about') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'"
                class="block px-3 py-2 rounded-md text-base font-medium">About</router-link>      
            </div>
          </div>
        </nav>
      
        <!-- <header class="bg-white shadow">
          <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold leading-tight text-gray-900">
              ConvoKindling: Spark conversations
            </h1>
          </div>
        </header> -->
        <main class="pt-16">
          <router-view />
        </main>
      </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data () {
    return {
      navOpen: false
    }
  },
  computed: {
    currentPage () {
      return this.$route.path
    }
  }
}
</script>
