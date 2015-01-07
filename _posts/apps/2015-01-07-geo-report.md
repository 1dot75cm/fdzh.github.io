---
# App Options
layout: fusion
title: Geo Report
description: KML Map, Grid and Chart Dashboard Displaying Data from Google Fusion Tables
author: Manav Sehgal
category: app
# Grid Options
select: "SELECT Country, '2000/01' as Y2000, '2001/02' as Y2001, '2002/03' as Y2002, '2003/04' as Y2003, '2004/05' as Y2004, '2005/06' as Y2005, '2006/07' as Y2006, '2007/08' as Y2007, '2008/09' as Y2008"
from: "12Ky51FcTdAPYsnP42k3N4AtEB8EcxxfLMJ5rAnU"
where: "Country"
# Chart Options
chart: bar
compare: "Coffee Production"
chart_height: 1200
# KML Options
kml_source: "http://www.hpc.ncep.noaa.gov/kml/fop/fopbody.kml"
---
This is a coffee production sample app created using Fusion Tables. 
Filter on part or full country name, or common text in multiple countries to update custom dashboard chart.

This app example adds embed iframe from Fusion Tables for visualizing the map representing the data.
Only change required is width/height values to match page theme. 
Suggested 100% width for responsive view. Height to adjust to map data.

{% include kml-viewer.html %}
{% include fusion-filter-grid.html %}
