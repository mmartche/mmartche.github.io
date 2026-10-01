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
            # About Martche House

            ## Technology built around real business needs

            Martche House is a digital solutions studio focused on helping businesses build, improve and maintain their digital products and online presence.

            We work across web development, e-commerce, custom software, AI and automation, cloud infrastructure, security, SEO and ongoing technical support.

            Our approach is simple: understand the problem first, then build the right solution.

            ## More than just development

            A digital project is rarely only about writing code.

            It also involves understanding business goals, users, processes, integrations, infrastructure, security and long-term maintenance.

            That is why we look at the full picture — from the first idea to deployment and ongoing support.

            ## How we work

            We believe good technology should be:

            - Useful
            - Reliable
            - Secure
            - Easy to maintain
            - Adapted to the business
            - Ready to evolve

            We avoid unnecessary complexity and focus on solutions that bring practical value.

            ## From idea to production

            We can support different stages of a project:

            **Discovery → Planning → Development → Integration → Testing → Deployment → Maintenance**

            Some clients need a complete project. Others only need support in one specific area.

            We adapt to both.

            ## Technical and product experience

            Our background combines software development with product thinking, which helps us understand both the technical and business sides of a project.

            This includes experience with:

            - Web applications
            - E-commerce
            - APIs and integrations
            - Cloud infrastructure
            - DevOps and deployment
            - Product ownership
            - Software architecture
            - Technical support
            - AI-assisted development
            - Team collaboration and mentoring

            ## A flexible way of working

            Martche House can work directly with businesses or collaborate with other developers, designers and specialists when a project requires additional expertise.

            This allows us to stay flexible while building the right team for each project.

            ## Long-term partnerships

            We are not only interested in launching projects.

            We can also continue supporting them through:

            - Maintenance
            - Hosting
            - Monitoring
            - Security updates
            - New features
            - Performance improvements
            - Technical consulting

            The goal is to build solutions that continue creating value after launch.

            ## Have a project in mind?

            Tell us what you are trying to build, improve or automate.

            **Let’s find the right solution together.**

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