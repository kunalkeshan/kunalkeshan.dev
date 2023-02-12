/**
 * Frequently Asked Question Data
 */

export interface Faq {
  question: string;
  answer: string;
}

type Faqs = Faq[];

// FAQ Container
const FAQ: Faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I offer services in web development, design, no-code, video and photo editing.",
  },
  {
    question: "Are you open for collaboration?",
    answer:
      "Yes, I am open to collaborating with other developers, designers, and clients on projects.",
  },
  {
    question: "Do you work on projects on a freelance basis?",
    answer:
      "Yes, I offer my services on a freelance basis and am available to work on projects as a contract developer.",
  },
  {
    question: "Can you work with clients from various industries?",
    answer:
      "Yes, I have experience working with clients from a variety of industries, including technology, finance, and retail.",
  },
  {
    question: "How much do you charge for your services?",
    answer:
      "The cost of my services depends on the scope and complexity of the project. I provide a quote after understanding the client's requirements.",
  },
  {
    question: "What is your process for working on a project?",
    answer:
      "My process involves understanding the client's requirements, defining the scope of the project, creating a plan, designing and developing the project, testing and delivering the final product.",
  },
];

export default FAQ;
