import { workArray } from "@/global";
import Image from "next/image";
import { useRouter } from "next/router";

export default function TitlePage({ toggle }) {
  const router = useRouter();
  const { title } = router.query;

  // Find the specific work item based on the title
  const workItem = workArray.find((item) => item.title === title);

  if (!workItem) {
    return <div>Work item not found</div>;
  }

  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll">
      <div className="snap-start h-screen w-screen bg-gray-100">
        <div className="flex flex-col relative h-full xl:px-60">
          <div className="w-full h-1/2 relative">
            <Image
              alt=""
              className={`w-full h-full inset-0 rounded-b-3xl rounded-bl-3xl absolute object-cover`}
              src={workItem.img}
              style={{ objectPosition: "50% 50%" }}
            />
          </div>
          <div className="px-4 sm:px-12 md:px-24 xl:p-0">
            <div className="mt-12">
              <h2 className="type-heading text-3xl sm:text-4xl font-black z-10 w-full overflow-hidden m-0 uppercase">
                {workItem.title}
              </h2>
              <hr className="mt-4 w-full border-b-0 border-[#242424]" />
            </div>
            <div className="flex justify-between my-6 w-full flex-col md:flex-row">
              <div className="md:w-1/2">
                <table className="w-full table-fixed ">
                  <tbody>
                    {workItem.project.map(({ title, description }, index) => (
                      <tr key={title}>
                        <td key={title} className="pr-6 pb-6 align-top">
                          <h4 className="type-heading uppercase text-[1.25rem]">
                            {title}
                          </h4>
                        </td>

                        <td key={title + index} className="pl-6 pb-6">
                          <ul>
                            <>
                              {description.map((item, index) => (
                                <li key={index} className="text-[1rem]">
                                  {item}
                                </li>
                              ))}
                            </>
                          </ul>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="md:w-1/2">
                <p>{workItem.work}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
