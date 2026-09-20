export default function Hero() {
  return (
    <header className="mx-auto max-w-content px-6 pt-16 pb-14 sm:pt-24 sm:pb-20">
      <div className="rounded-md border border-border bg-surface font-mono text-[13px] leading-relaxed sm:text-sm">
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#4b4f5c]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#4b4f5c]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#4b4f5c]" />
          <span className="ml-2 text-muted">catalogue.sh</span>
        </div>
        <div className="px-4 py-4 sm:px-5 sm:py-5">
          <p className="text-muted">$ ./catalogue --lister-acces</p>
          <p className="mt-2 text-periwinkle">→ 3 rôles Discord trouvés</p>
          <p className="text-amber">→ 3 dépôts GitHub trouvés</p>
          <p className="mt-2 text-muted">$ ./catalogue --paiement tiktok-shop</p>
          <p className="mt-2 text-ink">✓ prêt.</p>
        </div>
      </div>

      <h1 className="mt-10 max-w-[15ch] font-mono text-3xl font-medium leading-tight sm:text-4xl">
        Fork&amp;Rôle
      </h1>
      <p className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-muted sm:text-base">
        Des rôles Discord et des accès à des projets GitHub privés, à régler
        directement sur TikTok Shop. Chaque ligne ci-dessous est un accès que
        vous pouvez débloquer aujourd&rsquo;hui.
      </p>
    </header>
  );
}
