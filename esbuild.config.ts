import { build } from 'esbuild';
import sassPlugin from 'esbuild-plugin-sass';
import cssModulesPlugin from 'esbuild-css-modules-plugin';

build({
    entryPoints: ['src/index.tsx'],
    bundle: true,
    outdir: 'dist',
    plugins: [sassPlugin(), cssModulesPlugin()],
    loader: {
        '.ts': 'ts',
        '.tsx': 'tsx',
    },
}).catch(() => process.exit(1));
