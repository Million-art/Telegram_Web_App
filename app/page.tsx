import Image from "next/image";
import { retrieveLaunchParams } from "@tma.js/sdk";

interface InitData {
  [key: string]: string;
}

export default function Home() {
  const { initDataRaw, initData } = retrieveLaunchParams();

  if (!initDataRaw || !initData) {
    return (
      <main>
        <section>
          <h1>mella web app coming soon</h1>
          <p>No launch parameters available.</p>
        </section>
      </main>
    );
  }

  const initDataDecoded: InitData = JSON.parse(decodeURIComponent(initDataRaw));

  return (
    <main>
      <section>
        <h1>mella web app coming soon</h1>
        {Object.entries(initDataDecoded).map(([key, value]) => (
          <p key={key}>
            {key}: {value}
          </p>
        ))}
      </section>
    </main>
  );
}
