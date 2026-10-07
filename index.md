---
layout: default
title: Home
ref: home
permalink: /
translations:
  pt: /
  en: /
priority: 1
---

{% include destaque.html %}
{% include index-services.html title="" limit=10 %}
{% include portfolio.html title="portfolio.title" limit=8 %}

<div class="container mtb">
    <div class="row centered">
        <div class="col-lg-4 col-lg-offset-4">
           <h3>{% t home.about_us %}</h3>
            <p>{% t home.more_about_us %}</p>
            <p>{% t home.more_about_us_2 %}</p>
            <a href="{{ '/about/' | prepend: site.baseurl }}" class="btn btn-theme">
                {% t buttons.more_information %}
            </a>
        </div>
    </div>
</div>

<div class="container mtb">
    <div class="row centered">
        {% tf testimonial.markdown %}
        <a href="{{ '/contact/' | prepend: site.baseurl }}" class="btn btn-theme">
            {% t home.contact_us %}
        </a>
    </div>
</div>