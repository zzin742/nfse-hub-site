export function VideoDemo() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl text-balance">
              Veja em 2 minutos como o NFS-e Hub funciona na prática
            </h2>
            <p className="text-muted-foreground">
              Assista ao vídeo demonstrativo e descubra como automatizar seus downloads
            </p>
          </div>

          {/* Video */}
          <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-black shadow-2xl shadow-primary/10">
            <video
              src="/video-nfse-hub.mp4"
              controls
              preload="metadata"
              className="h-full w-full object-cover"
            >
              Seu navegador não suporta vídeos HTML5.
            </video>

            {/* Decorative dots (estilo janela) */}
            <div className="pointer-events-none absolute left-4 top-4 flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/70" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <div className="h-3 w-3 rounded-full bg-green-500/70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
