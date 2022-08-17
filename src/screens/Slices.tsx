import { Box, Button, Typography } from "@mui/material";
import * as React from "react";

import Header from "../components/Header";
import { Slices } from "../types";
import { getCurrentLocale } from "../utils/currentLocale";
import { useRouter } from "next/router";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridToolbar,
} from "@mui/x-data-grid";
import { serverEndPoint } from "../utils/server";
import fetcher from "../utils/fetch";
import useSWRImmutable from "swr/immutable";

const slicesEndPoint = `${serverEndPoint}/api/slices?lang=${getCurrentLocale()}`;

const SlicesScreen = () => {
  const { data } = useSWRImmutable<Slices>(slicesEndPoint, fetcher);

  const router = useRouter();

  const handleClick = (sliceName: string) => {
    router.push(`/slices/${sliceName}?lang=${getCurrentLocale()}`);
  };

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Slice Name",
      width: 400,
      renderCell: ({ row }: GridRenderCellParams) => {
        return (
          <Button onClick={() => handleClick(row.name)}>
            {row.name.replaceAll("_", " ")}
          </Button>
        );
      },
    },
  ];

  return (
    <>
      <Header title="All Prismic slices" />
      <Box p={8} height="85vh" pt={6}>
        <DataGrid
          rows={data || []}
          columns={columns}
          pageSize={10}
          loading={!data}
          rowsPerPageOptions={[10]}
          components={{ Toolbar: GridToolbar }}
        />
        <Typography variant="overline" pt={2} align="center" display={"block"}>
          All the <strong>slices</strong> present in the Prismic on &nbsp;
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
          })}
        </Typography>
      </Box>
    </>
  );
};

export default SlicesScreen;
