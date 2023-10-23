import { summaryProgram } from "@/src/apis/types/program";
import { convertDate } from "@/src/utils/date";
import Link from "next/link";

interface ProgramListItemProps {
  programData: summaryProgram;
}

const ProgramListItem = ({ programData }: ProgramListItemProps) => {
  const { programId, title, programDate } = programData;

  return (
    <Link
      href={`/detail/${programId}`}
      className="flex w-full items-center justify-between rounded-lg bg-gray-light px-8 py-6 transition-all hover:bg-secondary"
      key={programId}
    >
      <span className="text-lg font-bold">{title}</span>
      <span className="text-base font-normal">{convertDate(programDate)}</span>
    </Link>
  );
};

export default ProgramListItem;
