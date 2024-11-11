import { defineConfig} from 'vite';
import dtsPlugin from 'vite-plugin-dts';
const name="solidjs-typed-classlist";

export default defineConfig({
  plugins: [
    dtsPlugin(
      { 
        tsconfigPath: './tsconfig.json',
        entryRoot: 'src',
       }
    ),
  ],
  build: {
    lib: {
      entry: 'src/solidjs-typed-classlist.ts',
      name: name,
      fileName: `${name}`.js,
      sourcemap: true,

    }
  },
});
