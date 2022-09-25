import "./newProduct.css";
import { ChangeEvent, useState, FormEvent } from "react";
import { IProduct } from "../../api/api";
import { useAppDispatch } from "../../store/hooks";
import { addProduct } from "../../reducers/productReducer";

export const NewProduct = () => {
  const dispatch = useAppDispatch()
  const [product, setProduct] = useState<IProduct>({
    title: '',
    description: '',
    price: '',
    categories: [''],
    color: [''],
    size: [''],
    inStock: true,
    image: '',
  } as IProduct);

console.log(product);


  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];
      convertFileToBase64(file, (file64: string) => {
        setProduct({ ...product, image: file64 });
      });
    }
  };

  const convertFileToBase64 = (
    file: File,
    callBack: (value: string) => void
  ) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const file64 = reader.result as string;
      callBack(file64);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addProduct(product));
  }

  return (
    <div className="newProduct">
      <h1 className="newProductTitle">New User</h1>
      <div className="newProductItem">
        <label htmlFor="file">Image</label>
        <input
          type={"file"}
          id="file"
          onChange={uploadHandler}
          multiple={false}
        />
      </div>
      <form className="newProductForm" onSubmit={handleSubmit}>
        <div className="newProductItem">
          <label>Title</label>
          <input type={"text"} placeholder="Title" value={product.title} onChange={(e)=>setProduct({...product, title: e.target.value})} />
        </div>
        <div className="newProductItem">
          <label>Desription</label>
          <input type={"text"} placeholder="Desription" value={product.description} onChange={(e)=>setProduct({...product, description: e.target.value})}/>
        </div>
        <div className="newProductItem">
          <label>Price</label>
          <input type={"text"} placeholder="Price" value={product.price} onChange={(e)=>setProduct({...product, price: e.target.value})}/>
        </div>
        <div className="newProductItem">
          <label>Catigories</label>
          <input type={"text"} placeholder="Catigories" value={product.categories} onChange={(e)=>setProduct({...product, categories: e.target.value.split(',')})}/>
        </div>
        <div className="newProductItem">
          <label>Size</label>
          <input type={"text"} placeholder="Size" value={product.size} onChange={(e)=>setProduct({...product, size: e.target.value.split(',')})}/>
        </div>
        <div className="newProductItem">
          <label>Color</label>
          <input type={"text"} placeholder="Color" value={product.color} onChange={(e)=>setProduct({...product, color: e.target.value.split(',')})}/>
        </div>
        <div className="newProductItem">
          <label>Stock</label>
          <select name="active" id="active" className="newProductSelect" onChange={(e)=>setProduct({...product, inStock: !!e.target.value})}>
            <option value="1">Yes</option>
            <option value="">No</option>
          </select>
        </div>
        <button className="newProductButton">Create</button>
      </form>
    </div>
  );
};
