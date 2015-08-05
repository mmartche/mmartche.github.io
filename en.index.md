---
layout: index
title: Home
permalink: /
priority: 1
description: Somos uma empresa focada em consultoria e serviços voltados a Open Source.
---

<div class="container mtb">
    <div class="row centered">
        <div class="col-lg-4 col-lg-offset-4">
            <h4>More More About Us.</h4>
            <p align="justify">{{ site.about }}</p>
            <p><br/><a href="{{ "/about/" | prepend: site.baseurl }}" class="btn btn-theme">More Info</a></p>
        </div>
    </div>
</div>

{% include clients-en.html %}