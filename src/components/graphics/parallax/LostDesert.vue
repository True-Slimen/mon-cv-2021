<template>
  <div>
    <kinesis-container class="">
      <div class="LostDesertContainer container">
            <!-- <img
              class="mx-auto w-100"
              src="image/portfolio/illustration/parallax/purple-desert/frame-10.png"
            /> -->
          <kinesis-element :strength="20">
            <img
              class="mx-auto parallaxImg"
              src="image/portfolio/illustration/parallax/desert-parallax/frame-3.png"
            />
          </kinesis-element>
          <kinesis-element :strength="50">
            <img
              class="mx-auto parallaxImg desert-dune-2"
              src="image/portfolio/illustration/parallax/desert-parallax/frame-4-bis.png"
            />
          </kinesis-element>
          <kinesis-element :strength="-50">
            <img
              class="mx-auto parallaxImg"
              src="image/portfolio/illustration/parallax/desert-parallax/frame-1.png"
            />
          </kinesis-element>
      </div>
    </kinesis-container>
  </div>
</template>

<style scoped>
</style>

<script>

export default {
  components: {
  },
  props: {},
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
<style>


/* .PurpleDesertContainer {
  position: absolute;
} */

.top-80{
  top: -80px;
}
.top-110{
  top: -110px;
}
.top-50{
  top: -50px;
}

.w-150{
    width: 113%!important;
    left: -5%;
    top: -100px;
}

.parallaxImg {
  position: absolute;
  width: 110%;
}
/*

.monolithImg img {
  width: 100%;
}

.shadowmonolith {
  top: 0;
} */

</style>