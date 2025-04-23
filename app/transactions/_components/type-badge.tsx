import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";
import { Badge } from "@/app/_components/ui/badge";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-primary font-bold text-white">
        <CircleIcon className="mr-2 fill-white" size={10} />
        Depósito
      </Badge>
    );
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="bg-red-500 font-bold text-white">
        <CircleIcon className="mr-2 fill-white" size={10} />
        Despesa
      </Badge>
    );
  }
  return (
    <Badge className="bg-gray-800 font-bold text-white">
      <CircleIcon className="mr-2 fill-white" size={10} />
      Investimento
    </Badge>
  );
};

export default TransactionTypeBadge;
