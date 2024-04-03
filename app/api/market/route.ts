import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    req: NextRequest,
    res: NextResponse
  ) {
    const url = new URL(req.url);
    var query = url.searchParams.get('search')
  
    try {
        
  
      const billboard = await prismadb.products.findMany({
        where: {
          label: {
            contains: `${query}`
          }
        }
      });
  
      return NextResponse.json(billboard);
    } catch (error) {
      console.log('[BILLBOARD_GET]', error);
      return new NextResponse("Internal error", { status: 500 });
    }
  };