'use client';

export default function TimeTableDeptDropDown({
  dept,
  deptList,
  setDropDownOpen,
  dropDownOpen,
  setDept,
  className,
}) {
  return (
    <div className={`relative w-full lg:hidden cursor-pointer ${className}`}>
      <button
        className={`w-[220px] relative z-10 rounded-lg py-2 px-3 border border-white/40  backdrop-blur-[2px] text-sm flex gap-1.5 items-center justify-between`}
        onClick={() => setDropDownOpen(!dropDownOpen)}
      >
        <span className="font-bold ml-3 text-lg">{dept}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-4 h-4 mx-1 ${
            dropDownOpen ? 'rotate-[270deg]' : 'rotate-90'
          } transition duration-300 ease-in-out`}
          viewBox="0 0 13 13"
          fill="none"
        >
          <path
            d="M9.89826 6.61241C10.1803 6.35053 10.1803 5.92524 9.89826 5.66336L5.56577 1.64089C5.28371 1.37902 4.82564 1.37902 4.54358 1.64089C4.26152 1.90277 4.26152 2.32807 4.54358 2.58994L8.3661 6.13893L4.54583 9.68792C4.26377 9.94979 4.26377 10.3751 4.54583 10.637C4.8279 10.8988 5.28597 10.8988 5.56803 10.637L9.90052 6.6145L9.89826 6.61241Z"
            fill="white"
          />
        </svg>
      </button>
      <div
        className={`${
          !dropDownOpen
            ? 'opacity-0 -translate-y-4 z-[-2]'
            : 'translate-y-0 z-[1]'
        }  w-[220px] absolute  top-0 left-0 bg-[#24232096] px-2 pt-12 pb-2 border border-white border-white/40 rounded-lg backdrop-blur-sm flex flex-col items-start text-sm transition-all duration-200 ease-in-out`}
      >
        {deptList.map((deptInfo) => (
          <button
            key={deptInfo.name}
            className="hover:bg-[#242320]/40 rounded  text-left p-2 cursor-pointer w-full text-lg font-bold"
            onClick={() => {
              setDept(deptInfo.name);
              setDropDownOpen(false);
            }}
          >
            {deptInfo.name}
          </button>
        ))}
      </div>
    </div>
  );
}
