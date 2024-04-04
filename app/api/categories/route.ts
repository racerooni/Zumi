import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    { params }: { params: { billboardId: string } }
  ) {
    try {
  
      const categories = await prismadb.categories.findMany()
        
  
      return NextResponse.json(categories);
    } catch (error) {
      console.log('[CATEGORIES_GET]', error);
      return new NextResponse("Internal error", { status: 500 });
    }
  };
  