import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    bgHeader: [
      'bg-[url(@/assets/images/mobile/image-hero.jpg)]',
    ],
    bgStrategic: [
      'bg-[url(@/assets/images/mobile/image-strategic.jpg)]',
    ],
    
  }),
  getters: {
    
  },
  actions: {

  }
})
