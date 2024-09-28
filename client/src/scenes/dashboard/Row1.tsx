import DashboardBox from "../../components/DashboardBox";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SearchIcon from '@mui/icons-material/Search';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

 const Row1 =  () => {
  return (
    <>
      <DashboardBox gridArea="a" className="" style={{ backgroundColor: 'white', height: '70px' }} >
        <div className="flex gap-2.5 bg-white justify-between">
          <div className="flex gap-2.5">
            <div id='botao_voltar' className="flex justify-center items-center w-11 h-9 bg-purple-100 text-purple-700 ml-3 mt-3">
              <ArrowBackIosNewIcon className="w-3 h-3" />
            </div>

            <div className="form flex gap-2.5 h-8">

              <div className="flex flex-col gap-1">
                <label>Centro de custo:</label>
                <select name="linguagem" className="rounded p-1">
                  <option value="">Selecione...</option>
                  <option value="opcao1">opcao1</option>
                  <option value="opcao2">opcao2</option>
                  <option value="opcao3">opcao3</option>
                  <option value="opcao4">opcao4</option>
                  <option value="opcao5">opcao5</option>
                </select>
              </div>

              <div className="data-inicial flex flex-col gap-1">
                <label>Data Inicial:</label>
                <input type="date" id="date-start" name="date-start" className="text-center border border-gray-300 rounded p-1" />
              </div>

              <div className="data-final flex flex-col gap-1">
                <label>Data Final:</label>
                <input type="date" id="date-end" name="date-end" className="text-center border border-gray-300 rounded p-1" />
              </div>

              <div className="flex items-center p-12 justify-start">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="mr-2" />
                <label htmlFor="vehicle1">Emitidos</label>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 h-12 px-2">

            <div className="pdf w-40 h-10 bg-purple-100 gap-2 flex items-center justify-center">
              <PictureAsPdfIcon className="text-purple-700" />
              <label className="text-purple-700">PDF</label>
            </div>

            <div className="pesquisar w-40 h-10 bg-purple-700 gap-2 flex items-center justify-center">
              <SearchIcon className="text-pink-100" />
              <label className="text-pink-100">PESQUISAR</label>
            </div>

          </div>

        </div>
      </DashboardBox>
      <DashboardBox gridArea="b" className="h-[100px]">
        <div className="relative h-[100px] bg-white">
          <div className="pt-5 pl-4 flex justify-between items-center">
            <label className="text-sx">TOTAL RECEITA</label>
            <ArrowCircleUpIcon className="text-green-500 h-[20px] flex jusfity-end mr-4" />
          </div>
          <div className="ml-4">
            <label htmlFor="" className="absolute bottom-0 h-[30px] text-sm">R$ 41.954,26</label>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[10px] bg-green-500"></div>
        </div>

      </DashboardBox>
      <DashboardBox gridArea="c" className="h-[100px]">
        <div className="relative h-[100px] bg-white">
          <div className="pt-5 pl-4 flex justify-between items-center">
            <label className="text-sx">TOTAL DESPESA</label>
            <ArrowCircleDownIcon className="text-red-500 h-[20px] flex jusfity-end mr-4" />
          </div>
          <div className="ml-4">
            <label htmlFor="" className="absolute bottom-0 h-[30px] text-sm">R$ 67.740,79</label>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[10px] bg-red-500"></div>
        </div>
      </DashboardBox>

    </>
  );
};

export default Row1;