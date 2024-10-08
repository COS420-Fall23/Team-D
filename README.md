# College Jobs

This is Team D's project repository. Shall be tackling the problem of helping graduates/students find a reliable job by cutting down the search method or type that other sites use.

# Roles and Team members

<br> Team D </br>
<br> Roles First name Last Name </br>
<br> PM Devon Beal </br>
<br> Dev1 Nick Gauthier </br>
<br> Dev2 Kaleb Hannan </br>
<br> Dev 3 Seth Vaughn </br>
<br> Design Nayan Sawyer </br>
<br> Design(NMD442) Ethan Suderley </br>
<br> Design(NMD442) Kearson Sutton </br>

PM- Project manager, makes agenda for weekly meetings, inspires the team, offers advice, promotes fair play, evaluates teamwork, and monitors work on assignments but does not micromanage.

Dev- Developer, develops the software, verifies that implementations meet requirements, takes the lead in learning relevant technical skills and ensures the team learns them as well, verifies the design can be done, and ensures it is stable.

Design- Designer, Deepens the understanding of the problem the team is addressing, provides a scope of the design (prototypes for example), leads specifying the requirements, tests usability, and ensures we adhere to visual content.

# Problem statement

The Problem: College students (especially computer science students) learn valuable skills during college that would make them eligible to do work that pays much higher than minimum wage. However, students rarely find or get jobs that take advantage of these skills, or that pay such high wages.

Example: Many third-year computer science students have taken multiple coding classes, as well as data structures and algorithms. This is typically enough knowledge to do entry-level programming jobs, which can easily start at twenty to thirty dollars per hour. However, it is very difficult to find this kind of work, so most college students end up working low skill low pay work instead.
Prior Solutions:
Job Sites: Many job sites include part-time work, and allow filtering to quickly find jobs that fit the criteria of the user. Freelance Work Sites: There are many freelance work sites out there like Upwork and Fiverr that let people post their skills and get hired to do work on their own time.
Gaps in Prior Solutions:

1. The part-time jobs available on most job sites generally have degree requirements that college students cannot meet even if they have the skills needed
2. The number of part-time jobs listed on job sites is very low
3. Large job sites include mostly jobs a big corporations that usually work on larger projects where it makes less sense to hire a college student
4. Freelance sites usually take a large cut of the profits from jobs worked
5. Competition is fierce on freelance sites, and there is a good deal of luck involved with becoming a popular freelance worker
   Question: How can college students with valuable skills find part-time jobs that take advantage of their skills, and pay them accordingly?

# How To Set Up Dev Environment

0. You will need to install VSCode(https://code.visualstudio.com/), git(https://github.com/git-guides/install-git) and Node.js(https://nodejs.org/en/download) to run and Develop this applicaton.
1. We also recommend you get the Prettier VSCode extension(https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), ESLint VSCode extension(https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and React Dev Tools Browser Extention(https://react.dev/learn/react-developer-tools)
2. Open your Terminal
3. In the Repo Press the Green "Code" Button and Copy the HTTPS URL

    ![](Images/README_Images/Screenshot%202023-10-10%20164522.png)

4. In the Terminal type in "git clone https://URL-FROM-GITHUB"

    ![](Images/README_Images/Screenshot%202023-10-10%20171716.png)

5. Open a new Instance of VSCode and in the "Explorer" tab press "Open Folder" and Select the Repository ( It is probably in your User folder and it would be called "Team D")

    ![](Images/README_Images/Screenshot%202023-10-10%20170302.png)

6. In VSCode Open the Terminal under the Terminal tab and Type in "npm install".
7. After that is done in the terminal type in "npm start" to start the Program.
    ![](Images/README_Images/Screenshot%202023-10-10%20171136.png)

# Setting Up the Scraper

A Python scraper is included to fill the database with job listings. To run it, you will need Python 3.10.

0. Install prerequisite packages
   `pip3 install firebase-admin python-jobspy`
1. [Setup Firebase default project by logging in with the Google Cloud SDK tools](https://cloud.google.com/sdk/docs/install)
2. Run the scraper with `python3 scraper/scraper.py`
