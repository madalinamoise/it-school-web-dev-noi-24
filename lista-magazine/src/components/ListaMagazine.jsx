import Magazin from './Magazin';
import './ListaMagazine.css';

const ListaMagazine = () => {
  const magazine = [
    {
      id: 1,
      adresa: 'Strada Exemplu 123, București',
      logo: 'https://logo.clearbit.com/emag.ro',
      program: 'Luni - Vineri: 9:00 - 18:00',
      titlu: 'eMAG București',
      descriere: 'Magazinul eMAG din București oferă produse electronice, IT și mult mai multe.',
    },
    {
      id: 2,
      adresa: 'Bd. Libertății 45, Cluj',
      logo: 'https://logo.clearbit.com/altex.ro',
      program: 'Luni - Vineri: 10:00 - 20:00',
      titlu: 'Altex Cluj',
      descriere: 'Altex Cluj oferă o gamă largă de electronice și electrocasnice.',
    },
    {
      id: 3,
      adresa: 'Strada Copacilor 7, Iași',
      logo: 'https://logo.clearbit.com/dedeman.ro',
      program: 'Luni - Vineri: 8:00 - 17:00',
      titlu: 'Dedeman Iași',
      descriere: 'Dedeman din Iași este locul ideal pentru produse de construcții și amenajări interioare.',
    },
    {
      id: 4,
      adresa: 'Strada Mare 101, Timișoara',
      logo: 'https://logo.clearbit.com/ikea.ro',
      program: 'Luni - Vineri: 10:00 - 22:00',
      titlu: 'IKEA Timișoara',
      descriere: 'IKEA Timișoara oferă soluții de mobilă și decor pentru întreaga casă.',
    },
    {
      id: 5,
      adresa: 'Calea Victoriei 200, București',
      logo: 'https://logo.clearbit.com/pcgarage.ro',
      program: 'Luni - Vineri: 9:00 - 19:00',
      titlu: 'PC Garage București',
      descriere: 'PC Garage este magazinul ideal pentru pasionații de IT și tehnologie din București.',
    },
    {
      id: 6,
      adresa: 'Bd. Unirii 10, Brașov',
      logo: 'https://logo.clearbit.com/selgros.ro',
      program: 'Luni - Vineri: 8:00 - 16:00',
      titlu: 'Selgros Brașov',
      descriere: 'Selgros Brașov oferă o gamă variată de produse alimentare și nealimentare.',
    },
  ];

  return (
    <div>
      <h1>Lista Magazine</h1>
      {magazine.map((magazin) => (
        <Magazin
          key={magazin.id}
          adresa={magazin.adresa}
          logo={magazin.logo}
          program={magazin.program}
          titlu={magazin.titlu}
          descriere={magazin.descriere}
          id={magazin.id} // Trimite ID-ul pentru fiecare magazin
        />
      ))}
    </div>
  );
};

export default ListaMagazine;