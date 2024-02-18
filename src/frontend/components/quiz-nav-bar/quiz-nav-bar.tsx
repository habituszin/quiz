import { Component, JSX, h } from "@stencil/core";

@Component({
  tag: 'quiz-nav-bar',
  styleUrl: 'quiz-nav-bar.css',
  shadow: true,
})
export class QuizNavBar {
  render(): JSX.Element {
    return <h2>Hello world!!!</h2>
  }
}