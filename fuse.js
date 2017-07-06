const { FuseBox, WebIndexPlugin } = require('fuse-box');

const fuse = FuseBox.init({
  homeDir: 'src',
  output: 'dist/$name.js',
  plugins: [WebIndexPlugin()],
});

fuse.bundle('app').instructions(`>index.ts`);

fuse.run();
