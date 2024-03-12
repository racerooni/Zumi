import prismadb from "@/lib/prismadb";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: Request) {
    try {

        console.log(req)

        const billboards = await prismadb.billboard.findMany({
            where: {
                label: {
                    contains: ""
                }
            }
        });

        return NextResponse.json(billboards);
    } catch (error) {
        console.log('[BILLBOARDS_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
}
