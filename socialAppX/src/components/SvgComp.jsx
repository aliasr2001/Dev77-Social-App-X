import React from 'react'

function SvgComp(
    {
    svgSize = "40px",
    pathD = 'M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z',
    pathD1 = '',
    fill = 'none',
    fillRule = '',
    stroke = '#00BFFF',

}
) {
    return (
        <svg
            className={`w-[${svgSize}] h-[${svgSize}]`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={svgSize}
            height={svgSize}
            fill={fill}
            viewBox="0 0 24 24"
        >
            <path stroke-linecap="round" stroke-linejoin="round" stroke={stroke} fillRule={fillRule} d={pathD} clipRule="evenodd" />
            <path stroke="currentColor" d={pathD1} clipRule="evenodd" />
        </svg>
    )
}

export default SvgComp