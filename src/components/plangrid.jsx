
import tick from '../assets/tick.png'
function PlanGrid() {


    return (
        <>
            <section className="w-full  mt-[24px]  ">
                <div className="max-w-[986px] py-[28px] px-[24px]   mx-auto poppins   container ">
                    <h5 className="text-[#2A2A2A] text-start text-[21px] font-[700] poppins">Available Plans</h5>
                    <div className='grid gap-x-4 grid-cols-3 mt-4'>
                        <div className='border rounded-[16px] border-[#E5E7EB] pt-[34px] px-[20px] pb-[17.5px]'>
                            <h4 className='font-[400] text-[#0A2161] poppins text-start text-[18px]'>One-Off Watch</h4>
                            <h4 className='font-[800] text-[#0A2161] poppins text-start text-[32px]'>TT $25</h4>
                            <p className='font-[400] text-[#76797C]  h-[108px] overflow-hidden mt-[16.5px] text-[18px] poppins text-start'  >Perfect for: Carnival weekends, family emergencies, last-minute getaways</p>
                            <button className='w-full text-center py-[13px] bg-[#22C55E] text-[18px] font-[700] mt-[14px]  rounded-[10px] text-white'>Downgrade</button>
                            <div className='mt-[32px] mx-[7px]'>
                                <div className='flex  gap-4 items-center'>
                                    <div>
                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.5885 5.125L6.56771 13.1458L2.92188 9.5" stroke="#22C55E" stroke-width="1.45833" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div className='text-[#686868] text-[18px]'>Track one flight/date for up to 10 days</div>
                                </div>
                                <div className='flex mt-2 gap-4 items-center'>
                                    <div>
                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.5885 5.125L6.56771 13.1458L2.92188 9.5" stroke="#22C55E" stroke-width="1.45833" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div className='text-[#686868] text-[18px]'>WhatsApp + e-mail alerts</div>
                                </div>
                                <div className='flex mt-2 gap-4 items-center'>
                                    <div>
                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.5885 5.125L6.56771 13.1458L2.92188 9.5" stroke="#22C55E" stroke-width="1.45833" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div className='text-[#686868] text-[18px]'>"Pinged or you don't pay" guarantee</div>
                                </div>
                            </div>
                        </div>
                        <div className='border  overflow-hidden rounded-[16px] border-[#E5E7EB] pb-[17.5px] '>
                            <div className='bg-track rounded-[16px] relative !text-white pt-[34px] px-[20px] pb-[23.5px]'>
                                <h4 className='font-[400]  poppins text-start text-[18px]'>Local Commuter Pass</h4>
                                <div className='absolute right-0 top-[25px] rotate-[0deg]'><svg width="104" height="84" viewBox="0 0 104 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M62.0221 72.1509C69.5256 75.0664 77.3932 77.4931 83.6944 82.6999C84.0706 83.0086 84.6256 82.9571 84.9376 82.5811C85.2463 82.2038 85.1957 81.648 84.8207 81.336C78.3718 76.0082 70.3404 73.4848 62.6622 70.5025C62.2091 70.3238 61.6954 70.5519 61.5198 71.0073C61.3408 71.4614 61.569 71.9723 62.0221 72.1509Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M65.3148 60.8926C68.4597 59.5687 71.6232 58.8684 75.0276 59.1843C75.5138 59.2298 75.9432 58.8716 75.9907 58.3866C76.035 57.9004 75.6768 57.4692 75.1939 57.4249C71.492 57.081 68.0537 57.8253 64.635 59.2635C64.1844 59.4519 63.9711 59.97 64.1611 60.4205C64.3479 60.8694 64.8675 61.0822 65.3148 60.8926Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M67.3311 34.7711C69.7545 31.4452 72.9345 29.307 76.9579 28.3864C77.4323 28.2776 77.7309 27.8035 77.6214 27.3275C77.5152 26.8528 77.0414 26.5547 76.567 26.6634C72.114 27.6835 68.5898 30.0478 65.9063 33.7302C65.618 34.1238 65.7066 34.6783 66.0983 34.9648C66.4932 35.2528 67.046 35.1659 67.3311 34.7711Z" fill="white" />
                                    <path d="M19.6094 2.81963C26.4444 1.70369 32.4986 7.2914 34.0769 12.2893C35.6552 16.7491 35.1979 19.5168 33.0247 22.5481C30.8515 25.5793 27.9505 24.4789 28.8155 21.2328C29.2557 19.5808 31.7518 16.8762 31.7518 16.8762C36.7223 12.4009 40.4964 13.1297 44.8565 14.3753C51.4379 16.2556 55.938 23.2419 57.488 27.0198C61.6967 37.2786 57.2249 57.2701 53.0162 60.9528C52.0531 61.7955 49.5966 63.8463 47.4922 61.7419C46.177 60.4267 46.9661 58.0593 47.4922 57.2701C49.4389 54.3501 58.937 48.1351 69.5881 42.5396C78.0927 38.0717 87.8311 37.3376 92.7361 37.8047" stroke="white" stroke-width="4" stroke-linecap="round" />
                                </svg>
                                </div>
                                <h4 className='font-[800]  poppins text-start text-[32px]'>TT $50/ <span className='text-[24px]'>month</span></h4>
                                <p className='font-[400]  mt-[16.5px] text-[18px] poppins text-start'  ><span className='font-bold  h-[108px] overflow-hidden'>Perfect for:</span> Carnival weekends, family emergencies, last-minute getaways</p>
                                <button className='w-full text-center py-[13px] bg-[white] text-[#2A2A2A] text-[18px] font-[700] mt-[14px]  rounded-[10px] '>Downgrade</button>

                            </div>
                            <div className='   px-[20px]  mx-[7px]'>
                                <div className='flex mt-[8px]  gap-4 items-center'>
                                    <div>
                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.5885 5.125L6.56771 13.1458L2.92188 9.5" stroke="#22C55E" stroke-width="1.45833" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div className='text-[#686868] text-[18px]'>Track one flight/date for up to 10 days</div>
                                </div>
                                <div className='flex mt-2 gap-4 items-center'>
                                    <div>
                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.5885 5.125L6.56771 13.1458L2.92188 9.5" stroke="#22C55E" stroke-width="1.45833" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div className='text-[#686868] text-[18px]'>WhatsApp + e-mail alerts</div>
                                </div>
                                <div className='flex mt-2 gap-4 items-center'>
                                    <div>
                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.5885 5.125L6.56771 13.1458L2.92188 9.5" stroke="#22C55E" stroke-width="1.45833" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div className='text-[#686868] text-[18px]'>"Pinged or you don't pay" guarantee</div>
                                </div>
                                        <div className='flex mt-2 gap-4 items-center'>
                                    <div>
                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.5885 5.125L6.56771 13.1458L2.92188 9.5" stroke="#22C55E" stroke-width="1.45833" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div className='text-[#686868] text-[18px]'>WhatsApp + e-mail alerts</div>
                                </div>
                                <div className='flex mt-2 gap-4 items-center'>
                                    <div>
                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.5885 5.125L6.56771 13.1458L2.92188 9.5" stroke="#22C55E" stroke-width="1.45833" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div className='text-[#686868] text-[18px]'>"Pinged or you don't pay" guarantee</div>
                                </div>
                            </div>
                        </div>
                             <div className='border rounded-[16px] border-[#E5E7EB] pt-[34px] px-[20px] pb-[17.5px]'>
                            <h4 className='font-[400] text-[#0A2161] poppins text-start text-[18px]'>Pro / International </h4>
                            <h4 className='font-[800] text-[#0A2161] poppins text-start text-[32px]'>Comming Soon</h4>
                            <p className='font-[400] text-[#76797C] mt-[16.5px] text-[18px] h-[108px] overflow-hidden poppins text-start'  >Sneak Peak Features</p>
                            <button className='w-full text-center py-[13px] bg-[#E3E9E9] text-[18px] font-[700] mt-[14px]  rounded-[10px] text-[#0920615a] '>Notify me</button>
                            <div className='mt-[32px] mx-[7px]'>
                                <div className='flex  gap-4 items-center'>
                                    <div>
                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.5885 5.125L6.56771 13.1458L2.92188 9.5" stroke="#22C55E" stroke-width="1.45833" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div className='text-[#686868] text-[18px]'>Track one flight/date for up to 10 days</div>
                                </div>
                                <div className='flex mt-2 gap-4 items-center'>
                                    <div>
                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.5885 5.125L6.56771 13.1458L2.92188 9.5" stroke="#22C55E" stroke-width="1.45833" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div className='text-[#686868] text-[18px]'>WhatsApp + e-mail alerts</div>
                                </div>
                                <div className='flex mt-2 gap-4 items-center'>
                                    <div>
                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.5885 5.125L6.56771 13.1458L2.92188 9.5" stroke="#22C55E" stroke-width="1.45833" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div className='text-[#686868] text-[18px]'>"Pinged or you don't pay" guarantee</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default PlanGrid
