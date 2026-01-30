import { useState } from "react";

const VaultsTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const vaults = [
    {
      name: "Vault A",
      aum: "$123,456",
      earnings: "$123,456",
      performance: "12%",
    },
    {
      name: "Vault B",
      aum: "$123,456",
      earnings: "$123,456",
      performance: "12%",
    },
    {
      name: "Vault C",
      aum: "$123,456",
      earnings: "$123,456",
      performance: "12%",
    },
    {
      name: "Vault D",
      aum: "$123,456",
      earnings: "$123,456",
      performance: "12%",
    },
    {
      name: "Vault E",
      aum: "$123,456",
      earnings: "$123,456",
      performance: "12%",
    },
  ];

  return (
    <div className="bg-[#080808] border border-gray-800 rounded-lg p-6">
      <div className="text-white text-lg font-semibold mb-6">Vaults</div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="text-left text-sm font-normal py-4 px-4">Vault</th>
              <th className="text-left text-sm font-normal py-4 px-4">
                AUM acquired
              </th>
              <th className="text-left text-sm font-normal py-4 px-4">
                Est. earnings
              </th>
              <th className="text-left text-sm font-normal py-4 px-4">
                Performance
              </th>
              <th className="text-right text-sm font-normal py-4 px-4">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {vaults.map((vault, index) => (
              <tr
                key={index}
                className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors"
              >
                <td className="text-white py-4 px-4">{vault.name}</td>
                <td className="text-white py-4 px-4">{vault.aum}</td>
                <td className="text-white py-4 px-4">{vault.earnings}</td>
                <td className="text-white py-4 px-4">{vault.performance}</td>
                <td className="text-right py-4 px-4">
                  <div className="flex items-center justify-end gap-3">
                    <button className="text-[#4fE3C1] hover:text-white transition-colors">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74169 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4584 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.90833 4.20831C10.2667 6.00831 11.7 7.31665 13.5083 7.49998M2.5 17.5H17.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button className="text-[#4fE3C1] hover:text-white transition-colors">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 15L12.5 10L7.5 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="text-white/60 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 15L7.5 10L12.5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-8 h-8 rounded ${
              currentPage === page
                ? "bg-[#45c7f2] text-white"
                : "text-white/60 hover:text-white hover:bg-gray-800"
            } transition-colors`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="text-white/60 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 15L12.5 10L7.5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default VaultsTable;
