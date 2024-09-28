import { useState } from "react";
import { Link } from "react-router-dom";
import PixIcon from "@mui/icons-material/Pix";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import AddIcon from '@mui/icons-material/Add';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import SearchIcon from '@mui/icons-material/Search';
import OpenWithIcon from '@mui/icons-material/OpenWith';

const Navbar = () => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  return (

    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* LEFT SIDE */}
      <FlexBetween gap="0.75rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            <AddIcon />
            Cadastro
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            <ArrowDownwardIcon />
            Contas á Pagar
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            <ArrowUpwardIcon />
            Contas á Receber
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            <ScreenShareIcon />
            Relatórios
          </Link>
        </Box>
      </FlexBetween>


      <FlexBetween gap="2rem">
        <SearchIcon />
        <OpenWithIcon />
        <Box className='flex flex-col items-center' sx={{ "&:hover": { color: palette.primary[100] } }}>
          <label htmlFor="">Admin</label>
          <label htmlFor="">Financeiro</label>
        </Box>
        <div id='botao_voltar' className="flex justify-center items-center w-11 h-9 bg-purple-100 text-purple-700 ml-3 mt-3">
          <label htmlFor="">A</label>
        </div>
      </FlexBetween>
    </FlexBetween>

  );
};

export default Navbar;
