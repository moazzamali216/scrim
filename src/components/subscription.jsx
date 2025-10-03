
import tick from '../assets/tick.png'
function Subscription() {


    return (
        <>
            <section className="w-full   ">
                <div className="lg:max-w-[948px] xl:max-w-[986px] max-w-[600px] mt-[24px]  rounded-2xl  mx-auto poppins   container ">
                    <div className='pt-[32px] pb-[60px] bg-[#F9FAFB] rounded-2xl px-[24px]  '>
                        <div className='flex items-center gap-[26px]'>
                            <div>
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.9412 18.1C9.09919 18.3736 9.32641 18.6008 9.60004 18.7588C9.87366 18.9168 10.184 18.9999 10.5 18.9999C10.816 18.9999 11.1263 18.9168 11.4 18.7588C11.6736 18.6008 11.9008 18.3736 12.0588 18.1M15 14.5001H3.3C3.12558 14.5001 2.9549 14.4495 2.80872 14.3543C2.66254 14.2592 2.54715 14.1236 2.4766 13.9641C2.40604 13.8046 2.38336 13.628 2.4113 13.4559C2.43925 13.2837 2.51662 13.1234 2.634 12.9944C3.831 11.7605 5.1 10.4492 5.1 6.40015C5.09987 5.86898 5.17811 5.34069 5.3322 4.83237M1.5 1.00021L19.5 19M7.5012 1.9092C8.31434 1.36622 9.25964 1.0542 10.2362 1.00645C11.2128 0.958689 12.1841 1.17698 13.0463 1.63803C13.9085 2.09908 14.6294 2.78558 15.132 3.62428C15.6346 4.46298 15.9 5.42239 15.9 6.40015C15.9 8.81842 16.593 10.5878 17.4363 11.8451" stroke="#EA4444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <h4 className='text-[#EA4444] font-[700] text-[21px]'>Cancel Subscription</h4>
                                <p className='font-[400] text-[#76797C] text-[21px] overflow-hidden poppins text-start'  >TT $50 billed monthly</p>
                            </div>
                        </div>
                     
                     <div className='px-[32px] pt-10'>
                           <p className=' text-[#4A5565] text-[18px] leading-[150%]'>Your subscription will remain active until the end of your current billing period. You'll lose access to all features after cancellation.</p>
                        <button className='w-[259px] py-[13px] rounded-[10px] mt-[23px] font-[700] text-white bg-[#EA4444]'>Cancel Subscription</button>
                     </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Subscription;
import { useState } from 'react';