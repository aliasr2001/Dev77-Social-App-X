import PostCard from "./PostCard";
import PostCreateSection from "./PostCreateSection";
import RefreshPost from "./RefreshPost";

function MidSection (){
    return(
        <div className="max-w-150 lg:w-3/5 bg-black text-white border-x border-[#2f3336] overflow-y-auto max-h-screen">
            <div className="flex justify-evenly border-b border-[#2f3336] text-center">
                <div className="w-full p-4 hover:bg-[#151515] transition-all font-bold cursor-pointer">For you</div>
                <div className="w-full p-4 hover:bg-[#151515] transition-all font-bold cursor-pointer">Following</div>
            </div>
            <PostCreateSection/>
            <RefreshPost/>
            <PostCard/>
          </div>
    )
}
export default MidSection;