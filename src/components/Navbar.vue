<script setup>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const languages = {
  'en-US': {
    name: 'English (US)',
    flag: 'us'
  },
  'ar-SA': {
    name: 'Arabic (SA)',
    flag: 'sa'
  },
};

const changeLanguage = (lang) => {
  locale.value = lang;
  localStorage.setItem('userLanguage', lang);
};

const darkMode = ref(false);

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  document.documentElement.classList.toggle('dark', darkMode.value);
};
</script>

<template>
  <nav class="bg-gray-50 border-gray-200 dark:bg-gray-800">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div>
        <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span class="sr-only">Open sidebar</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
        </button>
      </div>
      <div class="flex items-center space-x-2 md:order-2">
        <div class="relative">
          <button @click="toggleDarkMode" class="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700">
            {{ darkMode ? '🌙' : '☀️' }}
          </button>
        </div>

        <!-- Language Dropdown -->
        <div class="relative">
          <button type="button" data-dropdown-toggle="language-dropdown-menu" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
            <!-- Current Language Flag -->
            <div class="h-8 w-8 rounded-full overflow-hidden">
              <img 
                :src="`https://flagcdn.com/w80/${languages[locale].flag}.png`"
                :alt="`${languages[locale].name} Flag`"
                class="h-full w-full object-cover"
              >
            </div>
          </button>
          <!-- Language Dropdown Menu -->
          <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700" id="language-dropdown-menu">
            <ul class="py-2 font-medium" role="none">
              <li v-for="(lang, key) in languages" :key="key">
                <a href="#" @click.prevent="changeLanguage(key)" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                  <div class="inline-flex items-center">
                    <div class="h-7 w-7 rounded-full overflow-hidden me-2">
                      <img 
                        :src="`https://flagcdn.com/w80/${lang.flag}.png`"
                        :alt="`${lang.name} Flag`"
                        class="h-full w-full object-cover"
                      >
                    </div>

                    <span class="whitespace-nowrap">{{ lang.name }}</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <!-- If Guest -->
        <div v-if="1" class="relative"> 
          <RouterLink 
            to="/login" 
            class="px-3 py-2 bg-gray-100 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-300 dark:bg-gray-700"
          >
            Login
          </RouterLink>         
        </div>
        <!-- User Menu If Authenticated -->
        <div v-else class="relative">
          <button type="button" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span class="sr-only">Open user menu</span>
            <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="user photo">
          </button>
          <!-- Dropdown menu -->
          <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
            <div class="px-4 py-3">
              <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
              <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
            </div>
            <ul class="py-2" aria-labelledby="user-menu-button">
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>