/* eslint-disable react/no-unescaped-entities */
import { hands } from "@/assets";
import { socialMedias } from "@/global";
import Image from "next/image";

export default function Contact() {
  return (
    <div
      id="contact"
      className="w-full overflow-hidden h-screen bg-[] flex flex-col relative items-center bg-[#f3f2f9]"
    >
      {/* <div className="absolute inset-0 -top-1/2 -bottom-1/2 flex">
        <Image alt="" src={hands} className="object-contain opacity-5 w-full" />
      </div> */}

      <div className="pt-32 sm:px-12 md:px-24 xl:px-60 md:pt-60 px-4 flex flex-col w-full">
        <h2 className="overflow-hidden font-black uppercase type-heading text-3xl sm:text-4xl  z-10 w-full m-0 text-[#606887]">
          Contact
        </h2>
        <hr className="mt-4 w-full border-b-0 border-[#606887]" />
        <div className="flex flex-col md:flex-row  text-[#606887]">
          <div className="md:w-1/2 w-full">
            <table className="mt-6 table-fixed w-full">
              <tbody>
                <tr>
                  <td className="align-top pr-12">
                    <span className="font-bold uppercase sm:text-xl text-base type-heading">
                      Socials
                    </span>
                  </td>
                  <td className="align-top">
                    <ul className="flex flex-col sm:text-lg text-sm">
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
                    <span className="font-bold uppercase sm:text-xl text-base type-heading">
                      Mail
                    </span>
                  </td>
                  <td className="align-top">
                    <a className="sm:text-lg text-sm font-light">
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
  );
}
