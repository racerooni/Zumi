import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { User } from "@prisma/client";

interface UserPageProps {
    data: User;
  }
const UserPage: React.FC<UserPageProps> = ({data}) => {
    return (
        <form action="">
        <Card className="w-full max-w-3xl border-0 bg-gray-300">
            <CardHeader>
                <CardTitle>Profilom</CardTitle>
                <CardDescription>Itt tudod szerkeszteni a profilodat! {data?.id}</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-2">
                <div className="">
                    <Label htmlFor="username">Felhasználónév <span className="text-muted-foreground">(alapértelmezett: e-mail cím)</span></Label>
                    <Input id="username" placeholder="Add meg a felhasználóneved" />
                </div>
                <div className="">
                    <Label htmlFor="city">Város</Label>
                    <Input id="city" placeholder="Add meg a városod" />
                </div>
                <div className="">
                    <Label htmlFor="city">Telefonszám</Label>
                    <Input id="city" placeholder="Add meg a városod" />
                </div>

            </CardContent>
            <CardFooter>
                <Button className="ml-auto">Mentés</Button>
            </CardFooter>
        </Card>
        </form>
    )
}

export default UserPage;