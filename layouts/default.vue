<template>
  <div
    class="container  neumorph bg-white p-8 text-left rounded-xl grid gap-4"
  >
    <slot />
  </div>
</template>

<style>
.container {
  max-width: 468px;
  max-height: 1000px;

}
.neumorph {
  box-shadow: 1px 1px 15px 2px rgba(0, 0, 0, 0.16);
}
</style>
