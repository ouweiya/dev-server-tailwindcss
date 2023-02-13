import postcss from 'postcss';
import postcssConfig from 'postcss-load-config';

export default function DevServerTailwindcss() {
  return {
    name: 'dev-server-tailwindcss',
    async transform(context) {
      if (context.path.endsWith('.css')) {
        const config = await postcssConfig();
        const result = await postcss(config.plugins).process(context.body, { from: context.path, to: context.path });
        return {
          body: result.css,
          transformCache: false,
        };
      }
    },
  };
}
