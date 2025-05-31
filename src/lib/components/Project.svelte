<script>
    import { Hr, Heading } from 'flowbite-svelte';
    import ProjectCard from './ProjectCard.svelte';
    import { _ } from '$lib/changeLanguage.js';

    let visibleCount = 3;
    let numberAddedShowMore = 3;
    let minVisibleProjects = 3;

    function showMore() {
        visibleCount += numberAddedShowMore;
    }

    function showLess() {
        visibleCount = Math.max(minVisibleProjects, visibleCount - numberAddedShowMore);
    }
</script>

<!-- Section Projets centrée -->
<div class="ProjectsSection flex flex-col items-center mt-20 w-full px-4">

    <Heading tag="h1" customSize="text-4xl font-bold md:text-5xl lg:text-7xl" class="text-center">
        <span class="text-transparent bg-clip-text bg-gradient-to-br from-pink to-orange">
            {$_("navProject")}
        </span>
    </Heading>

    <Hr classHr="w-1/4 h-1 rounded-sm dark:bg-orange bg-orange mb-10 mx-auto" />

    <!-- Conteneur des cartes projets -->
    <div class="w-full max-w-6xl flex flex-col items-center gap-4">
        {#each $_("projects").slice(0, visibleCount) as project}
            <ProjectCard
                    title={project.title}
                    description={project.description}
                    link={project.links}
                    tags={project.tags}
                    image={project.image}
                    skills={project.skills}
                    details={project.details}
            />
        {/each}

        <!-- Boutons -->
        {#if visibleCount < $_("projects").length || visibleCount > minVisibleProjects}
            <div class="flex justify-center gap-4 mt-2">
                {#if visibleCount < $_("projects").length}
                    <button
                            on:click={(e) => { showMore(); e.target.blur(); }}
                            class="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg focus:outline-none"
                    >
                        {$_("showMore")}
                    </button>
                {/if}

                {#if visibleCount > minVisibleProjects}
                    <button
                            on:click={(e) => { showLess(); e.target.blur(); }}
                            class="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg focus:outline-none"
                    >
                        {$_("showLess")}
                    </button>
                {/if}
            </div>
        {/if}
    </div>
</div>
