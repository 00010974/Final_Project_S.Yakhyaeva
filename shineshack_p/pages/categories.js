import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import { withSwal } from 'react-sweetalert2';


function Categories({swal}) {
    const [editedCategory, setEditedCategory] = useState(null);
    const [name, setName] = useState('');
    const [parentCategory, setParentCategory] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, [])

    function fetchCategories(){ 
        axios.get('/api/categories').then(result => {
            setCategories(result.data);
         });
     }
    
    async function saveCategory(ev){
        ev.preventDefault();
        const data = {name, parentCategory};
        if (editedCategory){
            data._id = editedCategory._id;
            await axios.put('/api/categories', data);
            setEditedCategory(null);
        } else {
            await axios.post('/api/categories', data);
        }
        setName('');
        fetchCategories(); 
    }

    function editCategory(category){
        setEditedCategory(category);
        setName(category.name);
        setParentCategory(category.parent?._id);
    }

    function deleteCategory(category){
        swal.fire({
            title: 'Example',
            text: 'Hello World',
            didOpen: () => {
                // run when swal is opened...
            },
            didClose: () => {
                // run when swal is closed...
            }
        }).then(result => {
            // when confirmed and promise resolved...
        }).catch(error => {
            // when promise rejected...
        });
    }

    return(
        <Layout>
            <h1>Categories</h1>
            <label>{editedCategory ? `Edit category ${editedCategory.name}` : 'Create new category'}</label>
            <form onSubmit={saveCategory} className="flex gap-1">
                <input className="mb-0" type="text" placeholder="Category name" onChange={ev => setName(ev.target.value)} value={name}/>
                <select className="mb-0" onChange={ev => setParentCategory(ev.target.value)} value={parentCategory}>
                    <option value={0}>No parent category</option>
                    {categories.length > 0 && categories.map(category => (
                        <option key={category._id} value={category._id}>{category.name}</option>
                    ))}
                </select>
                <button type="submit" className="btn-primary py-1">Save</button>
            </form>
            <table className="basic mt-4">
                <thead>
                    <tr>
                        <td>Category name</td>
                        <td>Parent category</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {categories.length > 0 && categories.map(
                        category => (
                            <tr key={category._id}>
                                <td>{category.name}</td>
                                <td>{category?.parent?.name}</td>
                                <td>
                                    <div className="flex gap-1">
                                        <button onClick={() => editCategory(category)} className="btn-primary">Edit</button>
                                        <button onClick={() => deleteCategory(category)} className="btn-primary">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </Layout>
    );
}

export default withSwal(({ swal }, ref) => (
    <Categories swal={swal} />
)); 