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
<div class="row">
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      {% for token in phrase.tokens %}
      <div class="col">
          {% assign writings = "kanji, kana, romaji" | split: ", " %}
          {% for writing in writings %}
            <div class="row">
              {{ token.[writing] }}
            </div>
          {% endfor %}
        </div>
      {% endfor %}
      <a href="#" class="card-link">Show</a>
    </div>
  </div>
</div>
{% endfor %}
