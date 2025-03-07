
import { IoIosCloseCircleOutline } from "react-icons/io";
import vibe from '../../assets/img/vibe-o-meter.svg';
import { useSelector } from "react-redux";

export default function VibeMeter({closeVibeModal,handleVibeSubmit}) {

  const userDetails = useSelector((store) => store.user);
  const { authorized, fullName} =userDetails;


  return  <div
        onClick={closeVibeModal}
        className="fixed inset-0 flex items-center justify-center  "
      >
        <div className="w-[550px] h-[527px] bg-white p-[25px] rounded-lg shadow-lg relative">
          <IoIosCloseCircleOutline onClick={closeVibeModal} className="absolute top-[10px] right-[10px]" />
          <h2
          className=" text-left text-[20px] leading-[16px] tracking-[0.19px] font-[IvyMode] text-[#222222]
"
        >
        Vibe-o-meter
        </h2>
          <p
            className="mt-[15px] text-left text-[12px] leading-[18px] tracking-[0.45px] font-[BrownLight] text-[#222222] opacity-100
  "
          >
            Hi {authorized === true ? fullName : "Charlie"}, we would love know the vibes you got from this event. It helps us to improve us and serve you best for the next time.
          </p>
          
          <img src={vibe} className="w-[520px] h-[170px] mt-[20px]"/>
          
          <div className="mt-[20px]">
            <textarea
              placeholder="Share your experience with us..."
              className=" placeholder:pt-[10px] pl-[10px] text-left placeholder:text-[#000000] text-[14px] leading-6 tracking-[0.35px] opacity-50 w-full h-[150px] outline-none bg-white border border-gray-300 rounded-lg "
            />
          </div>
          <button
           onClick={handleVibeSubmit}
           className="mt-4 text-[12px] px-8 py-2 bg-[#222222] text-white rounded-[6px]">
            Submit
          </button>
        </div>
      </div>;
}
