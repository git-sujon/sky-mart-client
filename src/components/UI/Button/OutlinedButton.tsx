import Link from "next/link";

const OutlinedButton = ({
  url,
  name,
  action,
}: {
  url?: string;
  name: string;
  action?: any;
}) => {
  return (
    <Link
      className="inline-block border border-primary px-5 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-indigo-500 rounded-full"
      href={`${url}`}
    >
      {name}
    </Link>
  );
};

export default OutlinedButton;
