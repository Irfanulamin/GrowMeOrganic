import { Box } from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";
import { useLoaderData } from "react-router-dom";

interface TPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Features = () => {
  const featureData = useLoaderData();

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "title",
      headerName: "Title",
      width: 300,
    },
    {
      field: "body",
      headerName: "Content",
      width: 800,
    },
  ];

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-screen-xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Posts Data</h1>
        </div>
        <Box sx={{ height: 650, width: "100%" }}>
          <DataGrid
            rows={featureData as TPost[]}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
          />
        </Box>
      </div>
    </div>
  );
};

export default Features;
