import "./style.css";
interface props {
  content: string;
}

const Button = ({ content }: props) => {
  return (
    <button
      className="size-sm h-[35px] rounded-[4px] py-[8px] px-[12px] gap-[8px] hover:bg-[#3bb0d9] transition-colors myBtn flex items-center justify-center
     cursor-pointer bg-black [box-shadow:0px_0px_17px_0px_rgba(69,199,242,0.15)] transition-all duration-300 
     hover:border-[rgba(69,199,242,0.4)] hover:[box-shadow:0px_0px_25px_0px_rgba(69,199,242,0.25)]"
    >
      <span className="text-black text-[16px] font-medium">{content}</span>
    </button>
  );
};

export default Button;
