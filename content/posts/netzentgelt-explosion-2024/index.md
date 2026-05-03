---
title: 'Netzentgelt-Explosion 2024: Was die BNetzA-Daten ueber die regionale Spreizung
  zeigen'
date: '2026-05-01'
slug: netzentgelt-explosion-2024
draft: false
subtitle: Wie der Wegfall des 24b-Bundeszuschusses 2024 die UeNB-Entgelte verdoppelt
  hat und warum die scheinbar sinkende Spreizung keine Entwarnung ist.
tag: Regulierung
tags:
- Regulierung
read_time: 7 Min.
linkedin_post: 2026-05-01_netzentgelt-explosion-2024
analyses:
- 2026-04-30_netzentgelt-explosion-2024
hypothesis: 2026-04-23_netzentgelt-explosion-2024
---

## Ausgangspunkt

2024 stiegen die Uebertragungsnetzentgelte in Deutschland um 117%. Gleichzeitig sank die regionale Spreizung der Verteilnetzentgelte. Das klingt nach einer guten und einer schlechten Nachricht. In Wirklichkeit ist beides dieselbe Geschichte, und sie ist komplizierter als es auf den ersten Blick aussieht.

Dieser Artikel dokumentiert die Analyse hinter dem LinkedIn-Post zur Netzentgelt-Spreizung. Er erklaert, wie die Hypothese entstanden ist, welche Daten sie stuetzen, wo die Grenzen liegen und warum der Rueckgang der Spreizung 2024 keine Entwarnung ist.

## Wie die Hypothese entstanden ist

Die Ausgangsvermutung war einfach: Der Wegfall des Bundeszuschusses nach Paragraph 24b EnWG hat die UeNB-Entgelte 2024 schlagartig verdoppelt, und die regionale Spreizung der VNB-Netzentgelte hat 2023 einen neuen Hoechststand erreicht. Beides steht in den BNetzA-Monitoringberichten, wird aber selten zusammen betrachtet.

Plausibel war das, weil der Bundeszuschuss (12,84 Mrd. EUR fuer 2023, finanziert ueber das Strompreisbremsegesetz) die UeNB-Entgelte kuenstlich niedrig gehalten hatte. Als das Bundesverfassungsgericht im November 2023 den Nachtragshaushalt kippte, fiel die Finanzierungsgrundlage weg. Der fuer das erste Halbjahr 2024 geplante Zuschuss von 5,5 Mrd. EUR wurde gestrichen.

Drei Gegenhypothesen standen im Raum: Erstens, dass die Spreizung schon immer so hoch war und nur die Absolutwerte gestiegen sind. Zweitens, dass der Zuschuss-Wegfall fuer den Buerger ein Nullsummenspiel ist, weil die Kosten vorher ueber Steuern finanziert wurden. Drittens, dass die Spreizung nicht mit dem EE-Ausbau zusammenhaengt, sondern mit der Siedlungsdichte.

Die Frage hat sich analytisch gelohnt, weil die BNetzA die Daten publiziert, aber niemand sie als Zeitreihe aufbereitet. Die Netzentgelt-Debatte wird abstrakt gefuehrt, die konkreten Zahlen kennt kaum jemand.

## Datenbasis

Die Analyse stuetzt sich auf die Tabelle `bnetza.netzentgelte_strom` mit 1.116 Datensaetzen, extrahiert aus den BNetzA-Monitoringberichten der Jahre 2015 bis 2025.

Zwei Datenstrecken:

1. **UeNB-Entgelte 2014-2024**: Der Arbeitspreis fuer Industriekunden (Referenz: 4500 Volllaststunden, Hoechstspannungsebene HoeS) fuer die vier Uebertragungsnetzbetreiber 50Hertz, Amprion, TenneT und TransnetBW. Das ist der Referenzfall, den die BNetzA in den Monitoringberichten ausweist. Fuer Haushaltskunden gelten andere Werte, weil mehrere Netzebenen und Lastprofile in das Gesamtnetzentgelt einfliessen.

2. **VNB-Haushaltsnetzentgelte 2017-2025**: Mengengewichtete Mittelwerte des Arbeitspreises fuer Haushaltskunden je Bundesland. Ohne Grundpreis (der im Bundesdurchschnitt 2024 bei 75 EUR lag, mit Maxima bis 200 EUR) und ohne Messstellenbetrieb. Diese Mittelwerte glaetten die VNB-interne Spreizung erheblich. Laut Verbraucherzentrale Bundesverband liegen die Unterschiede auf Netzbetreiberebene bei bis zu 15 ct/kWh. Der Spreizungsfaktor 1,99 auf Bundesland-Ebene ist damit eher die Untergrenze der realen Spreizung.

Keine Ausschluesse, keine Filter. Alle 16 Bundeslaender, alle vier UeNBs.

## Vorgehen

Die Analyse bestand aus drei Schritten.

**Schritt 1: UeNB-Zeitreihe.** Zuerst habe ich die Entgelte der vier UeNBs als Zeitreihe 2014-2024 aufgetragen. Das Ergebnis war ueberraschend klar: Vor 2023 hatte jeder UeNB eigene Entgelte. TenneT war der Ausreisser nach oben (bis 0,70 ct/kWh in 2018), TransnetBW lag am niedrigsten (0,19 ct/kWh in 2014). Ab 2018 konvergierten alle vier langsam, bis sie 2023 bei exakt 0,54 ct/kWh landeten, dem Wert nach Paragraph 24b. 2024 sprangen alle vier auf 1,17 ct/kWh. Die Konvergenz vor der Vereinheitlichung zeigt, dass die regulatorische Angleichung schon laenger lief. Der Zuschuss hat den Sprung nur kuenstlich verzoegert.

**Schritt 2: Bundesland-Ranking 2023.** Als naechstes habe ich die VNB-Haushaltsnetzentgelte fuer 2023 nach Bundesland sortiert. Bremen lag bei 6,27 ct/kWh, Brandenburg bei 12,45 ct/kWh. Der Spreizungsfaktor Max/Min betrug 1,99. Das Ost-West-Muster ist sichtbar, aber nicht deterministisch: Schleswig-Holstein (12,15 ct/kWh, West) und Hamburg (10,63 ct/kWh, West) liegen ueber dem Bundesdurchschnitt von 9,23 ct/kWh, waehrend Bayern (7,82 ct/kWh, West) und Thueringen (8,33 ct/kWh, Ost) nah beieinander liegen. Die treibende Variable ist nicht Ost vs. West, sondern die Kombination aus EE-Ausbau und Siedlungsdichte.

{{< map src="/maps/netzentgelt-explosion-2024/netzentgelte_choropleth_2020_2024.html" caption="Interaktive Karte: VNB-Mittelwerte je Bundesland mit Slider 2020-2024" >}}

**Schritt 3: Spreizungsfaktor-Zeitreihe und der 2024-Twist.** Dann habe ich den Spreizungsfaktor fuer jedes Jahr 2017-2025 berechnet: das Verhaeltnis des teuersten zum guenstigsten Bundesland. Das Ergebnis war kein monotoner Anstieg, sondern ein Zickzack: 1,60 (2017), 1,89 (2018), 1,68 (2019), 1,73 (2020), 1,85 (2021), 1,67 (2022), 1,99 (2023), 1,59 (2024), 1,78 (2025). Der Rueckgang 2024 auf 1,59 sah nach Entwarnung aus. War er nicht.

Ein Vergleich 2023 vs. 2024 auf Bundesland-Ebene zeigte: Brandenburg blieb bei exakt 12,45 ct/kWh (+0%), Mecklenburg-Vorpommern stieg nur um 3%. Gleichzeitig legten Bayern um 35% zu (7,82 auf 10,56 ct/kWh), Bremen um 32%, NRW um 30%. Die billigen Bundeslaender holten auf, die teuren stagnierten. Das drueckte den Spreizungsfaktor rechnerisch nach unten, obwohl fast alle Bundeslaender absolut teurer wurden. Nivellierung nach oben.

## Ergebnisse

**Befund 1: UeNB-Verdopplung bestaetigt.** 0,54 auf 1,17 ct/kWh (+117%), getrieben durch den Wegfall des Bundeszuschusses nach dem BVerfG-Haushaltsurteil. Die Vereinheitlichung auf einen Wert zeigt, dass alle vier UeNBs regulatorisch gleichgeschaltet sind.

**Befund 2: VNB-Rekordspreizung 2023.** Faktor 1,99 (Bremen 6,27 vs. Brandenburg 12,45 ct/kWh). Der hoechste Wert im Betrachtungszeitraum 2017-2025.

**Befund 3: Nivellierung nach oben 2024.** Die Spreizung sank auf 1,59, aber nur weil die billigen Bundeslaender stark anstiegen (Bayern +35%, Bremen +32%), waehrend die teuren weitgehend stagnierten (Brandenburg +0%). Strukturell keine Entwarnung.

**Befund 4: 2025 mischt die Karten neu.** Brandenburg faellt auf 10,28 ct/kWh, Hamburg schiesst auf 14,17 ct/kWh an die Spitze. Die Spreizung steigt wieder auf 1,78. Das Zickzack-Muster ohne klaren Trend zeigt ein strukturell instabiles System.

**Befund 5: Die Stagnation Brandenburgs ist auffaellig.** Ein exakt gleichbleibender Wert bei einem Bundesland mit dynamischem EE-Ausbau und hoher Netzkostendynamik ist erklaerungsbeduerftig. Ob Regulierungseffekt oder Daten-Artefakt im Monitoringbericht, laesst sich aus den vorliegenden Daten nicht klaeren.

## Was das fuer die Hypothese bedeutet

Die Hypothese ist im Kern bestaetigt, wurde aber durch die Analyse erheblich erweitert.

Die UeNB-Verdopplung durch den Paragraph-24b-Wegfall ist der einfachste Teil: klar, quantifizierbar, kausal nachvollziehbar. Die VNB-Spreizung ist komplexer. Der Rekord 2023 ist bestaetigt, aber die Zeitreihe zeigt, dass die Spreizung nicht monoton waechst, sondern schwankt. Die urspruengliche Intuition war "die Spreizung waechst", der tatsaechliche Befund ist "die Spreizung ist volatil und strukturell instabil".

Der unerwartete Befund der Nivellierung nach oben 2024 war nicht Teil der Ausgangshypothese. Er zeigt, dass sinkende Spreizungsfaktoren nicht automatisch Entwarnung bedeuten, wenn sie durch allgemeine Kostensteigerungen getrieben werden.

## Grenzen und offene Punkte

**Bundesland-Mittelwerte verschleiern die VNB-Spreizung.** Die BNetzA-Daten zeigen mengengewichtete Mittelwerte. Die wahre Spreizung auf Netzbetreiberebene ist dramatisch groesser.

**Grundpreis fehlt.** Die Analyse betrachtet nur den Arbeitspreis (ct/kWh). Der Grundpreis (im Bundesdurchschnitt 75 EUR/Jahr in 2024) belastet Haushalte mit geringem Verbrauch ueberproportional.

**UeNB-Referenzfall ist Industrie, nicht Haushalt.** Die 0,54 und 1,17 ct/kWh gelten fuer Industriekunden auf Hoechstspannungsebene. Fuer Haushaltskunden fliesst der UeNB-Anteil ueber vorgelagerte Netzebenen in das Gesamtnetzentgelt ein und ist nicht direkt vergleichbar.

**BNetzA-Festlegung ab 2025.** Im August 2024 hat die BNetzA entschieden, EE-bedingte Verteilnetzkosten ab 2025 bundesweit zu waelzen. Ab 2026 gilt ein Aufschlag fuer besondere Netznutzung von 1,56 ct/kWh. Das ist die direkte regulatorische Antwort auf die Spreizung. Ob sie wirkt, zeigen die naechsten Monitoringberichte.

**Kausalitaet EE-Ausbau.** Die Korrelation zwischen hoher EE-Leistung und hohen Netzentgelten (Brandenburg, Schleswig-Holstein) ist plausibel, aber in dieser Analyse nicht quantifiziert. Siedlungsdichte ist ein Confounder.

**Paragraph 14a EnWG.** Ab 2024 gelten Netzentgeltrabatte fuer steuerbare Verbrauchseinrichtungen (Waermepumpen, Wallboxen). Das veraendert die Netzentgelt-Landschaft zusaetzlich und ist hier nicht beruecksichtigt.

## Verformelung der Berechnung

```text
Spreizungsfaktor (Jahr t) = max(VNB_Haushalt_mean_BL_t) / min(VNB_Haushalt_mean_BL_t)

wobei:
  VNB_Haushalt_mean_BL_t = mengengewichteter Mittelwert des Arbeitspreises 
                            fuer Haushaltskunden je Bundesland im Jahr t
                            (ct/kWh, ohne Grundpreis, ohne MSB)
  BL = {Bremen, Hamburg, Bayern, ..., Brandenburg} (16 Bundeslaender)
  t = 2017, 2018, ..., 2025

UeNB-Veraenderung 2024 = (1,17 - 0,54) / 0,54 * 100 = +116,7% ≈ +117%

wobei:
  0,54 ct/kWh = vereinheitlichtes UeNB-Entgelt 2023 (alle 4 UeNBs identisch)
  1,17 ct/kWh = UeNB-Entgelt 2024 nach Wegfall Paragraph 24b EnWG
  Referenz: Industriekunde, 4500 Volllaststunden, HoeS

Bundesland-Veraenderung 2023-2024:
  pct_change_BL = (VNB_Haushalt_mean_BL_2024 - VNB_Haushalt_mean_BL_2023) 
                  / VNB_Haushalt_mean_BL_2023 * 100

Beispiel Bayern:  (10,56 - 7,82) / 7,82 * 100 = +35,0%
Beispiel Bremen:  (8,30 - 6,27) / 6,27 * 100 = +32,4%
Beispiel Brandenburg: (12,45 - 12,45) / 12,45 * 100 = +0,0%
```

## Quellen und Verweise

- BNetzA Monitoringbericht 2024 (Daten fuer 2023)
- BNetzA Monitoringbericht 2025 (Daten fuer 2024 und 2025)
- BNetzA Festlegung August 2024 zur Verteilung EE-bedingter Verteilnetzkosten (Paragraph 19 StromNEV)
- Analyse: [2026-04-30_netzentgelt-explosion-2024](../netzentgelt-explosion-2024/)
- Hypothese: [2026-04-23_netzentgelt-explosion-2024](../netzentgelt-explosion-2024/)
- Concept: [nord-sued-gefaelle](../nord-sued-gefaelle/)
- Chart-Skript: `src/viz/netzentgelte_charts.py`
- Marimo-Notebook: `notebooks/netzentgelt_explosion.py`
