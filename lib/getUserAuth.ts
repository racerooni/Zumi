import { auth } from "@clerk/nextjs";

async function getUserAuth() {
    const { userId } = await auth();
    return { userId };
}

export default getUserAuth;