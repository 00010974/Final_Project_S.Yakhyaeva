import Featured from "@/components/Featured";
import Header from "@/components/Header";
import {Product} from '@/models/Product';
import {mongooseConnect} from '@/lib/mongoose'
import NewProducts from "@/components/NewProducts";


export default function HomePage({product, newProducts}) {
  return(
    <div>
      <Header />
      <Featured product={product} />
      <NewProducts product={newProducts} />
    </div>
  );
}



export async function getServerSideProps(){
  const FeaturedProductId = '662e764fc9472b1cdbf4547b';
  await mongooseConnect();
  const product = await Product.findById(FeaturedProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id': -1}, limit:10});
  return{
    props: {
      product: JSON.parse(JSON.stringify(product)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    }
  };
}