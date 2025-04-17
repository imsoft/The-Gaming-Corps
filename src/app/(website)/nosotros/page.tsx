import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Sobre nosotros</h1>

        <div className="mb-12 overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1726442125314-c70f9753c0ec?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="El equipo de The Gaming Corps"
            width={1200}
            height={500}
            className="w-full object-cover"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>Nuestra misión</h2>
          <p>
            En The Gaming Corps, nuestra misión es proporcionar contenido de
            alta calidad sobre videojuegos y tecnología para mantener a nuestra
            comunidad informada y entretenida. Nos esforzamos por ofrecer
            análisis detallados, noticias actualizadas y guías útiles que ayuden
            a nuestros lectores a tomar decisiones informadas y disfrutar al
            máximo de su pasión por los videojuegos.
          </p>

          <h2>Nuestra historia</h2>
          <p>
            The Gaming Corps nació en 2020 como un pequeño blog personal y ha
            crecido hasta convertirse en un referente en el mundo de los
            videojuegos y la tecnología. Lo que comenzó como un proyecto de
            pasión se ha transformado en una plataforma que recibe miles de
            visitas diarias de entusiastas que buscan información de calidad.
          </p>

          <h2>Nuestros valores</h2>
          <ul>
            <li>
              <strong>Honestidad:</strong> Nuestras reviews y análisis son
              siempre honestos y objetivos.
            </li>
            <li>
              <strong>Calidad:</strong> Nos esforzamos por ofrecer contenido de
              alta calidad y bien investigado.
            </li>
            <li>
              <strong>Comunidad:</strong> Valoramos a nuestra comunidad y
              fomentamos la interacción y el debate.
            </li>
            <li>
              <strong>Pasión:</strong> Amamos los videojuegos y la tecnología, y
              eso se refleja en nuestro trabajo.
            </li>
          </ul>

          <h2>Contacta con nosotros</h2>
          <p>
            ¿Tienes alguna pregunta, sugerencia o propuesta de colaboración? No
            dudes en ponerte en contacto con nosotros a través de nuestro
            formulario de contacto o en nuestras redes sociales. Estaremos
            encantados de escucharte.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
