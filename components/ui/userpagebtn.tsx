import Link from "next/link"
import { Button } from "./button"
import { auth, useAuth } from "@clerk/nextjs"


const UserPageButton = () => {
    const { userId }: { userId: string | null } = auth();
    return (
        <Link href={`user/${userId}`}>
            <Button>
                Profil szerkesztése
            </Button>
        </Link>

    )
}

export default UserPageButton;