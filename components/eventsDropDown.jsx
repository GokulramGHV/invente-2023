export default function EventsDropDown({
  setDropDownOpen,
  setSelectedEvent,
  dropDownOpen,
  selectedEvent,
  deptEvents,
  colorScheme,
  width,
}) {
  return (
    <div className="relative w-full mt-6 mb-4 lg:hidden cursor-pointer">
      <button
        className={`${colorScheme.selected} relative z-10 rounded-lg py-2 px-3 border border-white/40  backdrop-blur-[2px] text-sm flex gap-1.5 items-center justify-between`}
        style={{ width: width, backgroundColor: colorScheme.selected }}
        onClick={() => setDropDownOpen(!dropDownOpen)}
      >
        <span className="font-medium ml-3">{selectedEvent.name}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-4 h-4 mx-1 ${dropDownOpen ? 'rotate-[270deg]' : 'rotate-90'
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
        style={{ width: width }}
        className={`${!dropDownOpen ? 'opacity-0 -translate-y-4  ' : 'translate-y-0'
          } absolute z-[1] top-0 left-0 bg-[#24232096] px-2 pt-12 pb-2 border border-white border-white/40 rounded-lg backdrop-blur-sm flex flex-col items-start text-sm transition-all duration-200 ease-in-out`}
      >
        <span className="text-left p-2 cursor-default font-light ">TECH</span>
        {deptEvents.events
          .filter((event) => event.event_type === 'tech')
          .map((event) => (
            <button
              key={event.name}
              className="hover:bg-[#242320]/40 rounded w-full text-left p-2 cursor-pointer"
              onClick={() => {
                setSelectedEvent(event);
                setDropDownOpen(false);
              }}
            >
              {event.name}
            </button>
          ))}
        {deptEvents.events.filter((event) =>
          event.event_type?.toLowerCase().includes('non')
        ).length > 0 && (
            <hr className="w-full mx-auto bg-white h-[1px] my-2 " />
          )}
        <span className="text-left p-2 cursor-default font-light">
          NON-TECH
        </span>
        {deptEvents.events
          .filter((event) => event.event_type?.toLowerCase().includes('non'))
          .map((event) => (
            <button
              key={event.name}
              className="hover:bg-[#242320]/40 rounded w-full text-left p-2 cursor-pointer"
              onClick={() => {
                setSelectedEvent(event);
                setDropDownOpen(false);
              }}
            >
              {event.name}
            </button>
          ))}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-14 absolute top-4 left-2 z-10 opacity-90 ${dropDownOpen && 'hidden'
          }`}
        viewBox="0 0 6 42"
        fill="none"
      >
        <path
          d="M3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333ZM3 36.3333C1.52724 36.3333 0.333333 37.5272 0.333333 39C0.333333 40.4728 1.52724 41.6667 3 41.6667C4.47276 41.6667 5.66667 40.4728 5.66667 39C5.66667 37.5272 4.47276 36.3333 3 36.3333ZM2.5 3L2.5 39H3.5L3.5 3H2.5Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
