import Select from "../../assets/images/home/select.png"
import Share from "../../assets/images/home/share.png"
import Earn from "../../assets/images/home/earn.png"
const Work = () => {
        return(
            <div className="relative w-[1920px] h-[654px] gap-[80px] bg-black top-[100px] grid grid-cols-1 justify-items-center">
                <div className="w-[668px] h-[167px] gap-[16px] grid grid-cols-1 justify-items-center">
                    <div className="w-[63px] h-[25px] pt-[4px] pb-[4px] pr-[12px] pl-[12px] justify-items-center">
                        <div className="w-[52px] h-[22px] text-[18px] justify-items-center text-center">Lorem</div>
                    </div>
                    <div className="w-[349px] h-[58px] text-[48px]">HOW IT WORKS</div>
                    <div className="w-[668px] h-[52px] text-[22px] text-center">Fusce volutpat lectus et nisl consectetur finibus. In vitae scelerisque augue, in varius eros. Nunc sapien diam, euismod et pretium ir.</div>
                </div>
                <div className="w-[1400px] h-[207px] gap-[80px] flex justify-center items-center">
                    <img src ={Select} />
                    <img src ={Share} />
                    <img src = {Earn} />
                </div>
            </div>
        )
}
export default Work;