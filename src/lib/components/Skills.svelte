<script>
    import { _ } from "$lib/changeLanguage.js";
    import { Heading, Hr } from "flowbite-svelte";
    import { skills } from "$lib/data/skills.js";
    import { base } from "$app/paths";

    let selectedCategory = "All";
    let scrollContainer;

    let categories = ["All", ...Array.from(new Set(skills.map(skill => skill.category)))];

    $: filteredSkills = selectedCategory === "All"
        ? skills
        : skills.filter(skill => skill.category === selectedCategory);
</script>

<div class="SkillsSection flex flex-col items-center gap-10 mt-20">
    <!-- Titre -->
    <section class="w-full max-w-6xl">
        <Heading tag="h1" customSize="text-4xl font-bold md:text-5xl lg:text-7xl" class="mb-4 text-center">
            <span class="text-transparent bg-clip-text bg-gradient-to-br from-pink to-orange">
                {$_("navSkills")}
            </span>
        </Heading>

        <Hr classHr="w-1/2 h-1 rounded-sm dark:bg-orange bg-orange mb-10 mx-auto" />

        <!-- Barre de filtres -->
        <aside class="w-full max-w-6xl mb-10 px-4">
            <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                <div class="flex flex-col lg:flex-row items-center lg:justify-center gap-4">
                    <h2 class="text-base font-semibold text-gray-700 dark:text-gray-200 min-w-[70px]">{$_("filter")}</h2>
                    <div class="flex flex-wrap gap-3">
                        {#each categories as cat}
                            <button
                                    class="px-4 py-2 rounded-full text-sm lg:text-base transition-all duration-300 transform
                                    focus:outline-none focus:ring-2 focus:ring-blue-300
                                    {selectedCategory === cat
                                        ? 'bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-md hover:scale-105'
                                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-600 hover:scale-105'}"
                                    on:click={() => {
                                    selectedCategory = cat;
                                    scrollContainer.scrollLeft = 0;
                                }}
                            >
                                {cat}
                            </button>
                        {/each}
                    </div>
                </div>
            </div>
        </aside>

        <!-- Grille scrollable horizontalement -->
        <div class="overflow-x-auto scroll-smooth px-2" bind:this={scrollContainer}>
            <div class="grid gap-6 grid-flow-col grid-rows-[repeat(3,minmax(0,200px))] auto-cols-[minmax(200px,200px)] pb-4">
                {#each filteredSkills as skill}
                    <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-md flex flex-col items-center w-full h-full min-w-[200px] snap-start">
                        <img
                                loading="lazy"
                                src={base + `/logos/${skill.category.toLowerCase()}/${skill.name.toLowerCase().replace(/\s+/g, "")}.png`}
                                alt={skill.name}
                                class="w-16 h-16 mb-3 object-contain"
                                on:error={(e) => {
                                const img = e.currentTarget;
                                img.src = "/logos/default.webp";
                            }}
                        />
                        <h3 class="font-semibold text-center text-base mb-2">{skill.name}</h3>
                        <div class="w-full bg-bar rounded-full h-3 border border-gray-300 dark:border-gray-600 overflow-hidden">
                            <div
                                    class="h-full rounded-full transition-all duration-500"
                                    style="width: {skill.progress}%; background: linear-gradient(to right, #3b82f6, #2563eb);"
                            ></div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </section>
</div>

<style>
    .SkillsSection button {
        min-width: 100px;
    }

    /* Scrollbar styling */
    .overflow-x-auto::-webkit-scrollbar {
        height: 10px;
    }

    .overflow-x-auto::-webkit-scrollbar-track {
        background: #2D3748; /* Gris clair */
        border-radius: 4px;
    }

    .overflow-x-auto::-webkit-scrollbar-thumb {
        background: #3b82f6;
        border-radius: 4px;
    }

    .overflow-x-auto::-webkit-scrollbar-thumb:hover {
        background: #2563eb;
    }

</style>
