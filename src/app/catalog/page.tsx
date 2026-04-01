import CatalogMain from '@/components/sections/catalog/main';

export const metadata = {
  title: "Продукция | ПроффХим",
  description: "Каталог продукции ПроффХим: карточки товаров с характеристиками и удобной фильтрацией по категориям, назначению и параметрам. Широкий ассортимент моющих, чистящих и дезинфицирующих средств, пищевых добавок и промышленной химии для предприятий. Найдите идеальное решение для вашего бизнеса с ПроффХим.",
};


export default function Contacts() {
  return (
    <main className='flex flex-col items-center justify-center w-full'>
      <CatalogMain />
    </main>
  );
}