
    <canvas >
    <div id="BG_body">
      <canvas id="webgl-canvas"></canvas>
      <script id="js-vertex-shader" type="x-shader/x-vertex">
      

      void main()	{
        attribute vec3 position;
        gl_Position = vec4(position, 1.0);
      }
      </script>
      <script id="js-fragment-shader" type="x-shader/x-fragment">

      void main() {
              precision highp float;
              uniform vec2 resolution;
              uniform float time;
              uniform float xScale;
              uniform float yScale;
              uniform float distortion;
        vec2 p = (gl_FragCoord.xy * 3.0 - resolution) / min(resolution.x, resolution.y);
        
        float d = length(p) * distortion;
        
        float rx = p.x * (1.0 + d);
        float gx = p.x;
        float bx = p.x * (1.0 - d);
      
        float r = 0.08 / abs(p.y + sin((rx + time) * xScale) * yScale);
        float g = 0.12 / abs(p.y + sin((gx + time) * xScale) * yScale);
        float b = 0.12 / abs(p.y + sin((bx + time) * xScale) * yScale);
        
        gl_FragColor = vec4(r, g, b, 1.0);
      }
      </script>
      <script src='https://cdnjs.cloudflare.com/ajax/libs/three.js/r124/three.min.js'></script>
      <script  src="./script.js"></script>
      </div>
    <div id="root"></div>
  </canvas>