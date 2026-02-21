import PostCard from "./PostCard";
import PostCreateSection from "./PostCreateSection";
import RefreshPost from "./RefreshPost";

function MidSection (){
    return(
        <div className="mid-section max-w-150 lg:w-3/5 bg-black text-white border-x border-[#2f3336] overflow-y-auto max-h-screen">
            <div className="flex justify-evenly border-b border-[#2f3336] text-center sticky top-0 bg-black/90 backdrop-blur-xs z-10">
                <div className="w-full p-4 hover:bg-[#857f7f1c]  transition-all font-bold cursor-pointer decoration-[#0d7efffd] hover:underline decoration-4 underline-offset-18 rounded-underline">For you</div>
                <div className="w-full p-4 hover:bg-[#5f5e5e1c] transition-all font-bold cursor-pointer  decoration-[#0d7efffd] hover:underline decoration-4 underline-offset-18 rounded-underline">Following</div>
            </div>
            <PostCreateSection/>
            <RefreshPost/>
            <PostCard/>
            <PostCard/>
          </div>
    )
}
export default MidSection;