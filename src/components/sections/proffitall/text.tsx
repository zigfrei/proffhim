import { Fragment } from 'react';

function InlineText({ text }: { text: string }) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) =>
    part.startsWith('**') ? <strong key={index}>{part.slice(2, -2)}</strong> : <Fragment key={index}>{part}</Fragment>,
  );
}

type TextBlock = { readonly type: 'paragraph'; readonly text: string } | { readonly type: 'list'; readonly items: readonly string[] };

export default function ArticleText({ blocks }: { blocks: readonly TextBlock[] }) {
  return blocks.map((block, index) => block.type === 'list' ? (
    <ul key={index} className='list-disc space-y-2 pl-6 typo-b2'>
      {block.items.map((item) => <li key={item}><InlineText text={item} /></li>)}
    </ul>
  ) : (
    <p key={index} className='typo-b2'><InlineText text={block.text} /></p>
  ));
}
