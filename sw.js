// Vereda Pública — service worker mínimo, só para habilitar "Adicionar à tela inicial".
// Não faz cache agressivo: sempre busca a versão mais nova da rede quando possível.
self.addEventListener("install", () => { self.skipWaiting(); });
self.addEventListener("activate", (event) => { event.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
