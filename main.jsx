import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import './styles.css';
import estampaImg from './estampa-galega-santiago-compostela-guillermina-sogo.jpg';
import mariscadorasImg from './mariscadoras-poio-galicia-guillermina-sogo.jpg';
import viticultoresImg from './viticultores-heroicos-ribeira-sacra-guillermina-sogo.jpg';

const images = {
  estampa: estampaImg,
  mariscadoras: mariscadorasImg,
  viticultores: viticultoresImg,
};

const content = {
  gl: {
    nav: ['GL', 'ES', 'EN'],
    heroKicker: 'Retazos de Galicia',
    heroTitle: 'HABITAR\nGALICIA',
    heroText: 'Un arquivo visual sobre identidade, memoria e territorio.',
    heroSeries: 'Serie inaugural · Retazos de Galicia · Guillermina Sogo',
    discover: 'Descubrir',
    introQuote: 'Habitar Galicia é observar o vínculo entre as persoas, o territorio e os oficios que moldean a memoria colectiva.',
    introText: 'A través da fotografía en branco e negro, a serie Retazos de Galicia constrúe unha mirada atemporal sobre o esforzo, a paisaxe e a identidade galega. As figuras aparecen frecuentemente sen rostro, de costas ou parcialmente ocultas, non como ausencia, senón como presenza compartida.',
    workLabel: 'Obra',
    works: [
      {
        title: 'ESTAMPA GALEGA',
        place: 'Santiago de Compostela · Galicia',
        img: images.estampa,
        text: 'Entre a pedra e a choiva, Santiago convértese nun escenario suspendido no tempo. A figura, apenas insinuada, atravesa unha cidade que parece existir fóra do presente. A fotografía non busca documentar un instante concreto, senón a sensación persistente dunha Galicia húmida, silenciosa e atemporal.',
        note: 'Serie: Retazos de Galicia. Publicada en OneStop Arts e Practical Photography.'
      },
      {
        title: 'AS MARISCADORAS',
        place: 'Poio · Galicia',
        img: images.mariscadoras,
        text: 'No límite entre a terra e o mar, as mariscadoras repiten un oficio transmitido durante xeracións. As figuras aparecen de costas, afastadas da individualidade, converténdose en símbolo dunha memoria colectiva ligada ao esforzo, á resistencia e á relación íntima co territorio.',
        note: 'Serie: Retazos de Galicia. 1º Premio no Concurso de Fotografía da Festa da Ameixa 2018.'
      },
      {
        title: 'VITICULTORES HEROICOS',
        place: 'Ribeira Sacra · Galicia',
        img: images.viticultores,
        text: 'Nas ladeiras imposibles da Ribeira Sacra, a paisaxe convértese tamén en esforzo. As figuras, afastadas e sen rostro definido, intégranse no territorio ata case desaparecer nel. Máis que retratar unha vendima, a imaxe fala da resistencia humana fronte á paisaxe.',
        note: 'Serie: Retazos de Galicia.'
      }
    ],
    aboutTitle: 'Sobre a\nautora',
    about: [
      'Guillermina Sogo é fotógrafa arxentino-galega afincada en Pontevedra.',
      'A súa obra explora o vínculo entre as persoas, o territorio e a memoria colectiva a través dunha mirada documental e emocional sobre Galicia.',
      'Mediante a fotografía en branco e negro, constrúe imaxes atemporais onde o traballo, a paisaxe e a presenza humana dialogan desde o silencio e a identidade compartida.',
      'As súas fotografías foron publicadas en medios e proxectos nacionais e internacionais, entre eles National Geographic, Practical Photography e OneStop Arts, ademais de formar parte da exposición internacional As 100 Marabillas do Mundo.'
    ],
    spaceTitle: 'AmoGalicia · Talento Galego',
    spaceText: 'HABITAR GALICIA nace tamén desde AmoGalicia, un espazo situado en Pontevedra dedicado á fotografía de autora, á ilustración e ao talento galego contemporáneo.',
    finalQuote: 'Cada territorio garda unha memoria.',
    buttons: ['Contacto', 'Instagram', 'Edicións Fine Art']
  },
  es: {
    nav: ['GL', 'ES', 'EN'],
    heroKicker: 'Retazos de Galicia',
    heroTitle: 'HABITAR\nGALICIA',
    heroText: 'Un archivo visual sobre identidad, memoria y territorio.',
    heroSeries: 'Serie inaugural · Retazos de Galicia · Guillermina Sogo',
    discover: 'Descubrir',
    introQuote: 'Habitar Galicia es observar el vínculo entre las personas, el territorio y los oficios que moldean la memoria colectiva.',
    introText: 'A través de la fotografía en blanco y negro, la serie Retazos de Galicia construye una mirada atemporal sobre el esfuerzo, el paisaje y la identidad gallega. Las figuras aparecen con frecuencia sin rostro, de espaldas o parcialmente ocultas, no como ausencia, sino como presencia compartida.',
    workLabel: 'Obra',
    works: [
      { title: 'ESTAMPA GALEGA', place: 'Santiago de Compostela · Galicia', img: images.estampa, text: 'Entre la piedra y la lluvia, Santiago se convierte en un escenario suspendido en el tiempo. La figura, apenas insinuada, atraviesa una ciudad que parece existir fuera del presente. La fotografía no busca documentar un instante concreto, sino la sensación persistente de una Galicia húmeda, silenciosa y atemporal.', note: 'Serie: Retazos de Galicia. Publicada en OneStop Arts y Practical Photography.' },
      { title: 'AS MARISCADORAS', place: 'Poio · Galicia', img: images.mariscadoras, text: 'En el límite entre la tierra y el mar, las mariscadoras repiten un oficio transmitido durante generaciones. Las figuras aparecen de espaldas, alejadas de la individualidad, convirtiéndose en símbolo de una memoria colectiva ligada al esfuerzo, la resistencia y la relación íntima con el territorio.', note: 'Serie: Retazos de Galicia. 1º Premio en el Concurso de Fotografía de la Festa da Ameixa 2018.' },
      { title: 'VITICULTORES HEROICOS', place: 'Ribeira Sacra · Galicia', img: images.viticultores, text: 'En las laderas imposibles de la Ribeira Sacra, el paisaje se convierte también en esfuerzo. Las figuras, alejadas y sin rostro definido, se integran en el territorio hasta casi desaparecer en él. Más que retratar una vendimia, la imagen habla de la resistencia humana frente al paisaje.', note: 'Serie: Retazos de Galicia.' }
    ],
    aboutTitle: 'Sobre la\nautora',
    about: ['Guillermina Sogo es fotógrafa argentino-gallega afincada en Pontevedra.', 'Su obra explora el vínculo entre las personas, el territorio y la memoria colectiva a través de una mirada documental y emocional sobre Galicia.', 'Mediante la fotografía en blanco y negro, construye imágenes atemporales donde el trabajo, el paisaje y la presencia humana dialogan desde el silencio y la identidad compartida.', 'Sus fotografías han sido publicadas en medios y proyectos nacionales e internacionales, entre ellos National Geographic, Practical Photography y OneStop Arts, además de formar parte de la exposición internacional Las 100 Maravillas del Mundo.'],
    spaceTitle: 'AmoGalicia · Talento Galego',
    spaceText: 'HABITAR GALICIA nace también desde AmoGalicia, un espacio situado en Pontevedra dedicado a la fotografía de autora, la ilustración y el talento gallego contemporáneo.',
    finalQuote: 'Cada territorio guarda una memoria.',
    buttons: ['Contacto', 'Instagram', 'Ediciones Fine Art']
  },
  en: {
    nav: ['GL', 'ES', 'EN'],
    heroKicker: 'Retazos de Galicia',
    heroTitle: 'HABITAR\nGALICIA',
    heroText: 'A visual archive on identity, memory and territory.',
    heroSeries: 'Inaugural series · Retazos de Galicia · Guillermina Sogo',
    discover: 'Discover',
    introQuote: 'To inhabit Galicia is to observe the bond between people, territory and the trades that shape collective memory.',
    introText: 'Through black-and-white photography, the series Retazos de Galicia builds a timeless gaze on labour, landscape and Galician identity. The figures often appear faceless, turned away or partially hidden, not as absence, but as shared presence.',
    workLabel: 'Work',
    works: [
      { title: 'ESTAMPA GALEGA', place: 'Santiago de Compostela · Galicia', img: images.estampa, text: 'Between stone and rain, Santiago becomes a scene suspended in time. The barely suggested figure crosses a city that seems to exist outside the present. The photograph does not seek to document a specific instant, but the enduring feeling of a wet, silent and timeless Galicia.', note: 'Series: Retazos de Galicia. Published in OneStop Arts and Practical Photography.' },
      { title: 'AS MARISCADORAS', place: 'Poio · Galicia', img: images.mariscadoras, text: 'At the edge between land and sea, the shellfish gatherers repeat a trade passed down through generations. Seen from behind, removed from individuality, the figures become a symbol of collective memory tied to effort, resistance and an intimate relationship with the territory.', note: 'Series: Retazos de Galicia. First Prize in the Photography Competition of the Festa da Ameixa 2018.' },
      { title: 'VITICULTORES HEROICOS', place: 'Ribeira Sacra · Galicia', img: images.viticultores, text: 'On the impossible slopes of the Ribeira Sacra, the landscape also becomes effort. The distant, faceless figures merge with the territory until they almost disappear into it. More than portraying a harvest, the image speaks of human resistance before the landscape.', note: 'Series: Retazos de Galicia.' }
    ],
    aboutTitle: 'About the\nauthor',
    about: ['Guillermina Sogo is an Argentine-Galician photographer based in Pontevedra.', 'Her work explores the bond between people, territory and collective memory through a documentary and emotional gaze on Galicia.', 'Through black-and-white photography, she creates timeless images where labour, landscape and human presence speak through silence and shared identity.', 'Her photographs have been published in national and international media and projects, including National Geographic, Practical Photography and OneStop Arts, and have also been part of the international exhibition The 100 Wonders of the World.'],
    spaceTitle: 'AmoGalicia · Talento Galego',
    spaceText: 'HABITAR GALICIA also emerges from AmoGalicia, a space in Pontevedra dedicated to fine-art photography, illustration and contemporary Galician talent.',
    finalQuote: 'Every territory holds a memory.',
    buttons: ['Contact', 'Fine Art Editions']
  }
};

function App() {
  const [lang, setLang] = useState('gl');
  const t = content[lang];

  return (
    <main className="site">
      <nav className="language" aria-label="Language selector">
        {t.nav.map((item) => (
          <button key={item} onClick={() => setLang(item.toLowerCase())} className={lang === item.toLowerCase() ? 'active' : ''}>{item}</button>
        ))}
      </nav>

      <section className="hero" style={{ backgroundImage: `url(${images.estampa})` }}>
        <div className="heroOverlay" />
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="heroContent">
          <p className="kicker">{t.heroKicker}</p>
          <h1>{t.heroTitle.split('\n').map((line) => <React.Fragment key={line}>{line}<br /></React.Fragment>)}</h1>
          <p className="heroText">{t.heroText}</p>
          <p className="series">{t.heroSeries}</p>
          <a href="#intro" className="discover">{t.discover}</a>
        </motion.div>
      </section>

      <section id="intro" className="intro">
        <p className="quote">“{t.introQuote}”</p>
        <p className="introText">{t.introText}</p>
      </section>

      <section className="works">
        {t.works.map((work, index) => (
          <motion.article key={work.title} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8 }} className="work">
            <div className={index % 2 ? 'image order' : 'image'}><img src={work.img} alt={`${work.title} · ${work.place} · Guillermina Sogo`} /></div>
            <div className="workText">
              <p className="number">{t.workLabel} {String(index + 1).padStart(2, '0')}</p>
              <h2>{work.title}</h2>
              <p className="place">{work.place}</p>
              <p className="body">“{work.text}”</p>
              <p className="note">{work.note}</p>
            </div>
          </motion.article>
        ))}
      </section>

      <section className="about">
        <h2>{t.aboutTitle.split('\n').map((line) => <React.Fragment key={line}>{line}<br /></React.Fragment>)}</h2>
        <div>{t.about.map((p) => <p key={p}>{p}</p>)}</div>
      </section>

      <footer className="footer">
        <p className="kicker">{t.spaceTitle}</p>
        <h2>{t.spaceTitle}</h2>
        <p className="space">“{t.spaceText}”</p>
        <p className="final">“{t.finalQuote}”</p>
        <p className="domain">habitargalicia.art</p>
        <div className="buttons">
          <a href="mailto:info@amogalicia.com">{t.buttons[0]}</a>
          
          <a href="mailto:info@amogalicia.com?subject=Consulta%20ediciones%20Fine%20Art%20-%20Habitar%20Galicia">{t.buttons[2]}</a>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
