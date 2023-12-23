import Link from "next/link";

const SolidButton = ({
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
      className="inline-block  border border-primary bg-primary px-5 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-indigo-500 rounded-full"
      href={`${url}`}
    >
      {name}
    </Link>
  );
};

export default SolidButton;
