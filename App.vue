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
    <header class=" relative w-full max-w-[425px] TB:max-w-[1024px] pt-[6.875rem] TB:pt-0 pb-24 TB:pb-0 overflow-hidden">
      <nav
        class=" fixed TB:relative top-0 flex justify-between items-center w-full max-w-[425px] TB:max-w-[1024px] px-6 py-10 TB:py-0 TB:pl-10 TB:pr-0 bg-neo-white select-none z-10">
        <img :src="logo" alt="logo" draggable="false">
        <!-- Nav Mobile -->
        <button @click=" isNavOpen = !isNavOpen"
          class=" relative flex TB:hidden justify-center items-center w-[24px] h-[24px]">
          <Transition name="fade-nav">
            <img v-show="!isNavOpen" class=" absolute" :src="iconHamburger" alt="iconHamburger" draggable="false">
          </Transition>
          <Transition name="fade-nav">
            <img v-show="isNavOpen" class=" absolute" :src="iconCross" alt="iconCross" draggable="false">
          </Transition>
        </button>
        <Transition name="fade-nav">
          <div v-show="isNavOpen" class=" absolute top-full left-0 flex TB:hidden flex-col w-full pr-7">
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
        </Transition>
        <!--  -->
        <!-- Nav Desktop -->
        <div class=" hidden TB:flex gap-7 bg-neo-red py-14 pl-8 pr-10">
          <div class=" flex gap-[1.25rem]">
            <button v-for="item in navData" class=" w-14 text-neo-white text-[.9375rem] leading-[2rem] hover:font-bold">
              {{ item }}
            </button>
          </div>
          <button
            class=" w-[147px] h-[64px] bg-neo-BG hover:bg-neo-one text-neo-white text-[1rem] leading-[1.25rem] font-extrabold">
            Schedule a Call
          </button>
        </div>
        <!--  -->
      </nav>
      <div class=" relative flex flex-col TB:flex-row items-center TB:h-[606px]">
        <div
          :class="` TB:absolute TB:right-0 w-full h-[200px] TB:w-[57%] TB:h-full mb-14 TB:mb-0 ${store.joinArr(store.bgHeader)} bg-cover bg-center bg-no-repeat`">
        </div>
        <div class=" TB:relative TB:w-[51.75%] TB:ml-10 TB:pb-[4.25rem] px-6 TB:px-0">
          <h1 class=" mb-6 TB:mb-7 text-[2.5rem] TB:text-[3.5rem] leading-[2.5rem] TB:leading-[3.5rem] font-extrabold">
            Branding & website design agency</h1>
          <p class=" mb-10 TB:mb-8 text-[.9375rem] leading-[1.5625rem]">
            We specialize in visual storytelling by creating cohesive brand and website design
            solutions for small businesses, giving lasting impressions to audiences in a digital world.
          </p>
          <button
            class=" w-[177px] h-[72px] bg-neo-red hover:bg-opacity-60 text-neo-white text-[1.125rem] leading-[1.375rem] font-extrabold select-none">
            Learn more
          </button>
        </div>
      </div>
    </header>
    <main class=" w-full max-w-[425px] TB:max-w-[1024px] text-neo-white">
      <section class=" flex flex-col TB:flex-row items-start TB:h-[658px]">
        <div
          :class="` relative w-full TB:w-[49.3%] h-[200px] TB:h-full ${store.joinArr(store.bgStrategic)} bg-cover TB:bg-center select-none`">
          <img class=" absolute -bottom-3 TB:bottom-[30rem] left-6 TB:left-auto TB:-right-6 h-7" :src="pttWaveRed"
            alt="pttWaveRed" draggable="false">
        </div>
        <div
          class=" flex flex-col justify-center items-start w-full TB:w-[50.7%] h-[377px] TB:h-[538px] px-6 TB:px-[4.375rem] bg-neo-BG">
          <h2 class=" mb-6 TB:mb-8 TB:pr-8 text-[2rem] leading-[2.5rem] font-extrabold">
            <span class=" text-neo-red">Design</span> is strategic.
          </h2>
          <p class=" mb-10 TB:mb-8 text-[.9375rem] leading-[1.5625rem]">
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
      <section class=" relative TB:flex TB:justify-end bg-neo-red TB:bg-transparent TB:mt-[-7.5rem] px-6 py-24 TB:p-0">
        <h2
          class=" TB:absolute TB:left-10 TB:top-64 TB:w-[36.6%] mb-12 TB:mb-0 TB:text-neo-Text text-[2rem] leading-[2.5rem] font-extrabold">
          Our approach for creating a winning brand</h2>
        <div
          class=" flex flex-col gap-10 TB:gap-[5.25rem] TB:w-[57%] TB:bg-neo-red TB:pl-11 TB:pr-10 TB:pt-[10.5rem] TB:pb-[7rem]">
          <article v-for="item in listData" class=" relative px-4 py-11 TB:p-0 text-[.9375rem] leading-[1.5625rem]">
            <div
              class=" absolute left-0 TB:-left-4 top-0 TB:-top-11 text-neo-white text-opacity-25 text-[5rem] leading-[5.5rem] font-extrabold select-none">
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
            <Transition name="fade-slide">
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
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity .75s ease;
}

.fade-nav-enter-active,
.fade-nav-leave-active {
  transition: opacity .15s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to,
.fade-nav-enter-from,
.fade-nav-leave-to {
  opacity: 0;
}
</style>