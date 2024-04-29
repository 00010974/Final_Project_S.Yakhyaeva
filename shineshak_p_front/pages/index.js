// import Featured from "@/components/Featured";
// import Header from "@/components/Header";
// import {Product} from '@/models/Product';
// import {mongooseConnect} from '@/lib/mongoose';



// export default function HomePage({Featuredproduct, NewProducts}) {
//   return(
//     <div>
//       <Header />
//       <Featured product={Featuredproduct} />
//       <NewProducts products={NewProducts}/>
//     </div>
//   );
// }




// export async function getServerSideProps(){
//   const FeaturedProductId = '662e764fc9472b1cdbf4547b';
//   await mongooseConnect();
//   const Featuredproduct = await Product.findById(FeaturedProductId);
//   const NewProducts = await Product.find({}, null, {sort:{'_id':-1}, limit:2});
//   return{
//     props: {
//       Featuredproduct: JSON.parse(JSON.stringify(Featuredproduct)),
//       NewProducts: JSON.parse(JSON.stringify(NewProducts)),
//     },
//   };
// }


import Header from "@/components/Header";
import Featured from "@/components/Featured";
import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";


export default function HomePage({featuredProduct,newProducts}) {
  return (
    <div>
      <Header />
      <Featured product={featuredProduct} />
      <NewProducts products={newProducts} />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = '662e764fc9472b1cdbf4547b';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}