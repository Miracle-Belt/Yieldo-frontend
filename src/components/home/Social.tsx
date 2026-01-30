import Video from "../../assets/images/home/video.png";
const Social = () => {
  return (
    <div className="relative w-full py-20 bg-black flex flex-col items-center gap-16 px-6">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="text-sm uppercase tracking-widest opacity-60">
          LOREM IPSUM
        </div>
        <div className="text-3xl md:text-5xl uppercase">SOCIAL VALIDATION</div>
      </div>
      <div className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl">
        <img
          src={Video}
          alt="Social Validation Video"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
export default Social;
