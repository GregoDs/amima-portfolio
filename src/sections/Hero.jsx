import heroPortrait from '/images/home-hero.webp';
import './Hero.css';

const details = [
  ['NAME :', ['AMIMA BRYANT']],
  ['JOB :', ['CREATIVE DIRECTOR', 'PRODUCER', 'WRITER']],
  ['WHERE :', ['NAIROBI']],
  ['NAVIGATION :', ['ABOUT', 'WORKS', 'CONTACTS']],
  ['CONTACT :', ['EMAIL']],
];

function Hero() {
  return (
    <section className="hero" aria-label="Intro">
      <img className="hero__portrait" src={heroPortrait} alt="Portrait" />

      <dl className="hero__profile" aria-label="Profile details">
        {details.map(([label, values]) => (
          <div className="hero__profile-row" key={label}>
            <dt>{label}</dt>
            <dd>
              {values.map((value) => (
                <span key={value}>{value}</span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default Hero;
