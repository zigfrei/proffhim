const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true';

const SITE_URL = 'https://proffhim.by';

export const dynamic = 'force-static';

export function GET(): Response {
  const indexingRule = allowIndexing ? 'Allow: /' : 'Disallow: /';
  const body = [
    'User-Agent: *',
    indexingRule,
    '',
    'Clean-param: etext',
    '',
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Cache-Control': 'public, max-age=3600',
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
