<script>
    import { fade } from 'svelte/transition';
    import { _, locale } from '$lib/changeLanguage.js';
    import { base } from '$app/paths';

    export let title = "";
    export let description = "";
    export let tags = [];
    export let image = '';
    export let details = '';
    export let link = '';
    export let date ='';

    $: tags = typeof tags === 'string' ? tags.split(',').map(t => t.trim()) : tags;

</script>
<button
        type="button"
        class="min-h-[350px] project-card w-full max-w-5xl flex flex-col mb-10 md:flex-row items-start p-6 rounded-2xl bg-gradient-to-br bg-white dark:text-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-black gap-6 shadow-xl hover:shadow-2xl transition-all cursor-pointer relative group transform hover:scale-105 duration-300 overflow-visible"
>

    <!-- Details Section -->
    <div class="flex flex-col justify-between w-full md:w-3/5 h-full">
        <div>
            <div class="flex items-start gap-3">
                <div class="flex flex-col">
                    <h2 class="text-3xl pb-0 font-extrabold tracking-wide transition-colors bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-orange-500">
                        {title}
                    </h2>
                    <p class="text-gray-300 transition-colors group-hover:text-orange-500 mt-1">
                        {date}
                    </p>
                </div>
                {#if link}
                    <a href={link} target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-orange-500 transition-colors" aria-label="GitHub Repository" on:click|stopPropagation>
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

            <p class="text-lg text-justify mb-6 leading-relaxed text-gray-300">{@html description}</p>
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
</button>


