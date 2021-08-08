<template>
  <div>
    <kinesis-container class="monolithSection">
      <div class="monolithContainer container mx-auto">
        <div class="monolithWrap col-md-4">
          <kinesis-element :strength="0">
            <img
              class="mx-auto monolithImg shadowmonolith"
              src="image/portfolio/illustration/parallax/monolith/mono-fond.png"
            />
          </kinesis-element>
          <kinesis-element :strength="-20" axis="x">
            <img
              class="mx-auto monolithImg shadowmonolith"
              src="image/portfolio/illustration/parallax/monolith/mono-1-shadow.png"
            />
          </kinesis-element>
          <kinesis-element :strength="-30">
            <img
              class="mx-auto monolithImg shadowmonolith monolith"
              src="image/portfolio/illustration/parallax/monolith/mono-1.png"
            />
          </kinesis-element>
          <kinesis-element :strength="10">
            <img
              class="mx-auto monolithImg lightMonolith"
              src="image/portfolio/illustration/parallax/monolith/mono-2.png"
            />
          </kinesis-element>
          <kinesis-element :strength="20" axis="x">
            <img
              class="mx-auto monolithImg shadowmonolith"
              src="image/portfolio/illustration/parallax/monolith/mono-2-shadow.png"
            />
          </kinesis-element>
          <kinesis-element :strength="30">
            <img
              class="mx-auto monolithImg moveMediumMonolith"
              src="image/portfolio/illustration/parallax/monolith/mono-3.png"
            />
          </kinesis-element>
          <kinesis-element :strength="40" axis="x">
            <img
              class="mx-auto monolithImg shadowmonolith"
              src="image/portfolio/illustration/parallax/monolith/mono-3-shadow.png"
            />
          </kinesis-element>
          <kinesis-element :strength="50">
            <img
              class="mx-auto monolithImg veryLightMonolith"
              src="image/portfolio/illustration/parallax/monolith/mono-4.png"
            />
          </kinesis-element>
          <kinesis-element :strength="60" axis="x">
            <img
              class="mx-auto monolithImg shadowmonolith"
              src="image/portfolio/illustration/parallax/monolith/mono-4-shadow.png"
            />
          </kinesis-element>
        </div>
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
      illustrator: {
        illustrator: {
          name: "illustrator",
          displayName: "Illustrator",
          alt: "Illustrator",
        },
        photoshop: {
          name: "photoshop",
          displayName: "Photoshop",
          alt: "Photoshop",
        },
      },
      popupActivo2: false,
      picturePath: "",
    };
  },
  methods: {
    openModal(path) {
      this.popupActivo2 = true;
      this.picturePath = path;
    },
  },
};
</script>
<style>
NavDarkExternal {
  position: fixed;
}
navbar {
  background-color: #e6e6e6 !important;
}

.monolithSection {
  height: 100vh;
}

.monolithWrap {
  height: 100%;
}

.monolithContainer {
  position: relative;
}

.monolithImg {
  position: absolute;
}

.monolithImg img {
  height: 100%;
}

.shadowmonolith {
  top: 0;
}

@keyframes moveMonolith {
  from {
    top: 0px;
  }

  to {
    top: 20px;
  }
}

.monolith {
  animation: moveMonolith 3s alternate infinite ease-in-out;
}

@keyframes moveMediumMonolith {
  from {
    top: 15px;
  }

  to {
    top: 0px;
  }
}

.moveMediumMonolith {
  animation: moveMediumMonolith 2s alternate infinite ease-in-out;
}

@keyframes moveLightMonolith {
  from {
    top: 10px;
  }

  to {
    top: 0px;
  }
}

.lightMonolith {
  animation: moveLightMonolith 1s alternate infinite ease-in-out;
}

@keyframes moveVeryLightMonolith {
  from {
    top: 5px;
  }

  to {
    top: 0px;
  }
}

.veryLightMonolith {
  animation: moveVeryLightMonolith 0.5s alternate infinite ease-in-out;
}

@media (min-width: 1520px) {
  .container,
  .container-sm,
  .container-md,
  .container-lg,
  .container-xl {
    max-width: 1480px;
  }
}

@media (max-width: 768px) {
  .monolithContainer {
    height: 50vh;
  }

  @keyframes moveMonolith {
    from {
      top: 0px;
    }

    to {
      top: 10px;
    }
  }

  @keyframes moveMediumMonolith {
    from {
      top: 7px;
    }

    to {
      top: 0px;
    }
  }

  @keyframes moveLightMonolith {
    from {
      top: 5px;
    }

    to {
      top: 0px;
    }
  }

  @keyframes moveVeryLightMonolith {
    from {
      top: 5px;
    }

    to {
      top: 0px;
    }
  }
}
</style>