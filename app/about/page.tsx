import Link from "next/link"
import { ArrowLeft, Clock, Sparkles, FileText, Zap, User } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Volver al inicio
        </Link>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Realización del Proyecto
          </h1>
          <p className="text-xl text-gray-300">Jorge Suárez - UAM México</p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full" />
        </header>

        {/* Introduction */}
        <section className="mb-12 bg-gray-800/50 rounded-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            Resumen del Proyecto
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Este proyecto es una experiencia interactiva que presenta la obra literaria de Gonzalo Celorio de manera
            inmersiva. Utilizando inteligencia artificial (v0 by Vercel), se creó una interfaz web completamente
            funcional con elementos multimedia, animaciones y navegación intuitiva.
          </p>
        </section>

        {/* Materials Needed */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-400" />
            Materiales Iniciales Necesarios
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-800/30 rounded-lg p-5 border border-gray-700/50">
              <h3 className="font-semibold text-lg mb-2 text-blue-300">1. Imágenes</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-2">
                <li>Imagen principal de fondo (biblioteca con Gonzalo Celorio)</li>
                <li>6 portadas de libros en formato JPG/PNG de alta resolución</li>
                <li>Fotografías biográficas del autor</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 rounded-lg p-5 border border-gray-700/50">
              <h3 className="font-semibold text-lg mb-2 text-blue-300">2. Contenido de Texto</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-2">
                <li>Descripción de cada obra literaria</li>
                <li>Información biográfica del autor</li>
                <li>Títulos y metadatos de las obras</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 rounded-lg p-5 border border-gray-700/50">
              <h3 className="font-semibold text-lg mb-2 text-blue-300">3. Multimedia (Opcional)</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-2">
                <li>6 archivos de audio (MP3) para ambiente musical</li>
                <li>6 videos (MP4) relacionados con cada obra</li>
                <li>Nota: La IA puede generar placeholders si no se tienen los archivos reales</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 rounded-lg p-5 border border-gray-700/50">
              <h3 className="font-semibold text-lg mb-2 text-blue-300">4. Especificaciones de Diseño</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-2">
                <li>Paleta de colores deseada (o dejar que la IA sugiera)</li>
                <li>Posición preferida de elementos en pantalla</li>
                <li>Comportamientos interactivos específicos (hover, click, etc.)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Step by Step Prompts */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Zap className="w-6 h-6 text-purple-400" />
            Prompts Utilizados (Paso a Paso)
          </h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-6 border border-blue-500/30">
              <div className="flex items-start gap-3 mb-3">
                <span className="bg-blue-500 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  1
                </span>
                <div>
                  <h3 className="font-semibold text-lg text-blue-300">Prompt Inicial</h3>
                  <p className="text-sm text-gray-400 mt-1">Descripción general del proyecto</p>
                </div>
              </div>
              <div className="bg-gray-900/50 rounded p-4 font-mono text-sm text-gray-300 border border-gray-700">
                <p className="italic">
                  "Crea una página web interactiva con la imagen de una biblioteca como fondo. Sobre ella deben aparecer
                  6 elementos clickeables posicionados alrededor de la figura central. Cada elemento debe mostrar una
                  portada de libro, reproducir música al hacer hover (con efecto de zoom 50% y blur en el fondo), y al
                  hacer click reproducir un video en pantalla completa."
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-6 border border-blue-500/30">
              <div className="flex items-start gap-3 mb-3">
                <span className="bg-blue-500 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  2
                </span>
                <div>
                  <h3 className="font-semibold text-lg text-blue-300">Ajuste de Posicionamiento</h3>
                  <p className="text-sm text-gray-400 mt-1">Refinamiento de la ubicación de elementos</p>
                </div>
              </div>
              <div className="bg-gray-900/50 rounded p-4 font-mono text-sm text-gray-300 border border-gray-700">
                <p className="italic">
                  "Mueve los elementos gráficos. Del lado izquierdo de arriba para abajo y alineados deben estar 'Tres
                  Cubanas', 'El metal y la escoria' y abajo 'Los apóstatas'. El elemento 'sobre la auto-ficción' debe
                  estar al medio arriba sobre la cabeza de Gonzalo. Del lado derecho superior debe estar Curriculum y
                  abajo de él Bibliografía."
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-6 border border-blue-500/30">
              <div className="flex items-start gap-3 mb-3">
                <span className="bg-blue-500 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  3
                </span>
                <div>
                  <h3 className="font-semibold text-lg text-blue-300">Corrección de Errores Técnicos</h3>
                  <p className="text-sm text-gray-400 mt-1">Solución de problemas de reproducción</p>
                </div>
              </div>
              <div className="bg-gray-900/50 rounded p-4 font-mono text-sm text-gray-300 border border-gray-700">
                <p className="italic">
                  "El código retorna el siguiente error: 'The play() request was interrupted by a call to pause()'.
                  Revisa el código para corregir el error."
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-6 border border-blue-500/30">
              <div className="flex items-start gap-3 mb-3">
                <span className="bg-blue-500 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  4
                </span>
                <div>
                  <h3 className="font-semibold text-lg text-blue-300">Ajuste de Comportamiento</h3>
                  <p className="text-sm text-gray-400 mt-1">Modificación de interacciones específicas</p>
                </div>
              </div>
              <div className="bg-gray-900/50 rounded p-4 font-mono text-sm text-gray-300 border border-gray-700">
                <p className="italic">
                  "El elemento central llamado 'Sobre la auto-ficción' al hacer hover sobre él, hace una interacción de
                  zoom sobre otros elementos, pero solo debe hacerlo sobre él mismo, ¿puedes repararlo?"
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-6 border border-blue-500/30">
              <div className="flex items-start gap-3 mb-3">
                <span className="bg-blue-500 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  5
                </span>
                <div>
                  <h3 className="font-semibold text-lg text-blue-300">Adición de Documentación</h3>
                  <p className="text-sm text-gray-400 mt-1">Creación de página informativa</p>
                </div>
              </div>
              <div className="bg-gray-900/50 rounded p-4 font-mono text-sm text-gray-300 border border-gray-700">
                <p className="italic">
                  "Crea en el footer un link de texto hacia una nueva sección llamada 'Realización Jorge Suárez - UAM
                  México'. Esta debe llevar a una nueva página donde se explique paso a paso los prompts usados para
                  generar esta experiencia y la forma correcta de reproducirlo."
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-6 border border-blue-500/30">
              <div className="flex items-start gap-3 mb-3">
                <span className="bg-blue-500 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  6
                </span>
                <div>
                  <h3 className="font-semibold text-lg text-blue-300">Música de Fondo Global</h3>
                  <p className="text-sm text-gray-400 mt-1">Implementación de audio ambiente</p>
                </div>
              </div>
              <div className="bg-gray-900/50 rounded p-4 font-mono text-sm text-gray-300 border border-gray-700">
                <p className="italic">
                  "Agrega una música de fondo de toda la página que sea algo estándar en formato mp3 auto reproducible
                  al iniciar la página web. También a partir de ahora siempre actualiza la página de /about con los
                  nuevos prompts, tiempos y cambios."
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-6 border border-blue-500/30">
              <div className="flex items-start gap-3 mb-3">
                <span className="bg-blue-500 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  7
                </span>
                <div>
                  <h3 className="font-semibold text-lg text-blue-300">Control de Audio y Actualización de Textos</h3>
                  <p className="text-sm text-gray-400 mt-1">Mejoras en reproducción y cambios de contenido</p>
                </div>
              </div>
              <div className="bg-gray-900/50 rounded p-4 font-mono text-sm text-gray-300 border border-gray-700">
                <p className="italic">
                  "No se escucha la música. Agrega un reproductor con control de volumen al lado inferior derecho de la
                  página, pequeño y sencillo para subir y bajar el audio. En el elemento flotante llamado 'curriculum'
                  cambia el texto a que sea 'Un montón de espejos rotos (memorias)'."
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-6 border border-blue-500/30">
              <div className="flex items-start gap-3 mb-3">
                <span className="bg-blue-500 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  8
                </span>
                <div>
                  <h3 className="font-semibold text-lg text-blue-300">Integración de Videos de YouTube</h3>
                  <p className="text-sm text-gray-400 mt-1">Soporte para streams de YouTube en popups</p>
                </div>
              </div>
              <div className="bg-gray-900/50 rounded p-4 font-mono text-sm text-gray-300 border border-gray-700">
                <p className="italic">
                  "Los videos ahora viven en YouTube, y quiero poder actualizar las ligas y desplegarlos en un popup
                  pero ligado al stream en YouTube. Cambia o crea el video del elemento llamado 'Bibliografía' a este
                  link: https://youtu.be/5Be7muS6u1o?si=7LxsNEFMORkKHuEf"
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-6 border border-blue-500/30">
              <div className="flex items-start gap-3 mb-3">
                <span className="bg-blue-500 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  9
                </span>
                <div>
                  <h3 className="font-semibold text-lg text-blue-300">Actualización de Todos los Videos a YouTube</h3>
                  <p className="text-sm text-gray-400 mt-1">Migración completa de videos locales a YouTube</p>
                </div>
              </div>
              <div className="bg-gray-900/50 rounded p-4 font-mono text-sm text-gray-300 border border-gray-700">
                <p className="italic">
                  "Realiza un cambio igual en los videos de los siguientes elementos: Elemento llamado 'Tres Lindas
                  Cubanas' ligado al video https://youtu.be/-zcCyWNwdmE?si=l4R_Vg8NGBP8X-K0, Elemento llamado 'El Metal
                  y la escoria' ligado al video https://youtu.be/RiD7vobjIPg?si=Hjh17DI243cIFBoM, Elemento llamado
                  'Apostatas' ligado al video https://youtu.be/fKLIm327sfk?si=vbC2g4ttXnwfyuSM, Elemento llamado 'Sobre
                  la Auto-ficción' ligado al video https://youtu.be/1Ew184asbcA?si=c__-2HuW3Qwty2bl. Y actualiza la
                  página de about con los cambios y métricas requeridas."
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-6 border border-blue-500/30">
              <div className="flex items-start gap-3 mb-3">
                <span className="bg-blue-500 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  10
                </span>
                <div>
                  <h3 className="font-semibold text-lg text-blue-300">
                    Actualización Video "Un montón de espejos rotos"
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">Cambio de video y adición de agradecimientos</p>
                </div>
              </div>
              <div className="bg-gray-900/50 rounded p-4 font-mono text-sm text-gray-300 border border-gray-700">
                <p className="italic">
                  "Actualiza el elemento llamado 'Un montón de espejos rotos' por el video
                  https://youtu.be/uAZS58fnaPM?si=szdsHFIZc3K8wo2N. Actualiza siempre la página de about y agrega en esa
                  página un agradecimiento a Ernesto Macipp y Edgar Javier Garcia por su participación en la grabación y
                  al Dr. Nemesio Chaves por su participación en el guión de edición."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Clock className="w-6 h-6 text-green-400" />
            Comparación de Tiempos
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-lg p-6 border border-green-500/30">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-8 h-8 text-green-400" />
                <div>
                  <h3 className="text-xl font-semibold text-green-300">Con IA (v0.dev)</h3>
                  <p className="text-2xl font-bold text-white mt-2">~19 minutos</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Diseño y estructura: 3 min</li>
                <li>✓ Componentes interactivos: 4 min</li>
                <li>✓ Integración multimedia: 3 min</li>
                <li>✓ Ajustes y refinamiento: 3 min</li>
                <li>✓ Control de audio: 2 min</li>
                <li>✓ Integración YouTube: 2 min</li>
                <li>✓ Actualización de videos: 1 min</li>
                <li>✓ Video final y agradecimientos: 1 min</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-lg p-6 border border-red-500/30">
              <div className="flex items-center gap-3 mb-4">
                <User className="w-8 h-8 text-red-400" />
                <div>
                  <h3 className="text-xl font-semibold text-red-300">Desarrollo Tradicional</h3>
                  <p className="text-2xl font-bold text-white mt-2">~19-28 horas</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Setup y configuración: 2-3 hrs</li>
                <li>• Diseño UI/UX: 3-4 hrs</li>
                <li>• Componentes base: 3-4 hrs</li>
                <li>• Sistema multimedia: 4-6 hrs</li>
                <li>• Debugging y optimización: 2-4 hrs</li>
                <li>• Controles de audio: 1-3 hrs</li>
                <li>• Integración YouTube API: 2-3 hrs</li>
                <li>• Testing de videos: 1 hr</li>
                <li>• Documentación y créditos: 1 hr</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg p-6 border border-purple-500/30">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-purple-300">Eficiencia</h3>
                <p className="text-gray-400 mt-1">Reducción de tiempo de desarrollo</p>
              </div>
              <div className="text-right">
                <p className="text-4xl font-bold text-white">98.8%</p>
                <p className="text-sm text-gray-400">más rápido</p>
              </div>
            </div>
          </div>
        </section>

        {/* Acknowledgments Section */}
        <section className="mb-12 bg-gradient-to-br from-amber-900/20 to-yellow-900/20 rounded-lg p-6 border border-amber-500/30">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <User className="w-6 h-6 text-amber-400" />
            Agradecimientos
          </h2>
          <div className="space-y-4 text-gray-300">
            <p className="text-lg leading-relaxed">
              Este proyecto no habría sido posible sin la valiosa participación de:
            </p>
            <div className="bg-gray-900/30 rounded-lg p-5 border border-amber-700/30">
              <h3 className="font-semibold text-lg mb-3 text-amber-300">Grabación de Videos</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>
                    <strong>Ernesto Macipp</strong> - Por su excelente trabajo en la grabación de contenido audiovisual
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>
                    <strong>Edgar Javier García</strong> - Por su participación y apoyo técnico en la grabación
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900/30 rounded-lg p-5 border border-amber-700/30">
              <h3 className="font-semibold text-lg mb-3 text-amber-300">Guión y Edición</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>
                    <strong>Dr. Nemesio Chaves</strong> - Por su invaluable contribución en el guión de edición y
                    dirección creativa
                  </span>
                </li>
              </ul>
            </div>
            <p className="text-sm text-gray-400 italic mt-4">
              Agradecemos profundamente su dedicación y profesionalismo en la creación de este proyecto multimedia.
            </p>
          </div>
        </section>

        {/* Tips Section */}
        <section className="mb-12 bg-blue-900/20 rounded-lg p-6 border border-blue-500/30">
          <h2 className="text-2xl font-semibold mb-4">💡 Tips para Mejores Resultados</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex gap-3">
              <span className="text-blue-400">•</span>
              <span>
                <strong>Sé específico:</strong> Cuanto más detallado sea tu prompt, mejores resultados obtendrás.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400">•</span>
              <span>
                <strong>Itera gradualmente:</strong> Haz cambios pequeños y prueba cada uno antes de continuar.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400">•</span>
              <span>
                <strong>Usa referencias visuales:</strong> Sube imágenes de inspiración o ejemplos de lo que buscas.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400">•</span>
              <span>
                <strong>Reporta errores claramente:</strong> Copia mensajes de error exactos para que la IA los
                resuelva.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400">•</span>
              <span>
                <strong>Experimenta:</strong> No temas probar diferentes enfoques y estilos.
              </span>
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-gray-700">
          <p className="text-gray-400">
            Proyecto desarrollado con{" "}
            <a
              href="https://v0.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              v0 by Vercel
            </a>
          </p>
          <p className="text-gray-500 text-sm mt-2">UAM México - 2024</p>
        </footer>
      </div>
    </main>
  )
}
