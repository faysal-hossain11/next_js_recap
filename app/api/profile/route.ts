import { cookies, headers } from "next/headers";

export async function GET(request: Request) {

    (await cookies()).set("page", "2")

    console.log((await cookies()).get("page"));
    
}