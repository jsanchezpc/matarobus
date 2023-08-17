<template>
  <div id="home">
    <div id="line-selector">
      <div id="number">
        <p>1</p>
      </div>
      <div id="line_info">
        <p id="direction">Renfe > Hospital</p>
        <span
          style="color: #ff69a9; font-size: 1em; margin-left: 0.1em;"
          class="material-symbols-outlined"
        >
          swap_horiz
        </span>
        <br />
        <p id="stop_name">Pl Granollers</p>
        <span style="color: #ff69a9;" class="material-symbols-outlined">
          arrow_drop_down
        </span>
        <p id="estimated_time">16:20</p>
      </div>
    </div>
    <div class="wavy-bg"></div>
    <BusModel />
    <input class="big-button big1" type="button" value="Cambiar bus" />
    <input class="big-button big2" type="button" value="Info" />
    <div id="settings">
      <span class="material-symbols-outlined settings-icon"> settings </span>
    </div>
  </div>
</template>

<script>
import BusModel from "@/components/BusModel.vue";
export default {
  components: {
    BusModel,
  },
  setup() {
    console.log("yes");
  },
};
</script>

<style scoped>
div#home {
    font-family: 'Hind', sans-serif;
}

div#line-selector {
    background-color: black;
    position: fixed;
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 5.8em;
    top: 2em;
    margin: 0 auto;
    left: 0;
    right: 0;
    border-radius: 1em;
    box-shadow: 0px 4px 17px black;
    z-index: 99999;
}

div#number {
    flex: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1em;
    background-color: rgb(8, 8, 8);
    border-style: dotted;
    border-width: 6.5px;
    border-color: rgb(203, 144, 34);
}

div#number p {
    text-align: center;
    color: white;
    margin: 0;
    font-size: 24px;
    font-weight: bolder;
}

div#line_info {
    flex: 70%;
    /* display: flex; */
    align-items: center;
    justify-content: center;
    /* Center horizontally */
}

div#line_info p {
    color: white;
    margin: 0;
    margin-left: 0.4em;
    color: white;
    display: inline;
}

div#line_info p#direction {
    font-size: 14px;
    color: white;
}

div#line_info p#stop_name {
    font-size: 24px;
}

div#line_info p#estimated_time {
    font-size: 24px;
    float: right;
    margin-right: 0.1em;
    color: #ff69a9;
}

.wavy-bg {
    position: absolute;
    top: 20%;
    rotate: 30deg;
    left: calc(100dvw - 85%);
    border-top-left-radius: 5em;
    border-top-right-radius: 6em;
    border-bottom-left-radius: 8em;
    border-bottom-right-radius: 7em;
    height: 30%;
    width: 65%;
    background-color: white;
}

input.big-button {
    height: 60px;
    width: 50%;
    border-radius: 30px;
    border: none;
    background-color: transparent;
    box-shadow: 0px 13px 17px black;
    font-size: 1em;
    color: #ff69a9;

}

input.big1 {
    position: absolute;
    bottom: 25%;
    right: 2em;
}

input.big2 {
    position: absolute;
    bottom: 15%;
    right: 2em;
}

div#settings {
    position: absolute;
    bottom: 15%;
    left: 2em;
}

span.settings-icon {
    font-size: 3.5em;
    color: #e7e7e7;
    border-radius: 100%;
}
</style>
