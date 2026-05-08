
import { redirect, RedirectType } from "next/navigation";

export default async function Home() {
 const catagoryNo = '/catagory/01'
 redirect(`${catagoryNo}`, RedirectType.replace)
  return (
    <div>
          <h1>good</h1>
    </div>
  );
}
