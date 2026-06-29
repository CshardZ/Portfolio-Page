import ProfileAvatar from "@/components/ui/ProfileAvatar";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { socials } from "@/data/data";


export default function Sidebar() {
  return (
    <aside
      className="
        relative
        w-[300px] bg-[#DCE9E8]
        py-4
      "
    >
      <ProfileAvatar />

      <div className="sticky top-4">
        {/* About */}
        <div className="mt-28 mx-4 rounded-sm bg-[#F8F8F6] p-4 shadow-sm">
          <h2 className="mb-2 border-b-2 border-gray-300 py-2">
            About
          </h2>

          <ul className="list-disc space-y-2 pl-5 text-sm text-stone-600">
            <li>MCA student with a strong interest in web development.</li>
            <li>Passionate about problem solving and data structures & algorithms.</li>
            <li>Build responsive and user-friendly web applications using React and Tailwind CSS.</li>
            <li>Focus on writing clean, maintainable, and reusable code.</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="mt-4 mx-4 rounded-sm bg-[#F8F8F6] p-4 shadow-sm">
          <h2 className="mb-2 border-b-2 border-gray-300 py-2">
            Contact
          </h2>
            {
              socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center gap-3 rounded bg-[#DCEEE8] p-2 transition hover:bg-[#C9DFD8]"
                >
                  <social.icon size={18} />
                  <span>{social.name}</span>
                </a>
              ))
            }
        </div>
      </div>
    </aside>
  );
}