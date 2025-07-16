import React, { useState } from 'react';
import './App.css';

function App() {
  // State for form fields
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!phone.match(/^\d{10,15}$/)) {
      setMessage('Please enter a valid phone number.');
      return;
    }
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      setMessage('Please enter a valid amount.');
      return;
    }
    setMessage('Sending recharge request...');
    // Here you would send data to your backend (to be implemented later)
    //https://web-app-recharge-service-128392773449.us-central1.run.app
    const payload = {
      phone_number: phone, // Match the backend's expected key
      amount: parseFloat(amount) // Ensure amount is a number
    };
    try {
      

      // Change the URL below to your real backend endpoint when it's ready
      const response = await fetch('https://web-app-recharge-service-128392773449.us-central1.run.app', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        throw new Error('Failed to send request');
      }
      setMessage(`Recharge request sent for ${phone} with amount $${amount}.`);
      setPhone('');
      setAmount('');
    } catch (err) {
      setMessage('Failed to send recharge request.');
      setMessage(err.message);
      console.error(err);
    }

  };

  return (
    <div className="App" style={{ marginTop: 80 }}>
      <h2>Recharge Phone</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: "auto" }}>
        <div>
          <label>Phone Number:<br />
            <input
              type="text"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder="e.g. 5551234567"
              required
              style={{ width: '100%' }}
            />
          </label>
        </div>
        <div style={{ marginTop: 10 }}>
          <label>Amount:<br />
            <input
              type="number"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              placeholder="e.g. 20"
              required
              min="1"
              style={{ width: '100%' }}
            />
          </label>
        </div>
        <button type="submit" style={{ marginTop: 20, width: '100%' }}>
          Recharge
        </button>
      </form>
      {message && <div style={{ marginTop: 20, color: 'green' }}>{message}</div>}
    </div>
  );
}

export default App;