---
title: 'Felix Kirmaier - Frontend Developer - Lighthouse Tools'
layout: 'layouts/text.html'
eleventyNavigation:
    #key: Lighthouse
    #order: 2
changeFreq: 'weekly'
mainheadline: 'Lighthouse Tools'

---

Google Lighthouse ist ein Tool zur Messung der Performance und Qualität von Websites.
Es führt eine Reihe von verschiedenen Audits durch und vergibt dann in den Kategorien „Performance“, „Accessibility“, „Best Practices“ und „SEO“ eine Bewertung zwischen 0 und 100 Punkten.\
Desweiteren werden verschiedene Kriterien in der Kategorie „PWA“ geprüft und abgehakt.

Um den Score zu verbessern, gibt Lighthouse für jede Kategorie eine Liste an Verbesserungsvorschlägen aus.
Lighthouse listet, wenn ein Audit fehlschlägt, diesen auf und gibt weitere Informationen über den Grund und wie z.B sich die Behebung auf die Performance auswirken würde.\
So kann man Punkt für Punkt die Mängelliste abarbeiten und den Score verbessern.

Bei aller Euphorie über eine gute Lighthouse Bewertung darf man allerdings nicht vergessen, dass es sich nur um die Empfehlungen von Google handelt, und Lighthouse nur ein Anhaltspunkt oder Wegweiser zu einer besseren Website ist. Man kann (wenn man es darauf anlegt) auch eine extrem langsam Website bauen die trotzdem eine perfekte Lighthouse Bewertung hat, oder anders gesagt nur weil die getestete Website einen Score von 100 für SEO und Accessibility hat, heißt das nicht, dass man sich entspannt zurücklehnen kann, da man ja jetzt eine barrierefreie Website mit perfektem SEO hat.

Seit 2020 fließen in Lighthouse die sogenannten „Core Web Vitals“ sehr stark in die Performance Bewertung ein, und sollen ab Mai 2021 auch das Ranking in den Suchergebnissen beeinflussen.\
Das allein sollte Grund genug sein, sich mit Lighthouse auseinanderzusetzen und die betreuten Websites mit Lighthouse zu prüfen.

Hierfür gibt es mehrere Wege bzw Tools, die unterschiedliche Features bieten, die ich im folgenden kurz vorstellen möchte.

## PageSpeed Insights
https://developers.google.com/speed/pagespeed/
Performance Messungen auf der PageSpeed Insights Website von Google ist irgendwie der Klassiker, da es ein einfacher, schneller und kostenloser Weg ist einen Lighthousetest durchzuführen. Während früher dort vor allem der SpeedIndex gemessen werden konnte, wird dort inzwischen der Schwerpunkt vor allem auf die Core Web Vitals gelegt.\
Es wird neben einem Test für ein simuliertes Smartphone, auch ein Test für einen Desktoprechner durchgeführt.\
Besonders schön ist, dass man neben diesen simulierten Werten, auch Felddaten echter Seitenbesucher aus dem „Chrome User Experience Report (CrUX)“ erhält,falls diese vorliegen.

## web.dev Measure
https://web.dev/measure/
web.dev ist eine weitere Google Website, auf der man Lighthouse Tests durchführen kann. Wenn man sich mit einem Google Account anmeldet, speichert web.dev vergangene Testergebnisse, und man kann so an kleinen Diagrammen ablesen wie sich die einzelnen Metriken über die Zeit entwickelt haben.
Leider muss jeder Test manuell angestoßen werden, will man also eine tägliche Messung haben muss man sich auch jeden Tag auf web.dev einloggen und einen Test anstoßen.

Im Gegensatz zu PageSpeed Insights wird nur die Mobilversion der jeweiligen Website getestet und man bekommt auch nicht die „Real-World“-Daten aus dem CrUX.

## Chrome Dev Tools
Mit Abstand am häufigsten führe ich Lighthouse Audits direkt im den Chrome Dev Tools durch, was mit Sicherheit nicht die zuverlässigste Methode ist um an belastbare Messdaten zu kommen, aber ich benutze es gerne um Websites die mit mir geshared werden unter die Haube zu schauen.
Mein anderer Anwendungsfall ist es nach einer Optimierung zu prüfen ob der jeweilige Audit lokal jetzt „grün“ ist.

Für die Optimierung der Core Web Vitals halte ich Lighthouse in den Dev Tools nur für bedingt geeignet da viele Faktoren hier die Messung beeinflussen, und identische Messbedingungen herzustellen oftmals nicht ganz trivial ist.
Wenn der eigene Rechner nebenbei noch mit Photoshop kämpft, oder Netflix den Großteil der Bandbreite beansprucht wirkt sich das natürlich auf die lokale Messung aus.\
Best Practice ist es daher ein möglichst jungfräuliches Chrome-Benutzerprofil zu benutzen, ohne zig Browserplugins und in einem Inkognitofenster die Messung durchzuführen.\
Wenn man allerdings, wie gesagt, mehr an den Audit-Ergebnissen und Empfehlungen interessiert ist und nicht so sehr an den Werten der Core Web Vitals, kann man sich diesen Aufwand meist sparen.

Und so geht's:
<ol>
<li>1. Chrome Dev Tools öffnen


<pre><kbd>&#x2318;</kbd> + <kbd>&#x2325;</kbd> + <kbd>I</kbd></pre>

</li>
<li>2. In den Tab „Lighthouse“ wechseln</li>
<li>3. Kategorien und Gerät auswählen</li>
<li>4. „Generate report“ anklicken</li>
<li>5. Warten</li>
</ol>
Wichtig ist noch die Seite für die der Test gemacht wird nicht mit einem anderen Fenster zu verdecken oder den Tab zu wechseln, weil ansonsten Lighthouse den Test abbricht

## Lighthouse Node CLI
https://github.com/GoogleChrome/lighthouse
Die größte Flexibilität in der Konfiguration der Lighthouse Tests bietet das Lighthouse Node CLI. Während die anderen Tools höchstens 2 Konfigurationen bieten (Mobile und Desktop), kann man hier wirklich alles fein granular konfigurieren. Einstellungen für exotischere Bildschirmauflösungen (z.B Tablet) oder beliebige Netzwerkgeschwindigkeiten, sind ebensowenig ein Problem wie z.B nur bestimmte Audits durchzuführen.

``` bash
$ npm install -g lighthouse

$ lighthouse <url>
```

## Lighthouse Parade
Alle bisher vorgestellten Tools haben den Nachteil, dass sie einen Lighthousetest für nur eine bestimmte URL durchführen. Möchte man mehrere Unterseiten testen müsste man für jede einen Test machen und dann anschließend die Ergebnisse vergleichen.
Diesen Aufwand verringert Lighthouse Parade, indem es eine komplette Website crawlt, jede verlinkte URL testet und alle gesammelten Testergebnisse in einer CSV-Datei speichert. Diese Datei kann man dann in die bereitgestelle Google Sheet Vorlage importieren, oder im Lieblingstabellenprogramm selbst auswerten.
So kann man sich wirklich einfach und schnell einen Überblick über die Performance einer kompletten Website verschaffen und problematische Unterseiten finden, die noch weiter optimiert werden müssen. Über Parameter kann man zwar die Crawlingtiefe einschränken oder bestimmte URL-Pfade ausschließen, ich würde mir darüber hinaus jedoch noch eine einfache Konfigurationsmöglichkeit der Lighthouse Einstellungen wünschen. Da es allerdings noch ein sehr junges Projekt ist, bin ich optimistisch dass dies noch mit einem kommenden Release implementiert wird.

``` bash
$ npx lighthouse-parade <url>
```

./lighthouse-parade-data/<timestamp>/urls.csv.


## Lighthouse Metrics
Ein weiterer spannender Dienst ist Lighthouse Metrics, der einen Lighthouse Test von  6 verschiedenen Standorten rund um die Welt durchführt. So kann man auf einen Blick sehen wie die eigene Website z.B. an der Westküste der USA (Oregon) im Vergleich zu Nordeuropa (Finnland) performt.
Ich  nutze die kostenlose Variante für manuelle Tests, bei Bezahlung einer monatlichen Gebühr könnte man aber Lighthouse Metrics an das eigene Github repository anbinden und bei jedem Pull Request automatisch einen Test durchführen. 
https://lighthouse-metrics.com/

