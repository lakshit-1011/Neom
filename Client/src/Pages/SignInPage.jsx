import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import store from "../../Store";
import Input from "../Components/InputPage/Input";
import { UserSignIn } from "../Features/User/UserSlice";

export default function SignInPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // State for form fields
  const [formData, setFormData] = useState({
    FullName: "",
    password: "",
    date_of_birth: "",
    Email: "",
    Contact: "",
    profilePicUrl: null, // For file input
  });

  const [preview, setPreview] = useState(null);

  // Handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFormData((prev) => ({ ...prev, profilePicUrl: file })); // Store file in state
      setPreview(URL.createObjectURL(file)); // Preview image
    }
  };

  // Handle sign-in form submission
  function handleSignIn(e) {
    e.preventDefault();

    // Prepare FormData object
    const formDataToSend = new FormData();
    formDataToSend.append("FullName", formData.FullName);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("date_of_birth", formData.date_of_birth);
    formDataToSend.append("Email", formData.Email);
    formDataToSend.append("Contact", formData.Contact);

    // Append file if selected
    if (formData.profilePicUrl) {
      formDataToSend.append("profilePic", formData.profilePicUrl);
    }

    // Dispatch action to Redux store
    dispatch(UserSignIn(formDataToSend));
  }

  return (
    <div className={`${preview === null ? "h-[700px]" : "h-[800px]"} flex flex-col items-center gap-[20px] bg-white mx-[-150px] bg-[linear-gradient(116deg,#fee8a6_0%,#f1d9ff_86%)]`}>
      <h1
        style={{ fontFamily: "IvyMode, sans-serif" }}
        className="text-center text-[32px] tracking-widest mt-[30px] font-normal text-zinc-800 dark:text-white mb-[10px]"
      >
        WELCOME TO NEOM
      </h1>

      <form onSubmit={handleSignIn} className="flex flex-col justify-evenly">
        <Input labelName="ProfilePic" typeName="file" nameType="profilePicUrl" onChange={handleFileChange} previewSrc={preview} />
        <Input labelName="FullName" typeName="text" nameType="FullName" onChange={handleChange} />
        <Input labelName="Email" typeName="email" nameType="Email" onChange={handleChange} />
        <Input labelName="Contact Number" typeName="number" nameType="Contact" onChange={handleChange} />
        <Input labelName="Date of Birth" typeName="date" nameType="date_of_birth" onChange={handleChange} />
        <Input labelName="Password" typeName="password" nameType="password" onChange={handleChange} />

        <button type="submit" className="w-[320px] rounded-[8px] mt-[10px] p-3 cursor-pointer bg-white border border-blue-400 hover:bg-blue-400">
          Sign Up
        </button>
        <button
          onClick={() => navigate(-1)}
          className="w-[120px] rounded-[8px] mt-[10px] p-2 text-[13px] cursor-pointer bg-white border hover:bg-black hover:text-white"
        >
          Back to Login
        </button>
      </form>
    </div>
  );
}
