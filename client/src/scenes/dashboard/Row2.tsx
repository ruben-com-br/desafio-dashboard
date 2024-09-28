import BoxHeader from "../../components/BoxHeader";
import DashboardBox from "../../components/DashboardBox";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


const Row2 = () => {
    return (
    <>
      <DashboardBox gridArea="d" className="h-[100px]">
      <div className="relative h-[100px] bg-white">
          <div className="pt-5 pl-4 flex justify-between items-center">
            <label className="text-sx">LUCRO LÍQUIDO</label>
            <ThumbUpOffAltIcon className="text-yellow-500 h-[20px] flex jusfity-end mr-4"/>
          </div>
          <div className="ml-4">
            <label htmlFor="" className="absolute bottom-0 h-[40px] text-xl">-R$ 25.786,53</label>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[10px] bg-yellow-500"></div>
        </div>
      </DashboardBox>
      <DashboardBox gridArea="e" className="h-[100px]">
      <div className="relative h-[100px] bg-white">
          <div className="pt-5 pl-4 flex justify-between items-center">
            <label className="text-sx ">CONTAS VENCIDAS:</label>
            <AccountBalanceWalletIcon className="text-blue-500 h-[20px] flex jusfity-end mr-4"/>
          </div>
          <div className="flex justify-center gap-2 absolute bottom-0 h-[40px] whitespace-nowrap px-4">
            <div id='receber' className="flex flex-col">
              <label htmlFor="" className="text-[8px]">RECEBER:</label>
              {/* <label htmlFor="">R$ 7.500,00</label> */}
              <label htmlFor="" className="bottom-0 h-[40px] text-sm inline-block">R$ 7.500,00</label>
            </div>
            <div id='apagar' className="flex flex-col">
              <label htmlFor="" className="text-[8px]">A PAGAR:</label>
              <label htmlFor="" className="bottom-0 h-[40px] text-sm inline-block">R$ 34.853,00</label>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[10px] bg-blue-500"></div>
        </div>
      </DashboardBox>
      <DashboardBox gridArea="f" className="h-[100px]">
      <div className="relative h-[100px] bg-white">
          <div className="pt-5 pl-4 flex justify-between items-center">
            <label className="text-sx">CONTAS A VENCER:</label>
            <AccountBalanceWalletIcon className="text-blue-500 h-[20px] flex jusfity-end mr-4"/>
          </div>
          <div className="flex justify-center gap-2 absolute bottom-0 h-[40px] whitespace-nowrap px-4">
            <div id='receber' className="flex flex-col">
              <label htmlFor="" className="text-[8px]">RECEBER:</label>
              {/* <label htmlFor="">R$ 7.500,00</label> */}
              <label htmlFor="" className="bottom-0 h-[40px] text-sm inline-block">- -</label>
            </div>
            <div id='apagar' className="flex flex-col">
              <label htmlFor="" className="text-[8px]">A PAGAR:</label>
              <label htmlFor="" className="bottom-0 h-[40px] text-sm inline-block">- -</label>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[10px] bg-blue-500"></div>
        </div>
      </DashboardBox>
      <DashboardBox gridArea="g" style={{backgroundColor: "white", color:"black"}}>
        <BoxHeader
          title="RESULTADOS POR PERÍODO"
          sideText=""          
        />
        
      </DashboardBox>
    </>
  );
};

export default Row2;