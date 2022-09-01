@-
@-
@approveAnime
@DBbootstrap=getTitle
@runTimes=6

Feature: Check users taste on anime

  Scenario: Rating compare
    Given users title id is @id
    And users title name is @name
    And users title rating is @rating
    When get imdb title id
    And get imdb rating for title id
    Then compare users title rating with imdb title rating
  
  Scenario: Finish automation
    When set meta flags in db