<script lang="ts" setup>
import { defineCustomElement } from 'vue';

// === State Management ===
const state = reactive({
  fruits: ['apple', 'banana', 'cherry', 'durian'],
});

const FruitDisplay = defineComponent(
  (props) => {
    return () => {
      // render function or JSX
      return h('span', props.fruit)
    };
  },
  // extra options, e.g. declare props and emits
  {
    props: {
      fruit: { type: String, default: '-' },
    },
  },
);
</script>

<template>
  <span>
    <h1>v-for v.2</h1>

    <TransitionGroup name="list">
      <!-- Note: if key is set to index, transition does not work -->
      <div
        v-for="(fruit, index) in state.fruits"
        :key="fruit"
      >
        {{ index }}. <FruitDisplay :fruit="fruit" />
      </div>
    </TransitionGroup>

    <button type="button" @click="() => { state.fruits.sort(() => Math.random() - 0.5); }">Shuffle</button>
  </span>
</template>

<style scoped>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
