import React, {useState, useEffect} from 'react'
import axios from "axios"


function ProductForm() {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const newProduct = {
            title: title,
            price: price,
            description: description
        }

        axios.post("http://localhost:8000/api/products", newProduct)
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err))
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
            <label>Title</label>
            <input value={title} type={"text"} onChange={e => setTitle(e.target.value)}/>
            </div>
            <div>
            <label>Price</label>
            <input type={Number} step={0.1} min={0.1} value={price} onChange={e => setPrice(e.target.value)} />
            </div>
            <div>
            <label>Description</label>
            <textarea onChange={e => setDescription(e.target.value)}>{description}</textarea>
            </div>
            <button>Create</button>
        </form>
    </div>
  )
}

export default ProductForm