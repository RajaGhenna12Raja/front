import React from 'react';
import Wrapper from '@/components/Wrapper';
import { IoMdHeartEmpty } from 'react-icons/io';
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';
import RelatedProducts from '@/components/RelatedProducts';

const ProductDetails = () => {
  return (
    <div className='w-full md:py-20'>
      <Wrapper>
        <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
          {/* left col start */}
          <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
            <ProductDetailsCarousel />
          </div>
          {/* left col ends */}
          {/* right col starts */}
          <div className='flex-[1] py-3'>
            {/* product title */}
            <div className='text-[34px] font-semibold mb-2'>
              Jordan Retro 6 G
            </div>
            {/* Product subtitle */}
            <div className='text-lg font-semibold mb-5'>
              Men&apos;s Golf Shoes
            </div>
            {/* product Price */}
            <div className='text-lg font-semibold'>MRP. Rs. 19695.00</div>
            <div className='text-md font-medium text-black/[0.5]'>
              incl. of taxes
            </div>
            <div className='text-md font-medium text-black/[0.5] mb-20'>
              {`(Also includes all applicable duties)`}
            </div>
            {/* product size range starts */}
            <div className='mb-10'>
              {/* heading start */}
              <div className='flex justify-between mb-2'>
                <div className='text-md font-semibold'>Select Size</div>
                <div className='text-md font-medium text-black/[0.5] cursor-pointer'>
                  Select Guide
                </div>
              </div>
              {/* heading ends */}

              {/* size chart starts */}
              <div className='grid grid-cols-3 gap-2'>
                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                  UK 6
                </div>
                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                  UK 7
                </div>
                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                  UK 8
                </div>
                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                  UK 9
                </div>
                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                  UK 10
                </div>
                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                  UK 10.5
                </div>
                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-not-allowed opacity-50'>
                  UK 11
                </div>
              </div>
              {/* size chart ends */}

              {/* show error starts */}
              <div className='text-red-600 mt-1'>
                Size Selection is Required
              </div>
              {/* show error ends */}
            </div>
            {/* product size range ends */}

            {/* add to cart starts */}
            <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'>
              Add to Cart
            </button>
            {/* add to cart ends */}

            {/* wishlist button starts */}
            <button className='w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10'>
              WishList
              <IoMdHeartEmpty size={20} />
            </button>
            {/* wishlist buttons ends */}

            <div>
              <div className='text-lg font-bold mb-5'>Product Details</div>
              <div className='text-md mb-5'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
              <div className='text-md mb-5'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
          </div>
          {/* right col ends */}
        </div>

        <RelatedProducts/>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
