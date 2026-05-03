---
title: 'dNE auf VNB-Ebene: Warum die Debatte ein Backend-Test fuer Stadtwerke ist'
date: '2026-05-03'
slug: dne-vnb-implementierungsluecke
draft: false
subtitle: Warum dynamische Netzentgelte auf VNB-Ebene weniger an der Tariflogik als
  an Netzplanung und IT-Backends haengen.
tag: Regulierung
tags:
- Regulierung
read_time: 6 Min.
linkedin_post: 2026-05-03_dne-vnb-implementierungsluecke
analyses:
- 2026-05-03_vnb-dne-readiness-precheck
- 2026-05-03_vnb-dne-readiness-plausibilisierung
hypothesis: 2026-05-03_dne-vnb-implementierungsluecke
---

## Ausloeser

Aurora schrieb Ende April 2026, eine Umsetzung dynamischer Netzentgelte auf der Ebene der Verteilnetzbetreiber sei wegen Zahl der Akteure, Datenpunkte und Schnittstellen praktisch kaum vorstellbar. Gleichzeitig zeigt das AGNES-Handout der Bundesnetzagentur, dass die Debatte nicht im Seminarraum bleibt, sondern in Richtung konkreter Reformpfad ab 2029 laeuft. Das ist der Punkt, an dem die Frage kippt: nicht mehr ob dNE theoretisch effizient sein koennte, sondern ob die VNB-Schicht sie operativ ueberhaupt fahren kann.

## Ausgangspunkt

Die oeffentliche Debatte ueber dynamische Netzentgelte wird meistens wie eine Preisdebatte gefuehrt. Wer gewinnt regional, wer verliert, was passiert mit Redispatch, wie stark werden Standorteffekte. Die VNB-Perspektive sitzt davor. Wenn die Betreiber regionaler Netze Forecasting, Zeitreihenlogik, Marktkommunikation und abrechenbare Kundenschnittstellen nicht stabil zusammenbekommen, hilft die beste Tarifarchitektur wenig.

Der erste dNE-Readiness-Score fuer 817 VNB war deshalb kein Ranking aus Neugier, sondern ein Vorabtest auf Umsetzbarkeit. Das Ergebnis ist unangenehm klar: Der Median liegt bei 44,7 Punkten, nur 31 VNB kommen ueber 70, und der groesste Abstand sitzt bei Planung, nicht bei Ausfuehrung.

## Wie die Hypothese entstanden ist

Die Ausgangsintuition war simpel. Kleine und mittlere Stadtwerke-VNB duerften bei dNE schwacher aufgestellt sein als grosse Verbundakteure. Das lag nahe: weniger Skalenvorteile, weniger IT-Personal, weniger Budget fuer Forecasting und Leitsysteme.

Dann kamen die Gegenhypothesen. Erstens: Kleine VNB koennen Shared Services, Dienstleister oder Plattformen einkaufen. Zweitens: Gerade grosse VNB koennten an Legacy-Systemen haengen. Drittens: Die sichtbarsten Kundenschnittstellen, also Portale, Smart-Meter-Seiten und Netzanschluss-Frontends, koennten den Reifegrad ueberschaetzen.

Genau deshalb lohnte sich die Analyse. Wenn der Score nur Groesse reproduziert, ist er analytisch schwach. Wenn kleine Betreiber weit oben und grosse weit unten auftauchen, muss genauer hingeschaut werden.

## Datenbasis

Die Auswertung basiert auf fuenf lokalen VNB-Tabellen aus dem BNetzA-/Q-Reg-Umfeld:

- `main.vnb_digitalisierung` mit 815 VNB
- `main.vnb_umsetzungsquote` mit 817 VNB
- `main.vnb_anschlussdauer` mit 817 VNB
- `main.vnb_netzstruktur` mit 817 VNB
- `main.vnb_stammdaten` mit 701 VNB

Der gebaute View `main.v_vnb_dne_readiness` trennt drei Dinge:

1. `readiness_score` als Faehigkeits-Proxymass
2. `confidence_score` als Datenabdeckung
3. `groessenklasse` als Segment, nicht als Score-Komponente

## Vorgehen

Der Score besteht aus drei Schichten. `Digital` geht mit 45 Prozent ein, `Planung` mit 35 Prozent, `Execution` mit 20 Prozent. Wichtig war dabei eine saubere Trennung: Groesse sollte nicht direkt den Score hochtreiben, und fehlende Daten sollten nicht stillschweigend wie Null-Kompetenz behandelt werden.

Die Planungsseite misst deshalb nicht irgendein allgemeines Digitalisierungsgefuehl, sondern konkrete Dinge: GIS-basierte Netzplaene, Netzberechnungsmodell, automatisierte Netzplanung, Prognose der Netzauslastung und zeitreihenbasierte Planung. Auf der Execution-Seite laufen Umsetzungsquoten und Anschlussdauern hinein. Danach kam der entscheidende zweite Schritt: die Plausibilisierung der Ausreisser mit oeffentlichen Unternehmenssignalen.

## Ergebnisse

![Verteilung der Readiness-Scores ueber 817 VNB](vnb_dne_readiness_buckets.png)

Der erste Hauptbefund ist sektorweit: dNE-Readiness ist vor allem ein Planungsproblem. In der Low-Readiness-Gruppe liegt der Execution-Score im Mittel noch bei 59,3, der Planning-Score aber nur bei 36,1. Bei den sektorweiten Einzelbausteinen fallen `automatisierte Netzplanung` mit 13,6 Prozent und `zeitreihenbasierte Planung` mit 17,6 Prozent besonders ab.

![Sektorweite Adoption einzelner Planungs- und Digital-Features](vnb_dne_feature_gaps.png)

Der zweite Hauptbefund ist gegen die einfache Groessengeschichte gerichtet. Der Zusammenhang zwischen `readiness_score` und `ns_points` ist schwach, auf Log-Skala nur moderat (`0,34`). Viel enger am Gesamtbild liegen `planning_score` (`0,93`) und `digital_score` (`0,92`). Anders gesagt: Groesse hilft, aber sie erklaert die Unterschiede nicht gut genug.

![Groesse (NS-Anschlusspunkte, Log-Skala) vs. Readiness-Score](vnb_dne_size_vs_readiness.png)

Dafuer sprechen die drei robustesten Beispiel-Faelle.

### Fall 1: Schleswig-Holstein Netz als Benchmark oben

Schleswig-Holstein Netz kommt auf `81,8` Punkte. Das passt zum oeffentlichen Bild: Einspeisemanagement mit Online-Tabelle, Hausanschlussportal, Onlineportale fuer Installateure, hohe Einspeisekomplexitaet, mehrere Netzebenen. Das ist kein Ueberraschungsfall, sondern der Erwartungsanker dafuer, wie ein dNE-naher Betreiber aussehen sollte.

### Fall 2: Bad Rodach als kleiner Plattformfall

Stadtwerke Bad Rodach kommen mit nur `2.316` NS-Anschlusspunkten auf `81,5` Punkte. Oeffentlich sichtbar sind ein dynamischer Tarif seit dem `1. Januar 2025`, `iMSys` als Voraussetzung, ein `§14a`-Preisblatt mit `Modul 3` und eine Wilken-nahe EDIFACT-Marktkommunikation. Das ist wichtig, weil es die Story dreht: Kleinheit allein ist kein Hindernis, solange der Backend-Stack steht oder mitgekauft wird.

### Fall 3: Regensburg Netz als grosser Transformationsfall

Regensburg Netz liegt trotz `55.436` NS-Anschlusspunkten bei `31,6` Punkten. Oeffentlich meldete das Unternehmen am `30. April 2025` eine grosse Umstellung der internen Softwarelandschaft. Beim Einbau intelligenter Messsysteme war Anfang 2025 von einer stabilen Wiederaufnahme erst ab `Juli 2025` die Rede. Genau das ist der Typ Fall, den der Score finden soll: gross, professionell, sichtbar digital. Und intern trotzdem nicht weit genug.

Diese drei Faelle reichen fuer die Kernaussage bereits aus. Kleine Betreiber koennen mit Plattformen weit vorne liegen. Grosse Betreiber koennen in IT-Umbauten haengen. Die Trennlinie verlaeuft damit eher zwischen tief integrierter Planungs- und Prozessschicht einerseits und kundenseitigem Frontend andererseits.

## Was das fuer die Hypothese bedeutet

Die Hypothese ist im Kern bestaetigt, aber sie muss praeziser formuliert werden.

Die erste Version hiess sinngemaess: Kleine und mittlere VNB werden dNE bis 2030 oft nicht schaffen. Die bessere Version lautet: Ein grosser Teil der VNB wird dNE ohne tiefere Planungs-, Daten- und Prozessreife nicht schaffen, und diese Reife ist nur teilweise eine Groessenfrage.

Das ist ein wichtiger Unterschied. Er macht aus einer einfachen Stadtwerke-Asymmetrie eine Backend- und Plattform-Asymmetrie. Genau deshalb ist Bad Rodach kein Gegenbeweis, sondern ein Schluesselfall. Wenn kleine VNB ueber Shared Services nach oben kommen, dann muss Regulierung auf diese Ebene zielen. Nicht auf moralische Appelle an "mehr Digitalisierung".

## Grenzen und offene Punkte

Der Score bleibt ein Proxy-Modell. Er misst sichtbare Reife in bereits erhobenen VNB-Daten, keinen offiziellen BNetzA-Indikator. Die Gewichtung ist analytisch begruendet, aber gesetzt. Andere Gewichte waeren vertretbar.

Der zweite grosse Vorbehalt ist der Zeitversatz. Die Rohdaten stammen primaer aus 2024. Mehrere Websignale der Plausibilisierung stammen aus 2025 oder 2026. Bruehl ist dafuer das beste Beispiel: Im Datensatz niedrig, auf der Website inzwischen sichtbar im Umbau und in der Digitalisierung der Ortsnetzstationen. Das muss kein Fehler sein, sondern kann eine laufende Aufholphase spiegeln.

Der dritte Vorbehalt ist fehlende Sichtbarkeit von Shared Services. Wenn ein kleiner VNB Forecasting, Marktkommunikation oder Portalebene systematisch ueber Plattformpartner einkauft, taucht das derzeit nur indirekt im Score auf. Genau dort liegt der naechste Ausbau.

## Verformelung der Berechnung

```text
readiness_score = 0,45 * digital_score
                + 0,35 * planning_score
                + 0,20 * execution_score

digital_score =
  Datenmanagement und Analyse
  + Digitale Prozesse und Systeme
  + Smart Grids
  + Kundenmanagement / Webportale

planning_score =
  GIS-Netzplaene
  + Netzberechnungsmodell
  + automatisierte Netzplanung
  + Prognose der Netzauslastung
  + zeitreihenbasierte Planung

execution_score =
  Umsetzungsquote EE-Anschluesse NS
  + Umsetzungsquote Verbrauchseinrichtungen/Speicher NS
  + inverse Anschlussdauern
  + papierlose Prozesse
  + BDEW-Webportal

Fehlende Felder:
  werden aus dem jeweiligen Teilscore herausnormalisiert
  und nicht als Null-Kompetenz behandelt.
```

## Quellen und Verweise

- [2026-05-03_vnb-dne-readiness-precheck](../vnb-dne-readiness-precheck/)
- [2026-05-03_vnb-dne-readiness-plausibilisierung](../vnb-dne-readiness-plausibilisierung/)
- [2026-05-03_dne-vnb-implementierungsluecke](../dne-vnb-implementierungsluecke/)
- [2026-04-30_aurora_dynamische-netzentgelte](../aurora-dynamische-netzentgelte/)
- [2026-04-27_agnes_handout-bnetza-netzentgeltreform](../agnes-handout-bnetza-netzentgeltreform/)
- https://www.sh-netz.com/de.html
- https://www.stw-bad-rodach.de/strom/stromtarife-bad-rodach/
- https://www.stw-bad-rodach.de/wp-content/uploads/2025/07/Netznutzungsvertrag-Anlagen.pdf
- https://www.regensburg-netz.de/kundeninfo-umstellung-it-systeme
- https://www.regensburg-netz.de/kundeninfo-ims
- Chart-Skript: `/home/msr/projects/maxbrain-analyses/src/viz/vnb_dne_readiness_charts.py`
- Build-Skript: `/home/msr/projects/maxbrain-analyses/scripts/build_vnb_dne_readiness.py`
