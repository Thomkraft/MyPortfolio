<script>
    import { fade } from 'svelte/transition';
    import { _, locale } from '$lib/changeLanguage.js';
    import { base } from '$app/paths';

    export let title = "";
    export let description = "";
    export let tags = [];
    export let image = '';
    export let details = '';
    export let skills = [];
    export let link = '';

    $: tags = typeof tags === 'string' ? tags.split(',').map(t => t.trim()) : tags;

    let showModal = false;

    function openModal() {
        showModal = true;
        window.addEventListener('keydown', handleEscape);
    }

    function closeModal() {
        showModal = false;
        window.removeEventListener('keydown', handleEscape);
    }

    function handleEscape(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    }
</script>
<button
        type="button"
        on:click={openModal}
        class="min-h-[320px] project-card w-full max-w-5xl flex flex-col mb-10 md:flex-row items-start p-6 rounded-2xl bg-gradient-to-br bg-white dark:text-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-black gap-6 shadow-xl hover:shadow-2xl transition-all cursor-pointer relative group transform hover:scale-105 duration-300 overflow-visible"
>

    <!-- Details Section -->
    <div class="flex flex-col justify-between w-full md:w-3/5 h-full">
        <div>
            <div class="flex items-center gap-3">
                <h2 class="text-2xl pb-2 font-extrabold tracking-wide transition-colors bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-orange-500">
                    {@html title}
                </h2>
                {#if link}
                    <a href={link} target="_blank" rel="noopener noreferrer" class="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors" aria-label="GitHub Repository" on:click|stopPropagation>
                    <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M12 2C6.477 2 2 6.484 2 12.012c0 4.423 2.865 8.18 6.839 9.504.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.343-3.369-1.343-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.53 1.031 1.53 1.031.892 1.528 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.563 9.563 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.202 2.396.1 2.65.64.7 1.028 1.593 1.028 2.686 0 3.847-2.339 4.695-4.566 4.943.36.31.68.92.68 1.855 0 1.338-.012 2.419-.012 2.75 0 .268.18.58.688.482A10.02 10.02 0 0022 12.012C22 6.484 17.523 2 12 2z"
                            />
                        </svg>
                    </a>
                {/if}
            </div>
            <div
                    class="h-[3px] bg-orange-500 mb-5 rounded-full transition-all duration-300"
                    style="width: 95%"
            ></div>

            <p class="text-lg text-justify mb-6 leading-relaxed text-black dark:text-white">{@html description}</p>
        </div>

        <!-- Tags alignés en bas -->
        <!-- Tags positionnés en bas gauche -->
        <div class="flex flex-wrap gap-2 mt-auto">
        {#each tags as t}
        <span class="px-3 py-1 text-sm font-medium bg-blue-500 text-black bg-opacity-20 backdrop-blur-sm rounded-full border border-blue-500">
            {t}
        </span>
            {/each}
        </div>

    </div>


    <!-- Section Image -->
    <div class="image-container w-full md:w-2/5 flex items-center justify-center relative">
        <div class="bg-white/5 backdrop-blur-sm p-3 rounded-xl shadow-inner">
            <img src="{base}{image}" alt={title} class="project-image max-w-full max-h-64 object-contain rounded-lg" />
        </div>
    </div>

    <!-- Bulle "Click for more info" -->
    <span
            class="absolute bottom-4 right-4 text-sm bg-orange-500 bg-opacity-90 px-4 py-2 rounded-xl font-semibold text-white opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 select-none"
    >
        {$_("moreInformations")}
    </span>
</button>


{#if showModal}
    <div
            class="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm"
            on:click={closeModal}
            role="dialog"
            aria-modal="true"
            tabindex="0"
            transition:fade={{ duration: 400 }}
    >
        <div
                class="bg-white dark:text-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-black rounded-2xl p-8 max-w-[80rem] w-full max-h-[90vh] overflow-y-auto relative"
                on:click|stopPropagation
                transition:fade={{ duration: 400 }}
        >
            <!-- Bouton de fermeture -->
            <button
                    class="absolute top-4 right-4 text-white text-4xl font-bold hover:text-orange-400"
                    on:click={closeModal}
                    aria-label="Close modal"
            >
                &times;
            </button>

            <!-- Contenu en deux colonnes -->
            <div class="flex flex-col md:flex-row gap-8">
                <!-- Partie gauche -->
                <div class="w-full md:w-1/2">
                    <div class="flex-1 mb-6">
                        <h2
                                class="text-2xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-pink to-orange"
                        >
                            {@html title}
                        </h2>

                        <div class="h-[3px] w-95% bg-orange-500 mt-2 rounded-full"></div>
                    </div>
                    <img
                            src="{base}{image}"
                            alt="{title}"
                            class="w-full max-h-80 object-contain rounded-lg mb-6"
                    />
                    <p class="text-black dark:text-white whitespace-pre-line">{@html details}</p>
                </div>

                <!-- Partie droite : barre verticale + Related Skills + compétences -->
                <div class="w-full md:w-1/2 flex gap-6">
                    <!-- Barre verticale orange -->
                    <div class="w-[3px] bg-orange-500 rounded-full"></div>

                    <!-- Colonne Related Skills + compétences -->
                    <div class="flex-1 flex flex-col">
                        <h2
                                class="text-2xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-pink to-orange"
                        >
                            {$_("IutSkillsTitle")}
                        </h2>
                        <div class="h-[3px] bg-orange-500 rounded-full mb-6 mt-2" style="width: 95%;"></div>

                        {#if skills.length > 0}
                            <div class="flex flex-col gap-6">
                                {#each skills as comp}
                                    {#if typeof comp === 'object'}
                                        <div>
                                            <h4 class="text-blue-400 font-semibold text-md">{comp.title}</h4>
                                            <div class="h-[2px] bg-orange-500 mt-1 mb-3 rounded-full w-full"></div>
                                            <p class="text-black dark:text-white text-sm">{comp.description}</p>
                                        </div>
                                    {:else}
                                        <span class="px-4 py-2 bg-blue-600 rounded-full text-white font-semibold text-sm inline-block">
                                            {comp}
                                        </span>
                                    {/if}
                                {/each}
                            </div>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}
