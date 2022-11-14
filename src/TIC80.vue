<script>
export default {
  mounted() {
    let script = document.createElement('script')
    script.innerHTML="var Module={canvas:document.getElementById('canvas'),arguments:['cart.tic']};const gameFrame=document.getElementById('game-frame');const displayStyle=window.getComputedStyle(gameFrame).display;"
    document.head.appendChild(script);
    
    script = document.createElement('script')
    script.src='tic80.js'
    document.head.appendChild(script);
  }
}
</script>

<template>
  <div class="game" style="margin: 0; position: relative; background: #1a1c2c;">

    <div id="game-frame" ref="gameFrame"
      style="cursor: pointer; position: absolute; margin: 0 auto; opacity: 1; background: #1a1c2c; width: 100%; height: 100%;">
      <div
        style="text-align: center; color: white; display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;">
        <p style="margin: 0;">- CLICK TO PLAY -</p>
      </div>
    </div>

    <canvas ref="canvas" style="width: 100%; height: 100%; margin: 0 auto; display: block; image-rendering: pixelated;" id="canvas"
      oncontextmenu="event.preventDefault()" onmousedown="window.focus()"></canvas>
  </div>
</template>

<style scoped>
  #game-frame>div {
    font-size: 44px;
    font-family: monospace;
    font-weight: bold;
  }

  /* You can set custom dimensions here */
  .game {
    width: 100%;
  }

  /* Uncomment to remove the frame on top of the canvas and start the game directly */
  #game-frame {
    display: none;
  }
</style>