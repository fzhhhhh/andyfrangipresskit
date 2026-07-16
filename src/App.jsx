import { useEffect, useState } from 'react';
import { FiArrowDownRight, FiArrowUpRight, FiDownload, FiMenu, FiPause, FiPlay, FiX } from 'react-icons/fi';
import { FaInstagram, FaSoundcloud, FaSpotify } from 'react-icons/fa';

const releases = [
  { title: 'Italo EP', artist: 'Abity · Andy Frangi', label: 'Madden', image: '/media/releases/italo.png', spotify: 'https://open.spotify.com/track/4kWt6v6luNMIyfGONisBgt', embed: 'https://open.spotify.com/embed/track/4kWt6v6luNMIyfGONisBgt?utm_source=generator&theme=0' },
  { title: 'Infinity Love', artist: 'Andy Frangi', label: 'Droid9 South America', image: '/media/releases/infinity.jpg', spotify: 'https://open.spotify.com/album/7olpXJvePVbS0gTxBLTecr', embed: 'https://open.spotify.com/embed/album/7olpXJvePVbS0gTxBLTecr?utm_source=generator&theme=0' },
  { title: 'Blue Lake EP', artist: 'Andy Frangi · Culture Music', label: 'Shine Records', image: '/media/releases/blue-lake.jpg', spotify: 'https://open.spotify.com/album/2r3SXjELgE8mmCm5tYJJCP', embed: 'https://open.spotify.com/embed/album/2r3SXjELgE8mmCm5tYJJCP?utm_source=generator&theme=0' },
  { title: 'Gorilla Glue', artist: 'Andy Frangi · Culture Music', label: 'Shine Records', image: '/media/releases/gorilla.jpg', spotify: 'https://open.spotify.com/track/4MpImEG3UliYwtTSr7yAKn', embed: 'https://open.spotify.com/embed/track/4MpImEG3UliYwtTSr7yAKn?utm_source=generator&theme=0' },
];

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/djandyfrangi/', icon: <FaInstagram /> },
  { label: 'SoundCloud', href: 'https://soundcloud.com/andy-frangi', icon: <FaSoundcloud /> },
  { label: 'Spotify', href: 'https://open.spotify.com/intl-es/artist/4CH2zMmrxyq4Gjo0X02iK1', icon: <FaSpotify /> },
];

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const finishLoading = () => window.setTimeout(() => setLoading(false), 1900);
    if (document.readyState === 'complete') finishLoading();
    else window.addEventListener('load', finishLoading, { once: true });

    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty('--scroll-progress', `${maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0}%`);
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => {
      window.removeEventListener('load', finishLoading);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll('.reveal, .release, .stat-item, .gallery img');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -7% 0px' });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle('is-loading', loading);
    return () => document.body.classList.remove('is-loading');
  }, [loading]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="scroll-progress" aria-hidden="true" />
      <div className={`loader ${loading ? '' : 'loader-done'}`} aria-hidden={!loading}>
        <div className="loader-mark">
          <img src="/media/af-logo.svg" alt="Andy Frangi" />
          <span className="loader-scan" />
        </div>
        <div className="loader-meta"><span>ANDY FRANGI</span><span>DJ / PRODUCER</span></div>
        <div className="loader-progress"><span /></div>
      </div>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a href="#top" className="brand" aria-label="Andy Frangi, inicio"><img src="/media/logo-white.png" alt="Andy Frangi" /></a>
        <nav className={menuOpen ? 'nav-open' : ''} aria-label="Navegación principal">
          {['Bio', 'Music', 'Live', 'Press'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a href="https://www.instagram.com/djandyfrangi/" target="_blank" rel="noreferrer" onClick={closeMenu}>Booking <FiArrowUpRight /></a>
        </nav>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">{menuOpen ? <FiX /> : <FiMenu />}</button>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-noise" />
        <div className="hero-copy">
          <span className="eyebrow">DJ · PRODUCER · ARGENTINA</span>
          <h1>ANDY<br />FRANGI</h1>
          <div className="hero-footer">
            <p>Progressive energy.<br />Deep emotion.</p>
            <a href="#bio" className="round-link" aria-label="Descubrir"><FiArrowDownRight /></a>
          </div>
        </div>
        <div className="hero-side">CAÑADA DE GÓMEZ · SANTA FE <span>—</span> EST. 2015</div>
      </section>

      <section className="statement" id="bio">
        <div className="section-index">01 / BIO</div>
        <div className="statement-body reveal">
          <p className="lead">Groove oscuro, emoción y movimiento: una identidad construida para transformar cada pista.</p>
          <div className="bio-grid">
            <p>Andy Frangi nació en Cañada de Gómez, Santa Fe, y encontró su vínculo con la música electrónica a los diez años. Formado profesionalmente en CETEAR, su carrera como DJ despegó en 2015 y no dejó de expandirse.</p>
            <p>Su sonido atraviesa el progressive, deep, organic y techno. Compartió cabina con Ezequiel Arias, Mike Rish, Antrim, Fernando Ferreyra, Brigado Crew y muchos otros, llevando su música a Argentina, Brasil, España e Ibiza.</p>
          </div>
          <div className="stats">
            <div className="stat-item"><strong>2015</strong><span>Inicio de carrera</span></div>
            <div className="stat-item"><strong>3</strong><span>Países</span></div>
            <div className="stat-item"><strong>TOP 10</strong><span>Beatport</span></div>
          </div>
        </div>
      </section>

      <section className="music" id="music">
        <div className="section-title-row reveal"><div><span className="section-index">02 / MUSIC</span><h2>SELECTED<br />RELEASES</h2></div><a href={socials[2].href} target="_blank" rel="noreferrer">Listen on Spotify <FiArrowUpRight /></a></div>
        <div className="release-grid">
          {releases.map((release, i) => (
            <article className="release" key={release.title}>
              <a className="release-art" href={release.spotify} target="_blank" rel="noreferrer" aria-label={`Abrir ${release.title} en Spotify`}><img src={release.image} alt={`Arte de ${release.title}`} /><span>0{i + 1}</span><div className="spotify-badge"><FaSpotify /> Open</div></a>
              <div><h3>{release.title}</h3><p>{release.artist}</p><small>{release.label}</small></div>
              <iframe className="spotify-player" src={release.embed} title={`Reproductor de ${release.title}`} width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
              <a className="spotify-link" href={release.spotify} target="_blank" rel="noreferrer"><FaSpotify /> Abrir en Spotify <FiArrowUpRight /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="live" id="live">
        <video id="live-video" autoPlay muted loop playsInline poster="/media/live.jpg" ref={(el) => { if (el && playing) el.play().catch(() => setPlaying(false)); }}><source src="/media/live.mp4" type="video/mp4" /></video>
        <div className="live-overlay" />
        <div className="live-copy reveal"><span className="section-index">03 / LIVE</span><h2>FROM ARGENTINA<br />TO THE WORLD</h2><p>Buenos Aires · Rosario · Córdoba · Jujuy · Florianópolis · Morro de São Paulo · Ibiza</p></div>
        <button className="video-control" onClick={() => { const v = document.getElementById('live-video'); if (playing) v.pause(); else v.play(); setPlaying(!playing); }} aria-label={playing ? 'Pausar video' : 'Reproducir video'}>{playing ? <FiPause /> : <FiPlay />}</button>
      </section>

      <section className="gallery">
        <img src="/media/gallery/studio-blue.png" alt="Andy Frangi en estudio con iluminación azul" />
        <img src="/media/gallery/live-switch.png" alt="Andy Frangi tocando en Switch" />
        <img src="/media/gallery/portrait-cyan.png" alt="Retrato de Andy Frangi" />
      </section>

      <section className="press" id="press">
        <span className="section-index">04 / PRESS & BOOKING</span>
        <h2 className="reveal">LET'S MAKE<br />SOMETHING MOVE.</h2>
        <div className="press-actions reveal">
          <a className="primary-cta" href="https://www.instagram.com/djandyfrangi/" target="_blank" rel="noreferrer">Booking inquiry <FiArrowUpRight /></a>
          <a className="text-link" href="/downloads/Andy-Frangi-Rider-Tecnico.docx" download><FiDownload /> Technical rider</a>
        </div>
        <div className="social-row">{socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.icon}<span>{social.label}</span><FiArrowUpRight /></a>)}</div>
      </section>

      <footer><img src="/media/logo-white.png" alt="Andy Frangi" /><p>DJ & PRODUCER · ARGENTINA</p><span>© {new Date().getFullYear()} ANDY FRANGI</span></footer>
    </main>
  );
}

export default App;
