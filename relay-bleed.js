function addCommunityToolkit() {
  const main = document.querySelector("main");
  const cta = main?.querySelector(".final-cta_section__pvEj7");

  if (!main || !cta) {
    console.error("Could not find Relay's main content or final CTA to add the community toolkit.");
    return;
  }

  if (document.querySelector("#community-toolkit")) return;
  const relayFeatures = main.querySelector(".features_section__ITjFU");
  if (relayFeatures && !relayFeatures.id) relayFeatures.id = "relay-features";

  const section = document.createElement("section");
  section.id = "community-toolkit";
  section.className = "relay-bleed-section";
  section.setAttribute("aria-labelledby", "community-toolkit-title");
  section.innerHTML = `
    <div class="relay-bleed-heading">
      <p class="relay-bleed-eyebrow">The toolkit, expanded</p>
      <h2 id="community-toolkit-title">More ways to look after your community.</h2>
      <p>Relay’s everyday server tools, together with additional moderation, integrations, voice, and music features from the bundled bleed page.</p>
    </div>
    <div class="relay-bleed-grid">
      <article class="relay-bleed-card">
        <img class="relay-bleed-image" src="./bleed.bot/bleed.bot/media/img/moderation/filters-1400.avif" alt="Preview of automated chat filters" loading="lazy" decoding="async">
        <div class="relay-bleed-card-content">
          <h3>Smarter chat filters</h3>
          <p>Keep conversations welcoming with configurable filters for spam and unwanted content.</p>
        </div>
      </article>
      <article class="relay-bleed-card">
        <img class="relay-bleed-image" src="./bleed.bot/bleed.bot/media/img/moderation/fake-permissions-1400.avif" alt="Preview of permission safeguards" loading="lazy" decoding="async">
        <div class="relay-bleed-card-content">
          <h3>Safer permissions</h3>
          <p>Add another layer of protection against risky permission changes and server disruption.</p>
        </div>
      </article>
      <article class="relay-bleed-card">
        <img class="relay-bleed-image" src="./bleed.bot/bleed.bot/media/img/tiktok-gradient-740.webp" alt="Platform integration artwork" loading="lazy" decoding="async">
        <div class="relay-bleed-card-content">
          <h3>Platform integrations</h3>
          <p>Bring discovery, updates, and useful platform activity closer to where your members already chat.</p>
        </div>
      </article>
      <article class="relay-bleed-card">
        <div class="relay-bleed-icon" aria-hidden="true"><span>♫</span></div>
        <div class="relay-bleed-card-content">
          <h3>Voice, music, and more</h3>
          <p>Make room for temporary voice spaces, shared listening, and the small extras that help a server feel alive.</p>
        </div>
      </article>
    </div>
    <div class="relay-bleed-link-row">
      <a class="relay-bleed-link relay-bleed-link-secondary" href="#relay-features">Back to Relay’s features <span aria-hidden="true">↑</span></a>
    </div>
  `;
  cta.parentElement.insertBefore(section, cta);

  const desktopNav = document.querySelector(".navbar_desktop__FZP_H .navbar_links__zwFDW");
  const mobileBar = document.querySelector(".navbar_mobile__4oeCM .navbar_bar__pu07K");
  if (desktopNav) {
    const item = document.createElement("li");
    item.className = "navbar_item__tc1Zz";
    const link = document.createElement("a");
    link.className = "navbar_link__AyfKG";
    link.href = "#community-toolkit";
    link.textContent = "Community toolkit";
    item.append(link);
    desktopNav.append(item);
  }
  if (mobileBar) {
    const link = document.createElement("a");
    link.className = "relay-bleed-navlink";
    link.href = "#community-toolkit";
    link.textContent = "Toolkit";
    mobileBar.append(link);
  }

  document.querySelector('link[rel="preload"][href="/logo/design3transparent.png"]')?.remove();

  const localMedia = "./bleed.bot/bleed.bot/media/img/";
  const localImageReplacements = new Map([
    ["/_next/static/media/4.689e2c5a.png", `${localMedia}background-1280.webp`],
    ["/effects/cta/3.jpg", `${localMedia}background-1280.webp`],
  ]);
  document.querySelectorAll("img").forEach((image) => {
    const replacement = localImageReplacements.get(image.getAttribute("src"));
    if (replacement) image.src = replacement;
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", addCommunityToolkit, { once: true });
} else {
  addCommunityToolkit();
}
