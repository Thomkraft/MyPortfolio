<script>
    import { Hr, Heading, Span, P, GradientButton } from 'flowbite-svelte';
    import { AddressBookSolid, MessageCaptionSolid } from 'flowbite-svelte-icons';
</script>

<div class="AboutMe grid grid-cols-1 md:grid-cols-2 gap-10 items-center mx-15">
    
    <!-- Colonne Gauche : Texte -->
    <div class="AboutMeText">
        <Heading tag="h1" class="mb-4" customSize="text-3xl font-bold md:text-4xl lg:text-5xl">
            <span class="text-transparent bg-clip-text bg-gradient-to-br from-pink to-orange">À Propos de moi</span>
        </Heading>
        
        <Hr classHr="w-95% h-1 my-4 rounded-sm mb-5 dark:bg-orange bg-orange" />
        
        <div class="Description w-50% ml-5 text-justify">
            <P>
                Post haec indumentum regale quaerebatur et ministris fucandae purpurae tortis confessisque pectoralem tuniculam sine manicis textam, 
                Maras nomine quidam inductus est ut appellant Christiani diaconus, 
                cuius prolatae litterae scriptae Graeco sermone ad Tyrii textrini praepositum celerari speciem perurgebant 
                quam autem non indicabant denique etiam idem ad usque discrimen vitae vexatus nihil fateri conpulsus est.
            </P>
        </div>
    </div>

    <!-- Colonne Droite : Boutons -->
    <div class="Buttons flex flex-col gap-5 justify-center items-center">
        <GradientButton shadow color="blue" size="xl"><AddressBookSolid class="mr-2" /> Télécharger mon CV</GradientButton>
        <GradientButton shadow color="blue" size="xl"><MessageCaptionSolid class="mr-2"/>Me contacter</GradientButton>
    </div>

</div>
