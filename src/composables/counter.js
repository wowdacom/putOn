import { ref } from 'vue';

export function useCounter(initialValue) {
    const count = ref(initialValue);
    const increment = () => {
        count.value += 1;
    };

    return {
        count,
        increment,
    }
}