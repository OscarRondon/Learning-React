import React from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {

  const format = (userName) => `@${userName}`;
  const name = <strong>Oscar Rondon</strong>;

  const users = [
    { name: "Oscar Rondon", userName: "Oscar_A_Rondon", isFollowing: true, imgUrl: "https://avatars.githubusercontent.com/u/63406119?v=4" },
    { name: "Oscar Rondon", userName: "Oscar_A_Rondon", isFollowing: false, imgUrl: "https://avatars.githubusercontent.com/u/63406119?v=4" },
    { name: "Oscar Rondon", userName: "Oscar_A_Rondon", isFollowing: true, imgUrl: "https://avatars.githubusercontent.com/u/63406119?v=4" },
    { name: "Oscar Rondon", userName: "Oscar_A_Rondon", isFollowing: false, imgUrl: "https://avatars.githubusercontent.com/u/63406119?v=4" },
  ];

  return (
    <React.Fragment>
      <section>
        {
          users.map((user, index) => {
            return (
              <TwitterFollowCard
                key={index}
                name={user.name}
                userName={user.userName}
                formatUserName={format}
                initialIsFollowing={user.isFollowing}>
                {user.imgUrl}
              </TwitterFollowCard>
            );
          })
        }
      </section>
    </React.Fragment>
  );
}
