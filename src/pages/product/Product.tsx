import "./product.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Chart } from "../../components/chart/Chart";
import Publish from "@material-ui/icons/Publish";
import { useAppSelector } from "../../store/hooks";
import { userRequest } from "../../api/config";

const Month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Agu", "Sep", "Oct", "Nov", "Dec"]

type ProductStats = {
  name: string,
  Sales: number,
}

export const Product = () => {
  const { id } = useParams();
  const product = useAppSelector(state=> state.product.products.find(product=> product._id === id))
  const [productStats, setProductStats] = useState<ProductStats[]>([])

  useEffect(() => {
    const getProductStats = async () => {
      const res = await userRequest.get<{_id: number, total: number}[]>(`orders/income?id=${id}`);
      res.data.map(item=> setProductStats(prev=> [...prev, {name: Month[item._id-1], Sales: item.total}]));
    };
    getProductStats();
  }, []);

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
            data={productStats}
            dataKey="Sales"
            title="Sales Perfomance"
            grid={false}
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src={product?.image}
              alt=""
              className="productInfoImage"
            />
            <span className="productName">{product?.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id: </span>
              <span className="productInfoValue">{product?._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales: </span>
              <span className="productInfoValue">2132</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock: </span>
              <span className="productInfoValue">{product?.inStock
              ? (
                <div style={{width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'green'}}/>
              ):(
                <div style={{width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'red'}}/>
              )
              }
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type={"text"} placeholder={product?.title} />
            <label>Product Description</label>
            <input type={"text"} placeholder={product?.description} />
            <label>Product Price</label>
            <input type={"text"} placeholder={product?.price.toString()} />
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value={"true"}>Yes</option>
              <option value={"false"}>No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src={product?.image}
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
