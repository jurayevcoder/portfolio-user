<template>
    <header class="bg-[#414141] fixed z-50 top-0 w-full border-b border-white">
        <div class="container mx-auto px-5">
            <nav class="w-full flex items-center justify-between py-5">
                <div>
                    <a href="#" class="flex items-center">
                        <h1 class="text-[24px] text-[#FF4F00] font-bold">Jurayev</h1> <span
                            class="text-[24px] text-white font-bold">Coder</span>
                    </a>
                </div>
                <div class="hidden md:block">
                    <ul class="flex items-center gap-8 text-[16px] text-white font-bold">
                        <li class="border-b p-2 border-[#414141] hover:text-[#FF4F00] hover:border-[#FF4F00]">
                            <a href="#home">Home</a>
                        </li>
                        <li class="border-b p-2 border-[#414141] hover:text-[#FF4F00] hover:border-[#FF4F00]">
                            <a href="#about">About</a>
                        </li>
                        <li class="border-b p-2 border-[#414141] hover:text-[#FF4F00] hover:border-[#FF4F00]">
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li class="border-b p-2 border-[#414141] hover:text-[#FF4F00] hover:border-[#FF4F00]">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div class="md:hidden reletive">
                    <button @click="toggleMenu" class="flex p-1 rounded-lg focus:ring-2 focus:ring-[#313131]">
                        <i class='text-[24px] text-white font-bold' :class="menu ? 'bx bx-x' : 'bx bx-menu'"></i>
                    </button>
                    <ul class="absolute bg-[#414141] w-full  left-0 top-[77px] text-white font-bold text-center text-[18px]"
                        :class="menu ? 'bloc' : 'hidden'">
                        <li
                            class="border-b p-2 border-[#525252] hover:text-[#FF4F00] hover:border-[#FF4F00] pl-5 mb-5 mt-5">
                            <a href="#home" @click="closeMenu">Home</a>
                        </li>
                        <li class="border-b p-2 border-[#525252] hover:text-[#FF4F00] hover:border-[#FF4F00] pl-5 mb-5">
                            <a href="#about" @click="closeMenu">About</a>
                        </li>
                        <li class="border-b p-2 border-[#525252] hover:text-[#FF4F00] hover:border-[#FF4F00] pl-5 mb-5">
                            <a href="#portfolio" @click="closeMenu">Portfolio</a>
                        </li>
                        <li class="border-b p-2 border-[#525252] hover:text-[#FF4F00] hover:border-[#FF4F00] pl-5">
                            <a href="#contact" @click="closeMenu">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { ref } from '../.nuxt/imports';
const menu = ref(false);
const toggleMenu = () => (menu.value = !menu.value);
const closeMenu = () => (menu.value = false);
</script>

<style lang="scss" scoped></style>