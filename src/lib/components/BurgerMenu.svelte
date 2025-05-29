<script>
    import { onMount } from "svelte";
    import { ArrowUpOutline, DownloadSolid } from 'flowbite-svelte-icons';
    import { fade } from "svelte/transition";

    let isOpen = false;

    function closeMenu() {
        isOpen = false;
    }

    onMount(() => {
    window.addEventListener('scroll', () => {
        closeMenu(); // Ferme le menu si l'utilisateur fait défiler la page
    });
    });

</script>

<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4" in:fade={{ duration: 250 }} out:fade={{ duration: 250 }}>

    <!-- Bouton pour télécharger le CV  -->
    <a 
    href="/cv-koenig-thomas.pdf" 
    download="cv-koenig-thomas.pdf"
    class="fixed bottom-23 right-4 z-50 p-2 w-15 h-15 text-gray-500 bg-gray-200 rounded-full shadow-lg hover:bg-gray-300 focus:outline-none dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all"
    >
        <DownloadSolid class="w-11 h-11 text-gray-800 dark:text-white" />
    </a>

    <!-- Bouton pour remonter -->
    <button 
        class="fixed bottom-4 right-4 z-50 p-2 w-15 h-15 text-gray-500 bg-gray-200 rounded-full shadow-lg hover:bg-gray-300 focus:outline-none dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all"
        on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <ArrowUpOutline class="w-11 h-11 text-gray-800 dark:text-white" />
    </button>

</div>

