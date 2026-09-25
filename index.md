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
{% include portfolio.html title="portfolio.title" limit=10 %}

<div class="container mtb">
    <div class="row centered">
        <div class="col-lg-4 col-lg-offset-4">
           <h4>{% t home.about_us %}</h4>
            <p>{% t home.more_about_us %}</p>
            <p>{% t home.more_about_us_2 %}</p>
            <a href="{{ '/about/' | prepend: site.baseurl_root }}" class="btn btn-theme">
                {% t buttons.more_information %}
            </a>
        </div>
    </div>
</div>

{% include testimonial.html %}