import React from "react";

function ReactionComp({
  pathD = "M9.1631 5H15.8381C17.8757 5.01541 19.5151 6.67943 19.5001 8.717V13.23C19.5073 14.2087 19.1254 15.1501 18.4384 15.8472C17.7515 16.5442 16.8158 16.9399 15.8371 16.947H9.1631L5.5001 19V8.717C5.49291 7.73834 5.8748 6.79692 6.56175 6.09984C7.24871 5.40276 8.18444 5.00713 9.1631 5Z",
  hoverColor = "#0cc8f3",
  bgCircleColor = "#0F172A"
}) {
  return (
    <div
      style={{ "--hoverColor": hoverColor }}
      className="reaction-comp group relative Comment flex items-center cursor-pointer mr-10"
    >
      <div
      style={{"--bgCircleColor": bgCircleColor}} className="svgwrapperDiv rounded-full w-8 h-8 flex justify-center items-center cursor-pointer group-hover:bg-[#0F172A] transistion-all duration-500 " >
        <svg
          width="30px"
          height="30px"
          viewBox="-2.5 -2.5 30.00 30.00"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          transform="matrix(1, 0, 0, 1, 0, 0)"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d={pathD}
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </div>
      <span className="absolute left-7 text-[11px]">2.5M</span>
    </div>
  );
}

export default ReactionComp;
