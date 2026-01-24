import { useState, useRef, useEffect } from "react";
import filterIcon from "../../assets/images/icons/filter.png";
import ethereumIcon from "../../assets/images/icons/ethereum.png";

interface MultiSelectOption {
  value: string;
  label: string;
  icon?: string;
}

interface MultiSelectProps {
  options: MultiSelectOption[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder: string;
  label: string;
  showIcons?: boolean;
}

const MultiSelect = ({
  options,
  selected,
  onChange,
  placeholder,
  label,
  showIcons = false,
}: MultiSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleOption = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((item) => item !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  const removeOption = (value: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(selected.filter((item) => item !== value));
  };

  const getDisplayText = () => {
    if (selected.length === 0) {
      return placeholder;
    }
    return null;
  };

  const getVisibleChips = () => {
    if (selected.length === 0) return [];
    return selected.slice(0, 1);
  };

  const getRemainingCount = () => {
    return selected.length - 1;
  };

  const getSelectedOption = (value: string) => {
    return options.find((opt) => opt.value === value);
  };

  return (
    <div className="flex flex-col gap-2 relative" ref={dropdownRef}>
      <label className="text-white text-sm font-medium">{label}</label>
      <div
        className="relative min-w-[160px] cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`px-4 py-2 pr-10 bg-gray-800/50 border ${
            isOpen ? "border-[#45c7f2]" : "border-gray-700"
          } rounded flex items-center gap-2 flex-wrap min-h-[40px] hover:border-gray-600 relative`}
        >
          {selected.length === 0 ? (
            <span className="text-gray-300">{getDisplayText()}</span>
          ) : (
            <>
              {getVisibleChips().map((value) => {
                const option = getSelectedOption(value);
                return (
                  <div
                    key={value}
                    className="flex items-center gap-1 px-2 py-1 bg-gray-700 rounded text-white text-sm"
                  >
                    {showIcons && option?.icon && (
                      <img
                        src={option.icon}
                        alt=""
                        className="w-4 h-4 rounded-full"
                      />
                    )}
                    <span>{option?.label || value}</span>
                    <button
                      onClick={(e) => removeOption(value, e)}
                      className="ml-1 text-gray-400 hover:text-white"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 3L3 9M3 3L9 9"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                );
              })}
              {getRemainingCount() > 0 && (
                <span className="text-white text-sm">
                  +{getRemainingCount()} more
                </span>
              )}
            </>
          )}
        </div>
        <svg
          className={`absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {isOpen && (
          <div className="absolute z-50 w-full mt-1 bg-gray-800 border border-gray-700 rounded shadow-lg max-h-60 overflow-y-auto">
            {options.map((option) => {
              const isSelected = selected.includes(option.value);
              return (
                <div
                  key={option.value}
                  onClick={() => toggleOption(option.value)}
                  className={`px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-gray-700 ${
                    isSelected ? "bg-gray-700/50" : ""
                  }`}
                >
                  <div className="flex items-center justify-center w-4 h-4 border border-gray-600 rounded">
                    {isSelected && (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 6L5 9L10 3"
                          stroke="#45c7f2"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  {showIcons && option.icon && (
                    <img
                      src={option.icon}
                      alt=""
                      className="w-4 h-4 rounded-full"
                    />
                  )}
                  <span className="text-white text-sm">{option.label}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

const Filter = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isApplied, setIsApplied] = useState(false);
  const [selectedType, setSelectedType] = useState("Prime");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBlockchains, setSelectedBlockchains] = useState<string[]>([]);
  const [selectedAssets, setSelectedAssets] = useState<string[]>([]);
  const [minimumAPY, setMinimumAPY] = useState("10%");
  const [minimumRisk, setMinimumRisk] = useState("40");

  const toggleFilter = () => {
    setIsExpanded(!isExpanded);
  };

  const handleApply = () => {
    setIsApplied(true);
    setIsExpanded(false);
  };

  const handleRemove = () => {
    setSelectedCategories([]);
    setSelectedBlockchains([]);
    setSelectedAssets([]);
    setMinimumAPY("10%");
    setMinimumRisk("40");
    setIsApplied(false);
  };

  const categoryOptions: MultiSelectOption[] = [
    { value: "lending", label: "Lending" },
    { value: "trading", label: "Trading" },
    { value: "staking", label: "Staking" },
    { value: "yield", label: "Yield Farming" },
    { value: "defi", label: "DeFi" },
  ];

  const blockchainOptions: MultiSelectOption[] = [
    { value: "ethereum", label: "ETH", icon: ethereumIcon },
    { value: "bitcoin", label: "BTC" },
    { value: "polygon", label: "MATIC", icon: ethereumIcon },
    { value: "bsc", label: "BNB" },
    { value: "solana", label: "SOL" },
    { value: "avalanche", label: "AVAX" },
    { value: "arbitrum", label: "Arbitrum" },
    { value: "optimism", label: "Optimism" },
  ];

  const assetOptions: MultiSelectOption[] = [
    { value: "eth", label: "ETH", icon: ethereumIcon },
    { value: "btc", label: "BTC" },
    { value: "usdt", label: "USDT", icon: ethereumIcon },
    { value: "usdc", label: "USDC", icon: ethereumIcon },
    { value: "dai", label: "DAI" },
    { value: "matic", label: "MATIC", icon: ethereumIcon },
    { value: "bnb", label: "BNB" },
    { value: "sol", label: "SOL" },
    { value: "avax", label: "AVAX" },
    { value: "link", label: "LINK" },
    { value: "uni", label: "UNI" },
  ];

  const getSelectedOption = (value: string, options: MultiSelectOption[]) => {
    return options.find((opt) => opt.value === value);
  };

  return (
    <div
      className="w-full bg-black/40 backdrop-blur-sm border-gray-800 rounded-lg"
      style={{ boxShadow: "0px 0px 17px 0px #45C7F21A" }}
    >
      {/* Collapsed Filter Bar - Show when applied */}
      {isApplied && !isExpanded ? (
        <div
          className="px-6 py-3 flex items-center gap-3 flex-wrap cursor-pointer"
          onClick={toggleFilter}
        >
          <div className="flex items-center">
            <img className="w-[21px] h-[21px] text-white" src={filterIcon} alt="filter" />
            <span className="text-white font-medium text-[24px] pl-3 text-base">
              FILTERS
            </span>
          </div>

          {/* Prime Button */}
          <button
            className="flex items-center gap-2 px-4 py-2 rounded border border-[#45c7f2] bg-[#45c7f2]/10"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 2V4M8 12V14M14 8H12M4 8H2M12.364 12.364L10.95 10.95M5.05 5.05L3.636 3.636M12.364 3.636L10.95 5.05M5.05 10.95L3.636 12.364"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-white text-sm">Prime</span>
          </button>

          {/* Categories */}
          {selectedCategories.length > 0 && (
            <button
              className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded text-white text-sm flex items-center gap-2"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <span>Categories</span>
              <span className="px-2 py-0.5 bg-gray-700 rounded text-xs">
                +{selectedCategories.length}
              </span>
            </button>
          )}

          {/* Minimum APY */}
          {minimumAPY && (
            <button
              className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded text-white text-sm"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Minimum APY {minimumAPY}
            </button>
          )}

          {/* Minimum Risk */}
          {minimumRisk && (
            <button
              className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded text-white text-sm flex items-center gap-2"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <span>Minimum Risk {minimumRisk}</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-red-500 hover:text-red-400"
                onClick={(e) => {
                  e.stopPropagation();
                  setMinimumRisk("40");
                }}
              >
                <path
                  d="M3.5 3.5L10.5 10.5M10.5 3.5L3.5 10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          {/* Blockchain */}
          {selectedBlockchains.length > 0 && (
            <button
              className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded text-white text-sm flex items-center gap-2"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <span>Blockchain</span>
              <span className="px-2 py-0.5 bg-gray-700 rounded text-xs">
                +{selectedBlockchains.length}
              </span>
            </button>
          )}

          {/* Assets */}
          {selectedAssets.length > 0 && (
            <div
              className="flex items-center gap-2"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <span className="text-white text-sm">Assets</span>
              {selectedAssets.slice(0, 1).map((value) => {
                const option = getSelectedOption(value, assetOptions);
                return (
                  <div
                    key={value}
                    className="flex items-center gap-1 px-2 py-1 bg-gray-700 rounded text-white text-sm"
                  >
                    {option?.icon && (
                      <img
                        src={option.icon}
                        alt=""
                        className="w-4 h-4 rounded-full"
                      />
                    )}
                    <span>{option?.label || value}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedAssets(
                          selectedAssets.filter((item) => item !== value)
                        );
                      }}
                      className="ml-1 text-gray-400 hover:text-white"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 3L3 9M3 3L9 9"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white ml-auto"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ) : (
        <>
          {/* Filter Header - Clickable */}
          <div
            className="px-6 py-3 flex justify-between items-center cursor-pointer"
            onClick={toggleFilter}
          >
            <div className="flex items-center">
              <img className="w-[21px] h-[21px] text-white" src={filterIcon} alt="filter" />
              <span className="text-white font-medium text-[24px] pl-3 text-base">
                FILTERS
              </span>
            </div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white transition-transform"
              style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Filter Panel - Expandable */}
          {isExpanded && (
        <div className="px-4 md:px-6 pb-6 pt-4 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row flex-wrap items-start lg:items-end gap-4 md:gap-6">
            {/* Type */}
            <div className="flex flex-col gap-2 w-full lg:w-auto">
              <label className="text-white text-sm font-medium">Type</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedType("Prime")}
                  className={`flex flex-1 lg:flex-none items-center justify-center gap-2 px-3 py-2 rounded border transition-all ${
                    selectedType === "Prime"
                      ? "border-[#45c7f2] bg-[#45c7f2]/10"
                      : "border-gray-700 bg-transparent hover:border-gray-600"
                  }`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 2V4M8 12V14M14 8H12M4 8H2M12.364 12.364L10.95 10.95M5.05 5.05L3.636 3.636M12.364 3.636L10.95 5.05M5.05 10.95L3.636 12.364"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-white text-sm">Prime</span>
                </button>
                <button
                  onClick={() => setSelectedType("New")}
                  className={`flex flex-1 lg:flex-none items-center justify-center gap-2 px-3 py-2 rounded border transition-all ${
                    selectedType === "New"
                      ? "border-[#45c7f2] bg-[#45c7f2]/10"
                      : "border-gray-700 bg-transparent hover:border-gray-600"
                  }`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="4"
                      height="4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <rect
                      x="10"
                      y="2"
                      width="4"
                      height="4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <rect
                      x="2"
                      y="10"
                      width="4"
                      height="4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <rect
                      x="10"
                      y="10"
                      width="4"
                      height="4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <span className="text-white text-sm">New</span>
                </button>
                <button
                  onClick={() => setSelectedType("Favorites")}
                  className={`flex flex-1 lg:flex-none items-center justify-center gap-2 px-3 py-2 rounded border transition-all ${
                    selectedType === "Favorites"
                      ? "border-[#45c7f2] bg-[#45c7f2]/10"
                      : "border-gray-700 bg-transparent hover:border-gray-600"
                  }`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M8 2L9.5 6H14L10.5 8.5L12 13L8 10.5L4 13L5.5 8.5L2 6H6.5L8 2Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-white text-sm">Favorites</span>
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="w-full sm:w-auto flex-1 min-w-[200px]">
              <MultiSelect
                options={categoryOptions}
                selected={selectedCategories}
                onChange={setSelectedCategories}
                placeholder="Select categories"
                label="Categories"
              />
            </div>

            {/* Minimum APY */}
            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <label className="text-white text-sm font-medium">Minimum APY</label>
              <input
                type="text"
                value={minimumAPY}
                onChange={(e) => setMinimumAPY(e.target.value)}
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded text-white focus:outline-none focus:border-[#45c7f2] w-full sm:max-w-[100px]"
              />
            </div>

            {/* Minimum Risk */}
            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <label className="text-white text-sm font-medium">Minimum Risk</label>
              <input
                type="text"
                value={minimumRisk}
                onChange={(e) => setMinimumRisk(e.target.value)}
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded text-white focus:outline-none focus:border-[#45c7f2] w-full sm:max-w-[100px]"
              />
            </div>

            {/* Blockchain */}
            <div className="w-full sm:w-auto flex-1 min-w-[200px]">
              <MultiSelect
                options={blockchainOptions}
                selected={selectedBlockchains}
                onChange={setSelectedBlockchains}
                placeholder="Select blockchains"
                label="Blockchain"
                showIcons={true}
              />
            </div>

            {/* Assets */}
            <div className="w-full sm:w-auto flex-1 min-w-[200px]">
              <MultiSelect
                options={assetOptions}
                selected={selectedAssets}
                onChange={setSelectedAssets}
                placeholder="Select Assets"
                label="Assets"
                showIcons={true}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 w-full lg:w-auto lg:ml-auto pt-4 lg:pt-0">
              <button
                onClick={handleRemove}
                className="flex-1 lg:flex-none px-6 py-2 text-red-500 hover:text-red-400 transition-colors whitespace-nowrap"
              >
                Remove
              </button>
              <button
                onClick={handleApply}
                className="flex-1 lg:flex-none px-6 py-2 rounded text-white font-medium whitespace-nowrap"
                style={{
                  background: "linear-gradient(92.4deg, #45c7f2 0%, #4596f2 100%)",
                  boxShadow: "0px 0px 17px 0px rgba(69, 199, 242, 0.4)",
                }}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
        </>
      )}
    </div>
  );
};

export default Filter;
