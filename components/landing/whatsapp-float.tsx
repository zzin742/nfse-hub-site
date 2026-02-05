"use client"

export function WhatsAppFloat() {
  const phone = "5511930860533" 
  // 🔴 TROQUE para o seu número real (ex: 5511987654321)

  const message = encodeURIComponent(
    "Olá! Quero saber mais sobre o robô de NFS-e."
  )

  const whatsappUrl = `https://wa.me/${phone}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50"
    >
{/* pulso lento */}
<span
  className="absolute inset-0 rounded-full bg-green-500 opacity-70 animate-[ping_3s_ease-in-out_infinite]"
/>


      {/* botão */}
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg shadow-green-500/40 transition-transform hover:scale-110">
        <svg
          viewBox="0 0 32 32"
          className="h-7 w-7 fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.04 2.003c-7.732 0-14.03 6.297-14.03 14.03 0 2.475.647 4.89 1.875 7.02L2 30l7.2-1.89a13.93 13.93 0 0 0 6.84 1.76h.005c7.73 0 14.03-6.297 14.03-14.03 0-3.75-1.46-7.27-4.11-9.92a13.94 13.94 0 0 0-9.925-4.115Z" />
        </svg>
      </span>
    </a>
  )
}
