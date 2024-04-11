import Layout from "@/components/Layout";
import {useState} from "react";
import axios from "axios";

export default function newProduct(){
    const [title, setTitle] = useState('');
    const [desctiption, setDesctiption] = useState('');
    const [price, setPrice] = useState('');
    async function createProduct(ev){
        ev.preventDefault();
        const data = {title, desctiption, price};
        // to create a product we need to send a post request to the api so i use an axios
        await axios.post('/api/products', )
    }
    return(
        <Layout>
            <form onSubmit={createProduct}>
                <h1>New Product</h1>
                <label>Product Name</label>
                <input type="text" placeholder="product name" value={title} onChange={ev => setTitle(ev.target.value)}/>
                <label>Desctiption</label>
                <textarea placeholder="desctiption" value={desctiption} onChange={ev => setDesctiption(ev.target.value)}/>
                <label>Price (in USD)</label>
                <input type="number" placeholder="price" value={price} onChange={ev => setPrice(ev.target.value)}/>
                <button type="submit" className="btn-primary">Save</button>
            </form>
        </Layout>
    )
}