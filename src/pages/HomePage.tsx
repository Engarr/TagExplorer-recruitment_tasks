import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import image from '@/assets/Stack_Overflow-Logo.wine.svg';

const HomePage = () => {
  return (
    <section className='lg:h-[calc(100vh-210px)]  h-[calc(100vh-150px)] lg:min-h-[520px] flex flex-1'>
      <div className='max-w-[998px] mx-auto  w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2'>
        <div className='w-[300px]'>
          <img src={image} />
        </div>
        <div className='h-[300px] bg-neutral-100 w-[2px] relative top-0 hidden lg:inline-block ' />
        <div className='flex flex-col items-center lg:items-start gap-y-2 lg:gap-y-8 lg:pl-8 text-neutral-600 '>
          <h1 className='text-lg lg:text-2xl font-bold  max-w-[480px] '>
            Witaj w aplikacji TagExplorer!
          </h1>
          <p className='max-w-[400px] max-lg:text-center text-sm lg:text-base'>
            Aplikacja umożliwia Ci szybkie i efektywne przeszukiwanie tagów,
            abyś mógł odnaleźć dokładnie to, czego szukasz.
          </p>
          <div className=' max-lg:w-full'>
            <Button size='lg' variant='primary' className='w-full' asChild>
              <Link to='/eksploruj'>Zaczynamy!</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
