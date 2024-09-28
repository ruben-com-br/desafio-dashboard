import BoxHeader from "../../components/BoxHeader";
import DashboardBox from "../../components/DashboardBox";
import FlexBetween from "../../components/FlexBetween";
import {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
} from "../../state/api";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { useEffect, useMemo, useState } from "react";
import { Cell, Pie, PieChart } from "recharts";
import MovingIcon from '@mui/icons-material/Moving';

import { useQuery } from "react-query";
import { api } from "../../state/use-query/api";

const Row3 = () => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[500]];

  const { data } = useQuery("repo", api.getUsers);
  console.log(data)

  let somaDespesa = 0;
  let somaReceita = 0

  data?.map((repo) => {
    somaDespesa += parseFloat(repo.despesa)
    somaReceita += parseFloat(repo.receita)
  })

  const somaTotal = somaReceita - somaDespesa
  console.log(somaReceita, somaDespesa, somaTotal)

  function formatarMoeda(valor: number): string {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }
  
  return (
    <>
      <DashboardBox gridArea="h">


        <div className="relative overflow-x-auto">
          <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Nome</th>
                <th scope="col" className="px-6 py-3">Despesa</th>
                <th scope="col" className="px-6 py-3">Receita</th>
                <th scope="col" className="px-6 py-3">Resultado</th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {data?.map((repo) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4">{repo.nome}</th>
                  <td className="px-6 py-4">{formatarMoeda(parseFloat(repo.despesa))}</td>
                  <td className="px-6 py-4">{formatarMoeda(parseFloat(repo.receita))}</td>
                  <td className="px-6 py-4">{formatarMoeda(parseFloat(repo.receita) - parseFloat(repo.despesa))}</td>
                  <td className="px-6 py-4">{parseFloat(repo.despesa) > parseFloat(repo.receita) ? <MovingIcon className="scale-y-[-1] text-red-600" /> : <MovingIcon className="text-blue-600" />}</td>
                </tr>
              ))}
              {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4">MOCK - SUZANO TRANSPORTE FLORESTAL</th>
                <td className="px-6 py-4">R$ 53.549,47</td>
                <td className="px-6 py-4">R$ 41.954,26</td>
                <td className="px-6 py-4">-R$ 11.595,21</td>
                <td className="px-6 py-4"><MovingIcon className="scale-y-[-1] text-red-600" /></td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4">
                  MOCK-TRANSPORTE DE AGREGADOS ITABIRA MG
                </th>
                <td className="px-6 py-4">R$ 14.191,32</td>
                <td className="px-6 py-4">R$ 0,00</td>
                <td className="px-6 py-4">-R$ 14.191,32</td>
                <td className="px-6 py-4"><MovingIcon className="scale-y-[-1] text-red-600" /></td>
              </tr> */}
              <tr className="text-white bg-violet-600 border-b border-violet-600 whitespace-nowrap">
                <th scope="row" className="px-6 py-4">Total:</th>
                <td className="px-6 py-4">{formatarMoeda(somaDespesa)}</td>
                <td className="px-6 py-4">{formatarMoeda(somaReceita)}</td>
                <td className="px-6 py-4">{formatarMoeda(somaTotal)}</td>
                <td className="px-6 py-4"></td>
              </tr>
              {/* <tr className="text-white bg-violet-600 border-b border-violet-600">
                <th scope="row" className="px-6 py-4">Mock - Total:</th>
                <td className="px-6 py-4">R$ 67.740,79</td>
                <td className="px-6 py-4">R$ 41.954,26</td>
                <td className="px-6 py-4">-R$ 25.786,53</td>
                <td className="px-6 py-4"></td>
              </tr> */}
            </tbody>
          </table>
        </div>

      </DashboardBox>
      {/* <DashboardBox gridArea="i">
        <BoxHeader title="Expense Breakdown By Category" sideText="+4%" />
        <FlexBetween mt="0.5rem" gap="0.5rem" p="0 1rem" textAlign="center">
          {pieChartData?.map((data, i) => (
            <Box key={`${data[0].name}-${i}`}>
              <PieChart width={110} height={100}>
                <Pie
                  stroke="none"
                  data={data}
                  innerRadius={18}
                  outerRadius={35}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {data.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index]} />
                  ))}
                </Pie>
              </PieChart>
              <Typography variant="h5">{data[0].name}</Typography>
            </Box>
          ))}
        </FlexBetween>
      </DashboardBox> */}
      {/* <DashboardBox gridArea="j">
        <BoxHeader
          title="Overall Summary and Explanation Data"
          sideText="+15%"
        />
        <Box
          height="15px"
          margin="1.25rem 1rem 0.4rem 1rem"
          bgcolor={palette.primary[800]}
          borderRadius="1rem"
        >
          <Box
            height="15px"
            bgcolor={palette.primary[600]}
            borderRadius="1rem"
            width="40%"
          ></Box>
        </Box>
        <Typography margin="0 1rem" variant="h6">
          Orci aliquam enim vel diam. Venenatis euismod id donec mus lorem etiam
          ullamcorper odio sed. Ipsum non sed gravida etiam urna egestas
          molestie volutpat et. Malesuada quis pretium aliquet lacinia ornare
          sed. In volutpat nullam at est id cum pulvinar nunc.
        </Typography>
      </DashboardBox> */}
    </>
  );
};

export default Row3;