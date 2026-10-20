type JsonValue = string | number | boolean | null | undefined | JsonValue[] | { [key: string]: JsonValue };

// Экранирование не позволяет содержимому материала закрыть script-тег.
export default function JsonLd({ data }: { data: { [key: string]: JsonValue } }) {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
