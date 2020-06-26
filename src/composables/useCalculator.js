import {reactive, toRefs} from 'vue';

export default function useCalculator(num1, num2){
    console.log(num1, num2)
    const results = reactive({
        sum: num1 + num2,
        product: num1 * num2
    })


    return toRefs(results)
}