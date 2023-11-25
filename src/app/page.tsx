import { Card } from "./components/card";
import { Contract } from "./components/contract";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Section } from "./components/section";
import { Socials } from "./components/socials";
import { Button } from "./components/button"
import Image from "next/image";

import config from "public/config.json";
import { type ProjectInfo } from "~/app/models/project.model";

export default function HomePage() {
  const projectData = config as ProjectInfo;
  const layout = "xl:px-60 lg:px-20 md:px-20 px-2 max-w-[2000px] m-auto";
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center gap-5 text-black ${layout}`}
    >
      <Header config={projectData} layout={layout} />
      <div id="landing" className="overflow-clip relative w-full pt-40 flex max-w-[2000px]  flex-col w-screen justify-center items-center gap-12 pb-12">
      <div className="inset-0 absolute -z-10">
        <video className="h-full w-full"  style={{ objectFit: "cover" }}  src="/landing.mp4" autoPlay muted loop />
      </div>
      <div className="rounded-full overflow-clip">
        <video className="h-80 w-80"src="/logo-512px.mp4" autoPlay muted loop />
      </div>
        <div className="flex-1 w-full flex flex-col gap-5">
          <h1 className="xl:text-7xl lg:text-7xl text-4xl font-heading text-t1 text-center">Ƥ3ƤЄӇƛƇƘЄƦ2.0</h1>
          <h2 className="xl:text-6xl lg:text-6xl text-3xl font-body text-t2 text-center">{projectData.symbol}</h2>
          <p className="xl:text-xl lg:text-xl text-xl font-body text-t1 text-center px-20">{projectData.about}</p>
        </div>
      </div>
      <div>
        <Contract contractAddress={projectData.contractAddress} />
      </div>
      <div className="xl:px-60 lg:px-20 md:px-20 px-2 max-w-[2000px] bg-shadow w-screen my-20">
      <Section.Container id="about">
        <Section.Header title="Λ̶̡͖̯̝̙̗̈́̓̀͛̾̉̃̾̊̚͘͝Ϧ̵̻͋Ø̸͚̀Ц̷̬̦̫̲̭̻̫̦̯͎͌͋̒̈́̀̎̏̈́͋̋̕͘͜Ť̶̝͙̝̝͍͋̈̆̐́̽͌͊͂̇͋́͘" />
        <Section.Body>
          <Section.Article body="P3PE HACKER2.0 isn't just another meme coin – it's a CULT. We believe in the power of Memes and community, and we've woven that belief into the very core of our token. As you join the P3PE HACKER2.0 community, you're not just buying into a currency; you're becoming part of a movement that utilises creativity, culture, and the power of pepe." />
          <Section.Graphics src="/creeper.mp4" alt="" height={350} width={500} />
        </Section.Body>
      </Section.Container>
      </div>
      <Section.Container id="tokenomics">
        <Section.Header title="Ť̶̰͔͎͍̰̮̺̪̮͉̜͈̒̓͒̔͒̍͗͜͜Ø̵̢̪̱̱̮̞͔̘̱̗͉̃͗̑͜͝͝Қ̶̛̺̙̗͚͚̰͒̊̃́͆̆̓̓̂͜Ɛ̴̖̦͔̘̘̃̽͌̊̍̔̉͂Л̷̧̨̫̠̖̣̰̪̰͓̩͔͛̾̆̍̔͗̕͜͝͠Ø̶̛̩̫̹̫̭̖̝̩̫̗͇̰͓̬̞̍̈͂̂͊̓͒̿͒̾̀͘͝௱̷̧̭͙̟̗̙̜̘̭̘͌̂͜ɪ̵̨͇̲̮̞͍̩͖̙̩̟͕̖͛ㄈ̶͎͔͕̟͈͔̳̽͑̓̀́̾̑͗͝ͅͅら̵̫̣̻͘" />
        <Section.Body>
          <Section.Article body="" />
        </Section.Body>
        <Section.Body>
          <Card.Container>
            <Card.Header heading="ŤΛχƐら" icon="/favicon/favicon.ico" />
            <Card.Graphics src="/sus.mp4" />
            <Card.Article
              body={`${projectData.taxes.taxFeeOnBuy} / ${projectData.taxes.taxFeeOnSell}`}
            />
          </Card.Container>
          <Card.Container>
            <Card.Header heading="らƐㄈЦ尺ɪŤϤ" icon="/favicon/favicon.ico" />
            <Card.Graphics src="/hack.mp4" />
            <Card.Article body="Lock & Renounce" />
          </Card.Container>
          <p className="text-xl font-heading text-t1 text-center w-full pt-4">ŤØŤΛŁ らЦþþŁϤ : 100,000,000</p>
          <p className="text-xl font-heading text-t1 text-center w-full pb-4">ㄈɪ尺ㄈЦŁΛŤɪЛƓ らЦþþŁϤ : 100,000,000</p>
        </Section.Body>
      </Section.Container>
      <div className="flex w-full flex-col gap-5 py-20">
        <Section.Header title="ﾌ̷̙̹͖̥̗͚̬̓̃̈̒̊̀̆̀̕͘͝Ø̶̭͍̮̻̹̳̲̖͇̦̺͗̍̚ɪ̴̨̛̣̜̗͖̬̳̯͍̼͕̠̺̇͑̅̆̽̑̾͂̈́Л̶͙̝̞̙̟̺͓̥̲̫͇̗̣̓" />
        <Section.Body>
          <Section.Article body="Moon Boys, Swing Traders, MEVS, Jeets, Hodlers and Normies all welcome in our cult. This is the final pepe escape the matrix." />
          <div className="flex-1">
            <Button href={projectData.telegram} text="ﾌØɪЛ Цら" />
          </div>
        </Section.Body>
      </div>
      <Footer config={projectData} layout={layout} />
    </main>
  );
}
