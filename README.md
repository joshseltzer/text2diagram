# text2diagram

Use the magic of [MermaidJS](https://mermaid-js.github.io/) 🧜‍♀️ and [GPT-3](https://openai.com/api/) 💫 to create SVG diagrams from natural language descriptions!

This version uses a very simple prompt, and the resulting diagrams are usually not that useful; but it's fun to play around with and could help you to jumpstart any diagram that you want to make!

## Installation

Clone to your computer and then run `yarn install` in the repo directory.

## Usage

Run `node text2diagram.js --help` for usage information.

text2diagram will create an SVG file in your local directory.

Note that you will need to use your own OpenAI API key for GPT-3 to work.

## Examples
> an algorithm for deciding whether to run away to Paraguay based on political persecution

![output](https://user-images.githubusercontent.com/59370236/208322587-d2142316-2427-4773-be3d-4821391dafca.svg)

> the human brain

![output](https://user-images.githubusercontent.com/59370236/208322713-4ce2a307-274a-449c-a314-00f90e268fe7.svg)

> an API served using the sls framework, with rate limiting and authentication, where each step has a label with the estimated latency

![output](https://user-images.githubusercontent.com/59370236/208322758-9273ad45-f03b-42b0-83da-622ed3e97d95.svg)

> a chatbot system which first evaluates the user's intent, then updates the dialogue state, decides on an action based on the business logic, and then generates an utterance in the appropriate language to respond to the user

![output](https://user-images.githubusercontent.com/59370236/208322801-b2432711-d444-4968-95aa-07d3541898aa.svg)
