import Link from "next/link";

const notFound = () => {
    return (
        <div>
            <h1 className="text-3xl text-center">Not found</h1>
            <Link href={'/'}>
               <button className="btn btn-success">HOME</button>
            </Link>

        </div>
    );
};

export default notFound;