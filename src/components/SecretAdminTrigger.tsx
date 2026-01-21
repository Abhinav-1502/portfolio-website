'use client';

import { useState } from 'react';
import { RefreshCw, Lock } from 'lucide-react';

export default function SecretAdminTrigger() {
  const [loading, setLoading] = useState(false);

  const handleTrigger = async () => {
    const password = window.prompt("Enter Admin Password to regenerate project data:");
    if (!password) return;

    setLoading(true);
    // Dispatch event to notify Projects component
    window.dispatchEvent(new CustomEvent('project-generation-start'));
    
    try {
      const res = await fetch('/api/admin/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(`Error: ${data.error}`);
      } else {
        alert(`Success! Generated data for ${data.count} projects. The page will now reload.`);
        window.location.reload();
      }
    } catch (error) {
      alert("Network or Server Error occurred.");
      console.error(error);
    } finally {
      setLoading(false);
      window.dispatchEvent(new CustomEvent('project-generation-stop'));
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 opacity-20 hover:opacity-100 transition-opacity duration-300">
      <button 
        onClick={handleTrigger}
        disabled={loading}
        className="p-2 bg-black/50 backdrop-blur-sm rounded-full border border-white/10 hover:bg-black/80 text-white cursor-pointer"
        title="Admin: Regenerate Projects"
      >
        {loading ? (
          <RefreshCw className="w-4 h-4 animate-spin" />
        ) : (
          <Lock className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}
