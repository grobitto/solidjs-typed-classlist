// vite.config.mjs
import { defineConfig } from "file:///D:/_work/code/inlite-npm/solidjs-typed-classlist/node_modules/vite/dist/node/index.js";
import dtsPlugin from "file:///D:/_work/code/inlite-npm/solidjs-typed-classlist/node_modules/vite-plugin-dts/dist/index.mjs";
var name = "solidjs-typed-classlist";
var vite_config_default = defineConfig({
  plugins: [
    dtsPlugin(
      {
        tsconfigPath: "./tsconfig.json",
        declarationOnly: true
      }
    )
  ],
  build: {
    lib: {
      entry: "src/solidjs-typed-classlist.ts",
      name,
      fileName: `${name}`.js,
      sourcemap: true
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubWpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcX3dvcmtcXFxcY29kZVxcXFxpbmxpdGUtbnBtXFxcXHNvbGlkanMtdHlwZWQtY2xhc3Nlc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcX3dvcmtcXFxcY29kZVxcXFxpbmxpdGUtbnBtXFxcXHNvbGlkanMtdHlwZWQtY2xhc3Nlc1xcXFx2aXRlLmNvbmZpZy5tanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L193b3JrL2NvZGUvaW5saXRlLW5wbS9zb2xpZGpzLXR5cGVkLWNsYXNzZXMvdml0ZS5jb25maWcubWpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IGR0c1BsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xyXG5jb25zdCBuYW1lPVwic29saWRqcy10eXBlZC1jbGFzc2VzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIGR0c1BsdWdpbihcclxuICAgICAgeyB0c2NvbmZpZ1BhdGg6ICcuL3RzY29uZmlnLmpzb24nLFxyXG4gICAgICAgIGRlY2xhcmF0aW9uT25seTogdHJ1ZSxcclxuICAgICAgIH1cclxuICAgICksXHJcbiAgXSxcclxuICBidWlsZDoge1xyXG4gICAgbGliOiB7XHJcbiAgICAgIGVudHJ5OiAnc3JjL3NvbGlkanMtdHlwZWQtY2xhc3Nlcy50cycsXHJcbiAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgIGZpbGVOYW1lOiBgJHtuYW1lfWAuanMsXHJcbiAgICAgIHNvdXJjZW1hcDogdHJ1ZSxcclxuXHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1UsU0FBUyxvQkFBbUI7QUFDcFcsT0FBTyxlQUFlO0FBQ3RCLElBQU0sT0FBSztBQUVYLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQO0FBQUEsTUFDRTtBQUFBLFFBQUUsY0FBYztBQUFBLFFBQ2QsaUJBQWlCO0FBQUEsTUFDbEI7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTztBQUFBLE1BQ1A7QUFBQSxNQUNBLFVBQVUsR0FBRyxJQUFJLEdBQUc7QUFBQSxNQUNwQixXQUFXO0FBQUEsSUFFYjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
