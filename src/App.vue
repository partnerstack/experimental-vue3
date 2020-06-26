<template>
  <div>
    <h1>My Event</h1>
    <p>Office Capacity: {{ capacity }}</p>
    <p>Number of Pods: {{ numberOfPods }}</p>
    <p>Overflow: {{ overflow }}</p>
    <p>Cost: ${{ cost }}</p>
    {{ deepness }}
    <button @click="increaseCapacity()">Increase Capacity</button>
    {{ sum }}
    {{ product }}
    <!-- attendee card -->
    <CapacityCalc name="janks" />
  </div>
</template>

<script>
// import { ref } from "@vue/composition-api"; // <-- Use this line if you're in a Vue 2 app with the composition API plugin
import { ref, computed, reactive } from "vue"; // <-- Use this line if you're in a Vue 3 app
import useCalculator from "./composables/useCalculator";

export default {
  setup(props, context) {
    console.log(props, context);
    // console.log(CapacityCalc);
    const capacity = ref(243);

    const state = reactive({
      capacity: 243,
      deep: {
        wow: "so deep"
      }
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
      state.capacity++;
    }
    // const test = numberOfPods.value;
    // const test1 = overflow.value;

    const { sum, product } = useCalculator(overflow.value, cost.value);

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
