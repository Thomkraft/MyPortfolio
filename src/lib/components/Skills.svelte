<script>
    import { _ } from "$lib/changeLanguage.js";
    import { Heading, Hr, Button } from "flowbite-svelte";
    import { skills } from "$lib/data/skills.js";

    let selectedCategory = "All";
    let visibleLines = 4;
    const skillsPerLine = 5;
    const minVisibleLines = 2;

    let categories = ["All", ...Array.from(new Set(skills.map(skill => skill.category)))];

    $: filteredSkills = selectedCategory === "All"
        ? skills
        : skills.filter(skill => skill.category === selectedCategory);

    $: displayedSkills = filteredSkills.slice(0, visibleLines * skillsPerLine);

    function toggleMore() {
        visibleLines += 2;
    }

    function toggleLess() {
        if (visibleLines > minVisibleLines) {
            visibleLines -= 2;
        }
    }
</script>
<!-- TODO clique sur un skill ca affiche lien des projets qui lutilises (si possible)-->
<!-- TODO metre a jour les data -->
<!-- TODO Pas faire bouger toute la page quand ya moins de lignes -->
<div class="SkillsSection flex flex-col items-center gap-10 mt-20">
    <!-- Grille de compétences -->
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
                                    on:click={() => selectedCategory = cat}
                            >
                                {cat}
                            </button>
                        {/each}
                    </div>
                </div>
            </div>
        </aside>

        <!-- Grille -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {#each displayedSkills as skill}
                <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-md flex flex-col items-center w-full min-h-[180px]">
                    <img
                            loading="lazy"
                            src={`/logos/${skill.category.toLowerCase()}/${skill.name.toLowerCase().replace(/\s+/g, "")}.svg`}
                            alt={skill.name}
                            class="w-20 h-20 mb-3 object-contain"
                            on:error={(e) => {
                            const img = e.currentTarget;
                            img.src = "/logos/default.webp";
                        }}
                    />
                    <h3 class="font-semibold text-center text-base mb-2">{skill.name}</h3>
                    <div class="w-full bg-gray-200 rounded-full h-3 border border-gray-300 dark:border-gray-600 overflow-hidden">
                        <div
                                class="h-full rounded-full transition-all duration-500"
                                style="
                                width: {skill.progress}%;
                                background: linear-gradient(to right, #3b82f6, #2563eb);
                            "
                        ></div>
                    </div>
                </div>
            {/each}
        </div>

        <!-- Boutons Voir plus / Voir moins -->
        {#if filteredSkills.length > skillsPerLine * minVisibleLines}
            <div class="flex justify-center gap-4 mt-6">
                {#if visibleLines * skillsPerLine < filteredSkills.length}
                    <Button
                            on:click={(e) => { toggleMore(); e.target.blur(); }}
                            class="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg focus:outline-none"
                    >
                        {$_("showMore")}
                    </Button>
                {/if}

                {#if visibleLines > minVisibleLines}
                    <Button
                            on:click={(e) => { toggleLess(); e.target.blur(); }}
                            class="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg focus:outline-none"
                    >
                        {$_("showLess")}
                    </Button>
                {/if}
            </div>
        {/if}
    </section>
</div>

<style>
    .SkillsSection button {
        min-width: 100px;
    }
</style>
