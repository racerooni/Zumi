import { NextResponse } from "next/server";
import { auth, useAuth } from '@clerk/nextjs';

export async function GET(
    req: Request,
    { params }: { params: { userId: string } }
) {
    const { userId } = useAuth();

    try {
        if (!params.userId) {
            return new NextResponse("Rossz felhasználó ID", { status: 400 });
        }
        else if (params.userId != userId) {
            return new NextResponse("Hibás felhasználói hozzáférés!", { status: 400 })
        }

        return NextResponse.json("");
    } catch (error) {
        console.log('[USER_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
};
