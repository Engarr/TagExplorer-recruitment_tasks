const Footer = () => {
  return (
    <footer className=' max-w-[1920px] py-5 lg:py-10  px-4 lg:px-20 left-1/2 relative -translate-x-1/2 text-center lg:text-end '>
      <div className='border-b-2  relative ' />
      <p className='p-2 lg:p-1 text-sm'>
        Wykonane przez:{' '}
        <a
          href='https://github.com/Engarr'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-sky-600 duration-200'>
          Łukasz Woś
        </a>
      </p>
    </footer>
  );
};

export default Footer;
