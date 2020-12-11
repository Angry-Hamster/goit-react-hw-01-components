import './App.css';

import user  from './components/Profile/user.json'
import statisticalData from './components/Statistics/statistical-data.json'
import friends from './components/FriendList/friends.json'
import transactions from './components/transaction-history/transactions.json'

import Profile from './components/Profile/Profile.js'
import Statistics from './components/Statistics/Statistics.js'
import FriendList from './components/FriendList/FriendList.js'
import TransactionHistory from './components/transaction-history/Transaction-history.js'


function App() {
  return (
    <>
      <Profile name={user.name} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats}/>
      <Statistics title='UPLOAD STATS' stats={statisticalData}/>
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
