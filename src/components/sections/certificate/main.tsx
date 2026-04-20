import SectionBlock from '@/components/ui/section';
import { LinkButton } from '@/components/ui/links';

type DocumentItem = {
  title: string;
  imageUrl: string;
  imageUrlEng?: string;
};

const documents: DocumentItem[] = [
  { title: 'Свидетельство о государственной регистрации ПроффХим', imageUrl: '/certificates/svidetelstvo-gosudarstvennoj-registracii-proffhim.jpg' },
  { title: 'Свидетельство о государственной регистрации ПроффХимПлюс', imageUrl: '/certificates/svidetelstvo-gosudarstvennoj-registracii-proffhim-plus.pdf' },
  { title: 'Сертификат продукции собственного производства ПроффХим часть 1', imageUrl: '/certificates/sertifikat-sobstvennogo-proizvodstva-proffhim-chast-1.pdf' },
  { title: 'Сертификат продукции собственного производства ПроффХим часть 2', imageUrl: '/certificates/sertifikat-sobstvennogo-proizvodstva-proffhim-chast-2.pdf' },
  { title: 'Сертификат продукции собственного производства ПроффХим часть 3', imageUrl: '/certificates/sertifikat-sobstvennogo-proizvodstva-proffhim-chast-3.pdf' },
  { title: 'Сертификат продукции собственного производства ПроффХимПлюс', imageUrl: '/certificates/sertifikat-sobstvennogo-proizvodstva-proffhim-plus.pdf' },
  {
    title: 'Сертификат соответствия СТБ ISO 9001-2015',
    imageUrl: '/certificates/sertifikat-sootvetstviya-iso-9001-2015.pdf',
  },
  { title: 'Сертификат соответствия ФАС ПроффХимПлюс', imageUrl: '/certificates/sertifikat-sootvetstviya-fas-proffhim-plus.pdf' },
];

export default function CertificateMain() {
  return (
    <SectionBlock>
      <div className='flex flex-col w-full items-center lg:items-start justify-center gap-4 lg:gap-8'>
        <h2 className='w-full max-[420px]:text-lg text-center lg:text-left typo-h2 base-frame-big bg-primary p-4 lg:px-8 lg:py-6'>
          Документы и сертификаты качества
        </h2>

        <div className='w-full max-w-[500px] lg:max-w-none flex flex-col items-center justify-center gap-4 lg:gap-0'>
          {/* Заголовок */}
          <div className='w-full hidden lg:grid grid-cols-[1fr_minmax(290px,auto)] border-b-0 border-[5px] border-base-black bg-base-black'>
            <div className='p-4 lg:px-6 text-primary typo-h4 border-r-[5px] border-base-black'>Название документа</div>
            <div className='p-4 lg:px-6 text-primary typo-h4 w-full justify-center flex'>Просмотр</div>
          </div>

          {/* Строки */}
          {documents.map((doc) => (
            <div
              key={doc.title}
              className='w-full flex flex-col items-center justify-center gap-4 lg:gap-0 base-frame lg:shadow-none lg:grid lg:grid-cols-[1fr_minmax(290px,auto)] lg:border-b-0 lg:last:border-b-[5px] lg:border-[5px] lg:border-base-black p-4 lg:p-0 text-center lg:text-left'
            >
              <div className='h-full flex items-center lg:uppercase lg:p-4 typo-body lg:border-r-[5px] lg:border-base-black'>{doc.title}</div>
              <div className='flex flex-col items-center lg:items-end gap-2 lg:p-4 w-full'>
                <LinkButton
                  href={doc.imageUrl}
                  className='w-full justify-center w-full! max-w-[250px]!'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Открыть
                </LinkButton>
                {doc.imageUrlEng && (
                  <LinkButton
                    href={doc.imageUrlEng}
                    className='w-full justify-center w-full max-w-[250px]'
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
