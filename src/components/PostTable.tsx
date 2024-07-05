import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useLoaderData } from "react-router-dom";

interface TPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostTable = () => {
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
    <>
      <div className="text-center">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
          Posts Data
        </h1>
      </div>
      <Box sx={{ height: 500, width: "100%" }}>
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
    </>
  );
};

export default PostTable;
