import { hands } from "@/assets";
import Image from "next/image";

export default function Contact() {
  const socialMedias = [
    { title: "instagram", url: "#" },
    { title: "linkedin", url: "#" },
    { title: "github", url: "#" },
  ];

  return (
    <div
      id="contact"
      className="w-full overflow-hidden h-screen bg-gray-100 flex flex-col justify-center relative items-center"
    >
      <div className="absolute inset-0 -top-1/2 -bottom-1/2 flex">
        <Image
          alt=""
          src={hands}
          className="object-contain opacity-10 w-full"
        />
      </div>

      <div className="sm:px-12 md:px-24 xl:px-60 px-4 flex flex-col w-full">
        <div className="pb-60l">
          <h2 className="overflow-hidden font-bold uppercase type-heading text-[2.5rem] z-10 w-full m-0">
            Let's Talk
          </h2>
          <hr className="mt-4 w-full border-b-0 border-[#2b303b]" />
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 w-full">
              <table className="mt-6 table-fixed w-full">
                <tbody>
                  <tr>
                    <td className="align-top pr-12">
                      <span className="font-bold uppercase text-[1.25rem] type-heading">
                        Socials
                      </span>
                    </td>
                    <td className="align-top">
                      <ul className="flex flex-col text-[1.25rem]">
                        {socialMedias.map((socialMedia, index) => (
                          <li key={index}>
                            <a href={socialMedia.url}>
                              <span>↗</span> {socialMedia.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="md:w-1/2 w-full">
              <table className="mt-6 table-fixed w-full">
                <tbody>
                  <tr>
                    <td className="align-top pr-12">
                      <span className="font-bold uppercase text-[1.25rem] type-heading">
                        Mail
                      </span>
                    </td>
                    <td className="align-top">
                      <a className="text-[1.25rem]">
                        <span>↗</span> hello@world.com
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
