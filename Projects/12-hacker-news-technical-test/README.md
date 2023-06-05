# Enunciado

## Requirements:
1. Use a Styled Components/CSS-in-JS solution of your choice ✅ 
2. Show placeholder/skeleton for stories and comments while loading
3. Respect list item indentation for comments
4. Each page should have a unique URL (ex. localhost:8080/article/12121). It should be a SPA but all URLs should be accesible by direct link. ✅

## Instructions:

Part 1: Write a React or React Native app that fetches and displays the top 10 stories from Hacker News using the Hacker News API - https://github.com/HackerNews/API 

Part 2: If you click into a story, you should see the comments in a different page.
Fetch and display the first 10 comments and their children using the Hacker News API.
You may use any additional libraries you deem necessary. (remember respecting nested comments)

Part 3: Implement an infinite scroll for top stories by using a "Load more" button.

Part 4: Ensure scroll to the bottom every time new stories are loaded.

Part 5: Make API calls to fetch comments to fail 75% of the times, and handle the error gracefully.

## Evaluation Criteria:

- Please ensure that your code is properly organized, and easy to read
- Reuse as much code as possible


## Denpendencies used
  
  NOTES: 
    - At the end of each dependencie you'll find the number of the requiremet(s), or the number of the Instruction that solves.
    - The requirements it'll be indicated as R<number> e.g R1
    - The Instruction it'll be indicated as I<number> e.g I1
  

 - Style component: [Vanilla-Extract](https://vanilla-extract.style/) { R1 }
 - Routing: [wouter-Router](https://github.com/molefrog/wouter#getting-started) { R4 }
 - States for data fetching and Infinite Scroll: [SWR](https://swr.vercel.app/) { I1, I2 }
 - React content loader: [Placeholder/Skeleton](https://skeletonreact.com/) { R2 }