import Link from "next/link";
import { type FC } from "react";

export const Button: FC<{ href: string; text: string }> = ({ href, text }) => {
  return (
    <Link href={href} target="_blank">
      <div className="rounded border-2 border-t2 px-1 text-t2">
        <p className="font-heading text-2xl text-center">{text}</p>
      </div>
    </Link>
  );
};
