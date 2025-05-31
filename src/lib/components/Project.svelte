<script>
    import { Hr, Heading } from 'flowbite-svelte';
	import ProjectCard from './ProjectCard.svelte';
    import { _ } from '$lib/changeLanguage.js';

    let visibleCount = 3; // Nombre d'éléments visibles initialement
    let numberAddedShowMore = 3; // Nombre d'éléments à ajouter à chaque clic sur "Afficher plus"
    let minVisibleProjects = 3; // Nombre minimum de projets à afficher

    function showMore() {
        visibleCount += numberAddedShowMore;
    }

    function showLess() {
        visibleCount = Math.max(minVisibleProjects, visibleCount - numberAddedShowMore);
    }
</script>

<!-- TODO Tout recentrer parceque la ya rien qui va -->
<!-- Section Projets -->
<div class="ProjectsSection flex flex-col justify-start mt-20 ml-35">

    <Heading tag="h1" class="" customSize="text-4xl font-bold md:text-5xl lg:text-8xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-br from-pink to-orange">
            {$_("navProject")}
        </span>
    </Heading>


    <Hr classHr="w-1/2 h-1 rounded-sm dark:bg-orange bg-orange mb-10" />

    <div class="ml-15">
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

        {#if visibleCount < $_("projects").length || visibleCount > minVisibleProjects}
            <div class="flex justify-center gap-4 mt-6">
                {#if visibleCount < $_("projects").length}
                    <button
                            on:click={showMore}
                            class="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                        {$_("showMore")}
                    </button>
                {/if}

                {#if visibleCount > minVisibleProjects}
                    <button
                            on:click={showLess}
                            class="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                        {$_("showLess")}
                    </button>
                {/if}
            </div>
        {/if}

    </div>
</div>