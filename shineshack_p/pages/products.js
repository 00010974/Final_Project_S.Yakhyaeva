//password mangodb atlas k7XVrWMyWqh$jqJ mail sbyakhyaeva@gmail.com/sabrina290103@gmail.com
import Link from 'next/link';
import Layout from "@/components/Layout";
import { useEffect } from 'react';

export default function Products(){
    useEffect(() => {

    }, []);
    return (
        <Layout>
            <Link className="bg-green-700 text-white rounded-md py-1 px-2" href={'/Products/new_product'}>Add new product</Link>
        </Layout>
    )
}