"use client";

import { useState, type FC, useCallback } from "react";
import { useSectionElements } from "../hooks/pageSections.hook";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "./button";
import { type ProjectInfo } from "~/app/models/project.model";
import { Socials } from "~/app/components/socials"

export const Header: FC<{ layout: string; config: ProjectInfo }> = ({
  layout,
  config,
}) => {
  const [menu, setMenu] = useState<boolean>(false);
  const sections = useSectionElements();
  const toggleMenu = useCallback(() => setMenu((prev) => !prev), [setMenu]);
  const router = useRouter();
  const navigate = useCallback(
    (href: string) => {
      router.push(href);
      setMenu(false);
    },
    [router, setMenu],
  );
  return (
    <div
      className={`${layout} fixed left-0 right-0 top-0 flex flex-row backdrop-blur-sm py-2 bg-shadow shadow-lg shadow-shadow z-50`}
    >
      <div className="flex flex-col justify-center">
        <Link href="/">
          <Image className="-scale-x-100 rounded-full bg-black" src="/logo.jpg" alt="" height={50} width={50} />
        </Link>
      </div>
      <div className="flex-1 m-auto">
        <Socials config={config} />
        </div>
      <div className="hidden flex-1 flex-row items-center justify-evenly gap-5 md:flex lg:flex xl:flex">
        {sections?.map((section) => (
          <Link key={section.title} href={section.href}>
            <h3 className="font-body text-xl text-t1">{section.title}</h3>
          </Link>
        ))}
        <Button href={config.dextools} text="ㄈ̴̩́н̵̬̈́Λ̶̠̏尺̴͎͊Ť̴̠̾" />
      </div>
      <div className="flex flex-1 flex-row items-center justify-end md:hidden lg:hidden xl:hidden">
        <button
          className="flex h-10 w-10 items-center justify-center rounded bg-p1"
          type="button"
          onClick={toggleMenu}
        >
          <Image src="/bars.svg" alt="" height={25} width={25} />
        </button>
      </div>
      <div
        className={`fixed left-0 top-0 h-screen w-screen backdrop-blur-sm transition-opacity duration-300 md:hidden lg:hidden xl:hidden ${
          menu ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="relative h-full w-full">
          <div className="absolute bottom-0 left-0 right-0 top-20 bg-p1 text-t2">
            <header className="flex w-full flex-row items-center justify-between p-5">
              <p className="font-body text-2xl text-black">Ƥ̴̤̕3̶̗̕Ƥ̸̰̅Є̵͈̓Ӈ̴̣̉ƛ̷̤̑Ƈ̵̰̀Ƙ̴̻̔Є̷͕͒Ʀ̶͎̔2̶̘̚.̸̠̈́0̸̨̀</p>
              <button
                className="flex h-10 w-10 items-center justify-center rounded"
                type="button"
                onClick={toggleMenu}
              >
                <Image src="/z.svg" alt="" height={25} width={25} />
              </button>
            </header>
            <div className="flex flex-col gap-5 p-5">
              <Link href={config.dextools} target="_blank">
                <p className="font-heading text-3xl text-black">ㄈ̴̩́н̵̬̈́Λ̶̠̏尺̴͎͊Ť̴̠̾</p>
              </Link>
              {sections?.map((section) => (
                <button
                  className="flex flex-row items-center justify-start text-black"
                  type="button"
                  onClick={() => navigate(section.href)}
                  key={section.title}
                >
                  <h3 className="font-body text-2xl text-black">{section.title}</h3>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
