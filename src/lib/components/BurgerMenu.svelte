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

    <!-- Bouton pour télécharger le CV -->
    <a
            href="/cv-koenig-thomas.pdf"
            download="cv-koenig-thomas.pdf"
            title="Télécharger mon CV"
            class="fixed bottom-24 right-4 z-50 p-2 w-15 h-15 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
    >
        <DownloadSolid class="w-11 h-11 text-gray-800 dark:text-white hover:text-orange-500 transition-colors duration-300" />
    </a>

    <!-- Bouton pour remonter -->
    <button
            title="Remonter en haut de la page"
            class="fixed bottom-4 right-4 z-50 p-2 w-15 h-15 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
            on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
        <ArrowUpOutline class="w-11 h-11 text-gray-800 dark:text-white hover:text-orange-500 transition-colors duration-300" />
    </button>


</div>

