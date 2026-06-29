import ProfileAvatar from "@/components/ui/ProfileAvatar";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Sidebar() {
  return (
    <aside
      className="
        relative
        w-[300px] bg-[#DCE9E8]
      "
    >
      <ProfileAvatar />

      <div className="sticky top-4">
        {/* About */}
        <div className="mt-32 mx-4 rounded-sm bg-[#F8F8F6] p-4 shadow-sm">
          <h2 className="mb-2 border-b-2 border-gray-300 py-2">
            About
          </h2>

          <p className="rounded bg-[#F8F8F6] text-sm text-stone-600 font-semibold">
            MCA student passionate about web development and problem solving.
          </p>
        </div>

        {/* Contact */}
        <div className="mt-4 mx-4 rounded-sm bg-[#F8F8F6] p-4 shadow-sm">
          <h2 className="mb-2 border-b-2 border-gray-300 py-2">
            Contact
          </h2>

          <a
            href="mailto:you@example.com"
            className="mt-2 flex items-center gap-3 rounded bg-[#DCEEE8] p-2 transition hover:bg-[#C9DFD8]"
          >
            <MdEmail size={22} />
            <span>Email</span>
          </a>
          
          <a
            href="https://instagram.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-3 rounded bg-[#DCEEE8] p-2 transition hover:bg-[#C9DFD8]"
          >
            <FaInstagram size={22} />
            <span>Instagram</span>
          </a>

          <a
            href="https://linkedin.com/in/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-3 rounded bg-[#DCEEE8] p-2 transition hover:bg-[#C9DFD8]"
          >
            <FaLinkedinIn size={22} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </aside>
  );
}