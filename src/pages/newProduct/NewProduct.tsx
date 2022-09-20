import "./newProduct.css"

export const NewProduct = () => {
  return (
    <div className="newProduct">
        <h1 className="newProductTitle">New User</h1>
        <div className="newProductItem">
          <label htmlFor="file">Image</label>
          <input type={"file"} id="file" />
        </div>
      <form className="newProductForm">
        <div className="newProductItem">
          <label>Product Name</label>
          <input type={"text"} placeholder="Productname" />
        </div>
        <div className="newProductItem">
          <label>Stock</label>
          <input type={"text"} placeholder="32" />
        </div>
        <div className="newProductItem">
          <label>Active</label>
          <select name="active" id="active" className="newProductSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newProductButton">Create</button>
      </form>
    </div>
  )
}