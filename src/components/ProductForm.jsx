import React, {useState, useEffect} from 'react'
import ProductList from './ProductList'
import axios from "axios"


function ProductForm() {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(false);

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


    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res => {
            setProducts(res.data)
            setLoaded(true)
        })
        .catch(err => console.log(err))
    },[])

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
        <hr/>
        <h1>All products: </h1>
        {loaded && <ProductList products={products}/>}
    </div>
  )
}

export default ProductForm