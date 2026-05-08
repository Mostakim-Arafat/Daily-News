import { NewsDetail } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export const  generateMetadata = async({ params, searchParams }) => {
   const {id} = await params
   const data = await NewsDetail(id)
   
    return {
    title: data.title, 
  }
   
}

const NewsDetails = async ({ params }) => {
    const { id } = await params
    const data = await NewsDetail(id)
    
    

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            </div>
            <figure>
                <Image src={data.image_url} alt="detail img" width={100} height={100}></Image>
            </figure>
            <Link href={`/catagory/${data.category_id}`}>
                <button className="btn btn-primary">Go to news</button>
            </Link>
        </div>
    );
};

export default NewsDetails;