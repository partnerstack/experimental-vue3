<template>
  <div>
    <h1>My Event</h1>
    <p>Office Capacity: {{ capacity }}</p>
    <p>Number of Pods: {{ numberOfPods }}</p>
    <p>Overflow: {{ overflow }}</p>
    <p>Cost: ${{ cost }}</p>
    {{ deepness }}
    <button @click="increaseCapacity">Increase Capacity</button>
    Sum: {{ sum }}
    Product: {{ product }}
  </div>
</template>

<script>
import { computed, reactive, watch, toRefs } from "vue"; // <-- Use this line if you're in a Vue 3 app
import useCalculator from "./composables/useCalculator";

export default {
  setup(props, context) {
    console.log(props, context);
    // const capacity = ref(250);
    // const sum = ref(0);
    // const product = ref(0);

    const state = reactive({
      capacity: 243,
      deep: {
        wow: "so deep"
      },
      sum: 0,
      product: 0
    });
    const deepness = computed(() => state.deep.wow);

    state.deep.wow = "increasingly deep";

    const podSize = 5;

    const numberOfPods = computed(() => {
      return Math.floor(state.capacity / podSize);
    });

    const overflow = computed(() => {
      return state.capacity % podSize;
    });

    const cost = computed(() => {
      return (numberOfPods.value * 25.33).toFixed(2);
    });

    function increaseCapacity() {
      return state.capacity++;
    }

    watch(
      () => state.capacity,
      (overflow, cost) => {
        const { sum, product } = useCalculator(overflow, cost);
        state.sum = sum.value;
        state.product = product.value;
      }
    );

    const { capacity, sum, product } = toRefs(state);

    return {
      capacity,
      increaseCapacity,
      numberOfPods,
      overflow,
      cost,
      deepness,
      sum,
      product
    };
  }
};
</script>
