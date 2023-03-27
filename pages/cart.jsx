import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Wrapper from '@/components/Wrapper';
import CartItem from '@/components/CartItem';

const Cart = () => {
  return (
    <div className='w-full md:py-20'>
      <Wrapper>
        {/* heading and paragraphs starts */}
        <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0'>
          <div className='text-[28px] md:text-[34px] mb-5 font-semibold loading-tight'>
            Shopping Cart
          </div>
        </div>
        {/* heading and paragraph ends */}

        {/* cart content starts */}
        <div className='flex flex-col lg:flex-row gap-12 py-10'>
          {/* cart items start */}
          <div className='flex-[2]'>
            <div className='text-lg font-bold'>Cart Items</div>
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          {/* cart items ends */}
          {/* summary starts */}
          <div className='flex-[1]'>
            <div className='text-lg font-bold'>Summary</div>
          </div>
          {/* summary ends */}
        </div>
        {/* cart content ends */}
      </Wrapper>
    </div>
  );
};

export default Cart;
