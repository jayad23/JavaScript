/**
TIPS FOR IMPROVING PERFORMANCE

1.	Take Advantage of Key Metrics.
2.	Employ a Content Delivery Network (CDN) to Reduce Latency.
3.	Be Thoughtful in Your Caching.
4.	Bundle Your Files.
5.	Optimize Your Images.
6.	Keep Your Web Server Up to Date.
7.	Reduce Your Number of HTTP Requests.
8.	Use Logs to Monitor Performance.

Bundling in JS is a technique that optimizes performance of our web app by compiling flat pages onto one, 
thus reducing the number of requests to a server. 
One of the advantages of bundling files is that it removes unused things, and minify other complex things.

SEO BEST PRACTICES

1. Adding keywords on the top of the page. (Google pays more attention to it)
2. Avoid duplicate content. If a page must be similar to another one, 
stablish the parent page by adding a canonical tag rel:'canonical'. This will tell them appart.

To know whether our SEO techniques are really working, we can take a look at SEO metrics.
The one criteria that's the north start is total clicks.

SITE VULNERABILITY
XSS
Cross Site Scripting is a code that's injected in the UI by means of input (mainly) to capture user's information.
One simple way to test for vulnerabilities is by input this code <script>alert(“hello Anonymous”)</script>.
if the alert pops, means that the site is vulnerable.

DDoS
Overloading a website with high volume of traffik. 

CSRF
Downloaded forms with credential information from trusted websites.

CSS injection.
A CSS injected, then the browser renders the infected file.

MAINTAINABILITY OF THE CODE
Follow a clean and consistent coding standard
Use readable and understandable code name.
Fractioning the project in task-oriented blocks of code.

DEVELOPMENT ENVIRONMENT
The location of the main branch of the project.

SETTING UP A PROJECT
1. Go overthe concept and goal.
2. Research tools: Pros and Cons.
3. Design controlled project expansion.
4. Set the basic content and skeleton of the project.
5. Set up teams and tasks.
6. Periodic meetings and branch merging, updating maing branch and project's base data.

INTEGRATING MULTIPLE STYLING SHEETS.
The easiest way is by importing them in the main styles sheet, and that one in the 

DIFFERENCE BETWEEN GRACEFULL DEGRADATION AND PROGRESSIVE ENHANCEMENT.
Refers to the approach of an app by giving priority to either the smallest screen size of your project, or the largest one
to start developing from there.

Progressive Enhancement (Bottom up Design): Mobile-First.
Graceful degradation (Top down Design): Desktop First.

Either way, both patterns focus on users' needs, and so we can know which criteria determines the approach
we need for our project.

ARIA & SCREENREADERS
Screen readers convert text, data or elements on the screen into usable/understandable text.
However, the syntaxis is quite important as its understanding is limited to attributes of such elements.
When customising elements, we risk losing those defaut values and therefor, endangering screen readers potential.
ARIA helps us maintain the attributes that we have customised and add those needed for screen reader to interpret correctly.

ANIMATION
which animation is better depends entirely on what do you want to accomplish:
If you want your animation to go from state A to state B, transition will do.
If you want your animation to follow a set of rules, then animation will do.
Both of these tricks are available on CSS.
If you want an animation that deals with unpredictable values, then you must find JS more suitable for the job.
Now, in terms of performance, always go for the easiest. Calculation which is needed in JS
might be costly for performance.

 */