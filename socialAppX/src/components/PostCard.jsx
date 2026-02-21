import UserAvatar from './UserAvatar'
import SvgComp from './SvgComp'
import ReactionComp from './ReactionComp'



function PostCard() {
  return (
    <div className='flex p-4 gap-2 border-b border-[#2f3336]'>
      <div className=''><UserAvatar /></div>
      <div className='flex flex-col gap-0.5 items-start w-full'>
        <div className='userInfo flex items-center gap-2 w-[stretch] justify-between'>
          <div className='profileTextArea flex gap-2'>
            <div className='profileName font-bold ml-0.5'>Peter Schwaz</div>
            <div className='userName text-[#71767b]'>@peter_schwaz</div>
            <div className="postDate text-[#71767b]">Feb 15</div>
          </div>
          <div className="moreOptions justify-end cursor-pointer p-2 rounded-full hover:bg-[#0F172A] transistion-all">
            <svg class="w-6 h-6 text-[#71767b] dark:text-[#71767b] hover:text-[#00BFFF]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 12h.01m6 0h.01m5.99 0h.01" />
            </svg>
          </div>
        </div>
        {/* Content Section */}
        <div className="content-block">
          <div className="text-block  ">
            Dragon is Fucked by Me...
          </div>
          <div className="media-block max-w-[90%] max-h-[90%] border border-[#2f3336]">
            <img className='rounded-lg mt-2' src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJhZ29ufGVufDB8fDB8fA%3D%3D&w=500&q=80" alt="" />
          </div>
        </div>

        {/* Shz Will Do Work Here */}
        <div className='reactSection flex items-center gap-4 mt-2 w-full justify-between'>
          <div className='reactSvgDiv flex items-center gap-4'>
            <ReactionComp/>
            <ReactionComp pathD='m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3' hoverColor='#2be731' bgCircleColor='rgba(31, 240, 35, 0.1)'/>
            <ReactionComp pathD='M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z' hoverColor='rgb(230, 34, 247)' bgCircleColor='rgba(217, 29, 255, 0.15)'/>
          </div>
          <div className='shareOptionDiv'></div>
        </div>


      </div>



    </div>
  )
}

export default PostCard;