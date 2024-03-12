import * as esbuild from 'esbuild';
import buildConfig from './esbuild.config.mjs';

const isWatchMode = process.argv.includes('--watch');

if (isWatchMode) {
    let ctx = await esbuild.context(buildConfig);

    try {
        await ctx.watch();
        console.log('watching...');
    } catch {
        process.exit(1);
    }
} else {
    esbuild.build(buildConfig).catch(() => process.exit(1));
}
