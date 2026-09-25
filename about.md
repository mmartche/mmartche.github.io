---
layout: about
title: Sobre Nós
ref: about_us
permalink: /about/
translations:
  pt: /about/
  en: /about/
description: Reúnimos uma equipe de designers, desenvolvedores web e apps, especialistas em SEO, Engenheiros & Seguranças em Servidores para cada projeto, garantindo-lhe obter a melhor mistura de talento e especialistas experientes.
priority: 0.9
---

<div class="container mtb">
    <div class="row">
        <div class="col-lg-6">
            <img class="img-responsive" src="{{ "/assets/img/about.jpg" | prepend: site.baseurl_root }}" alt="">
        </div>
        <div class="col-lg-6">
            {% assign about = site.translations[site.lang].about %}
            {% for paragraph in about.info %}
                <p>
                    {{ paragraph }}
                </p>
            {% endfor %}
            <p><br/><a href="/contact/" class="btn btn-theme">{% t contact.title %}</a></p>
        </div>
    </div>
</div>

{% include members.html %}
{% include testimonial.html %}
{% include clients.html %}