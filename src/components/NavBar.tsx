import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <div className='max-w-[1920px] w-full lg:py-10 py-0  pt-5 px-4 lg:px-20 left-1/2 relative -translate-x-1/2 '>
        <div className=' mb-2 lg:mb-5 bgc'>
          <div className='max-w-[200px] '>
            <Link to='/'>
              <p
                className={`font-sintony text-xl lg:text-2xl text-sky-500 font-bold  `}>
                TagExplorer
              </p>
            </Link>
          </div>
        </div>
        <div className='border-b-2  relative border-neutral-100' />
      </div>
    </nav>
  );
};

export default NavBar;
