<script>
    import { _ } from '$lib/changeLanguage.js';
    import ExperiencesCard from "$lib/components/ExperiencesCard.svelte";
    import {Heading, Hr} from "flowbite-svelte";

</script>


<div class="SkillsSection flex flex-col items-center gap-1 mt-40">

    <!-- Titre -->
    <section>
        <Heading tag="h1" customSize="text-4xl font-bold md:text-5xl lg:text-7xl" class="mb-4 text-center">
                <span class="text-transparent bg-clip-text bg-gradient-to-br from-pink to-orange">
                    {$_("navExperiences")}
                </span>
        </Heading>

        <Hr classHr="w-125 h-1 rounded-sm dark:bg-orange bg-orange mb-10 mx-auto" />

    </section>
</div>

<div class="ExperienceSection flex flex-col items-center mt-20 w-full px-4">

    <div class="w-full max-w-6xl flex flex-col items-center gap-4">
        {#each $_("experiences") as exp}
            <ExperiencesCard
                    title={exp.title}
                    description={exp.description}
                    tags={exp.tags}
                    image={exp.image}
                    date={exp.date}
                    isExperience={true}
            />
        {/each}
    </div>
</div>
