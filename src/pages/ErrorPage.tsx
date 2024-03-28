import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-center flex-col gap-5'>
      <p className='mr-2 font-bold text-2xl italic text-sky-500'>ERROR 404</p>
      <p>Ups... Nie ma takiej strony</p>
      <Link to='/'>
        <Button>Wróć do strony głównej</Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
