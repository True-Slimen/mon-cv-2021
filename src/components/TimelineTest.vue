<template>
    <div class="container">
  <ul>
    <li>
      <span></span>
      <div>
        <div class="title">Codify</div>
        <div class="info">Let's make coolest things in css</div>
        <div class="type">Prensetation</div>
      </div>
      <span class="number">
        <span>10:00</span>
        <span>12:00</span>
      </span>
    </li>
    <li>
      <div>
        <span></span>
        <div class="title">Codify</div>
        <div class="info">Let's make coolest things in javascript</div>
        <div class="type">Prensetation</div>
      </div>
      <span class="number">
        <span>13:00</span>
        <span>14:00</span>
      </span>
    </li>
    <li>
      <div>
        <span></span>
        <div class="title">Codify</div>
        <div class="info">Let's make coolest things in css</div>
        <div class="type">Review</div>
      </div>
      <span class="number">
        <span>15:00</span>
        <span>17:45</span>
      </span>
    </li>
  </ul>
</div>
</template>
<script>
export default {
        components: {
        },
        props: {
        },
        data() {
            return {
                vartest: 50,
                timelineState: '',
                filterStyle: {
                    left: "-100%"
                },
                displayExp: true
            }
        },
        methods:{
            displayExperience(){
                let switchButton = document.getElementsByClassName('switch-btn');
                console.log(switchButton);
                switchButton.forEach(element => {
                    element.classList.toggle("switch-outline-btn");
                    element.classList.toggle("switch-full-btn");
                });

                if(this.displayExp == true){
                    this.displayExp = false;
                }else if(this.displayExp == false){
                    this.displayExp = true;
                }
            }
        }

    }

</script>
