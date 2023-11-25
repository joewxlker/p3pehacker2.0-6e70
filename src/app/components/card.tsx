import Image from "next/image";
import { ReactNode, type FC } from "react";

const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex w-full max-w-[100vw] flex-col items-center justify-center gap-3 rounded bg-shadow p-3 text-t1 shadow-lg shadow-shadow flex-1 !min-w-[20rem]">
      {children}
    </div>
  );
};

const Header: FC<{ heading: string; icon?: string }> = ({ heading, icon }) => {
  return (
    <div className="flex w-full flex-row items-center justify-between py-2">
      <h3 className="font-heading text-t2 text-3xl">{heading}</h3>
      {icon && <Image alt="" src={icon} height={30} width={30} />}
    </div>
  );
};

const Article: FC<{
  body: string;
  link?: { title: string; href: string };
  title?: string;
}> = ({ body }) => {
  return (
    <article className="flex flex-1 items-center justify-center">
      <p className="font-body text-2xl text-t1">{body}</p>
    </article>
  );
};

const Graphics: FC<{ src: string }> = ({ src }) => {
  return (
    <div className="h-40 w-full overflow-clip rounded-md relative">
      <video className="" style={{ objectFit: "cover"}} src={src} muted autoPlay loop />
      <div id="overlay" className="absolute inset-0"/>
    </div>
  );
};

export const Card = {
  Container,
  Header,
  Article,
  Graphics,
};
