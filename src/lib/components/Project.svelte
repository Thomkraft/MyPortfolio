<script>
    import { Hr, Heading } from 'flowbite-svelte';
	import ProjectCard from './ProjectCard.svelte';

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
    ];
</script>


<!-- Colonne Gauche : Texte -->
<div class="ProjectsSection flex flex-col justify-start mt-20 ml-35">

    <Heading tag="h1" class="" customSize="text-3xl font-bold md:text-4xl lg:text-5xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-br from-pink to-orange">Projets</span>
    </Heading>
    
    <Hr classHr="w-1/2 h-1 rounded-sm dark:bg-orange bg-orange mb-10" />
    
    <div class="ml-15">
        {#each ProjectList as project}
            <ProjectCard 
                description={project.description}
                link={project.link}
                tag={project.tag}
                image={project.image}
                competences={project.competences}
                title={project.title}
                details="{project.details}"
            />
        {/each}
        
    </div>
    
</div>