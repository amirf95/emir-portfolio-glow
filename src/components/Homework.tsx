import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, CheckCircle, Clock, AlertCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

type HomeworkItem = {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  status: string;
  link?: string;
  answer?: string;
};

const homeworks: HomeworkItem[] = [
  {
    id: 1,
    title: "Homework 1",
    description:
      "Create a portfolio website using React and Tailwind CSS. The site should include a homepage and a Homeworks section, with animations that improve the user experience.",
    dueDate: "UNKNOWN",
    status: "Done",
  },
  {
    id: 2,
    title: "Homework 2",
    description:
      "Visit a website that interests you. Write a one-page summary of the site that addresses the following topics: <br><br>a) What is the URL of the site?<br>b) What is the purpose of the site?<br>c) Who is the intended audience?<br>d) Do you think that the site reaches its intended audience? Why or why not?<br>e) Is the site useful to you? Why or why not?<br>f) Does this site appeal to you? Why or why not? Consider the use of color, images, multimedia, organization, and ease of navigation.<br>g) Would you encourage others to visit this site? Why or why not?<br>h) How could this site be improved?",
    dueDate: "UNKNOWN",
    status: "Done",
    answer: "The Site I have chosen as an AI enthusiast is <strong>Hugging Face</strong><br><br><strong>a) What is the URL of the site?</strong><br>Hugging Face URL: <a href='https://huggingface.co/' target='_blank' rel='noopener noreferrer'>https://huggingface.co/</a><br><br><strong>b) What is the purpose of the site?</strong><br>The purpose of the Hugging Face website is to provide ready-to-use tools, models, and resources that help AI engineers easily build and deploy machine learning and deep learning models. It acts as a collaborative platform focused entirely on artificial intelligence. Because of its large collection of datasets and models especially in areas such as natural language processing and computer vision—it has earned the nickname \"the GitHub of Machine Learning.\"<br><br><strong>c) Who is the intended audience?</strong><br>The intended audience are machine learning engineers, AI researchers, data scientists, software developers and students learning about artificial intelligence. Furthermore, any organization seeking to integrate AI models in their systems.<br><br><strong>d) Do you think that the site reaches its intended audience? Why or why not?</strong><br>Yes, I believe the site successfully reaches its intended audience. Hugging Face has become one of the most popular platforms for AI development and collaboration. Millions of developers and researchers visit the site to access pre-trained models and datasets, which shows that it effectively serves the AI and machine learning community.<br><br><strong>e) Is the site useful to you? Why or why not?</strong><br>Yes, this site has helped me multiple times in my projects by accessing multiple pre-trained models. In models like image recognition, voice detection etc. Instead of training models from scratch, I have used existing models and integrated them into my applications, which saved time and computational resources.<br><br><strong>f) Does this site appeal to you? Why or why not?</strong><br>Although it is a well-known open-source platform, I personally find the UI somewhat difficult to navigate. The overall UX could be improved because the layout is not always well structured, and some models do not have complete documentation. This can make it harder for beginners to understand how to use certain models effectively.<br><br><strong>g) Would you encourage others to visit this site? Why or why not?</strong><br>Yes, I would recommend other students and developers to visit this website. Because it offers an excellent learning environment and keeps engineering students in touch with the latest technologies. It also allows students to collaborate with a global community of developers.<br><br><strong>h) How could this site be improved?</strong><br>This site can be improved by adding more beginner-friendly tutorials and some pathways for students who want to learn more about machine learning. Providing some easy educational resources would help new students to understand how models work and to use models and tools more effectively.",
  },
  {
    id: 3,
    title: "Homework 3",
    description:
      "Homework consisting of two questions:<br><br><strong>1. Consider the following code, in which some CSS properties and values, indicated by \"__\", and some HTML tags, indicated by &lt;_&gt;, are missing:</strong><br><br><strong>2. Find the Error. Why won't the page corresponding to the following code display properly in a browser?</strong>",
    dueDate: "UNKNOWN",
    status: "Done",
    answer: "<div style='background-color: #2d3748; color: #ffffff; padding: 20px; border-radius: 12px; margin: 15px 0; font-family: monospace; border: 2px solid #4a5568; box-shadow: 0 4px 6px rgba(0,0,0,0.1);'><pre>&lt;!DOCTYPE html&gt;\n&lt;html lang=\"en\"&gt;\n&lt;head&gt;\n  &lt;title&gt;Trillium Media Design&lt;/title&gt;\n  &lt;meta charset=\"utf-8\"&gt;\n  &lt;style&gt;\n    body {\n      background-color: #0066CC;\n      color: \"#FFFFFF\"; /* White provides high contrast against dark blue */\n    }\n    header {\n      \"font-family\": \"Arial, sans-serif\"\n    }\n  &lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;header&gt;&lt;h1&gt;Trillium Media Design&lt;/h1&gt;&lt;/header&gt;\n  &lt;p&gt;Our professional staff takes pride in its working relationship with our clients by offering personalized services that listen to their needs, develop their target areas, and incorporate these items into a website that works.&lt;/p&gt;\n&lt;/body&gt;\n&lt;/html&gt;</pre></div><br><strong>Analysis:</strong><br>The CSS syntax errors prevent proper styling. The <code>color</code> property has incorrect quotes around the value, and the <code>font-family</code> property has quotes around the entire declaration instead of just the value.<br><br><strong>Corrected Code (Question 2 Answer):</strong><br><div style='background-color: #1a202c; color: #68d391; padding: 20px; border-radius: 8px; margin: 15px 0; font-family: monospace; border: 2px solid #2d3748; box-shadow: 0 4px 6px rgba(0,0,0,0.1);'><pre>&lt;!DOCTYPE html&gt;\n&lt;html lang=\"en\"&gt;\n&lt;head&gt;\n&lt;title&gt;Trillium Media Design&lt;/title&gt;\n&lt;meta charset=\"utf-8\"&gt;\n&lt;style&gt;\nbody { \n    background-color: #000066;\n    color: #CCCCCC;\n    font-family: Arial, sans-serif;\n    font-size: 1.2em; \n}\n&lt;/style&gt;\n&lt;/head&gt;\n\n&lt;body&gt;\n&lt;header&gt;&lt;h1&gt;Trillium Media Design&lt;/h1&gt;&lt;/header&gt;\n\n&lt;main&gt;\n&lt;p&gt;\nOur professional staff takes pride in its working relationship with our clients by offering personalized\nservices that listen to their needs, develop their target areas, and incorporate these items into a website that\nworks.\n&lt;/p&gt;\n&lt;/main&gt;\n\n&lt;/body&gt;\n&lt;/html&gt;</pre></div>",
  },
  {
    id: 4,
    title: "Homework 4",
    description:
      "CSS Multiple Choice Questions:<br><br><strong>1. Which type of CSS is coded in the body of the web page as an attribute of an HTML tag?</strong><br>a. embedded<br>b. inline<br>c. external<br>d. imported<br><br><strong>2. Which of the following is the CSS property used to set the background color of a web page?</strong><br>a. bgcolor<br>b. background-color<br>c. color<br>d. none of the above<br><br><strong>3. Which of the following describe two components of CSS rules?</strong><br>a. selectors and declarations<br>b. properties and declarations<br>c. selectors and attributes<br>d. none of the above<br><br><strong>4. Which of the following associates a web page with an external style sheet?</strong><br>a. &lt;style rel=\"external\" href=\"style.css\"&gt;<br>b. &lt;style src=\"style.css\"&gt;<br>c. &lt;link rel=\"stylesheet\" href=\"style.css\"&gt;<br>d. &lt;link rel=\"stylesheet\" src=\"style.css\"&gt;<br><br><strong>5. Which of the following configures a background color of #00CED1 for a web page using CSS?</strong><br>a. body { background-color: #00CED1; }<br>b. document { background: #00CED1; }<br>c. body { bgcolor: #00CED1;}<br>d. document { bgcolor: #00CED1; }<br><br><strong>6. Find the Error. Why won't the page corresponding to the following code display properly in a browser?</strong><br><div style='background-color: #1a202c; color: #e2e8f0; padding: 15px; border-radius: 8px; margin: 10px 0; font-family: monospace; border: 1px solid #4a5568;'><pre>&lt;!DOCTYPE html&gt;\n&lt;html lang=\"en\"&gt;\n&lt;head&gt;\n&lt;title&gt;Trillium Media Design&lt;/title&gt;\n&lt;meta charset=\"utf-8\"&gt;\n&lt;style&gt;\nbody { background-color: #000066;\ncolor: #CCCCCC;\nfont-family: Arial,sans-serif;\nfont-size: 1.2em; }\n&lt;style&gt;\n&lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n&lt;header&gt;&lt;h1&gt;Trillium Media Design&lt;/h1&gt;&lt;/header&gt;\n&lt;main&gt;\n&lt;p&gt;Our professional staff takes pride in its working relationship with our clients\nby offering personalized services that listen to their needs, develop their target\nareas, and incorporate these items into a website that works.&lt;/p&gt;\n&lt;/main&gt;\n&lt;/body&gt;\n&lt;/html&gt;</pre></div>",
    dueDate: "UNKNOWN",
    status: "Done",
    answer: "<strong>Correct Answers:</strong><br><br><strong>1.</strong> <span style='color: #800080; font-weight: bold;'>b. inline</span><br><strong>2.</strong> <span style='color: #800080; font-weight: bold;'>b. background-color</span><br><strong>3.</strong> <span style='color: #800080; font-weight: bold;'>a. selectors and declarations</span><br><strong>4.</strong> <span style='color: #800080; font-weight: bold;'>c. &lt;link rel=\"stylesheet\" href=\"style.css\"&gt;</span><br><strong>5.</strong> <span style='color: #800080; font-weight: bold;'>a. body { background-color: #00CED1; }</span><br><br><strong>6. Error Explanation:</strong> The CSS section is missing a closing tag. The second &lt;style&gt; tag should be a closing &lt;/style&gt; tag. Because it isn't closed, the browser treats the rest of the HTML as CSS code, resulting in a blank or broken page.",
  },
  {
    id: 5,
    title: "Homework 5",
    description:
      "Web Design Principles Multiple Choice Questions:<br><br><strong>1. Which of the following are the three most common methods for organizing websites?</strong><br>a. horizontal, vertical, and diagonal<br>b. hierarchical, linear, and random<br>c. accessible, readable, and maintainable<br>d. none of the above<br><br><strong>2. Which of the following are the four principles of the Web Content Accessibility Guidelines?</strong><br>a. repetition, contrast, proximity, and alignment<br>b. perceivable, operable, understandable, and robust<br>c. accessible, readable, maintainable, and reliable<br>d. hierarchical, linear, random, and sequential<br><br><strong>3. Which of the following are influenced by the intended or target audience of a site?</strong><br>a. the amount of color used on the site<br>b. the font size and styles used on the site<br>c. the overall look and feel of the site<br>d. all of the above<br><br><strong>4. Which of the following recommended design practices apply to a website that uses images for its main site navigation?</strong><br>a. Provide alternative text for the images.<br>b. Place text links at the bottom of the page.<br>c. Both a and b.<br>d. No special considerations are needed.<br><br><strong>5. Which of the following is a color scheme that consists of two colors that are opposite each other on the color wheel?</strong><br>a. analogous<br>b. complementary<br>c. split complementary<br>d. contrasting<br><br><strong>6. Choose two sites that are similar in nature or have a similar target audience, such as the following:</strong><br>• Amazon.com (http://www.amazon.com) and Alibaba.com (https://www.alibaba.com/)<br>• CNN (http://www.cnn.com) and MSNBC (http://www.msnbc.com)<br><strong>Describe how the two sites you chose to review exhibit the design principles of repetition, contrast, proximity, and alignment.</strong>",
    dueDate: "UNKNOWN",
    status: "Done",
    answer: "<strong>Correct Answers:</strong><br><br><strong>1.</strong> <span style='color: #800080; font-weight: bold;'>b. hierarchical, linear, and random</span><br><strong>2.</strong> <span style='color: #800080; font-weight: bold;'>b. perceivable, operable, understandable, and robust</span><br><strong>3.</strong> <span style='color: #800080; font-weight: bold;'>d. all of the above</span><br><strong>4.</strong> <span style='color: #800080; font-weight: bold;'>c. Both a and b.</span><br><strong>5.</strong> <span style='color: #800080; font-weight: bold;'>b. complementary</span><br><br><strong>6. Site Comparison: CNN and MSNBC</strong><br><br>Both CNN and MSNBC target general news audiences and utilize the four design principles to organize vast amounts of information:<br><br><strong>Repetition:</strong> Both sites use consistent branding. CNN repeats its signature red color in breaking news banners and navigation icons, while MSNBC repeats its specific typography and blue/multi-color accents. This creates a cohesive \"visual language\" that tells the user they are still on the same site.<br><br><strong>Contrast:</strong> High contrast is used to establish a visual hierarchy. Both sites use bold, black headlines against a clean white background to make text readable. They also use high-contrast \"Breaking News\" alerts (white text on a red or dark blue block) to immediately grab the user's attention.<br><br><strong>Proximity:</strong> Related items are grouped closely together. For a specific news story, the headline, the lead image, and the \"time posted\" are placed in a tight cluster. This proximity signals to the brain that these elements belong to one single story, separating them clearly from the next headline.<br><br><strong>Alignment:</strong> Both websites utilize a strict grid-based alignment. Even though news homepages are dense with content, every image and column of text is snapped to a vertical and horizontal axis. This organized alignment makes a complex page feel structured and professional rather than cluttered.<br><br><em>Note: These design principles work together to create an intuitive, accessible, and visually appealing user experience that effectively communicates information to their target audience of news consumers.</em>",
  },
  {
    id: 6,
    title: "Homework 6",
    description:
      "SECC006 / CSS and HTML5 Multiple Choice &amp; Code Completion:<br><br><strong>1. Which of the following, from outermost to innermost, are components of the box model?</strong><br>a. margin, border, padding, content<br>b. content, padding, border, margin<br>c. content, margin, padding, border<br>d. margin, padding, border, content<br><br><strong>2. Which of the following causes an element to display as a block of content with white space above and below?</strong><br>a. display: none;<br>b. block: display;<br>c. display: block;<br>d. display: inline;<br><br><strong>3. Which of the following pseudo-classes is the default state for a hyperlink that has been clicked?</strong><br>a. :hover<br>b. :link<br>c. :onclick<br>d. :visited<br><br><strong>4. Which HTML5 element has the purpose of providing tangential content?</strong><br>a. article<br>b. aside<br>c. sidebar<br>d. section<br><br><strong>5. Fill in the Missing Code.</strong> This web page should be configured as a two-column page layout with a right column (containing the navigation area) that is 150 pixels wide. The right column should have a 1 pixel border. The margin in the left-column main content area needs to allow for space that will be used by the right column. Some CSS selectors, properties, and values, indicated by \"_\", are missing. Fill in the missing code.<br><div style='background-color: #1a202c; color: #e2e8f0; padding: 15px; border-radius: 8px; margin: 10px 0; font-family: monospace; border: 1px solid #4a5568; font-size: 0.75rem; line-height: 1.4; overflow-x: auto;'><pre>&lt;!DOCTYPE html&gt;\n&lt;html lang=\"en\"&gt;\n&lt;head&gt;\n&lt;title&gt;Trillium Media Design&lt;/title&gt;\n&lt;meta charset=\"utf-8\"&gt;\n&lt;style&gt;\nnav { \"_\": \"_\";\nwidth: \"_\";\nbackground-color: #cccccc;\nborder: \"_\"; }\nheader { background-color: #cccccc;\ncolor: #663333;\nfont-size: x-large;\nborder-bottom: 1px solid #333333; }\nmain { margin-right: \"_\"; }\nfooter { font-size: x-small;\ntext-align: center;\nclear: \"_\"; }\n\"_\" a { color: #000066;\ntext-decoration: none; }\nul {list-style-type: \"_\"; }\n&lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n&lt;nav&gt;\n&lt;ul&gt;\n&lt;li&gt;&lt;a href=\"index.html\"&gt;Home&lt;/a&gt;&lt;/li&gt;\n&lt;li&gt;&lt;a href=\"products.html\"&gt;Products&lt;/a&gt;&lt;/li&gt;\n&lt;li&gt;&lt;a href=\"services.html\"&gt;Services&lt;/a&gt;&lt;/li&gt;\n&lt;li&gt;&lt;a href=\"about.html\"&gt;About&lt;/a&gt;&lt;/li&gt;\n&lt;/ul&gt;\n&lt;/nav&gt;\n&lt;main&gt;\n&lt;header&gt;\n&lt;h1&gt;Trillium Media Design&lt;/h1&gt;\n&lt;/header&gt;\n&lt;p&gt;Our professional staff takes pride in its working relationship with our clients by offering\npersonalized services that listen to their needs, develop their target areas, and incorporate these\nitems into a website that works.&lt;/p&gt;\n&lt;/main&gt;\n&lt;footer&gt;\nCopyright &amp;copy; 2016 Trillium Media Design&lt;br&gt;Last Updated on 06/03/16\n&lt;/footer&gt;\n&lt;/body&gt;\n&lt;/html&gt;</pre></div>",
    dueDate: "UNKNOWN",
    status: "Done",
    answer:
      "<strong>Correct Answers:</strong><br><br><strong>1.</strong> <span style='color: #800080; font-weight: bold;'>a. margin, border, padding, content</span><br><br><strong>2.</strong> <span style='color: #800080; font-weight: bold;'>c. display: block;</span><br><br><strong>3.</strong> <span style='color: #800080; font-weight: bold;'>d. :visited</span><br><br><strong>4.</strong> <span style='color: #800080; font-weight: bold;'>b. aside</span><br><br><strong>5. Completed CSS:</strong><br><div style='background-color: #1a202c; color: #68d391; padding: 20px; border-radius: 8px; margin: 15px 0; font-family: monospace; font-size: 0.8rem; border: 2px solid #2d3748; overflow-x: auto;'><pre>nav {\n  float: right;\n  width: 150px;\n  background-color: #cccccc;\n  border: 1px solid #333333;\n}\nheader {\n  background-color: #cccccc;\n  color: #663333;\n  font-size: x-large;\n  border-bottom: 1px solid #333333;\n}\nmain { margin-right: 160px; }\nfooter {\n  font-size: x-small;\n  text-align: center;\n  clear: both;\n}\nnav a {\n  color: #000066;\n  text-decoration: none;\n}\nul { list-style-type: none; }</pre></div><strong>Notes for question 5:</strong> <code>float: right</code> places the nav in the right column. <code>width: 150px</code> and <code>border: 1px solid #333333</code> match the 150px column and 1px border; the border color matches the header. <code>main { margin-right: 160px; }</code> reserves space for the floated nav and its border. <code>clear: both</code> on the footer clears the float. <code>nav a</code> targets links in the nav. <code>list-style-type: none</code> removes default list bullets.",
  },
];

const Homework = () => {
  const [expandedAnswers, setExpandedAnswers] = useState<Set<number>>(new Set());

  const toggleAnswer = (id: number) => {
    setExpandedAnswers(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const completedCount = homeworks.filter(hw => hw.status === "Done").length;
  const totalCount = homeworks.length;
  const progressPercentage = (completedCount / totalCount) * 100;

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "done":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "pending":
        return <Clock className="w-4 h-4 text-orange-500" />;
      default:
        return <AlertCircle className="w-4 h-4 text-red-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "done":
        return "bg-green-100 text-green-800 border-green-200";
      case "pending":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-red-100 text-red-800 border-red-200";
    }
  };

  return (
    <section id="homework" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold text-glow text-primary">Homeworks</h2>
        </div>

        {/* Progress Section */}
        <div className="mb-8 p-6 bg-card rounded-xl border border-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Progress Overview</h3>
            <span className="text-sm text-muted-foreground">
              {completedCount} of {totalCount} completed
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-3 mb-2">
            <motion.div
              className="bg-primary h-3 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
          <p className="text-sm text-muted-foreground">{Math.round(progressPercentage)}% Complete</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-6">
            {homeworks.map((homework, i) => (
              <motion.div
                key={homework.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group bg-card rounded-xl p-8 border border-border hover:border-primary/40 transition-all duration-300 hover:border-glow hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-primary group-hover:text-primary transition-colors">
                        {homework.title}
                      </h3>
                      <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(homework.status)}`}>
                        {getStatusIcon(homework.status)}
                        {homework.status}
                      </div>
                    </div>
                    <div className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: homework.description }} />
                  </div>
                </div>

                {homework.answer && (
                  <div className="mt-6">
                    <button
                      onClick={() => toggleAnswer(homework.id)}
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold mb-3"
                      aria-expanded={expandedAnswers.has(homework.id)}
                      aria-controls={`answer-${homework.id}`}
                    >
                      <span>Answer</span>
                      {expandedAnswers.has(homework.id) ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                    <AnimatePresence>
                      {expandedAnswers.has(homework.id) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div
                            id={`answer-${homework.id}`}
                            className="text-gray-600 border-l-4 border-primary/30 pl-4"
                            dangerouslySetInnerHTML={{ __html: homework.answer }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Due: {new Date(homework.dueDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                  {homework.link && (
                    <a
                      href={homework.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors text-sm font-medium flex items-center gap-1"
                    >
                      View Original
                      <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Homework;
