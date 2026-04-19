import {SectionBlockSmall} from '@/components/ui/section';
import Image from 'next/image';
import { PhoneIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';


const teamMembers = [
  {
    name: 'Ревазашвили Владимир Александрович',
    position: 'Директор',
    photo: '/team/Revazashvili_V.png',
    tel1: '+375 152 605277',
    tel2: '+375 29 780-39-76',
  },
  {
    name: 'Махно Наталья Алексеевна',
    position: 'Коммерческий директор',
    photo: '/team/Mahno_N.png',
    tel1: '+375 152 605277',
    tel2: '+375 29 265-90-68',
  },
  {
    name: 'Чудиловская Ирина Николаевна',
    position: 'Ведущий специалист по продажам профессиональной химии в сегментенте B2B',
    photo: '/team/Chudilovskaya_I.png',
    tel2: '+375 29 331-49-26',
  },
  {
    name: 'Карнилович Анна Валентиновна',
    position: 'Ведущий специалист по продажам бытовой химии',
    photo: '/team/Karnilovich_A.png',
    tel2: '+375 29 665-57-70',
  },
    {
    name: 'Шпадарук Александр Николаевич',
    position: 'Начальник производства',
    photo: '/team/Shpadaruk_A.png',
    tel1: '+375 152 605177',
  },
      {
    name: 'Бельчикова Вероника Владимировна',
    position: 'Начальник лаборатории',
    photo: '/team/Belchikova_V.png',
    tel2: '+375 44 5183039',
  },
];

export default function Team() {
  return (
    <SectionBlockSmall>
      <div className='w-full flex flex-col items-start justify-center gap-4 lg:gap-8 mb-8'>
        <h2 className='w-full typo-h2'>Наша команда</h2>
        <div className='w-full flex items-center justify-center gap-4 flex-wrap'>
          {teamMembers.map((member) => (
            <div key={member.name} className='w-full flex-1 self-stretch flex flex-col items-start gap-2 base-frame p-4'>
              
              <Image src={member.photo} alt={member.name} width={768} height={512} className='w-full border-[5px] border-base-black' />
              <h3 className='typo-h4'>{member.name}</h3>
              <p className='typo-body'>{member.position}</p>
              <div className='w-full flex flex-col items-start justify-between gap-1'>
              {member.tel1 && (
                <a href={`tel:${member.tel1}`} className='hover:text-primary transition-colors duration-200 flex items-center gap-1'>
                  <PhoneIcon className='w-5 h-5 inline-block' />
                  {member.tel1}
                </a>
              )}
              {member.tel2 && (
                <a href={`tel:${member.tel2}`} className='hover:text-primary transition-colors duration-200 flex items-center gap-1'>
                  <DevicePhoneMobileIcon className='w-5 h-5 inline-block' />
                  {member.tel2}
                </a>
              )}</div>
            </div>
          ))}
        </div>
      </div>
    </SectionBlockSmall>
  );
}