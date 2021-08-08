<template>
  <div>
    <kinesis-container class="">
      <div class="PurpleDesertContainer container">
            <!-- <img
              class="mx-auto w-100"
              src="image/portfolio/illustration/parallax/purple-desert/frame-10.png"
            /> -->
          <kinesis-element :strength="5">
            <img
              class="mx-auto parallaxImg"
              src="image/portfolio/illustration/parallax/purple-desert/frame-9.png"
            />
          </kinesis-element>
          <kinesis-element :strength="10">
            <img
              class="mx-auto parallaxImg"
              src="image/portfolio/illustration/parallax/purple-desert/frame-8.png"
            />
          </kinesis-element>
          <kinesis-element :strength="15">
            <img
              class="mx-auto parallaxImg"
              src="image/portfolio/illustration/parallax/purple-desert/frame-7.png"
            />
          </kinesis-element>
          <kinesis-element :strength="25">
            <img
              class="mx-auto parallaxImg"
              src="image/portfolio/illustration/parallax/purple-desert/frame-6.png"
            />
          </kinesis-element>
          <kinesis-element :strength="30">
            <img
              class="mx-auto parallaxImg"
              src="image/portfolio/illustration/parallax/purple-desert/frame-5.png"
            />
          </kinesis-element>
          <kinesis-element :strength="50">
            <img
              class="mx-auto parallaxImg top-110"
              src="image/portfolio/illustration/parallax/purple-desert/frame-4.png"
            />
          </kinesis-element>
          <kinesis-element :strength="70">
            <img
              class="mx-auto parallaxImg top-80 w-150"
              src="image/portfolio/illustration/parallax/purple-desert/frame-3.png"
            />
          </kinesis-element>
          <kinesis-element :strength="90">
            <img
              class="mx-auto parallaxImg top-80"
              src="image/portfolio/illustration/parallax/purple-desert/frame-2.png"
            />
          </kinesis-element>
          <kinesis-element :strength="110">
            <img
              class="mx-auto parallaxImg"
              src="image/portfolio/illustration/parallax/purple-desert/frame-1.png"
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


/* .monolithWrap {
  height: 100%;
}
  */

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