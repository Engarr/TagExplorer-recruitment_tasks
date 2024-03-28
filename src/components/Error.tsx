import { Button } from './ui/button';

const Error = () => {
  const refreshHandler = () => {
    window.location.reload();
  };
  return (
    <div className='min-h-[calc(100vh-250px)]'>
      <div className='w-full h-full flex flex-col  items-center justify-center gap-5'>
        <p>Ups... coś poszło nie tak.</p>
        <Button onClick={refreshHandler}>Spróbuj ponownie</Button>
      </div>
    </div>
  );
};

export default Error;
