---
layout: default
name: I am, you are...
summary: >
  In this unit you'll study predicative nominal and predicate adjectives, i.e. phrases where the subject is connected to a noun or an adjective via the verb to be. These are phrases such as [Edward is an Englishman] or [I'm tall].
phrases:
  - meaning: I'm Kenji.
    note:
    tokens:
      - kanji: 私
        kana: わたし
        romaji: watashi
        meaning: I
        note: >
          Equivalent to the first-person singular pronoun [I].  Note that in Japanese the subject is often omitted when it's clear from the contenxt. So the phrase [Kenji desu] would have been equally correct.
      - kanji: は
        kana: は
        romaji: wa
        meaning: N/A
        note: >
          The particle は (pronounced [wa]) marks the topic of the sentence. In Japanese, two distinct particle are used to mark the topic and the subject of a sentence, respectively は and が. For the time being, you shouldn't be concerned over these differences as you can simply think of the word(s) preceding は as the subject of the phrase.
---
<div class="row">
  <div class="col-12">
    <h1 class="display-3">JPhrases</h1>
    <p>
      <a href="#">Back</a>
    </p>
  </div>
</div><br>
{% for phrase in page.phrases %}
<div class="row">
  <div class="col-12">
    <div class="card">
      <div class="card-body">
        <div class="row">
          {% for token in phrase.tokens %}
          <div class="col token">
              {% assign writings = "kanji, kana, romaji" | split: ", " %}
              {% for writing in writings %}
                <div class="row">
                  <p class="text-center" style="width: 100%;">{{ token.[writing] }}</p>
                </div>
              {% endfor %}
            </div>
          {% endfor %}
        </div>
        <a href="#" class="card-link">Show</a>
      </div>
    </div>
  </div>
</div>
{% endfor %}
