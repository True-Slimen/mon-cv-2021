<template>
  <div class="col-2 nav-section-wrapper ml-auto">
    <div class="row nav-section-down scroll-icon-row col-12 justify-content-center">
        <a class="border rounded-50 scroll-icon-wrapper" :href="linkDown">
            <img class="scroll-icon icon-down" src="image/icon/down-arrow-white.png" alt="naviguer vers la section Mes compétences">
        </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    linkDown: {
      type : String,
      required: true
    }
  }
};
</script>
