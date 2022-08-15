import { Box, Button, Typography } from "@mui/material";
import * as React from "react";

import { useRouter } from "next/router";
import Header from "../components/Header";
import Link from "next/link";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridToolbar,
} from "@mui/x-data-grid";
type Page = {
  url: string;
  title: any;
  occurrences: number;
};

type ScreenProps = {
  pages: Page[];
};

const getName = (page: Page) => {
  try {
    const [content] = page.title;
    return content.text;
  } catch (err) {
    return page.url;
  }
};

const PagesScreen = ({ pages }: ScreenProps) => {
  const router = useRouter();
  const { sid } = router.query;

  const CustomNoRowsOverlay = () => (
    <Typography
      component={"div"}
      variant="h6"
      display={"block"}
      align={"center"}
      pt={8}
    >
      This slice has not been added to any page yet!
    </Typography>
  );

  const getSliceName = () => {
    if (sid && typeof sid === "string") {
      return sid.replaceAll("_", " ");
    }
  };

  const columns: GridColDef[] = [
    {
      field: "title",
      headerName: "Page name",
      width: 700,
      renderCell: ({ row }: GridRenderCellParams) => {
        return (
          <Button>
            <a href={row.url} target={"_blank"} rel="noreferrer">
              {getName(row)}
            </a>
          </Button>
        );
      },
    },
    {
      field: "occurrences",
      width: 200,
      headerName: "Occurrences",
      align: "center",
      headerAlign: "center",
      renderCell: ({ row }: GridRenderCellParams) => {
        if (row.occurrences) return row.occurrences;

        return 1;
      },
    },
  ];

  const getHeader = () => {
    const headerTitle = (
      <>
        All Prismic pages which has{" "}
        <Box
          sx={{
            display: "inline-block",
            textTransform: "uppercase",
          }}
        >
          {getSliceName()}
        </Box>{" "}
        slice.
      </>
    );

    return <Header title={headerTitle} />;
  };

  return (
    <>
      {getHeader()}
      <Box p={8} pt={2}>
        <Box textAlign={"right"} mb={2}>
          <Link href={"/"}>Home</Link>
          <Box display={"inline-block"} width={16} />
          <Link href={"/slices"}>Back to slices</Link>
          <Box display={"inline-block"} width={16} />
          <Link href={"/"}>Change locale</Link>
        </Box>
        <Box height="70vh">
          <DataGrid
            rows={pages}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
            components={{
              Toolbar: GridToolbar,
              NoRowsOverlay: CustomNoRowsOverlay,
            }}
          />
          <Typography
            variant="overline"
            pt={2}
            align="center"
            display={"block"}
          >
            All we have <strong>{getSliceName()}</strong> in Prismic on &nbsp;
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default PagesScreen;
