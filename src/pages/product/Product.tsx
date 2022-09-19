import "./product.css";
import { Link } from "react-router-dom";
import { Chart } from "../../components/chart/Chart";
import Publish from "@material-ui/icons/Publish";

const data = [
  {
    name: "Jun",
    Sales: 3390,
  },
  {
    name: "Jul",
    Sales: 2490,
  },
  {
    name: "Agu",
    Sales: 4000,
  },
];

export const Product = () => {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to={"/newproduct"}>
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            data={data}
            dataKey="Sales"
            title="Sales Perfomance"
            grid={false}
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://lp2.hm.com/hmgoepprod?set=source[/86/94/86943927061d67bed7d1550e3734bc33cde15c6b.jpg],origin[dam],category[ladies_trousers_highwaisted],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
              alt=""
              className="productInfoImage"
            />
            <span className="productName">Wide-leg Twill Pants</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id: </span>
              <span className="productInfoValue">32</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales: </span>
              <span className="productInfoValue">2132</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active: </span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock: </span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type={"text"} placeholder={"Product Name"} />
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value={"yes"}>Yes</option>
              <option value={"no"}>No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value={"yes"}>Yes</option>
              <option value={"no"}>No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://lp2.hm.com/hmgoepprod?set=source[/86/94/86943927061d67bed7d1550e3734bc33cde15c6b.jpg],origin[dam],category[ladies_trousers_highwaisted],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
                alt=""
                className="productUploadImage"
              />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type={"file"} id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};
