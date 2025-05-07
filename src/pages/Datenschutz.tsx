import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const Datenschutz = () => {
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
          <h1 className="text-4xl font-bold bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent break-words py-[4px] sm:text-3xl">
            Datenschutzerklärung
          </h1>
          
          <div className="space-y-6 text-gray-300">
            <section className="space-y-3 backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-lg overflow-hidden">
              <p className="mb-4 break-words">Personenbezogene Daten (nachfolgend zumeist nur „Daten" genannt) werden von uns nur im Rahmen der Erforderlichkeit sowie zum Zwecke der Bereitstellung eines funktionsfähigen und nutzerfreundlichen Internetauftritts, inklusive seiner Inhalte und der dort angebotenen Leistungen, verarbeitet.</p>
              
              <p className="mb-4 break-words">Gemäß Art. 4 Ziffer 1. der Verordnung (EU) 2016/679, also der Datenschutz-Grundverordnung (nachfolgend nur „DSGVO" genannt), gilt als „Verarbeitung" jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführter Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten, wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.</p>
              
              <p className="mb-4 break-words">Mit der nachfolgenden Datenschutzerklärung informieren wir Sie insbesondere über Art, Umfang, Zweck, Dauer und Rechtsgrundlage der Verarbeitung personenbezogener Daten, soweit wir entweder allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung entscheiden. Zudem informieren wir Sie nachfolgend über die von uns zu Optimierungszwecken sowie zur Steigerung der Nutzungsqualität eingesetzten Fremdkomponenten, soweit hierdurch Dritte Daten in wiederum eigener Verantwortung verarbeiten.</p>
              
              <p className="mb-4 break-words">Unsere Datenschutzerklärung ist wie folgt gegliedert:</p>
              
              <ol className="list-decimal mb-6 pl-6 break-words">
                <li>Informationen über uns als Verantwortliche</li>
                <li>Rechte der Nutzer und Betroffenen</li>
                <li>Informationen zur Datenverarbeitung</li>
              </ol>
            </section>

            <section className="space-y-3 backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-lg overflow-hidden">
              <h2 className="text-2xl font-semibold text-white break-words">I. Informationen über uns als Verantwortliche</h2>
              <p className="mb-4 break-words">Verantwortlicher Anbieter dieses Internetauftritts im datenschutzrechtlichen Sinne ist:</p>
              
              <address className="not-italic mb-6 break-words">
                Amir Slaimani<br />
                Windsheimer Str. 10<br />
                91593, Burgbernheim<br />
                Telefon: +49 17624054507<br />
                E-Mail: kontakt@tiqqs.xyz
              </address>
            </section>
            
            <section className="space-y-3 backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-lg overflow-hidden">
              <h2 className="text-2xl font-semibold text-white break-words">II. Rechte der Nutzer und Betroffenen</h2>
              <p className="mb-4 break-words">Mit Blick auf die nachfolgend noch näher beschriebene Datenverarbeitung haben die Nutzer und Betroffenen das Recht</p>
              
              <ul className="list-disc mb-6 pl-6 break-words">
                <li>auf Bestätigung, ob sie betreffende Daten verarbeitet werden, auf Auskunft über die verarbeiteten Daten, auf weitere Informationen über die Datenverarbeitung sowie auf Kopien der Daten (vgl. auch Art. 15 DSGVO);</li>
                <li>auf Berichtigung oder Vervollständigung unrichtiger bzw. unvollständiger Daten (vgl. auch Art. 16 DSGVO);</li>
                <li>auf unverzügliche Löschung der sie betreffenden Daten (vgl. auch Art. 17 DSGVO), oder, alternativ, soweit eine weitere Verarbeitung gemäß Art. 17 Abs. 3 DSGVO erforderlich ist, auf Einschränkung der Verarbeitung nach Maßgabe von Art. 18 DSGVO;</li>
                <li>auf Erhalt der sie betreffenden und von ihnen bereitgestellten Daten und auf Übermittlung dieser Daten an andere Anbieter/Verantwortliche (vgl. auch Art. 20 DSGVO);</li>
                <li>auf Beschwerde gegenüber der Aufsichtsbehörde, sofern sie der Ansicht sind, dass die sie betreffenden Daten durch den Anbieter unter Verstoß gegen datenschutzrechtliche Bestimmungen verarbeitet werden (vgl. auch Art. 77 DSGVO).</li>
              </ul>
              
              <p className="mb-4 break-words">Darüber hinaus ist der Anbieter dazu verpflichtet, alle Empfänger, denen gegenüber Daten durch den Anbieter offengelegt worden sind, über jedwede Berichtigung oder Löschung von Daten oder die Einschränkung der Verarbeitung, die aufgrund der Artikel 16, 17 Abs. 1, 18 DSGVO erfolgt, zu unterrichten. Diese Verpflichtung besteht jedoch nicht, soweit diese Mitteilung unmöglich oder mit einem unverhältnismäßigen Aufwand verbunden ist. Unbeschadet dessen hat der Nutzer ein Recht auf Auskunft über diese Empfänger.</p>
              
              <p className="mb-6 break-words">Ebenfalls haben die Nutzer und Betroffenen nach Art. 21 DSGVO das Recht auf Widerspruch gegen die künftige Verarbeitung der sie betreffenden Daten, sofern die Daten durch den Anbieter nach Maßgabe von Art. 6 Abs. 1 lit. f) DSGVO verarbeitet werden. Insbesondere ist ein Widerspruch gegen die Datenverarbeitung zum Zwecke der Direktwerbung statthaft.</p>
            </section>
            
            <section className="space-y-3 backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-lg overflow-hidden">
              <h2 className="text-2xl font-semibold text-white break-words">III. Informationen zur Datenverarbeitung</h2>
              <p className="mb-4 break-words">Ihre bei Nutzung unseres Internetauftritts verarbeiteten Daten werden gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt, der Löschung der Daten keine gesetzlichen Aufbewahrungspflichten entgegenstehen und nachfolgend keine anderslautenden Angaben zu einzelnen Verarbeitungsverfahren gemacht werden.</p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3 break-words">Kontaktanfragen / Kontaktmöglichkeit</h3>
              <p className="mb-4 break-words">Sofern Sie per Kontaktformular oder E-Mail mit uns in Kontakt treten, werden die dabei von Ihnen angegebenen Daten zur Bearbeitung Ihrer Anfrage genutzt. Die Angabe der Daten ist zur Bearbeitung und Beantwortung Ihre Anfrage erforderlich – ohne deren Bereitstellung können wir Ihre Anfrage nicht oder allenfalls eingeschränkt beantworten.</p>
              
              <p className="mb-4 break-words">Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. b) DSGVO.</p>
              
              <p className="mb-6 break-words">Ihre Daten werden gelöscht, sofern Ihre Anfrage abschließend beantwortet worden ist und der Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen, wie bspw. bei einer sich etwaig anschließenden Vertragsabwicklung.</p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3 break-words">Nutzerbeiträge, Kommentare und Bewertungen</h3>
              <p className="mb-4 break-words">Wir bieten Ihnen an, auf unseren Internetseiten Fragen, Antworten, Meinungen oder Bewertungen, nachfolgend nur „Beiträge genannt, zu veröffentlichen. Sofern Sie dieses Angebot in Anspruch nehmen, verarbeiten und veröffentlichen wir Ihren Beitrag, Datum und Uhrzeit der Einreichung sowie das von Ihnen ggf. genutzte Pseudonym.</p>
              
              <p className="mb-4 break-words">Rechtsgrundlage hierbei ist Art. 6 Abs. 1 lit. a) DSGVO. Die Einwilligung können Sie gemäß Art. 7 Abs. 3 DSGVO jederzeit mit Wirkung für die Zukunft widerrufen. Hierzu müssen Sie uns lediglich über Ihren Widerruf in Kenntnis setzen.</p>
              
              <p className="mb-6 break-words">Darüber hinaus verarbeiten wir auch Ihre IP- und E-Mail-Adresse. Die IP-Adresse wird verarbeitet, weil wir ein berechtigtes Interesse daran haben, weitere Schritte einzuleiten oder zu unterstützen, sofern Ihr Beitrag in Rechte Dritter eingreift und/oder er sonst wie rechtswidrig erfolgt.</p>
              
              <p className="mb-4 break-words">Rechtsgrundlage ist in diesem Fall Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt in der ggf. notwendigen Rechtsverteidigung.</p>
            </section>
            
            <section className="space-y-3 backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-lg overflow-hidden">
              <h3 className="text-xl font-semibold mb-3 break-words">Serverdaten</h3>
              <p className="mb-4 break-words">Aus technischen Gründen, insbesondere zur Gewährleistung eines sicheren und stabilen Internetauftritts, werden Daten durch Ihren Internet-Browser an uns bzw. an unseren Webspace-Provider übermittelt. Mit diesen sog. Server-Logfiles werden u.a. Typ und Version Ihres Internetbrowsers, das Betriebssystem, die Website, von der aus Sie auf unseren Internetauftritt gewechselt haben (Referrer URL), die Website(s) unseres Internetauftritts, die Sie besuchen, Datum und Uhrzeit des jeweiligen Zugriffs sowie die IP-Adresse des Internetanschlusses, von dem aus die Nutzung unseres Internetauftritts erfolgt, erhoben.</p>
              
              <p className="mb-4 break-words">Diese so erhobenen Daten werden vorrübergehend gespeichert, dies jedoch nicht gemeinsam mit anderen Daten von Ihnen.</p>
              
              <p className="mb-4 break-words">Diese Speicherung erfolgt auf der Rechtsgrundlage von Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt in der Verbesserung, Stabilität, Funktionalität und Sicherheit unseres Internetauftritts.</p>
              
              <p className="mb-6 break-words">Die Daten werden spätestens nach sieben Tage wieder gelöscht, soweit keine weitere Aufbewahrung zu Beweiszwecken erforderlich ist. Andernfalls sind die Daten bis zur endgültigen Klärung eines Vorfalls ganz oder teilweise von der Löschung ausgenommen.</p>
            </section>
            
            <section className="space-y-3 backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-lg overflow-hidden">
              <h3 className="text-xl font-semibold mb-3 break-words">Allgemeine Verlinkung auf Profile bei Drittanbietern</h3>
              <p className="mb-4 break-words">Der Anbieter setzt auf der Website eine Verlinkung auf die nachstehend aufgeführten sozialen Netzwerke ein.</p>
              
              <p className="mb-4 break-words">Rechtsgrundlage ist hierbei Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse des Anbieters besteht an der Verbesserung der Nutzungsqualität der Website.</p>
              
              <p className="mb-4 break-words">Die Einbindung der Plugins erfolgt dabei über eine verlinkte Grafik. Erst durch einen Klick auf die entsprechende Grafik wird der Nutzer zu dem Dienst des jeweiligen sozialen Netzwerks weitergeleitet.</p>
              
              <p className="mb-6 break-words">Nach der Weiterleitung des Kunden werden durch das jeweilige Netzwerk Informationen über den Nutzer erfasst. Dies sind zunächst Daten wie IP-Adresse, Datum, Uhrzeit und besuchte Seite. Ist der Nutzer währenddessen in seinem Benutzerkonto des jeweiligen Netzwerks eingeloggt, kann der Netzwerk-Betreiber ggf. die gesammelten Informationen des konkreten Besuches des Nutzers dem persönlichen Account des Nutzers zuordnen. Interagiert der Nutzer über einen „Teilen"-Button des jeweiligen Netzwerks, können diese Informationen in dem persönlichen Benutzerkonto des Nutzers gespeichert und ggf. veröffentlicht werden. Will der Nutzer verhindern, dass die gesammelten Informationen unmittelbar seinem Benutzerkonto zugeordnet werden, muss sich der Nutzer vor dem Anklicken der Grafik ausloggen. Zudem besteht die Möglichkeit, das jeweilige Benutzerkonto entsprechend zu konfigurieren.</p>
              
              <p className="mb-4 break-words">Folgende soziale Netzwerke sind vom Anbieter verlinkt:</p>
              
              <h4 className="text-lg font-semibold mt-4 mb-2 break-words">Instagram</h4>
              <p className="mb-4 break-words">Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland.</p>
              
              <p className="mb-6 break-words">Datenschutzerklärung: <a href="https://help.instagram.com/519522125107875" className="text-blue-600 hover:underline break-words" target="_blank" rel="noopener noreferrer">https://help.instagram.com/519522125107875</a></p>
            </section>
            
            <section className="space-y-3 backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-lg overflow-hidden">
              <h3 className="text-xl font-semibold mb-3 break-words">Google Analytics</h3>
              <p className="mb-4 break-words">Wir nutzen auf unserer Webseite Google Analytics, einen Webanalysedienst der Firma Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, einem Tochterunternehmen der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA, nachfolgend „Google".</p>
              
              <p className="mb-4 break-words">Google Analytics hilft uns dabei, die Nutzung der Website zu analysieren und die Effektivität unserer Marketing-Kampagnen zu messen. Rechtsgrundlage ist hierbei Art. 6 Abs. 1 lit. a DSGVO. Der Nutzer kann seine Einwilligung zur Nutzung von Google Analytics gemäß Art. 7 Abs. 3 DSGVO jederzeit über die „Cookie-Einstellungen" unserer Webseite für die Zukunft widerrufen.</p>
              
              <p className="mb-4 break-words">Informationen wie Zeit, Ort und Häufigkeit der Webseitenbesuche sowie Interaktionen mit der Webseite (z. B. Klickpfade, gesehene/angeklickte Anzeigen, Klicks auf Links) einschließlich der IP-Adresse des Nutzers werden an einen Server von Google in den USA übertragen und dort längstens für 2 Monate gespeichert.</p>
              
              <p className="mb-4 break-words">Google LLC ist Teil des „Data Privacy Framework", für das die EU-Kommission einen Angemessenheitsbeschluss gemäß Art. 45 DSGVO erlassen hat:</p>
              
              <p className="mb-4 break-words"><a href="https://www.dataprivacyframework.gov/list" className="text-blue-600 hover:underline break-words" target="_blank" rel="noopener noreferrer">https://www.dataprivacyframework.gov/list</a></p>
            </section>

            <section className="space-y-3 backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-lg overflow-hidden">
              <p className="mb-4 break-words">Google erfasst zudem „demografische Merkmale" und kann Statistiken erstellen, die Aussagen über Alter, Geschlecht und Interessen der Seitenbesucher ermöglichen. Dies erfolgt durch die automatisierte Analyse von Werbung und Informationen von Drittanbietern.</p>
              
              <p className="mb-6 break-words">Falls der Nutzer in seinem Google-Konto personalisierte Anzeigen aktiviert hat und Google Analytics zustimmt, kann Google das Nutzungsverhalten geräteübergreifend analysieren – also bezogen auf alle Geräte, die der Nutzer mit seinem Google-Konto verknüpft hat. Google erstellt dabei Modelle zu geräteübergreifenden Conversions; uns werden hierzu nur anonyme Statistiken übermittelt, keine personenbezogenen Daten.</p>
              
              <p className="mb-4 break-words">Möchte der Nutzer diese geräteübergreifende Analyse deaktivieren, kann er die Funktion „Personalisierte Werbung" in den Einstellungen seines Google-Kontos unter folgendem Link ausschalten:</p>
              
              <p className="mb-6 break-words"><a href="https://support.google.com/ads/answer/2662922?hl=de" className="text-blue-600 hover:underline break-words" target="_blank" rel="noopener noreferrer">https://support.google.com/ads/answer/2662922?hl=de</a></p>
            </section>

            <section className="space-y-3 backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-lg overflow-hidden">
              <p className="mb-4 break-words">Wir setzen Google Analytics mit einer Anonymisierungsfunktion ein. Dadurch wird die IP-Adresse des Nutzers von Google innerhalb der EU-Mitgliedstaaten oder in anderen Vertragsstaaten des EWR-Abkommens gekürzt.</p>
              
              <p className="mb-4 break-words">Google verwendet die erhobenen Daten, um den Webseitenbesuch des Nutzers auszuwerten und für uns Berichte über die Websiteaktivitäten zusammenzustellen. Die Daten werden außerdem genutzt, um weitere Dienstleistungen im Zusammenhang mit der Website- und Internetnutzung zu erbringen. Google kann diese Informationen gegebenenfalls an Dritte weitergeben, sofern gesetzlich erforderlich oder wenn Dritte diese Daten im Auftrag von Google verarbeiten.</p>
              
              <p className="mb-4 break-words">Laut eigenen Angaben wird Google in keinem Fall die IP-Adresse des Nutzers mit anderen Daten von Google verknüpfen. Weiterführende Informationen und Möglichkeiten zur Unterbindung der Datennutzung bietet Google hier:</p>
              
              <p className="mb-6 break-words"><a href="https://www.google.com/intl/de/policies/privacy/partners" className="text-blue-600 hover:underline break-words" target="_blank" rel="noopener noreferrer">https://www.google.com/intl/de/policies/privacy/partners</a></p>
              
              <p className="mb-6 break-words">Falls der Nutzer mit der Erfassung nicht einverstanden ist, kann er diese auch durch die einmalige Installation des Browser-Add-ons zur Deaktivierung von Google Analytics unterbinden.</p>
            </section>

            <section className="space-y-3 backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-lg overflow-hidden">
              <h3 className="text-xl font-semibold mb-3 break-words">Google Fonts</h3>
              <p className="mb-4 break-words">In unserem Internetauftritt setzen wir Google Fonts zur Darstellung externer Schriftarten ein. Es handelt sich hierbei um einen Dienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, nachfolgend nur „Google" genannt.</p>
              
              <p className="mb-4 break-words">Um die Darstellung bestimmter Schriften in unserem Internetauftritt zu ermöglichen, wird bei Aufruf unseres Internetauftritts eine Verbindung zu dem Google-Server in den USA aufgebaut.</p>
              
              <p className="mb-4 break-words">Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt in der Optimierung und dem wirtschaftlichen Betrieb unseres Internetauftritts.</p>
              
              <p className="mb-6 break-words">Durch die bei Aufruf unseres Internetauftritts hergestellte Verbindung zu Google kann Google ermitteln, von welcher Website Ihre Anfrage gesendet worden ist und an welche IP-Adresse die Darstellung der Schrift zu übermitteln ist.</p>
              
              <p className="mb-4 break-words">Google bietet unter</p>
              
              <p className="mb-2 break-words"><a href="https://adssettings.google.com/authenticated" className="text-blue-600 hover:underline break-words" target="_blank" rel="noopener noreferrer">https://adssettings.google.com/authenticated</a></p>
              
              <p className="mb-6 break-words"><a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline break-words" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></p>
              
              <p className="mb-6 break-words">weitere Informationen an und zwar insbesondere zu den Möglichkeiten der Unterbindung der Datennutzung.</p>
            </section>

            <section className="space-y-3 backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-lg overflow-hidden">
              <h3 className="text-xl font-semibold mb-3 break-words">Google-Maps</h3>
              <p className="mb-4 break-words">In unserem Internetauftritt setzen wir Google Maps zur Darstellung unseres Standorts sowie zur Erstellung einer Anfahrtsbeschreibung ein. Es handelt sich hierbei um einen Dienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, nachfolgend nur „Google" genannt.</p>
              
              <p className="mb-4 break-words">Sofern Sie die in unseren Internetauftritt eingebundene Komponente Google Maps aufrufen, speichert Google über Ihren Internet-Browser ein Cookie auf Ihrem Endgerät. Um unseren Standort anzuzeigen und eine Anfahrtsbeschreibung zu erstellen, werden Ihre Nutzereinstellungen und -daten verarbeitet. Hierbei können wir nicht ausschließen, dass Google Server in den USA einsetzt.</p>
              
              <p className="mb-4 break-words">Im Falle einer von Ihnen erteilten Einwilligung für diese Verarbeitung ist Rechtsgrundlage Art. 6 Abs. 1 lit. a DSGVO. Rechtsgrundlage kann auch Art. 6 Abs. 1 lit. f DSGVO sein. Unser berechtigtes Interesse liegt in der Optimierung der Funktionalität unseres Internetauftritts.</p>
              
              <p className="mb-6 break-words">Durch die so hergestellte Verbindung zu Google kann Google ermitteln, von welcher Website Ihre Anfrage gesendet worden ist und an welche IP-Adresse die Anfahrtsbeschreibung zu übermitteln ist.</p>
            </section>

            <section className="space-y-3 backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-lg overflow-hidden">
              <p className="mb-4 break-words">Sofern Sie mit dieser Verarbeitung nicht einverstanden sind, haben Sie die Möglichkeit, die Installation der Cookies durch die entsprechenden Einstellungen in Ihrem Internet-Browser zu verhindern. Einzelheiten hierzu finden Sie vorstehend unter dem Punkt „Cookies".</p>
              
              <p className="mb-4 break-words">Zudem erfolgt die Nutzung von Google Maps sowie der über Google Maps erlangten Informationen nach den Google-Nutzungsbedingungen und den Geschäftsbedingungen für Google Maps.</p>
              
              <p className="mb-4 break-words">Überdies bietet Google unter</p>
              
              <p className="mb-2 break-words"><a href="https://adssettings.google.com/authenticated" className="text-blue-600 hover:underline break-words" target="_blank" rel="noopener noreferrer">https://adssettings.google.com/authenticated</a></p>
              
              <p className="mb-6 break-words"><a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline break-words" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></p>
              
              <p className="mb-6 break-words">weitergehende Informationen an.</p>
            </section>

            <section className="space-y-3 backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-lg overflow-hidden">
              <h3 className="text-xl font-semibold mb-3 break-words">jQuery CDN</h3>
              <p className="mb-4 break-words">Zur Optimierung der Abrufgeschwindigkeit, der Gestaltung und Darstellung der Inhalte unseres Internetauftritts auf unterschiedlichen Endgeräten setzen wir in unserem Internetauftritt den Dienst</p>
              
              <p className="mb-4 break-words">jQuery CDN, ein Content Delivery Network („CDN"), ein. Hierbei handelt es sich um einen Dienst der jQuery Foundation, nachfolgend nur „jQuery" genannt. jQuery wird für die JS Foundation über das StackPath CDN verteilt.</p>
              
              <p className="mb-4 break-words">Um die Inhalte unseres Internetauftritts schnell ausliefern zu können, greift der Dienst auf sog. JavaScript-Bibliotheken zurück. Dabei werden entsprechende Dateien von dem CDN-Server geladen, soweit sie nicht schon durch einen Besuch eines anderen Internetauftritts in Ihrem Browser-Cache vorhanden sind. Im Falle der Verbindung zu dem CDN-Server wird Ihre IP-Adresse erfasst. Dabei kann nicht ausgeschlossen werden, dass eine Verbindung zu einem Server außerhalb der EU erfolgt.</p>
              
              <p className="mb-4 break-words">Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt in der Beschleunigung der Ladezeiten unseres Internetauftritts sowie in dessen Optimierung.</p>
              
              <p className="mb-6 break-words">Um die Ausführung des Java-Script-Codes von jQuery insgesamt zu verhindern, können Sie einen sog. Java-Script-Blocker installieren, wie bspw. noscript.net oder ghostery.com. Sollten Sie die Ausführung des Java-Script-Codes verhindern oder einschränken, kann dies aus technischen Gründen allerdings dazu führen, dass womöglich nicht sämtliche Inhalte und Funktionen unseres Internetauftritts verfügbar sind.</p>
            </section>

            <section className="space-y-3 backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-lg overflow-hidden">
              <h3 className="text-xl font-semibold mb-3 break-words">OpenStreetMap</h3>
              <p className="mb-4 break-words">Für Anfahrtsbeschreibungen setzen wir OpenStreetMap, einen Dienst der OpenStreetMap Foundation, St John's Innovation Centre, Cowley Road, Cambridge, CB 4 0 WS, United Kingdom, nachfolgend nur „OpenStreetMap" genannt, ein.</p>
              
              <p className="mb-4 break-words">Bei Aufruf einer unserer Internetseiten, in die der Dienst OpenStreetMap eingebunden ist, wird durch OpenStreetMap ein Cookie über Ihren Internet-Browser auf Ihrem Endgerät gespeichert. Hierdurch werden Ihre Nutzereinstellungen und Nutzerdaten zum Zwecke der Anzeige der Seite bzw. zur Gewährleistung der Funktionalität des Dienstes OpenStreetMap verarbeitet. Durch diese Verarbeitung kann OpenStreetMap erkennen, von welcher Internetseite Ihre Anfrage gesendet worden ist und an welche IP- Adresse die Darstellung der Anfahrt übermittelt werden soll.</p>
              
              <p className="mb-4 break-words">Im Falle einer von Ihnen erteilten Einwilligung für diese Verarbeitung ist Rechtsgrundlage Art. 6 Abs. 1 lit. a DSGVO. Rechtsgrundlage kann auch Art. 6 Abs. 1 lit. f DSGVO sein. Unser berechtigtes Interesse liegt in der Optimierung und dem wirtschaftlichen Betrieb unseres Internetauftritts.</p>
              
              <p className="mb-4 break-words">Sofern Sie mit dieser Verarbeitung nicht einverstanden sind, haben Sie die Möglichkeit, die Installation der Cookies durch die entsprechenden Einstellungen in Ihrem Internet-Browser zu verhindern. Einzelheiten hierzu finden Sie vorstehend unter dem Punkt „Cookies".</p>
              
              <p className="mb-4 break-words">OpenStreetMap bietet unter</p>
              
              <p className="mb-6 break-words"><a href="https://wiki.osmfoundation.org/wiki/Privacy_Policy" className="text-blue-600 hover:underline break-words" target="_blank" rel="noopener noreferrer">https://wiki.osmfoundation.org/wiki/Privacy_Policy</a></p>
              
              <p className="mb-6 break-words">weitere Informationen zur Erhebung und Nutzung der Daten sowie zu Ihren Rechten und Möglichkeiten zum Schutz Ihrer Privatsphäre an.</p>
              
              <p className="text-sm text-gray-600 mt-8 break-words">Muster-Datenschutzerklärung der Anwaltskanzlei Weiß & Partner</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>;
};
export default Datenschutz;