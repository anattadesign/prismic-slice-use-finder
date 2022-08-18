import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Image from "next/image";
const logoImage = process.env.NEXT_PUBLIC_PROJECT_LOGO_IMAGE;

type HeaderProps = {
  title: string | React.ReactNode;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", p: 3 }}>
      
      <Image src={logoImage} alt="Logo" width={60} height={60} />
      <Typography variant="h4" component="div" pl={4}>
        {title}
      </Typography>
    </Box>
  );
};

export default Header;
