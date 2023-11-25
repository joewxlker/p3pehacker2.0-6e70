import { type FC } from "react";
import { Contract } from "./contract";
import { Socials } from "./socials";
import { type ProjectInfo } from "~/app/models/project.model";

export const Footer: FC<{ layout: string; config: ProjectInfo }> = ({
  layout,
  config,
}) => {
  return (
    <footer
      className={`flex min-h-[20rem] w-full flex-col items-center shadow-shadow shadow-xl justify-center bg-shadow w-screen gap-5 xl:px-60 lg:px-20 md:px-20 px-2 max-w-[2000px]`}
    >
      <Contract contractAddress={config.contractAddress} />
      <Socials config={config} />
    </footer>
  );
};
