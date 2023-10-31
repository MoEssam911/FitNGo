<template>

  <Teleport to="body">
    <Transition name="modal-outer">
      <div v-show="modalActive" class="fixed z-50 top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 w-screen h-screen">
    
        <Transition name="modal-inner">
          <div v-if="modalActive" tabindex="-1" class="fixed top-0 left-0 right-0 z-50  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-md max-h-full">
              <div class="relative bg-white rounded-lg shadow">
              <button type="button" @click="$emit('close')" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
              </button>

                <div class="p-6 text-center">
                  <!--Content is placed here-->
                  <slot />
                </div>


              </div>
            </div>
          </div>
        </Transition>

      </div>
    </Transition>
  </Teleport>

</template>




<script setup>
  defineProps({
    modalActive: {
      type: Boolean,
      default: false,
    }
  })
</script>

<style scoped>

.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}

.modal-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-inner-leave-to {
  transform: scale(0.8);
}

</style>