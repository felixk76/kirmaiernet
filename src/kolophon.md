---
title: 'Felix Kirmaier - Frontend Developer - Kolophon'
layout: 'layouts/text.html'
eleventyNavigation:
    key: Kolophon
    order: 30
changeFreq: 'weekly'
articleclass: 'article-2col'
mainheadline: 'Kolophon'
---
{% articlefullwidth %}

##  Entstehungsgeschichte ##

Die Domain kirmaier.net habe ich schon seit ca. 20 Jahren.
Die vorherige Version dieser Website habe ich noch komplett in Flash erstellt, im Rahmen meines Studiums.
Da Flash schon seit etlichen Jahren nicht mehr "state-of-the-art" ist, habe ich die Seite auch vom Netz genommen und die Domain ungenutzt vor sich hinvegetieren lassen, aber immer die feste Absicht gehabt meine Website zu relaunchen. Wie es immer so ist, kommt immer irgendwas anderes dazwischen und das "Projekt" wurde von mir runterpriorisiert.

Erste Scribbles zum aktuellen Layout (auf Papier) sind am 28.2.2014 entstanden. Das weiß ich deshalb so genau weil sie seitdem (datiert) unter meiner Schreibtischunterlage liegen.

Sketchfiles (sogar farbig und digital) gibt es seit Januar 2017. Das soll aber nicht den Eindruck erwecken dass ich jahrelang am Design gefeilt habe.

Angefangen wirklich kontinuierlich an der Umsetzung zu arbeiten, habe ich im August 2020, teils aus Langeweile während der coronabedingten Kurzarbeit (ich kann nur bis zu einem gewissen Grad, Zeit mit Netflix totschlagen), aber auch weil meine Kollegin Melanie ihre Website <a href="https://www.viridis.de" target="_blank" rel="noopener noreferer">Viridis</a> neu erstellt hat.

Da ich schon länger mal neue Tools ausprobieren wollte und mich ohne Budgetzwang, Deadline (ha ha) oder fremden Vorstellungen websitemäßig austoben wollte, hab ich das Projekt "Wiederbelebung kirmaier.net" wieder in Angriff genommen.

Wenn Du diesen Text jetzt liest ist es mir anscheinend auch gelungen.

## Warum eine Website ? ##

Ich halte, mehr oder weniger, regelmäßig Vorträge bei Meetups und Barcamps, und im Anschluss fragt immer irgendwer nach den Slides. Den Slideshare Link über Twitter oder Mail rumzuschicken, finde ich da nur so semi-gut weil ein Tweet sehr flüchtig und die Links recht kryptisch sind, hinzu kommt dass ich ungern meinen eigenen Content auf irgendwelche fremde Plattformen hochlade. Aus dem gleichen Grund blogge ich zum Beispiel nicht auf Medium.

A propos bloggen: Ich habe für mich festgestellt, dass wenn ich einen Vortrag über ein Thema halte, ich mich viel intensiver damit beschäftige als sonst, und es umfassender verinnerliche. Leider brauche ich bei der Vorbereitung eines Talks, fast genau so lange für die Erstellung der Slides wie für die Recherche, was aber nur an mir und meinen Ansprüchen liegt. Außerdem würde ich auch gerne mal abstrusere Themen präsentieren, die vom Umfang her zu lang für Twitter oder zu spezifisch für einen Vortrag sind. Es könnte also ganz eventuell vielleicht möglicherweise sein, dass ich demnächst hier auch Blogpostings veröffentliche.

## Technik ##

Die Website habe ich komplett mit <a href="https://www.11ty.dev" target="_blank" rel="noopener noreferer"> Eleventy</a> erstellt. Im Job haben wir in den vergangenen Jahren schon mit mehreren Static-Site-Generatoren (um HTML-Dummys zu erstellen) gearbeitet,aber bisher bin ich mit keinem wirklich warm geworden. Eleventy hingegen ist einfach, schnell und leicht konfigurierbar. Außerdem hängt nicht noch ein ganzer Rattenschwanz an Toolchain dran, sondern man kann diese selbst auswählen. In meiner engeren Auswahl wären auch Hugo und Gatsby gewesen, aber mich in go reinzufuchsen oder hier React zu verwenden erschien mir leicht übertrieben.

Für die CSS Generierung benutze ich wie sonst auch libsass und PostCSS, da es sich allerdings um eine statische Website handelt, habe ich erstmals PurgeCSS im Einsatz um auf der jeweiligen Seite nicht-verwendetes CSS zu entfernen. Es wird kein CSS Framework wie Bootstrap, Foundation oder TailwindCSS verwendet, da meiner Erfahrung nach mich diese zu sehr einschränken und ich mehr Zeit damit verbringe das Framework anzupassen als CSS zu erstellen. Die einzige Ausnahme ist der Bootstrap CSS Reboot den ich stark ausgedünnt eingebunden habe.

Javascript kommt (frontendseitig) nur sehr sparsam zum Einsatz, überwiegend ES6 also auch hier wieder kein Framework wie Vue,Angular oder React. Eleventy basiert auf NodeJS um die Seiten zu erzeugen, für den Serviceworker verwende ich Workbox.

Gehostet wird die Website bei <a href="https://www.mittwald.de" target="_blank" rel="noopener noreferer">Mittwald</a>.

### Warum eine statische Website ? ###

Wie schon gesagt wollte ich Eleventy ausprobieren, aber es gibt auch noch andere Gründe warum ich mich für eine statische Website entschieden habe:

<ol class="decimal">
<li>Performance<br />
Wer mich kennt weiß wie wichtig mir die Performance einer Website ist, und nicht warten zu müssen bis irgend ein Backend mit einer Datenbank das HTML zusammenstöpselt ist natürlich ein Geschwindigkeitsvorteil. Das soll aber nicht heißen dass man keine schnellen dynamischen Websites bauen kann (ich mach das schließlich beruflich jeden Tag).</li>


<li>Wartung<br />
Je weniger bewegliche Teile eine Website hat um so weniger kann schief gehen und desto weniger muss gestestet, geupdated und abgesichert werden.</li>

<li>Pragmatismus<br />
Ich bin froh wenn das Frontend so funktioniert und aussieht wie es soll, ohne mir Gedanken über die Anbindung an ein CMS machen zu müssen, was ich zwar könnte aber ein unnötiger Mehraufwand wäre.  Da ich mühelos die Seiten aus Markdown erstellen und deployen kann brauche ich auch kein TYPO3 oder Wordpress um mich dabei zu unterstützen.</li>

## Design ##

Das Design wollte ich zwar minimalistisch, aber ohne in die typische ausgelutschte Bootstrap-Material-Design-Theme-Forrest-Optik, zu verfallen. Meine Idee war ein "Retro-Grunge"-Look, was mir aber leider nur ansatzweise gelungen ist. Das Ergebnis gefällt mir zwar sehr gut, ist aber weit davon entfernt wie ich es mir anfangs vorgestellt habe.

### Schrift ###

Die Schrift im Header heißt <a href="https://www.myfonts.com/fonts/sentinel/big-noodle-titling" target="_blank" rel="noopener noreferer">"Big Noodle Titling"</a> und wurde von James Arboghast erstellt und von Sentinel Type veröffentlicht.

Überschriften und Fließtext verwenden den Variable Font <a href="https://fonts.google.com/specimen/Manrope" target="_blank" rel="noopener noreferer">"Manrope"</a>, von Mikhail Sharanda.

### Icons ###

Die Icons stammen aus verschiedenen Iconsets, die ich bei <a href="https://icomoon.io/" target="_blank" rel="noopener noreferer">Icomoon</a> gefunden habe.


## Danke ##

Allen Entwickler die in ihrer Freizeit unentgeltlich an Open Source Projekten arbeiten um das Internet zu verbessern

Melanie, die mir den nötigen Arschritt gegeben hat, endlich mal meine Website fertigzustellen.

Stäffi, die mir immer bei textlichen oder konzeptionellen Problemen weiterhilft.

und ganz besonderen Dank an:

Isabel, die mich die ganze Zeit über erträgt auch wenn ich nicht an Websites bastle, sich meine ratlosen, verzweifelten oder wütenden Monologe über irgendwelche unwichtigen Javascript Probleme anhört, und mir in allen Lebenslagen mit Geduld, Liebe, Rat und Tat zur Seite steht.

{% endarticlefullwidth %}




