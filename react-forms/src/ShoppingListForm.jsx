import {useState} from 'react'
export default function ShoppingListForm({addItem}){
    const [formData, setFormData] = useState({product:"", quantity:0})
    const handleChange = (evt) => {
        setFormData(currData =>{
            return{
                ...currData,
                [evt.target.name]: evt.target.value
            }
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        addItem(formData)
        setFormData({product: "", quantity:0})
    }
    return(
        <form onSubmit={handleSubmit}>
            <h1>Product is {formData.product} and quantity is: {formData.quantity}</h1>
            <label htmlFor="product">Product Name</label>
            <input type="text"
             placeholder="product name" name="product"
              id="product" 
              onChange={handleChange}
              value={formData.product}/>
              <br />

              <label htmlFor="quantity">Quantity</label>
            <input type="number"
             placeholder="quantity" name="quantity"
              id="quantity" 
              onChange={handleChange}
              value={formData.quantity}/>
              <button>Add item</button>
        </form>
    )
}