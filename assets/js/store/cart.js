import { defineStore } from 'pinia'

export const useHelloStore = defineStore('hello', {
    state: () => {
        return {
            hello: 'Hi'
        }
    },
    actions: {
        async getHello() {
            return this.hello
        },
    },
})