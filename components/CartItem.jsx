import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Image from 'next/image';

const CartItem = () => {
  return (
    <div className='flex py-5 gap-3 md:gap-5 border-b'>
      {/* image start */}
      <div className='shrink-0 aspect-square w-[50px] md:w-[120px]'>
        <Image
          src='/product-1.webp'
          height={100}
          width={100}
          alt='productCart'
        />
      </div>
      {/* image ends */}

      <div className='w-full flex flex-col'></div>
    </div>
  );
};

export default CartItem;
