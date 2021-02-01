---
layout: page
title: Playlist
permalink: /playlist/
---

<style>
    .grid {
        display: flex;
    }
    .col-1-2 {
        flex: 1;
    }
    .cole-1-2:last-child {
        margin-left: 20px;
    }
</style>

<p>Here is a playlist of my favorite songs, as well as a list of the ones that have pages so far. Maybe you have spotify, maybe you don't, but this is the easiest way for me to share the music I'm writing about.</p>
<div class="grid">
    <aside class="col-1-2">
        <iframe src="https://open.spotify.com/embed/playlist/16T6UAZEyPZpPMqmoBlsGy" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </aside>
    <article class="col-1-2">
        <ul>
            {% for post in site.posts %}
            <li>
                <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
            </li>
            {% endfor %}
        </ul>
    </article>
</div>