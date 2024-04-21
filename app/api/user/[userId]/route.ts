import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
    req: Request,
    { params }: { params: { storeId: string } }
  ) {
    try {
      const { userId } = auth();
      if (!userId) {
        throw new NextResponse('Érvénytelen')
      }
  
      const body = await req.json();
  
      const { name, city, phoneNumber, email } = body;
  
  

  
      const billboard = await prismadb.user.create({
        data: {
          id: userId,
          name,
          city,
          phoneNumber,
          email
        }
      });
    
      return NextResponse.json(billboard);
    } catch (error) {
      console.log('[BILLBOARDS_POST]', error);
      return new NextResponse("Internal error", { status: 500 });
    }
  };

  export async function GET(
    req: Request,
    { params }: { params: { storeId: string } }
  ) {
    try {
      const {userId} = auth();
  
      const user = await prismadb.user.findUnique({
        where: {
          id: `${userId}`
        }
      });
    
      return NextResponse.json(user);
    } catch (error) {
      console.log('[BILLBOARDS_GET]', error);
      return new NextResponse("Internal error", { status: 500 });
    }
  };