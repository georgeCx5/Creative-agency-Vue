<script setup>
import { useMainStore } from '@/stores/main'
import logo from '@/assets/images/desktop/logo.svg?url'
import iconHamburger from '@/assets/images/mobile/icon-hamburger.svg?url'
import iconCross from '@/assets/images/mobile/icon-cross.svg?url'

const store = useMainStore()
</script>
<script>
export default {
  data() {
    return {
      isNavOpen: false,
      isBtnStratHovered: false,
      navData: [
        'About',
        'Service',
        'Projects',
      ],
    }
  },
  computed: {
    getBtnColor() {
      let txtColor
      let lineColor
      if (this.isBtnStratHovered) {
        txtColor = 'text-neo-hover-red'
        lineColor = 'bg-neo-hover-red'
      }
      return { txtColor, lineColor }
    }
  }
}
</script>
<template>
  <body class=" flex flex-col items-center font-commissioner text-neo-Text">
    <header class=" relative w-full max-w-[425px] pb-24 overflow-hidden">
      <nav class=" fixed flex justify-between items-center w-full max-w-[425px] px-6 py-10 bg-neo-white">
        <img :src="logo" alt="logo">
        <button @click=" isNavOpen = !isNavOpen">
          <img v-show="!isNavOpen" :src="iconHamburger" alt="iconHamburger" draggable="false">
          <img v-show="isNavOpen" :src="iconCross" alt="iconCross" draggable="false">
        </button>
        <div v-show="isNavOpen" class=" absolute top-full left-0 flex flex-col w-full pr-7">
          <div class=" flex flex-col self-end items-center gap-6 px-7 pt-8 pb-7 bg-neo-BG text-neo-white">
            <button v-for="item in navData" class=" hover:text-neo-red text-[1.125rem] leading-[2rem]">
              {{ item }}
            </button>
            <button
              class=" w-[199px] h-16 bg-neo-red hover:bg-white hover:text-neo-red text-[1rem] leading-[1.25rem] font-extrabold">
              Schedule a Call
            </button>
          </div>
        </div>
      </nav>
      <div :class="` w-full h-[200px] mb-14 ${store.bgHeader[0]}`"></div>
      <div class=" px-6">
        <h1 class=" mb-6 text-[2.5rem] leading-[2.5rem] font-extrabold">
          Branding & website design agency</h1>
        <p class=" mb-10 text-[1rem] leading-[1.5rem]">
          We specialize in visual storytelling by creating cohesive brand and website design
          solutions for small businesses, giving lasting impressions to audiences in a digital world.
        </p>
        <button
          class=" w-[177px] h-[72px] bg-neo-red hover:bg-opacity-60 text-neo-white text-[1.125rem] leading-[1.375rem] font-extrabold">
          Learn more
        </button>
      </div>
    </header>
    <main class=" w-full max-w-[425px] text-neo-white">
      <section>
        <div :class="` w-full h-[200px] ${store.bgStrategic[0]} bg-cover`"></div>
        <div class=" flex flex-col justify-center items-start w-full h-[377px] px-6 bg-neo-BG">
          <h2 class=" mb-6 text-[2rem] leading-[2.5rem] font-extrabold">
            <span class=" text-neo-red">Design</span> is strategic.
          </h2>
          <p class=" mb-10 text-[.9375rem] leading-[1.5625rem]">
            A well-crafted design strategy consistently produces desired outcomes and brand awareness.
            We are firm believers that success lies in creative collaboration with our clients.
          </p>
          <button @mouseenter="isBtnStratHovered = true" @mouseleave="isBtnStratHovered = false"
            class=" flex flex-col gap-2">
            <h6 :class="` text-neo-red ${getBtnColor.txtColor} text-[.9375rem] leading-[1.125rem] font-extrabold`">
              Schedule a call</h6>
            <div :class="` w-full h-px bg-neo-red ${getBtnColor.lineColor}`"></div>
          </button>
        </div>
      </section>
    </main>
  </body>
</template>