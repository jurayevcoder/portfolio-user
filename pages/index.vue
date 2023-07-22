<template>
    <section class="min-h-screen flex items-center justify-center">
        <div class="container mx-auto px-5 mt-20">
            <div class="flex flex-col lg:flex-row items-center gap-y-5 sm:gap-y-20 lg:justify-between py-5">
                <!-- <img src="https://avatars.githubusercontent.com/u/129625436?v=4" alt=""
                    class="  "> -->
                <div class="img relative p-3 sm:p-5 lg:p-5">
                    <img src="https://avatars.githubusercontent.com/u/129625436?v=4" alt="" class="w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] 2xl:w-[500px] 2xl:h-[500px]">
                </div>
                <div class="w-full lg:w-[50%] xl:w-[60%]">
                    <h2 class="text-[16px] sm:text-[22px] text-white mb-3 sm:mb-5">Hello! My name is <span
                            class="text-[#FF4F00] font-bold">Davlat
                            Jurayev</span></h2>
                    <h1 class="text-[24px] sm:text-[40px] text-white font-bold mb-3 sm:mb-5">I'm <span
                            class="text-[#FF4F00]">Full stack
                            developer</span></h1>
                    <p class="text-white text-[14px] sm:text-[18px]">Lorem ipsum dolor, sit amet consectetur
                        adipisicing
                        elit. Ea quas
                        laboriosam provident, corporis dolor
                        ducimus quos! Nostrum quas qui, non quo culpa laboriosam assumenda cum cumque consequuntur accusamus
                        perferendis quod.</p>
                    <button
                        class="mt-10 sm:mt-20 hover:bg-[#FF4F00] text-white text-[14px] sm:text-[18px] py-3 px-5 rounded-full border-2 border-[#FF4F00]">More
                        About Me</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script></script>

<style lang="css" scoped>
.img::before {
    content: '';
    position: absolute;
    width: 35%;
    height: 35%;
    border-bottom: 5px solid #FF4F00;
    border-left: 5px solid #FF4F00;
    bottom: 0;
    left: 0;
}

.img::after {
    content: '';
    position: absolute;
    width: 35%;
    height: 35%;
    border-top: 5px solid #FF4F00;
    border-right: 5px solid #FF4F00;
    top: 0;
    right: 0;
}
</style>