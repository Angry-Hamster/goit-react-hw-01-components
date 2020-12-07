import './App.css';

import Profile from './components/Profile/Profile.js'
import Statistics from './components/Statistics/Statistics.js'
import FriendList from './components/FriendList/FriendList.js'
import TransactionHistory from './components/transaction-history/Transaction-history.js'


function App() {
  return (
    <>
      <Profile />
      <Statistics title='UPLOAD STATS'/>
      <FriendList />
      <TransactionHistory />
    </>
  );
}

export default App;
