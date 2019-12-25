---
layout: default
name: I am, you are...
summary: >
  In this unit you'll study predicative nominal and predicate adjectives, i.e. phrases where the subject is connected to a noun or an adjective via the verb to be. These are phrases such as [Edward is an Englishman] or [I'm tall].
phrases:
  - text: 私は健司です。
    translation: I'm Kenji.
    notes:
    tokens:
      - kanji: 私
        kana: わたし
        romaji: watashi
        meaning: I
        notes: >
          Equivalent to the first-person singular pronoun [I].  Note that in Japanese the subject is often omitted when it's clear from the contenxt. So the phrase [Kenji desu] would have been equally correct.
      - kanji: は
        kana: は
        romaji: wa
        meaning: N/A
        notes: >
          The particle は (pronounced [wa]) marks the topic of the sentence. In Japanese, two distinct particle are used to mark the topic and the subject of a sentence, respectively は and が. For the time being, you shouldn't be concerned over these.
      - kanji: 健司
        kana: けんじ
        romaji: kenji
        meaning: Kenji (name)
        notes: >
          Kenji is a popular Japanese name. Note that names in Japanese can be written in multiple ways; for example, [健司], [健治] and [健二] are all different writings for [Kenji](https://en.wikipedia.org/wiki/Kenji_(given_name)).
      - kanji: です
        kana: です
        romaji: desu
        meaning: to be
        notes: Verbs don't really conjugate in Japanese, so です here could be [am] as well as [are] or [is]. Also, because Japanese doesn't differentiate between present and future, it could also be [will]. As per usual, the context can help us decide among all these alternatives.
---
<div class="row">
  <div class="col-12">
    <h1 class="display-3">JPhrases</h1>
    <p>
      <a href="{{ site.url }}">← Back</a>
    </p>
  </div>
</div>
{% for phrase in page.phrases %}
<div class="row">
  <div class="col-12">
    <div class="card text-center">
      <div class="card-body">
        <div class="alert alert-secondary text-center" role="alert">
          {{ phrase.text }}
        </div>
        <div class="alert alert-primary text-center showable" role="alert">
          {{ phrase.translation }}
        </div>
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
        <hr>
        <div class="row">
          <table class="table explanation showable">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Text</th>
                <th scope="col">Meaning</th>
                <th scope="col">Notes</th>
              </tr>
            </thead>
            <tbody>
              {% for token in phrase.tokens %}
              <tr>
                <td>{{ token.kanji }}</td>
                <td>{{ token.meaning }}</td>
                <td>{{ token.notes }}</td>
              </tr>
              {% endfor %}
            </tbody>
          </table>
        </div>
        <a href="#" onclick="utils.showExplanation();" class="btn btn-primary btn-lg" style="margin-top: 15px;">Show</a>
      </div>
    </div>
  </div>
</div>
{% endfor %}
