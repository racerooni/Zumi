import { Button } from "@/components/ui/button";
import Link from "next/link";

interface DashboardButtonProps {
  href: string;
}

const DashboardButton: React.FC<DashboardButtonProps> = ({ href }) => {
  return (
    <Link href={href}>
      <Button>Boltjaim</Button>
    </Link>
  );
};

export default DashboardButton;
