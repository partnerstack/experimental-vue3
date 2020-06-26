import { reactive, toRefs } from "vue";

export default function useCalculator(overflow, cost) {
  console.log("Usecalculator", overflow, cost);
  const results = reactive({
    sum: overflow + cost,
    product: overflow * cost,
  });

  return toRefs(results);
}
