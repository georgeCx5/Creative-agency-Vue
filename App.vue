<script setup>
import { useMainStore } from '@/stores/main'
import logo from '@/assets/images/desktop/logo.svg?url'
import iconHamburger from '@/assets/images/mobile/icon-hamburger.svg?url'
import iconCross from '@/assets/images/mobile/icon-cross.svg?url'
import pttWaveRed from '@/assets/images/desktop/bg-pattern-wave-red.svg?url'
import pttWaveWhite from '@/assets/images/desktop/bg-pattern-wave-white.svg?url'

import BtnArrow from './components/BtnArrow.vue'

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
      listData: [
        {
          id: 1,
          header: 'Brand strategy',
          main: 'Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key.',
        },
        {
          id: 2,
          header: 'Brand design',
          main: 'Keeping the brand design unique and meaningful helps in communicating the brand’s timeless value effectively.',
        },
        {
          id: 3,
          header: 'Web design',
          main: 'A beautifully crafted website is the best tool for brand awareness, and ultimately results in increased revenues.',
        },
      ]
    }
  },
  computed: {
    getHoverColor() {
      let text
      let line
      if (this.isBtnStratHovered) {
        text = 'text-neo-hover-red'
        line = 'bg-neo-hover-red'
      }
      return { text, line }
    }
  }
}
</script>
<template>
  <body class=" flex flex-col items-center font-commissioner text-neo-Text">
    <header class=" relative w-full max-w-[425px] py-[6.875rem] pb-24 overflow-hidden">
      <nav
        class=" fixed top-0 flex justify-between items-center w-full max-w-[425px] px-6 py-10 bg-neo-white select-none z-10">
        <img :src="logo" alt="logo" draggable="false">
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
              class=" w-[199px] h-16 bg-neo-red hover:bg-white hover:text-neo-red text-[1rem] leading-[1.25rem] font-extrabold select-none">
              Schedule a Call
            </button>
          </div>
        </div>
      </nav>
      <div :class="` w-full h-[200px] mb-14 ${store.joinArr(store.bgHeader)} bg-cover`"></div>
      <div class=" px-6">
        <h1 class=" mb-6 text-[2.5rem] leading-[2.5rem] font-extrabold">
          Branding & website design agency</h1>
        <p class=" mb-10 text-[.9375rem] leading-[1.5625rem]">
          We specialize in visual storytelling by creating cohesive brand and website design
          solutions for small businesses, giving lasting impressions to audiences in a digital world.
        </p>
        <button
          class=" w-[177px] h-[72px] bg-neo-red hover:bg-opacity-60 text-neo-white text-[1.125rem] leading-[1.375rem] font-extrabold select-none">
          Learn more
        </button>
      </div>
    </header>
    <main class=" w-full max-w-[425px] text-neo-white">
      <section>
        <div :class="` relative w-full h-[200px] ${store.joinArr(store.bgStrategic)} bg-cover select-none`">
          <img class=" absolute -bottom-3 left-6 h-7" :src="pttWaveRed" alt="pttWaveRed" draggable="false">
        </div>
        <div class=" flex flex-col justify-center items-start w-full h-[377px] px-6 bg-neo-BG">
          <h2 class=" mb-6 text-[2rem] leading-[2.5rem] font-extrabold">
            <span class=" text-neo-red">Design</span> is strategic.
          </h2>
          <p class=" mb-10 text-[.9375rem] leading-[1.5625rem]">
            A well-crafted design strategy consistently produces desired outcomes and brand awareness.
            We are firm believers that success lies in creative collaboration with our clients.
          </p>
          <button @mouseenter="isBtnStratHovered = true" @mouseleave="isBtnStratHovered = false"
            class=" flex flex-col gap-2 select-none">
            <h6 :class="` text-neo-red ${getHoverColor.text} text-[.9375rem] leading-[1.125rem] font-extrabold`">
              Schedule a call</h6>
            <div :class="` w-full h-px bg-neo-red ${getHoverColor.line}`"></div>
          </button>
        </div>
      </section>
      <section class=" bg-neo-red px-6 py-24">
        <h2 class=" mb-12 text-[2rem] leading-[2.5rem] font-extrabold">
          Our approach for creating a winning brand</h2>
        <div class=" flex flex-col gap-10">
          <article v-for="item in listData" class=" relative px-4 py-11 text-[.9375rem] leading-[1.5625rem]">
            <div
              class=" absolute left-0 top-0 text-neo-white text-opacity-25 text-[5rem] leading-[5.5rem] font-extrabold select-none">
              0{{ item.id }}
            </div>
            <h4 class=" mb-4 font-extrabold">
              {{ item.header }}</h4>
            <p>
              {{ item.main }}
            </p>
          </article>
        </div>
      </section>
      <section>
        <div class=" relative w-full h-[404px]">
          <div v-for="(item, index) in store.bgSlides">
            <Transition>
              <div v-show="index == store.slideCount"
                :class="` absolute w-full h-full ${store.joinArr(item.bgs)} bg-cover bg-center`">
                <div class=" absolute bottom-0 w-full h-[111px] bg-gradient-to-b from-transparent to-neo-Text"></div>
                <div
                  class=" relative flex flex-col justify-end items-end h-full p-8 text-right text-[.9375rem] leading-[1.25rem]">
                  <h5 class=" font-extrabold">
                    {{ item.description }}</h5>
                  <h5>
                    {{ item.date }}</h5>
                </div>
              </div>
            </Transition>
          </div>
        </div>
        <div class=" flex flex-col justify-center items-start gap-6 w-full h-[272px] px-6 bg-neo-BG">
          <h2 class=" text-[2rem] leading-[2.5rem] font-extrabold">
            {{ store.bgSlides[store.slideCount].main }}</h2>
          <div class=" flex gap-4">
            <BtnArrow @click="store.decrement()" direction="left" />
            <BtnArrow @click="store.increment()" direction="right" />
          </div>
        </div>
      </section>
      <section class=" flex flex-col gap-12 px-6 py-[6.25rem]">
        <h2 class=" text-neo-Text text-[2rem] leading-[2.5rem] font-extrabold">
          Let's build something great together.</h2>
        <button
          class=" w-[199px] h-[64px] bg-neo-red hover:bg-opacity-60 text-neo-white text-[1rem] leading-[1.25rem] font-extrabold select-none">
          Schedule a Call
        </button>
      </section>
    </main>
  </body>
</template>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity .75s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>