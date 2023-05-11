import { ReactNode } from 'react';

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="xl container mx-auto my-0 flex items-center justify-between px-5 py-2">
      {children}
    </div>
  );
};
