<template>
  <div class="col-2 nav-section-wrapper ml-auto">
    <div class="row nav-section-up scroll-icon-row col-12 justify-content-center">
        <a class="border rounded-50 scroll-icon-wrapper" :href="linkUp">
            <img class="scroll-icon icon-up" src="image/icon/up-arrow-small.png" alt="naviguer vers la section Mes compétences">
        </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    linkUp: {
      type : String,
      required: true
    }
  }
};
</script>
