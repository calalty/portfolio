import { hands } from "@/assets";
import Image from "next/image";
import Button from "./button";

export default function Contact() {
  // const interestedIn = [
  //   "UX/UI Design",
  //   "Frontend Development",
  //   "Artificial Intelligence",
  //   "Virtual Reality",
  //   "Augmented Reality",
  //   "New Businesses",
  //   "Startups",
  //   "Roast Dinner",
  // ];

  const socialMedias = [
    { title: "instagram", url: "#" },
    { title: "linkedin", url: "#" },
    { title: "github", url: "#" },
  ];
  return (
    <div
      id="contact"
      className="w-full overflow-hidden h-screen bg-gray-100 flex flex-col justify-end relative items-center"
    >
      <div className="absolute inset-0 -top-1/2 -bottom-1/2 flex">
        <Image
          alt=""
          src={hands}
          className="object-contain opacity-10 w-full"
        />
      </div>

      <div className="sm:px-12 md:px-24 xl:px-60 px-4 flex flex-col w-full">
        {/* <div>
          <h5 className="type-heading text-[2.5rem] mb-6 z-10 relative capitalize">
            My Interests
            <span className="text-[1.5rem] ml-3">⤵</span>
          </h5>

          {interestedIn.map((value) => (
            <Button
              additionalClassName="mr-1 mb-2"
              primary
              key={value}
              value={value}
            />
          ))}
        </div> */}
        <div className="pb-60l">
          <h2 className="overflow-hidden font-bold uppercase type-heading text-[2.5rem] z-10 w-full m-0">
            Let's Talk
          </h2>
          <hr className="mt-4 w-full border-b-0 border-[#2b303b]" />
          {/* <div className="flex flex-col md:flex-row">
            <div className="flex flex-row mt-4">
              <span className="font-bold uppercase text-[1.25rem] mt-4 mr-20 type-heading">
                Social Media
              </span>
              <ul className="flex flex-col text-[1.25rem]">
                {socialMedias.map((socialMedia, index) => (
                  <li className="mr-40 mt-4" key={index}>
                    <a href={socialMedia.url}>
                      <span>↗</span> {socialMedia.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-row mt-4">
              <span className="font-bold uppercase text-[1.25rem] mt-4 mr-20 type-heading">
                Mail
              </span>
              <p className="mt-4 text-[1.25rem]">
                {" "}
                <span>↗</span> callum.alton@helloworld.com
              </p>
            </div>
          </div> */}
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
