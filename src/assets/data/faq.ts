export type faq = {
  title: string;
  description: string;
  toggle: boolean;
};

const faqData: faq[] = [
  {
    title: "What is Bookmark?",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.`,
    toggle: false,
  },
  {
    title: "How can I request a new browser?",
    description: `Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.`,
    toggle: false,
  },
  {
    title: "Is there a mobile app?",
    description: `Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
  urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
  sollicitudin ex et ultricies bibendum.`,
    toggle: false,
  },
  {
    title: "What about other Chromium browsers?",
    description: `Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
  vitae neque eget nisl gravida pellentesque non ut velit.`,
    toggle: false,
  },
];

export default faqData;
