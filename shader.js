// Initialize shader-web-background
shaderWebBackground.shade({
  shaders: {
    darkveil: {
      uniforms: {
        uTime: (gl, loc) => {
          const start = performance.now();
          function animate() {
            gl.uniform1f(loc, (performance.now() - start) / 1000);
            requestAnimationFrame(animate);
          }
          animate();
        }
      }
    }
  }
});
