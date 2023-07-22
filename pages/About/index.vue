<template>
    <section>
        <div class="container mx-auto px-5 pt-20">
            <div class="py-5">
                <h1 class="about relative text-white text-[30px] font-bold pb-5 mb-10">About me</h1>
                <h2 class="text-white text-[24px] font-bold mb-4">I'm <span class="text-[#FF4F00]">Davlat Jurayev</span> and
                    <span class="text-[#FF4F00]">Full stack developer</span>
                </h2>
                <p class="text-white text-[18px] mb-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis
                    fugiat dignissimos quas, quasi,
                    officiis similique consequatur harum eveniet hic aspernatur tenetur blanditiis labore, explicabo itaque!
                    Repellendus dolorem quas quisquam cumque.
                    Vero aperiam, suscipit quam perspiciatis eius dignissimos, iste debitis eos necessitatibus, numquam
                    voluptates. Libero, cupiditate numquam ullam possimus maiores sint, assumenda, inventore tempore esse et
                    provident alias nostrum laboriosam nam?
                    Repellat iusto corporis culpa aliquid debitis odit labore repudiandae, dolor excepturi suscipit, fugit
                    in perferendis recusandae libero. Quasi quia vitae corrupti. Fuga eius ipsam iure voluptate quam enim
                    eaque soluta.</p>
                <div class="w-full grid grid-cols-2 self-stretch gap-x-10">
                    <div class="w-full">
                        <h2 class="text-white text-[24px] font-bold mb-3">Scills</h2>
                        <div
                            class="scills relative bg-[#414141] flex flex-wrap items-start gap-y-5 gap-x-5 p-5 pl-10 rounded-lg">
                            <p class="flex items-center gap-2 text-white text-[18px] font-bold"><i
                                    class='bx bxl-javascript text-[24px]'></i> JavaScript</p>
                            <p class="flex items-center gap-2 text-white text-[18px] font-bold"><i
                                    class='bx bxl-javascript text-[24px]'></i> JavaScript</p>
                            <p class="flex items-center gap-2 text-white text-[18px] font-bold"><i
                                    class='bx bxl-javascript text-[24px]'></i> JavaScript</p>
                            <p class="flex items-center gap-2 text-white text-[18px] font-bold"><i
                                    class='bx bxl-javascript text-[24px]'></i> JavaScript</p>
                            <p class="flex items-center gap-2 text-white text-[18px] font-bold"><i
                                    class='bx bxl-javascript text-[24px]'></i> JavaScript</p>
                            <p class="flex items-center gap-2 text-white text-[18px] font-bold"><i
                                    class='bx bxl-javascript text-[24px]'></i> JavaScript</p>
                            <p class="flex items-center gap-2 text-white text-[18px] font-bold"><i
                                    class='bx bxl-javascript text-[24px]'></i> JavaScript</p>
                            <p class="flex items-center gap-2 text-white text-[18px] font-bold"><i
                                    class='bx bxl-javascript text-[24px]'></i> JavaScript</p>
                            <p class="flex items-center gap-2 text-white text-[18px] font-bold"><i
                                    class='bx bxl-javascript text-[24px]'></i> JavaScript</p>
                            <p class="flex items-center gap-2 text-white text-[18px] font-bold"><i
                                    class='bx bxl-javascript text-[24px]'></i> JavaScript</p>
                            <p class="flex items-center gap-2 text-white text-[18px] font-bold"><i
                                    class='bx bxl-javascript text-[24px]'></i> JavaScript</p>
                            <p class="flex items-center gap-2 text-white text-[18px] font-bold"><i
                                    class='bx bxl-javascript text-[24px]'></i> JavaScript</p>
                            <p class="flex items-center gap-2 text-white text-[18px] font-bold"><i
                                    class='bx bxl-javascript text-[24px]'></i> JavaScript</p>

                        </div>
                    </div>
                    <div class="w-full">
                        <h2 class="text-white text-[24px] font-bold mb-3">Education</h2>
                        <div class="scills relative bg-[#414141] flex flex-col gap-y-2 p-5 pl-10 rounded-lg">
                            <div class="flex flex-col gap-y-2 pb-5">
                                <span class="flex items-center gap-2 text-white text-[14px]"><i
                                        class='bx bxs-calendar text-white text-[18px]'></i>Feb 2022 - Jan 2023</span>
                                <h3 class="text-white text-[24px] font-bold">Najot Ta ’lim Education Center</h3>
                                <p class="text-white text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Eius
                                    mollitia dolorem delectus
                                    saepe, eveniet minima vitae, esse laborum dignissimos ullam quasi veniam temporibus,
                                    omnis
                                    architecto labore beatae. Laudantium, porro magni!</p>
                            </div>
                            <!-- <div class="flex flex-col gap-y-2 mt-2">
                                <span class="flex items-center gap-2 text-white text-[14px]"><i
                                        class='bx bxs-calendar text-white text-[18px]'></i>Feb 2022 - Jan 2023</span>
                                <h3 class="text-white text-[24px] font-bold">Najot Ta ’lim Education Center</h3>
                                <p class="text-white text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Eius
                                    mollitia dolorem delectus
                                    saepe, eveniet minima vitae, esse laborum dignissimos ullam quasi veniam temporibus,
                                    omnis
                                    architecto labore beatae. Laudantium, porro magni!</p>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="css" scoped>
.about::before {
    content: '';
    position: absolute;
    width: 40px;
    border-bottom: 5px solid #FF4F00;
    bottom: 0;
    left: 0;
}

.about::after {
    content: '';
    position: absolute;
    width: 80px;
    border-bottom: 5px solid #FF4F00;
    bottom: 0;
    left: 0;
    margin-bottom: 15px;
}

.scills::before {
    content: '';
    position: absolute;
    height: auto;
    border-left: 2px solid #FF4F00;
    left: 20px;
    top: 20px;
    bottom: 20px;
}
</style>