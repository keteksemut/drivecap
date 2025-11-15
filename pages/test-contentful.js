import { useState } from 'react';

export default function TestContentfulClient() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const testAPI = async () => {
    setLoading(true);
    console.log('🔄 Fetching from API...');
    
    try {
      const response = await fetch('/api/test-contentful');
      const result = await response.json();
      
      console.log('✅ Success!', result);
      console.log('Space ID:', result.spaceId);
      console.log('Entries Count:', result.entriesCount);
      console.log('Entries:', result.entries);
      
      setData(result);
    } catch (error) {
      console.error('❌ Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'monospace' }}>
      <h1>Contentful Client Test</h1>
      <button 
        onClick={testAPI} 
        disabled={loading}
        style={{ 
          padding: '10px 20px', 
          fontSize: '16px',
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
      >
        {loading ? 'Testing...' : 'Test Contentful API'}
      </button>

      {data && (
        <div style={{ marginTop: '20px' }}>
          <h2>✅ Results (check browser console for details)</h2>
          <pre style={{ 
            background: '#f4f4f4', 
            padding: '20px', 
            overflow: 'auto' 
          }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
