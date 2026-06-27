import profileImage from "@/assets/images/profileImage.jpg";


export default function ProfileAvatar() {
  return (
    <div
      className="
        absolute  
        top-0 -translate-y-1/2 left-1/2 -translate-x-1/2
        w-48 h-48 rounded-full
        mx-auto border-2 overflow-hidden
      "
    >
      <img 
        src={profileImage} 
        alt="Profile Image" 
        className="w-full h-full object-cover"
      />
    </div>
  )
}
