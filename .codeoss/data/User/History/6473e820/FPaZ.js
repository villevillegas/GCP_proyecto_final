import logo from './logo.svg';
import './App.css';

function App() {
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('<YOUR_API_ENDPOINT>', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone, amount })
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Phone number" value={phone} onChange={e => setPhone(e.target.value)} />
      <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
      <button type="submit">Recharge</button>
    </form>
  );
}

export default App;
