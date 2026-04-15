import SectionBlock from '@/components/ui/section';
import { LinkButton } from '@/components/ui/links';

type DocumentItem = {
  title: string;
  imageUrl: string;
  imageUrlEng?: string;
};

const documents: DocumentItem[] = [
  { title: 'Свидетельство о государственной регистрации юридического лица', imageUrl: '/certificates/gov_sert.jpg' },
  {
    title: 'Сертификат соответствия',
    imageUrl: '/certificates/iso_sert.jpg',
    imageUrlEng: '/certificates/iso_e.jpg',
  },
  {
    title: 'Сертификат соответствия ФАС',
    imageUrl: '/certificates/fas.pdf',
  },
];

export default function CertificateMain() {
  return (
    <SectionBlock>
      <div className='flex flex-col w-full items-center lg:items-start justify-center gap-4 lg:gap-8'>
        <h2 className='w-full max-[420px]:text-lg typo-h2 base-frame-big bg-primary p-4 lg:px-8 lg:py-6'>
          Документы и сертификаты качества
        </h2>

        <div className='w-full max-w-[500px] lg:max-w-none flex flex-col items-center justify-center gap-4 lg:gap-0'>
          {/* Заголовок */}
          <div className='w-full hidden lg:grid grid-cols-[1fr_minmax(290px,auto)] border-b-0 border-[5px] border-base-black'>
            <div className='p-4 lg:px-6 typo-h4 border-r-[5px] border-base-black'>Название документа</div>
            <div className='p-4 lg:px-6 typo-h4 w-full justify-center flex'>Просмотр</div>
          </div>

          {/* Строки */}
          {documents.map((doc) => (
            <div
              key={doc.title}
              className='w-full flex flex-col items-center justify-center gap-4 lg:gap-0 base-frame lg:shadow-none lg:grid lg:grid-cols-[1fr_minmax(290px,auto)] lg:border-b-0 lg:last:border-b-[5px] lg:border-[5px] lg:border-base-black p-4 lg:p-0 text-center lg:text-left'
            >
              <div className='h-full flex items-center lg:uppercase lg:p-4 typo-body lg:border-r-[5px] lg:border-base-black'>{doc.title}</div>
              <div className='flex flex-col items-end gap-2 lg:p-4'>
                <LinkButton
                  href={doc.imageUrl}
                  className='w-full justify-center'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Открыть
                </LinkButton>
                {doc.imageUrlEng && (
                  <LinkButton
                    href={doc.imageUrlEng}
                    className='w-full justify-center'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Открыть (ENG)
                  </LinkButton>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionBlock>
  );
}
