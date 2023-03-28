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
            <div className='p-5 my-5 bg-black/[0.05] rounded-xl'>
              <div className='flex justify-between'>
                <div className='uppercase text-md md:text-lg font-medium text-black'>
                  SubTotal
                </div>
                <div className='text-md md:text-lg font-medium text-black'>
                  Rs. 19695.00
                </div>
              </div>
              <div className='text-sm md:text-md py-5 border-t mt-5'>
                Dummy data is mock data generated at random as a substitute for
                live data in testing environments. In other words, dummy data
                acts as a placeholder for live ...
              </div>
            </div>
            {/* button starts checkout */}
            <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'>
              CheckOut
            </button>
            {/* button checkout emds */}
          </div>
          {/* summary ends */}
        </div>
        {/* cart content ends */}

        {/* this is empty screen */}

        {/* <div className='flex-[2] flex flex-col items-center pb-[50px] md:-mt-14'>
          <Image
            src='/empty-cart.jpg'
            height={100}
            width={100}
            alt='Empty Cart'
          />
          <span className='text-lg font-bold'>Your Cart is Empty</span>
          <span className='text-center mt-4'>
            Looks like you have not added anything in your cart
            <br />
            Go ahead and Explore top categories
          </span>
          <Link
            className='py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3'
            href='/'
          >
            Continue Shopping
          </Link>
        </div> */}
      </Wrapper>
    </div>
  );
};

export default Cart;
