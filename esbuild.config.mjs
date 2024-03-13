import sassPlugin from 'esbuild-plugin-sass';
import cssModulesPlugin from 'esbuild-css-modules-plugin';

export default {
    entryPoints: ['src/index.tsx'],
    bundle: true,
    minify: false,
    outdir: 'dist',
    plugins: [sassPlugin(), cssModulesPlugin()],
    loader: {
        '.ts': 'ts',
        '.tsx': 'tsx',
        '.scss': 'css',
    },
    tsconfig: 'tsconfig.json',
};
