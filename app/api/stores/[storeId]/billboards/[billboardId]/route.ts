import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"

export async function PATCH (
    req: Request,
    {params} : {params: {storeId: string, billboardId: string}}
) {
    try {
        const {userId} = auth();
        const body = await req.json()
        const {label, imageUrl} = body;
        if (!userId){
            return new NextResponse("Nincs bejelentkezve")

        }
        if (!label){
            return new NextResponse("Nincs cím")

        }

        if (!imageUrl){
            return new NextResponse("Nincs kép megadva")

        }

        if (!params.billboardId){
            return new NextResponse("BillboardId nincs megadva.")
        }

        const storeByUserId = await prismadb.store.findFirst({
            where: {
                id: params.storeId,
                userId
            }
          })
    
          if (!storeByUserId) {
            return new NextResponse("Unathorized", {status: 403})
          }

        const billboard = await prismadb.billboard.updateMany({
            where: {
                id: params.billboardId,
            },
            data: {
                label,
                imageUrl
            }
        })
        return NextResponse.json(billboard)
    } catch(error){
        console.log('BILLBOARD_PATCH', error)
        return new NextResponse("Internal error", {status: 500})
    }
}


export async function DELETE (
    req: Request,
    {params} : {params: {storeId: string}}
) {
    try {
        const {userId} = auth();

        if (!userId){
            return new NextResponse("Nincs bejelentkezve")

        }


        if (!params.storeId){
            return new NextResponse("Nincs bolt megadva.")
        }

        const store = await prismadb.store.deleteMany({
            where: {
                id: params.storeId,
                userId
            }})

            return NextResponse.json(store)
    } catch(error){
        console.log('[STORE_DELETE]', error)
        return new NextResponse("Internal error", {status: 500})
    }
}