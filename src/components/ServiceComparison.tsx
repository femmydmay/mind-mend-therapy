import React from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { Testimonial } from "./testimonial";
// import Wave2 from "./Wave2";

const ServiceComparison = () => {
  return (
    <div className="bg-cyan-900 relative -mt-40 mb-10 ">
      <div
        id="service-comparison-table"
        className=" text-white p-8 rounded-lg "
      >
        <h2 className="text-center text-3xl font-bold mb-8">
          <span className="text-cyan-500">Mind</span>-Mend Virtual Therapy
          Traditional and In-Office Therapy Services.
        </h2>
        <div className="overflow-x-auto max-w-screen-xl mx-auto rounded-md">
          <table className="w-full border-collapse  border-gray-700 text-left">
            <thead>
              <tr className="bg-gray-800 text-gray-300">
                <th className="py-4 px-6 text-sm font-medium"></th>
                <th className="py-4 px-6 text-center">
                  <div className="text-emerald-400 text-lg font-bold">
                    Mind-Mend
                  </div>
                </th>
                <th className="py-4 px-6 text-center">
                  <h4 className="text-lg font-bold">In-Office Therapy</h4>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr className="even:bg-gray-800/10">
                <th className="py-4 px-6 font-medium">
                  Provided by a qualified therapist
                </th>
                <td className="text-center py-4 px-6">
                  <CheckCircle className="inline-block h-6 w-6 text-green-400" />
                </td>
                <td className="text-center py-4 px-6">
                  <CheckCircle className="inline-block h-6 w-6 text-green-400" />
                </td>
              </tr>
              <tr className="even:bg-gray-800">
                <th className="py-4 px-6 font-medium">In-office visits</th>
                <td className="text-center py-4 px-6">
                  <XCircle className="inline-block h-6 w-6 text-red-400" />
                </td>
                <td className="text-center py-4 px-6">
                  <CheckCircle className="inline-block h-6 w-6 text-green-400" />
                </td>
              </tr>
              <tr className="even:bg-gray-800/10">
                <th className="py-4 px-6 font-medium">Messaging anytime</th>
                <td className="text-center py-4 px-6">
                  <CheckCircle className="inline-block h-6 w-6 text-green-400" />
                </td>
                <td className="text-center py-4 px-6">
                  <CheckCircle className="inline-block h-6 w-6 text-green-400" />
                  {/* <XCircle className="inline-block h-6 w-6 text-red-400" /> */}
                </td>
              </tr>
              <tr className="even:bg-gray-800">
                <th className="py-4 px-6 font-medium">Flexible scheduling</th>
                <td className="text-center py-4 px-6">
                  <CheckCircle className="inline-block h-6 w-6 text-green-400" />
                </td>
                <td className="text-center py-4 px-6">
                  {/* <XCircle className="inline-block h-6 w-6 text-red-400" /> */}
                  <CheckCircle className="inline-block h-6 w-6 text-green-400" />
                </td>
              </tr>
              <tr className="even:bg-gray-800/10">
                <th className="py-4 px-6 font-medium">Affordable pricing</th>
                <td className="text-center py-4 px-6">
                  <CheckCircle className="inline-block h-6 w-6 text-green-400" />
                </td>
                <td className="text-center py-4 px-6">
                  <CheckCircle className="inline-block h-6 w-6 text-green-400" />
                  {/* <XCircle className="inline-block h-6 w-6 text-red-400" /> */}
                </td>
              </tr>
              <tr className="even:bg-gray-800">
                <th className="py-4 px-6 font-medium">
                  Multiple communication modes
                </th>
                <td className="text-center py-4 px-6">
                  <CheckCircle className="inline-block h-6 w-6 text-green-400" />
                </td>
                <td className="text-center py-4 px-6">
                  {/* <XCircle className="inline-block h-6 w-6 text-red-400" /> */}
                  <CheckCircle className="inline-block h-6 w-6 text-green-400" />
                </td>
              </tr>
              <tr className="even:bg-gray-800/10">
                <th className="py-4 px-6 font-medium">Anonymous option</th>
                <td className="text-center py-4 px-6">
                  <CheckCircle className="inline-block h-6 w-6 text-green-400" />
                </td>
                <td className="text-center py-4 px-6">
                  <CheckCircle className="inline-block h-6 w-6 text-green-400" />
                  {/* <XCircle className="inline-block h-6 w-6 text-red-400" /> */}
                </td>
              </tr>
              <tr className="even:bg-gray-800">
                <th className="py-4 px-6 font-medium">
                  Access to a global network
                </th>
                <td className="text-center py-4 px-6">
                  <CheckCircle className="inline-block h-6 w-6 text-green-400" />
                </td>
                <td className="text-center py-4 px-6">
                  {/* <XCircle className="inline-block h-6 w-6 text-red-400" /> */}
                  <CheckCircle className="inline-block h-6 w-6 text-green-400" />
                </td>
              </tr>
              <tr className="even:bg-gray-800/10">
                <th className="py-4 px-6 font-medium">
                  Support for busy professionals
                </th>
                <td className="text-center py-4 px-6">
                  <CheckCircle className="inline-block h-6 w-6 text-green-400" />
                </td>
                <td className="text-center py-4 px-6">
                  <CheckCircle className="inline-block h-6 w-6 text-green-400" />
                  {/* <XCircle className="inline-block h-6 w-6 text-red-400" /> */}
                </td>
              </tr>
              <tr className="even:bg-gray-800">
                <th className="py-4 px-6 font-medium">Ease of accessibility</th>
                <td className="text-center py-4 px-6">
                  <CheckCircle className="inline-block h-6 w-6 text-green-400" />
                </td>
                <td className="text-center py-4 px-6">
                  {/* <XCircle className="inline-block h-6 w-6 text-red-400" /> */}
                  <CheckCircle className="inline-block h-6 w-6 text-green-400" />
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm text-white-400 mt-6">
            Note: We offer Both services and they both have unique benefits
            tailored to different preferences and needs. Explore our platforms
            for more details.
          </p>
        </div>
      </div>
      <Testimonial />
      {/* <Wave2/>  */}
    </div>
  );
};

export default ServiceComparison;
