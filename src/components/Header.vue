<template>
  <header class="bg-white dark:bg-gray-800 shadow dark:shadow-gray-700">
    <nav class="container mx-auto px-6 py-3">
      <div class="flex justify-between items-center">
        <div class="text-xl font-semibold text-gray-700 dark:text-gray-200">
          <RouterLink to="/" class="hover:text-gray-900 dark:hover:text-white">My App</RouterLink>
        </div>
        <div class="space-x-4">
          <RouterLink 
            to="/" 
            class="px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-300"
            active-class="bg-gray-100 dark:bg-gray-700"
          >
            Home
          </RouterLink>
          <RouterLink 
            to="/about" 
            class="px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-300"
            active-class="bg-gray-100 dark:bg-gray-700"
          >
            About
          </RouterLink>
          <RouterLink 
            to="/welcome" 
            class="px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-300"
            active-class="bg-gray-100 dark:bg-gray-700"
          >
            Welcome
          </RouterLink>
        </div>
      </div>
    </nav>
  </header>
</template>