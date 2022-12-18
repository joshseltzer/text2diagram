fs = require("fs");
const { Configuration, OpenAIApi } = require("openai");
const mermaid = require("headless-mermaid");
const { program } = require("commander");
program
  .argument("<string>", "string to create diagram from")
  .requiredOption("-k, --key <string>", "OpenAI API Key")
  .requiredOption("-o, --output <string>", "Output File Name", "output.svg")
  .option("-v, --verbose", "Verbose")
  .action(async (str, options) => {
    const { output, key, verbose } = options;
    const configuration = new Configuration({
      apiKey: key,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `This is a diagram implemented in [Mermaid JS](https://github.com/mermaid-js/mermaid) which illustrates the decision-making process involved in buying gifts during Christmas.\n\ngraph TD\nA[Christmas] -->|Get money| B(Go shopping)\nB --> C{Let me think}\nC -->|One| D[Laptop]\nC -->|Two| E[iPhone]\nC -->|Three| F[fa:fa-car Car]\n  \nNow here's an example of a diagram for ${str}:\n\ngraph TD\n`,
      temperature: 0.1,
      max_tokens: 250,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const generated_code = `graph TD\n${response["data"]["choices"][0]["text"]}`;
    if (verbose) console.log({ generated_code });

    const config = {
      theme: "forest",
      sequence: {
        showSequenceNumbers: true,
      },
      themeCSS: ".label foreignObject { font-size: 14px; }",
    };

    // Use catch/rejection for error handling
    mermaid.execute(generated_code, config).then((svg) => {
      fs.writeFileSync(output, svg);
    });
  });

program.parse();
