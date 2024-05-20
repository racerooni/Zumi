// app/api/admin/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prismadb';

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }

  try {
    const deletedProduct = await prisma.products.delete({
      where: { id },
    });
    return NextResponse.json(deletedProduct, { status: 200 });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
  }
}
