const PoliticaPrivacidadPage = () => {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Política de Privacidad</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            <strong>Última actualización:</strong>{" "}
            {new Date().toLocaleDateString()}
          </p>

          <h2>1. Introducción</h2>
          <p>
            En The Gaming Corps (&quot;nosotros&quot;, &quot;nuestro&quot;, &quot;la empresa&quot;) nos
            comprometemos a proteger tu privacidad. Esta Política de Privacidad
            explica cómo recopilamos, utilizamos y protegemos la información
            personal que nos proporcionas a través de nuestro sitio web y
            servicios relacionados.
          </p>

          <h2>2. Información que recopilamos</h2>
          <p>Podemos recopilar los siguientes tipos de información:</p>
          <ul>
            <li>
              <strong>Información de identificación personal:</strong> Nombre,
              dirección de correo electrónico y otra información de contacto que
              nos proporcionas voluntariamente al utilizar nuestros formularios
              de contacto o suscribirte a nuestro newsletter.
            </li>
            <li>
              <strong>Información de uso:</strong> Datos sobre cómo interactúas
              con nuestro sitio web, incluyendo las páginas visitadas, el tiempo
              de permanencia y los patrones de navegación.
            </li>
            <li>
              <strong>Información técnica:</strong> Dirección IP, tipo de
              navegador, proveedor de servicios de Internet, páginas de
              referencia/salida, sistema operativo, fecha/hora y datos de
              clickstream.
            </li>
            <li>
              <strong>Cookies y tecnologías similares:</strong> Utilizamos
              cookies y tecnologías similares para mejorar la experiencia del
              usuario, analizar tendencias y administrar el sitio.
            </li>
          </ul>

          <h2>3. Cómo utilizamos tu información</h2>
          <p>Utilizamos la información recopilada para:</p>
          <ul>
            <li>Proporcionar, mantener y mejorar nuestros servicios.</li>
            <li>Procesar y responder a tus consultas y solicitudes.</li>
            <li>
              Enviar comunicaciones relacionadas con nuestros servicios,
              incluyendo newsletters si te has suscrito.
            </li>
            <li>Analizar y mejorar la efectividad de nuestro sitio web.</li>
            <li>
              Detectar, prevenir y abordar problemas técnicos o de seguridad.
            </li>
            <li>Cumplir con obligaciones legales aplicables.</li>
          </ul>

          <h2>4. Compartir información</h2>
          <p>
            No vendemos, comercializamos ni transferimos a terceros tu
            información de identificación personal, excepto en las siguientes
            circunstancias:
          </p>
          <ul>
            <li>
              Con proveedores de servicios que nos ayudan en nuestras
              operaciones comerciales.
            </li>
            <li>
              Cuando sea necesario para cumplir con la ley o proteger nuestros
              derechos.
            </li>
            <li>Con tu consentimiento o según tus instrucciones.</li>
          </ul>

          <h2>5. Seguridad de datos</h2>
          <p>
            Implementamos medidas de seguridad diseñadas para proteger tu
            información personal. Sin embargo, ningún método de transmisión por
            Internet o método de almacenamiento electrónico es 100% seguro, por
            lo que no podemos garantizar su seguridad absoluta.
          </p>

          <h2>6. Tus derechos</h2>
          <p>
            Dependiendo de tu ubicación, puedes tener los siguientes derechos:
          </p>
          <ul>
            <li>Acceder a la información personal que tenemos sobre ti.</li>
            <li>Corregir datos inexactos o incompletos.</li>
            <li>Solicitar la eliminación de tus datos personales.</li>
            <li>Oponerte al procesamiento de tus datos.</li>
            <li>Solicitar la restricción del procesamiento de tus datos.</li>
            <li>Solicitar la portabilidad de tus datos.</li>
            <li>Retirar el consentimiento en cualquier momento.</li>
          </ul>

          <h2>7. Retención de datos</h2>
          <p>
            Conservamos tu información personal solo durante el tiempo necesario
            para los fines establecidos en esta Política de Privacidad, a menos
            que se requiera o permita un período de retención más largo por ley.
          </p>

          <h2>8. Cambios a esta política</h2>
          <p>
            Podemos actualizar nuestra Política de Privacidad ocasionalmente. Te
            notificaremos cualquier cambio publicando la nueva Política de
            Privacidad en esta página y, si los cambios son significativos, te
            proporcionaremos un aviso más prominente.
          </p>

          <h2>9. Contacto</h2>
          <p>
            Si tienes preguntas sobre esta Política de Privacidad, por favor
            contáctanos a través de nuestro{" "}
            <a href="/contacto" className="text-blue-600 hover:underline">
              formulario de contacto
            </a>{" "}
            o enviando un correo electrónico a privacidad@thegamingcorps.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidadPage;
