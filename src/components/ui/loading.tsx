import { Loader2 } from 'lucide-react';

export const Icons = {
  spinner: Loader2,
};

const LoadingSpinner = () => {
  return (
    <div className='min-h-[calc(100vh-250px)]'>
      <div className='w-full h-full flex items-center justify-center pt-10'>
        <Icons.spinner className='h-10 w-10 animate-spin' />
        <p className='ml-1'>Pobieranie danych</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
