import { lusitana } from '../../app/ui/fonts';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function AcmeLogo() {
  return (
    <div className={`flex items-center gap-2 ${lusitana.className}`}>
      <GlobeAltIcon className="h-8 w-8 text-white md:h-12 md:w-12" />
      <span className="text-xl font-bold text-white md:text-3xl">Acme</span>
    </div>
  );
}
