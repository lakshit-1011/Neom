

export default function ImageGrid({val,status}) {
  return (
    <div className="flex justify-between  w-full gap-2 mt-[15px] ">
      <div className="grid grid-cols-2  w-1/2 gap-2 ">
        <img className="h-[225px] object-cover rounded-tl-md" src={val} />
        <img className="h-[225px] object-cover" src={val} />
        <img className="h-[225px] object-cover rounded-bl-md" src={val} />
        <img className="h-[225px] object-cover " src={val} />
      </div>
      <div className="flex w-1/2 relative ">
        <img className="h-[460px] object-cover rounded-r-md" src={val} />
        <button
          style={{ fontFamily: "Brown, sans-serif" }}
          className="absolute bottom-3 right-3 font-medium text-[#222222] rounded-[4px] text-[12px] px-[18px] py-[10px] bg-[#ffffff] flex items-center justify-center text-center"
        >
          Show all
        </button>
        <span
          style={{ fontFamily: "Brown, sans-serif" }}
          className="absolute top-[-20px] right-0  text-left text-[10px] tracking-[0.31px] text-[#222222]"
        >
         {status}
        </span>
      </div>
    </div>
  );
}
