---
name: I'm...
summary: >
  Just a test.
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
{% for phrase in page.phrases %}
<div class="card" style="width: 18rem;">
  <div class="card-body">
    {% assign writings = "kanji, kana, romaji" | split: ", " %}
    {% for writing in writings %}
      <div class="row">
        <div class="col-12">
          {% for token in phrase.tokens %}
            {{ token.[writing] }}
          {% endfor %}
        </div>
      </div>
    {% endfor %}
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
{% endfor %}
