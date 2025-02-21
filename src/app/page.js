import Image from "next/image";
import LiveAudioPlayer from "@/components/LiveAudioPlayer";
import {
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center text-gray-900 dark:text-white  max-h-screen px-4">
      {/* Header */}
      <header className="flex flex-col items-center justify-center py-2 md:py-6 md:my-10">
        <Image
          src="/logo-vitro.png"
          alt="Radio El Vitróla"
          width={200}
          height={50}
        />
      </header>

      {/* Sección de información */}
      <section className="max-w-3xl text-center space-y-2 lg:text-base text-xs  md:space-y-4 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold ">
          El locutor número uno de la Región de O'higgins.
        </h2>
        <p>Años de trayectoria en Radio y Eventos Rancheros de la Región.</p>
        <p>Emisión en directo las 24 horas y 365 días del año.</p>
        <p>
          Escúchame por{" "}
          <a
            className="font-semibold underline hover:text-sky-400"
            href="https://www.gentecomunicaciones.cl"
            target="_blank"
          >
            Gente Comunicaciones 94.5 FM
          </a>{" "}
          y <span className="font-semibold">Radio Impacto 107.3 FM</span>.
        </p>
        <p>
          Puedes sumarte a esta cadena de transmisión en vivo por internet,{" "}
          <span className="font-semibold">
            contáctame para más información.
          </span>
        </p>

        {/* Métodos de contacto */}
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          <a
            href="https://www.facebook.com/p/Elvitrola-Para-Ti-100074822726368/"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm sm:text-base"
          >
            <FaFacebook className="text-lg sm:text-xl" /> Facebook
          </a>
          <a
            href="https://www.tiktok.com/@vitrolaparati"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition text-sm sm:text-base"
          >
            <FaTiktok className="text-lg sm:text-xl" /> TikTok
          </a>
          <a
            href="https://www.instagram.com/elvitrolaparati/"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition text-sm sm:text-base"
          >
            <FaInstagram className="text-lg sm:text-xl" /> Instagram
          </a>
          <a
            href="https://wa.me/56988694402"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition text-sm sm:text-base"
          >
            <FaWhatsapp className="text-lg sm:text-xl" /> WhatsApp
          </a>
          <a
            href="mailto:elvitrolaparati@gmail.com"
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition text-sm sm:text-base"
          >
            <FaEnvelope className="text-lg sm:text-xl" /> Correo
          </a>
        </div>
      </section>

      {/* Footer con reproductor */}
      <footer className="w-full fixed bottom-0  p-4 flex flex-col items-center text-center">
        <h1 className="font-extrabold text-lg animate-bounce">
          ⬇ Dale Play a la señal EN VIVO ⬇
        </h1>

        <LiveAudioPlayer />
        <p className="text-xs mt-3">
          © 2025 El Vitrola de Chile. Todos los derechos reservados. Powered by{" "}
          <a
            href="https://www.felpysoluciones.com/"
            target="_blank"
            className="underline hover:text-sky-400"
          >
            Felpy Soluciones
          </a>
          .
          <a
            href="https://portfolio-elias-silk.vercel.app/"
            target="_blank"
            className="underline hover:text-sky-400 ml-2"
          >
            Created by Cofla.dev
          </a>
        </p>
      </footer>
    </div>
  );
}
