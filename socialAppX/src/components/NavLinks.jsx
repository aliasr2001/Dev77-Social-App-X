

function NavLink({
    width = "40px",
    height = "40px",
    text = 'Home',
    pathD = 'M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z',
    pathD1 = '',
    fill = 'none',
    color = 'white',
    fillRule = '',
    stroke = 'currentColor',

}
) {
    return (
        <a class="" href="" >
            <div className="main-div inline-flex items-center gap-4 hover:bg-[#212121] hover:rounded-4xl transition-all duration-300 pt-2 pb-2 pl-3 pr-6">
                <div className="svg-div">
                    <svg
                            className={`w-[${width}] h-[${height}] text-gray-800 dark:text-${color}`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width={width}
                            height={height}
                            fill={fill}
                            viewBox="0 0 24 24"
                        >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke={stroke} fillRule={fillRule} d={pathD} clipRule="evenodd" />
                        <path stroke="currentColor" d={pathD1} clipRule="evenodd" />
                    </svg>
                </div>
                <div className="text-div text-xl">{text}</div>
            </div>
        </a>
    )
}

export default NavLink;


{/* <a class="" href="" >
            <div className="main-div inline-flex items-center gap-4 hover:bg-[#212121] hover:rounded-4xl transition-all duration-300 pt-2 pb-2 pl-3 pr-6">
                <div className="svg-div">
                        <svg
                            className={`w-[${width}] h-[${height}] text-gray-800 dark:text-white`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width={width}
                            height={height}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                        <path fillRule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className="text-div text-2xl">{text}</div>
            </div>
        </a> */}