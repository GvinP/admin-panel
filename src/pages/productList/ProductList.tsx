import "./productList.css";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import EditOutlined from "@material-ui/icons/EditOutlined";
import { Link } from "react-router-dom";

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

const rows = [
  {
    id: 1,
    name: "Sokka",
    image:
      "https://lp2.hm.com/hmgoepprod?set=source[/d7/01/d701da40cebc69b9ba1da71fc96117ca8190be57.jpg],origin[dam],category[ladies_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
    stock: 123,
    status: "active",
    price: "$ 120.00",
  },
  {
    id: 2,
    name: "Sokka",
    image:
      "https://lp2.hm.com/hmgoepprod?set=source[/d7/01/d701da40cebc69b9ba1da71fc96117ca8190be57.jpg],origin[dam],category[ladies_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
    stock: 123,
    status: "active",
    price: "$ 120.00",
  },
  {
    id: 3,
    name: "Sokka",
    image:
      "https://lp2.hm.com/hmgoepprod?set=source[/d7/01/d701da40cebc69b9ba1da71fc96117ca8190be57.jpg],origin[dam],category[ladies_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
    stock: 123,
    status: "active",
    price: "$ 120.00",
  },
  {
    id: 4,
    name: "Sokka",
    image:
      "https://lp2.hm.com/hmgoepprod?set=source[/d7/01/d701da40cebc69b9ba1da71fc96117ca8190be57.jpg],origin[dam],category[ladies_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
    stock: 123,
    status: "active",
    price: "$ 120.00",
  },
  {
    id: 5,
    name: "Sokka",
    image:
      "https://lp2.hm.com/hmgoepprod?set=source[/d7/01/d701da40cebc69b9ba1da71fc96117ca8190be57.jpg],origin[dam],category[ladies_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
    stock: 123,
    status: "active",
    price: "$ 120.00",
  },
  {
    id: 6,
    name: "Sokka",
    image:
      "https://lp2.hm.com/hmgoepprod?set=source[/d7/01/d701da40cebc69b9ba1da71fc96117ca8190be57.jpg],origin[dam],category[ladies_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
    stock: 123,
    status: "active",
    price: "$ 120.00",
  },
  {
    id: 7,
    name: "Sokka",
    image:
      "https://lp2.hm.com/hmgoepprod?set=source[/d7/01/d701da40cebc69b9ba1da71fc96117ca8190be57.jpg],origin[dam],category[ladies_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
    stock: 123,
    status: "active",
    price: "$ 120.00",
  },
  {
    id: 8,
    name: "Sokka",
    image:
      "https://lp2.hm.com/hmgoepprod?set=source[/d7/01/d701da40cebc69b9ba1da71fc96117ca8190be57.jpg],origin[dam],category[ladies_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
    stock: 123,
    status: "active",
    price: "$ 120.00",
  },
  {
    id: 9,
    name: "Sokka",
    image:
      "https://lp2.hm.com/hmgoepprod?set=source[/d7/01/d701da40cebc69b9ba1da71fc96117ca8190be57.jpg],origin[dam],category[ladies_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
    stock: 123,
    status: "active",
    price: "$ 120.00",
  },
  {
    id: 10,
    name: "Sokka",
    image:
      "https://lp2.hm.com/hmgoepprod?set=source[/d7/01/d701da40cebc69b9ba1da71fc96117ca8190be57.jpg],origin[dam],category[ladies_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
    stock: 123,
    status: "active",
    price: "$ 120.00",
  },
];

export const ProductList = () => {
  return (
    <div className="productList">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        disableSelectionOnClick
        checkboxSelection
      />
    </div>
  );
};
