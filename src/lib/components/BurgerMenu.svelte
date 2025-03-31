<script>
    import { onMount } from "svelte";
	import DownloadButton from "./UtilsButton.svelte";
	import UtilsButton from "./UtilsButton.svelte";
    import { Button } from 'flowbite-svelte';
    import { ThumbsUpSolid, ArrowUpOutline } from 'flowbite-svelte-icons';
    
    let isOpen = false;

    function toggleMenu() {
        isOpen = !isOpen;
    }

    function closeMenu() {
        isOpen = false;
    }

</script>

<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">


    <!-- Bouton Menu Hamburger -->
    <button 
        on:click={toggleMenu} 
        class="fixed bottom-20 right-4 z-50 inline-flex items-center justify-center p-2 w-12 h-12 text-sm text-gray-500 bg-gray-200 rounded-full shadow-lg hover:bg-gray-300 focus:outline-none dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"/>
        </svg>
    </button>

    <!-- Menu Hamburger -->
    <div class={`mb-2 fixed bottom-35 right-4 w-65 rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-transform duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
        <ul class="flex flex-col font-medium p-3 space-y-2">
            <UtilsButton onComplete={closeMenu} />
        </ul>
    </div>

    <!-- Bouton pour remonter -->
    <button 
        class="fixed bottom-4 right-4 z-50 p-2 w-12 h-12 text-gray-500 bg-gray-200 rounded-full shadow-lg hover:bg-gray-300 focus:outline-none dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all"
        on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <ArrowUpOutline class="w-8 h-8 text-gray-800 dark:text-white" />
    </button>

</div>

