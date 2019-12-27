---
layout: default
name: I am, you are...
summary: >
  In this unit you'll study predicative nominal and predicate adjectives, i.e. phrases where the subject is connected to a noun or an adjective via the verb to be. These are phrases such as [Edward is an Englishman] or [I'm tall].
phrases:
  - text: 私はアンナです。
    translation: I'm Anna.
    notes:
    tokens:
      - kanji: 私
        kana: わたし
        romaji: watashi
        meaning: I
        notes: >
          Equivalent to the first-person singular pronoun [I].  Note that in Japanese the subject is often omitted when it's clear from the contenxt. So the phrase [Anna desu] would have been equally correct.
      - kanji: は
        kana: は
        romaji: wa
        meaning: N/A
        notes: >
          The particle は (pronounced [wa]) marks the topic of the sentence. In Japanese, two distinct particles are used to mark the topic and the subject of a sentence, respectively は and が. For the time being, you shouldn't be concerned over these.
      - kanji: アンナ
        kana: アンナ
        romaji: anna
        meaning: Anna (name)
        notes: >
          Non-Japanese names are normally written in katanata. Note that Japanese names, instead, can be written in multiple ways using kanji; for example, [健司], [健治] and [健二] are all different writings for Kenji.
      - kanji: です
        kana: です
        romaji: desu
        meaning: to be
        notes: >
          Verbs don't really conjugate in Japanese, so です could be [am] as well as [are] or [is]. Also, because Japanese doesn't differentiate between present and future, it could also be [will]. As per usual, context can help us decide among all these alternatives.
  - text: アンナさんは学生です。
    translation: Anna is a student.
    notes:
    tokens:
      - kanji: アンナさん
        kana: アンナさん
        romaji: anna-san
        meaning: Anna (name)
        notes: >
          Note how when we talk about someone else we always postpone a honorific to that person's name (here it's さん).
      - kanji: は
        kana: は
        romaji: wa
        meaning: N/A
        notes: >
          The particle は (pronounced [wa]) marks the topic/subject of the sentence.
      - kanji: 学生
        kana: がくせい
        romaji: gakusē
        meaning: student
        notes: >
          Note that [-ei] is read [-ee] in Japanese and that [ku] is read [k]. You can find [学生] written as [gakusei] in romaji, but don't be mistaken: it should be pronounced [gaksee].
      - kanji: です
        kana: です
        romaji: desu
        meaning: to be
        notes: >
          It's fairly common is Japanese to refer to the person you're talking to using the name (instead of the pronoun [you]). So without additional context we can't know whether the sentence here should be translated as [Anna is a student] or [you are a student].
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
{% if {{ forloop.index }} == 1 %}
  <div class="row phrase-active">
{% else %}
  <div class="row phrase-inactive">
{% endif %} 
  <div class="col-12">
    <div class="card text-center">
      <div class="card-body">
        <div class="row">
          <div class="col-12">
            <a
               href="#"
               onclick="utils.showExplanation();"
               class="btn btn-dark btn-lg btn-block explain"
               style="margin-top: 15px; margin-bottom: 15px;">
                Show the r(e)sults.
            </a>
          </div>
        </div>
        <div class="row showable answer-buttons" style="margin-top: 15px; margin-bottom: 15px;">
          <div class="btn-group btn-group-lg btn-block">
            <button onclick="" type="button" class="btn btn-danger btn-block answer-button">I was (w)rong!</button>
            <button onclick="" type="button" class="btn btn-success btn-block answer-button">I was (r)ight!</button>
          </div>
        </div>
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
      </div>
    </div>
  </div>
</div>
{% endfor %}
