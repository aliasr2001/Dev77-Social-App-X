
import UserAvatar from './UserAvatar'
import SvgComp from './SvgComp'
import Button from './Button'

function PostCreateSection() {
  return (
    <div className='WrapperDiv border-b border-[#2f3336] pb-3'>

      <div className='p-4  flex justify-start items-center gap-4'>
        <UserAvatar ImgSize="10" />
        <div className='text-gray-500 text-xl'>
          <input type="text" placeholder="What's happening?" className='bg-transparent w-full text-gray-200 placeholder-gray-500 outline-none' />
        </div>
      </div>

      <div className='svgSection flex items-center w-[90%] justify-between m-auto'>
        <div className="svgContainer flex ml-10 items-center justify-center">
          <div className='svgwrapperDiv rounded-full w-10 h-10 flex justify-center items-center cursor-pointer hover:bg-[#0F172A] transistion-all duration-500'>
            <SvgComp svgSize='25px' pathD='m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z'
            />
          </div>
          <div className='svgwrapperDiv rounded-full w-10 h-10 flex justify-center items-center hover:bg-[#0F172A] transistion-all duration-500 cursor-pointer'>
            <SvgComp svgSize='25px' pathD='m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z' />
          </div>

        </div>
        <div className='PostBtn'>
          <Button width='4.5rem'  fontSize='15px' disabled/>
        </div>
      </div>


    </div>
  )
}

export default PostCreateSection