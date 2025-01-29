import katex from 'katex';
import 'katex/dist/katex.min.css';

interface props {
    formula: string
}

export default function MathFormula({ formula }: props) {
  //const t = useTranslations('graham')
  //const formula = t.raw('formula');

  const html = katex.renderToString(formula, {
    throwOnError: false,
    displayMode: true, // Use displayMode for block math
  });

  return (
    <span
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
  