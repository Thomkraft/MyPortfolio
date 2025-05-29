<script>
    import { Hr, Heading } from 'flowbite-svelte';
	import ProjectCard from './ProjectCard.svelte';

    let visibleCount = 3; // Nombre d'éléments visibles initialement
    let numberAddedShowMore = 3; // Nombre d'éléments à ajouter à chaque clic sur "Afficher plus"
    let minVisibleProjects = 3; // Nombre minimum de projets à afficher

    const ProjectList = [
        {
            title: "Projet 1",
            description: "Ça ne servira à rien, repris Prélude. J’ai en effet coupé toutes les communications vers l’extérieur. Les portes sont bloquées. Ce blocaus est complètement hermétique. Et je le suis autant, pas la peine de gaspiller vos salives. Pensez plutôt à vous installer confortablement, vous êtes ici pour un bon moment.",
            details: "Ça ne servira à rien, repris Prélude. J’ai en effet coupé toutes les communications vers l’extérieur. Les portes sont bloquées. Ce blocaus est complètement hermétique. Et je le suis autant, pas la peine de gaspiller vos salives. Pensez plutôt à vous insta" +
                "\n \n Ça ne servira à rien, repris Prélude. J’ai en effet coupé toutes les communications vers l’extérieur. Les portes sont bloquées. Ce blocaus est complètement hermétique. Et je le suis autant, pas la peine de gaspiller vos salives. Pensez plutôt à vous insta" +
                "\n \n  Ça ne servira à rien, repris Prélude. J’ai en effet coupé toutes les communications vers l’extérieur. Les portes sont bloquées. Ce blocaus est complètement hermétique. Et je le suis autant, pas la peine de gaspiller vos salives. Pensez plutôt à vous installer confortablement, vous êtes ici pour un bon moment.",
            link: "https://github.com/Thomkraft/MyPortfolio",
            tag: ["#HTML", "#CSS", "#JavaScript"],
            image: "/projectImages/image-projet-1.png",
            competences: [
                {
                    title: "Implement (Level 3): Adapt applications to various platforms (CE1.01)",
                    description: "Complete overhaul of a critical interface in C#/WPF, adapted to an existing codebase. Implemented AC31.01 (architecture choice) and AC31.02 (evolving existing applications)."
                },
                {
                    title: "Implement (Level 3): Develop user interfaces (CE1.04)",
                    description: "Design of a user-friendly GUI in WPF/XAML with automatic validation, related to AC21.02 (accessibility) and AC11.04 (UI design)."
                },
                {
                    title: "Optimize (Level 3): Analyze and optimize applications (CE2.03)",
                    description: "Secured XML files through multi-key dynamic encryption, meeting AC22.03 (data security) and AC32.02 (code analysis)."
                }
            ]
        },
        {
            title: "Projet 2",
            description: "Description du projet 2",
            details: "Détails du projet 2",
            link: "/projet2",
            tag: ["#HTML", "#CSS", "#JavaScript"],
            image: "/projet2.png",
            competences: [
                {
                    title: "Implement (Level 3): Adapt applications to various platforms (CE1.01)",
                    description: "Complete overhaul of a critical interface in C#/WPF, adapted to an existing codebase. Implemented AC31.01 (architecture choice) and AC31.02 (evolving existing applications)."
                },
                {
                    title: "Implement (Level 3): Develop user interfaces (CE1.04)",
                    description: "Design of a user-friendly GUI in WPF/XAML with automatic validation, related to AC21.02 (accessibility) and AC11.04 (UI design)."
                },
                {
                    title: "Optimize (Level 3): Analyze and optimize applications (CE2.03)",
                    description: "Secured XML files through multi-key dynamic encryption, meeting AC22.03 (data security) and AC32.02 (code analysis)."
                }
            ]

        },
        {

        },
        {

        },
    ];

    function showMore() {
        visibleCount += numberAddedShowMore;
    }

    function showLess() {
        visibleCount = Math.max(minVisibleProjects, visibleCount - numberAddedShowMore);
    }
</script>


<!-- Section Projets -->
<div class="ProjectsSection flex flex-col justify-start mt-20 ml-35">

    <Heading tag="h1" class="" customSize="text-3xl font-bold md:text-4xl lg:text-5xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-br from-pink to-orange">Projets</span>
    </Heading>

    <Hr classHr="w-1/2 h-1 rounded-sm dark:bg-orange bg-orange mb-10" />

    <div class="ml-15">
        {#each ProjectList.slice(0, visibleCount) as project}
            <ProjectCard
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    tag={project.tag}
                    image={project.image}
                    competences={project.competences}
                    details={project.details}
            />
        {/each}

        {#if visibleCount < ProjectList.length || visibleCount > minVisibleProjects}
            <div class="flex justify-center gap-4 mt-6">
                {#if visibleCount < ProjectList.length}
                    <button
                            on:click={showMore}
                            class="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                        Afficher plus
                    </button>
                {/if}

                {#if visibleCount > minVisibleProjects}
                    <button
                            on:click={showLess}
                            class="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                        Afficher moins
                    </button>
                {/if}
            </div>
        {/if}

    </div>
</div>