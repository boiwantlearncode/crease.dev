---
sidebar_position: 2
---

# Basic Usage

We will implement a simple <strong><em>true or false</em></strong> `Quiz` component.

Import the `Quiz` component into your file.

```tsx title="App.tsx"
import { Quiz } from '@crease/react';
import type { Content, NonEmptyArray } from '@crease/react';

const content: NonEmptyArray<Content> = [
  {
    question: "Is 1+1=2?",
    options: [
      "True",
      "False"
    ],
    correctAnswerIndex: 0 // Index of the correct answer within the options array.
  },    
  {
    question: "Are there more atoms in the universe than pigeons?",
    options: [
      "True",
      "False"
    ],
    correctAnswerIndex: 0 // Index of the correct answer within the options array.
  }
]

function App() {
  return (
    <Quiz
        theme='dark' 
        shuffle={true} // Order of questions displayed will be random
        format='single-answer' // Only one option is correct
        content={content}
    />
  )
}
```