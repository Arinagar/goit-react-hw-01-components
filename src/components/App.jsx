import user from 'JSON/user.json';
import data from 'JSON/data.json';
import friends from 'JSON/friends.json';
import transactions from 'JSON/transactions.json';

import { theme } from 'Styles/theme';
import { ThemeProvider } from 'styled-components';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics statsData={data} />
      <Statistics statsData={data} title="Statistics" />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />
    </ThemeProvider>
  );
};
