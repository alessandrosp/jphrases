---
layout: default
name: I am, you are...
summary: >
  In this unit you'll study predicative nominal and predicate adjectives, i.e. phrases where the subject is connected to a noun or an adjective via the verb to be. These are phrases such as [Edward is an Englishman] or [I'm tall].
phrases:
  - text: 私は健司です。
    translation: I'm Kenji.
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
          The particle は (pronounced [wa]) marks the topic of the sentence. In Japanese, two distinct particle are used to mark the topic and the subject of a sentence, respectively は and が. For the time being, you shouldn't be concerned over these.
      - kanji: 健司
        kana: けんじ
        romaji: kenji
        meaning: Kenji (noun)
        note: N/A
      - kanji: です
        kana: です
        romaji: desu
        meaning: to be
        note: N/A
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
        <div class="row">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
        <a href="#" class="btn btn-primary btn-lg" style="margin-top: 15px;">Show</a>
      </div>
    </div>
  </div>
</div>
{% endfor %}
