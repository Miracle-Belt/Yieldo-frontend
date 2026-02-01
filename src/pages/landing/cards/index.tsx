import Card from "../../../components/card";
import "./style.css";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {[...Array(1)].map((_, index) => (
        <Card key={index} index={index} />
      ))}
    </div>
  );
};

export default Cards;
