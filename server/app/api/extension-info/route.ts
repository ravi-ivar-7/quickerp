import { NextResponse } from 'next/server';
import { extensionInfo } from './data';

export async function GET() {
  return NextResponse.json(extensionInfo);
}
