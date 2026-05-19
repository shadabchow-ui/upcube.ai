import "app/styles/upcube-home.css";
import UpcubeHomePage from "components/upcube-home/home-page";

export const metadata = {
  description:
    "UpcubeAI ecosystem portal for UpcubeAI, Upcube Earth, Upcube Books, Upcube Games, Upcube Jobs, Upcube Cloud, Ventari, and commerce.",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return <UpcubeHomePage />;
}
