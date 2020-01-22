import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class JokesComponent extends Component {
  jokes = [
    {
      question: "Knock, knock. Who's there? Olive. Olive who?",
      answer: "Olive you so much."
    },
    {
      question: "Knock, knock. Who's there? Ken. Ken who?",
      answer: "Ken you hear me?"
    },
    {
      question: "Knock, knock. Who's there? Duane. Duane who?",
      answer: "Duane the bathtub, please."
    },
    {
      question: "Knock, knock. Who's there? Sue. Sue who?",
      answer: "Sue-prise!"
    },
    {
      question: "Knock, knock. Who's there? Luke. Luke who?",
      answer: "Luke out below!"
    },
    {
      question: "Knock, knock. Who's there? Wayne. Wayne who?",
      answer: "Wayne Wayne go away."
    },
    {
      question: "Knock, knock. Who's there? Les. Les who?",
      answer: "Les get out of here!"
    },
    {
      question: "Why is it hard to play cards in the jungle?",
      answer: "Because there are so many cheetahs!"
    },
    {
      question: "What do you do when you love someone?",
      answer: 'You say "I\'ll do olive my Emily Jokes with you!"'
    }
  ];

  @tracked currentJokeNumber = this.randomJokeNumber;

  @tracked answerShown = false;

  @action
  showAnswer() {
    this.answerShown = true;
  }

  get randomJokeNumber() {
    return Math.floor(Math.random() * this.jokes.length);
  }

  get currentJoke() {
    return this.jokes[this.currentJokeNumber];
  }

  @action
  nextJoke() {
    this.answerShown = false;
    this.currentJokeNumber = this.randomJokeNumber;
  }
}
