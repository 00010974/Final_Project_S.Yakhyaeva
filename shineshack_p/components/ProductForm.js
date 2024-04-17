import {useState} from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function ProductForm({_id, title:exsistingTitle, description:exsistingDescription, price:exsistingPrice, images,}) {
    const [title, setTitle] = useState(exsistingTitle || '');
    const [description, setDescription] = useState(exsistingDescription || '');
    const [price, setPrice] = useState(exsistingPrice || '');
    const [goToProducts, setGoToProducts] = useState(false);
    const router = useRouter();
    async function saveProduct(ev){
        ev.preventDefault();
        const data = {title, description, price};
        if (_id){
            //update
            await axios.put('/api/products', {...data,_id});
            
        }else{
            //create
            // to create a product we need to send a post request to the api so i use an axios
            await axios.post('/api/products', data);
            
        }
        setGoToProducts(true);
    }
    if (goToProducts){
        router.push('/products');
    }
    async function uploadImage(ev){
        const files = ev.target?.files;
        if (files?.length > 0) {
            const data = new FormData();
            for (const file of files){
                data.append('file', file);
            }
            const res = await fetch('/api/upload',{
                method: 'POST',
                body: data,
            })
            console.log(res);
        }
    }
    return(
            <form onSubmit={saveProduct}>
                <label>Product Name</label>
                <input type="text" placeholder="product name" value={title} onChange={ev => setTitle(ev.target.value)}/>
                <label>
                    Photos
                </label>
                <div className="mb-2">
                    <label className="w-32 h-32 cursor-pointer text-center flex items-center justify-center text-sm gap-1 text-gray-500 rounded-lg bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                        </svg>
                        <div>
                            Upload
                        </div>
                        <input type="file" onChange={uploadImage} className="hidden" />
                    </label>
                    {!images?.length && (
                        <div>No photos in this product</div>
                    )}
                </div>
                <label>Description</label>
                <textarea placeholder="description" value={description} onChange={ev => setDescription(ev.target.value)}/>
                <label>Price (in USD)</label>
                <input type="number" placeholder="price" value={price} onChange={ev => setPrice(ev.target.value)}/>
                <button type="submit" className="btn-primary">Save</button>
            </form>
    );
}