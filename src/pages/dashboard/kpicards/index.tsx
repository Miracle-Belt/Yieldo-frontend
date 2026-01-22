import moneyIcon from "../../../assets/images/money-send.png";
import groupIcon from "../../../assets/images/group.png";
import chartIcon from "../../../assets/images/landing/chart.png";

const KPICards = () => {
  const cards = [
    {
      title: "Total AUM acquired",
      value: "$1,234,567",
      icon: <img src={moneyIcon} className="w-[26px] h-[26px]" alt="" />,
    },
    {
      title: "Total earnings",
      value: "$12,567",
      icon: <img src={groupIcon} className="w-[26px] h-[26px]" alt="" />,
    },
    {
      title: "Vault-level performance",
      value: "%12",
      icon: <img src={chartIcon} className="w-[26px] h-[26px]" alt="" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-[#080808] border border-gray-800 rounded-lg p-6 flex flex-col gap-4"
        >
          <div className="flex items-center justify-start">
            <div className="w-12 h-12  flex items-center justify-center text-white">
              {card.icon}
            </div>
            <div className="text-white text-sm">{card.title}</div>
          </div>
          <div>
            <div className="text-white text-3xl font-bold">{card.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KPICards;
