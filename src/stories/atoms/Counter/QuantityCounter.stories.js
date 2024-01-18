import { QuantityCounter } from "./QuantityCounter";

export default {
  title: "Atoms/QuantityCounter",
  component: QuantityCounter,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    initialValue: "number",
    onIncrement: "incremented",
    onDecrement: "decremented",
  },
};

export const QuantityCounterCmp = {
  args: {
    initialValue: 0,
  },
};
