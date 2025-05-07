import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const Impressum = () => {
  return <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12 max-w-4xl mt-20">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-white hover:text-white/80 transition-colors">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Zurück zur Startseite
          </Link>
        </div>
        
        <div className="space-y-8">
          <h1 className="text-4xl font-bold bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent sm:text-3xl">
            Impressum
          </h1>
          
          <div className="space-y-6 text-gray-300">
            <section className="space-y-3 backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-white">Angaben gemäß § 5 TMG</h2>
              <p>Internet: tiqqs.xyz</p>
              <p>Name des Diensteanbieters: Amir Slaimani</p>
              <p>Windsheimer Str. 10</p>
              <p>91593 Burgbernheim</p>
              <p>Telefon: +49 17624054507</p>
              <p>Email: kontakt@tiqqs.xyz</p>
            </section>

            <section className="space-y-3 backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-white">Haftung für Links</h2>
              <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
            </section>

            <section className="space-y-3 backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-white">Haftung für Inhalte</h2>
              <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Wir sind als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
            </section>

            <section className="space-y-3 backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-white">Urheberrecht</h2>
              <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>;
};
export default Impressum;