import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Wrapper = ({ children }: Props) => {
  return (
    <div className=' flex flex-col max-w-[1920px] left-1/2 relative -translate-x-1/2  bg-cyan-200  '>
      {children}
    </div>
  );
};

export default Wrapper;
