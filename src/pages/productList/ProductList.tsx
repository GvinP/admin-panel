import { useEffect } from "react";
import "./productList.css";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import EditOutlined from "@material-ui/icons/EditOutlined";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getAllProducts } from "../../reducers/productReducer";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "product",
    headerName: "Product",
    width: 200,
    renderCell(params) {
      return (
        <div className="productListItem">
          <img src={params.row.image} alt="" className="productListImage" />
          {params.row.name}
        </div>
      );
    },
  },
  { field: "stock", headerName: "Stock", width: 200 },
  { field: "status", headerName: "Status", width: 120 },
  { field: "price", headerName: "Price", width: 160 },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell(params) {
      return (
        <>
          <Link to={`/product/${params.row.id}`}>
            <EditOutlined className="productListEdit" />
          </Link>
          <DeleteOutline className="productListDelete" />
        </>
      );
    },
  },
];

export const ProductList = () => {
  const products = useAppSelector((state) => state.product.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="productList">
      <DataGrid
        rows={products}
        getRowId={(row) => row._id}
        columns={columns}
        pageSize={8}
        disableSelectionOnClick
        checkboxSelection
      />
    </div>
  );
};
