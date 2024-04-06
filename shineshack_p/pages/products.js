import Layout from "@/components/Layout";

export default function Products(){
    return (
        <Layout>
            <Link classname="bg-green-700 text-white rounded-md py-1 px-2" href={'/product/new'}>Add new product</Link>
        </Layout>
    )
}